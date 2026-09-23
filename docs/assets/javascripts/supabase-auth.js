// docs/assets/javascripts/supabase-auth.js
(function () {
    const env = window.__SUPABASE_ENV__ || {};
    if (!env.url || !env.anonKey) {
        console.error('Supabase no está configurado. Revisa las variables de entorno.');
        return;
    }

    // ── Detectar invitación ANTES de que Supabase consuma el hash ──
    // Supabase redirige con un hash como: #access_token=...&type=invite
    // Debemos capturarlo en este instante porque el SDK lo limpia al procesarlo
    const currentHash = window.location.hash;
    if (currentHash.includes('type=invite')) {
        sessionStorage.setItem('codewebai-invite-pending', 'true');
    }

    // Inicializar el cliente Supabase oficial desde el CDN
    const supabase = window.supabase.createClient(env.url, env.anonKey);
    window.supabaseClient = supabase;

    const currentPath = window.location.pathname;
    const isLoginPage = window.__IS_LOGIN_PAGE__ === true || currentPath.endsWith('/login/') || currentPath.endsWith('/login.html') || currentPath.endsWith('/login');
    const isSetPasswordPage = window.__IS_SET_PASSWORD_PAGE__ === true || currentPath.endsWith('/configurar-password/') || currentPath.endsWith('/configurar-password');

    // Las páginas de autenticación no requieren protección de sesión (login y configurar contraseña)
    const isAuthPage = isLoginPage || isSetPasswordPage;

    function getLoginUrl(redirectUrl) {
        let target = window.__LOGIN_URL__ || '/login/';
        if (target === '.') target = 'login/';
        const sep = target.includes('?') ? '&' : '?';
        return redirectUrl ? `${target}${sep}redirect=${encodeURIComponent(redirectUrl)}` : target;
    }

    function getHomeUrl() {
        return window.__HOME_URL__ || '/';
    }

    function getSetPasswordUrl() {
        return window.__SET_PASSWORD_URL__ || '/configurar-password/';
    }

    // 1. Verificación inmediata de sesión
    supabase.auth.getSession().then(({ data: { session }, error }) => {
        if (error) console.error('Error al verificar sesión:', error);

        if (!session && !isAuthPage) {
            // Sin sesión en página protegida → redirigir al login guardando la URL previa
            const returnUrl = window.location.pathname + window.location.search;
            window.location.replace(getLoginUrl(returnUrl));
        } else if (session && isLoginPage) {
            // Con sesión activa visitando login → redirigir al inicio o página previa
            const params = new URLSearchParams(window.location.search);
            const redirectTarget = params.get('redirect') ? decodeURIComponent(params.get('redirect')) : getHomeUrl();
            window.location.replace(redirectTarget);
        } else {
            // Sesión válida o página de auth: mostrar contenido y actualizar navbar
            document.documentElement.classList.add('auth-verified');
            updateNavbarUserInfo(session?.user);
        }
    });

    // 2. Escuchar cambios de estado (logout, login, expiración, invitación)
    supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_OUT' && !isAuthPage) {
            window.location.replace(getLoginUrl());
            return;
        }

        // Detectar inicio de sesión por invitación
        if (event === 'SIGNED_IN') {
            const isInvite = sessionStorage.getItem('codewebai-invite-pending') === 'true';

            if (isInvite && !isSetPasswordPage) {
                // Usuario invitado → redirigir a configurar contraseña
                window.location.replace(getSetPasswordUrl());
                return;
            }

            if (isLoginPage) {
                const params = new URLSearchParams(window.location.search);
                const redirectTarget = params.get('redirect') ? decodeURIComponent(params.get('redirect')) : getHomeUrl();
                window.location.replace(redirectTarget);
                return;
            }
        }

        if (session) {
            updateNavbarUserInfo(session.user);
        }
    });

    // 3. Renderizar usuario y botón de cerrar sesión en la Navbar
    function updateNavbarUserInfo(user) {
        if (!user) return;
        const actionsContainer = document.querySelector('.header-actions');
        if (!actionsContainer || document.getElementById('user-auth-badge')) return;

        const userBadge = document.createElement('div');
        userBadge.id = 'user-auth-badge';
        userBadge.className = 'user-auth-badge';
        userBadge.innerHTML = `
      <span class="user-email" title="${user.email}">${user.email}</span>
      <button type="button" id="logout-btn" class="logout-btn" title="Cerrar sesión">Salir</button>
    `;

        // Insertar antes del botón de tema o menú
        actionsContainer.prepend(userBadge);

        document.getElementById('logout-btn')?.addEventListener('click', async () => {
            await supabase.auth.signOut();
            window.location.replace(`${window.__BASE_URL__ || '/'}login/`);
        });
    }
})();
