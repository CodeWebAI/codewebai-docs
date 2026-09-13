// docs/assets/javascripts/supabase-auth.js
(function () {
    const env = window.__SUPABASE_ENV__ || {};
    if (!env.url || !env.anonKey) {
        console.error('Supabase no está configurado. Revisa las variables de entorno.');
        return;
    }

    // Inicializar el cliente Supabase oficial desde el CDN
    const supabase = window.supabase.createClient(env.url, env.anonKey);
    window.supabaseClient = supabase;

    const currentPath = window.location.pathname;
    const isLoginPage = window.__IS_LOGIN_PAGE__ === true || currentPath.endsWith('/login/') || currentPath.endsWith('/login.html') || currentPath.endsWith('/login');

    function getLoginUrl(redirectUrl) {
        let target = window.__LOGIN_URL__ || '/login/';
        if (target === '.') target = 'login/';
        const sep = target.includes('?') ? '&' : '?';
        return redirectUrl ? `${target}${sep}redirect=${encodeURIComponent(redirectUrl)}` : target;
    }

    function getHomeUrl() {
        return window.__HOME_URL__ || '/';
    }

    // 1. Verificación inmediata de sesión
    supabase.auth.getSession().then(({ data: { session }, error }) => {
        if (error) console.error('Error al verificar sesión:', error);

        if (!session && !isLoginPage) {
            // Si no hay sesión y está en una página protegida, redirigir al login guardando la URL previa
            const returnUrl = window.location.pathname + window.location.search;
            window.location.replace(getLoginUrl(returnUrl));
        } else if (session && isLoginPage) {
            // Si ya tiene sesión activa y visita el login, redirigir al inicio o página previa
            const params = new URLSearchParams(window.location.search);
            const redirectTarget = params.get('redirect') ? decodeURIComponent(params.get('redirect')) : getHomeUrl();
            window.location.replace(redirectTarget);
        } else {
            // Sesión válida o página de login: mostrar contenido y actualizar navbar
            document.documentElement.classList.add('auth-verified');
            updateNavbarUserInfo(session?.user);
        }
    });

    // 2. Escuchar cambios de estado (logout, login, expiración)
    supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_OUT' && !isLoginPage) {
            window.location.replace(getLoginUrl());
        } else if (event === 'SIGNED_IN' && isLoginPage) {
            const params = new URLSearchParams(window.location.search);
            const redirectTarget = params.get('redirect') ? decodeURIComponent(params.get('redirect')) : getHomeUrl();
            window.location.replace(redirectTarget);
        } else if (session) {
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
