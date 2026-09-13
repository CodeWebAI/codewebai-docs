---
title: Acceso a la Documentación
---

<div class="min-h-[88vh] w-full flex items-center justify-center p-5 sm:p-8">
  <div class="w-full max-w-[400px] bg-[var(--surface)] border border-[var(--line)] rounded-2xl shadow-xl p-8 sm:p-10 relative transition-all duration-200">
    
    <!-- Botón de cambio de tema (discreto y accesible) -->
    <div class="absolute top-6 right-6">
      <button 
        type="button" 
        id="theme-toggle" 
        class="w-8 h-8 flex items-center justify-center rounded-lg text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-raised)] transition-colors cursor-pointer"
        title="Cambiar tema"
        aria-label="Cambiar tema"
      >
        <span aria-hidden="true" class="text-sm select-none">◐</span>
      </button>
    </div>

    <!-- Logotipo oficial CodeWebAI -->
    <div class="flex justify-center mb-6">
      <img src="../assets/img/logoCWAI.svg" alt="CodeWebAI Logo" class="h-10 w-10 object-contain" />
    </div>

    <!-- Feedback de estado (Alerta) -->
    <div id="auth-alert" style="display: none;" class="mb-6 p-3.5 rounded-xl text-sm font-medium transition-all"></div>

    <!-- =========================================================
         FORMULARIO 1: INICIAR SESIÓN (SEPARADO)
    ========================================================== -->
    <div id="section-login">
      <h1 class="text-2xl font-bold text-center text-[var(--ink)] tracking-tight mb-7">
        Iniciar Sesión
      </h1>

      <form id="form-login" class="space-y-6">
        <!-- Campo Correo -->
        <div>
          <label for="login-email" class="block text-sm font-medium text-[var(--ink)] mb-2">
            Correo electrónico
          </label>
          <input 
            type="email" 
            id="login-email" 
            required 
            placeholder="nombre@empresa.com"
            autocomplete="email"
            class="w-full px-3.5 py-2.5 bg-[var(--surface)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--muted)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/15 transition-all"
          />
        </div>

        <!-- Campo Contraseña -->
        <div>
          <label for="login-password" class="block text-sm font-medium text-[var(--ink)] mb-2">
            Contraseña
          </label>
          <div class="relative">
            <input 
              type="password" 
              id="login-password" 
              required 
              placeholder="••••••••••••"
              autocomplete="current-password"
              class="w-full pl-3.5 pr-10 py-2.5 bg-[var(--surface)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--muted)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/15 transition-all"
            />
            <button 
              type="button" 
              id="toggle-login-pass" 
              class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[var(--muted)] hover:text-[var(--ink)] cursor-pointer focus:outline-none"
              title="Mostrar / ocultar contraseña"
            >
              <svg id="eye-icon-login" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Botón Iniciar Sesión -->
        <div class="pt-2">
          <button 
            type="submit" 
            id="btn-login" 
            class="w-full py-2.5 px-4 bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-white font-medium rounded-xl shadow-sm hover:shadow transition-all text-sm flex justify-center items-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span id="btn-login-text">Continuar</span>
            <svg id="spinner-login" style="display: none;" class="w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </button>
        </div>
      </form>

      <!-- Alternar hacia Registro -->
      <div class="mt-8 text-center text-sm text-[var(--muted)]">
        ¿No tienes una cuenta? 
        <button type="button" id="go-to-register" class="text-[var(--accent)] hover:underline font-semibold cursor-pointer ml-1">
          Regístrate
        </button>
      </div>
    </div>

    <!-- =========================================================
         FORMULARIO 2: CREAR CUENTA (SEPARADO)
    ========================================================== -->
    <div id="section-register" style="display: none;">
      <h1 class="text-2xl font-bold text-center text-[var(--ink)] tracking-tight mb-7">
        Crear Cuenta
      </h1>

      <form id="form-register" class="space-y-6">
        <!-- Campo Correo -->
        <div>
          <label for="register-email" class="block text-sm font-medium text-[var(--ink)] mb-2">
            Correo electrónico
          </label>
          <input 
            type="email" 
            id="register-email" 
            required 
            placeholder="nombre@empresa.com"
            autocomplete="email"
            class="w-full px-3.5 py-2.5 bg-[var(--surface)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--muted)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/15 transition-all"
          />
        </div>

        <!-- Campo Contraseña -->
        <div>
          <label for="register-password" class="block text-sm font-medium text-[var(--ink)] mb-2">
            Contraseña
          </label>
          <div class="relative">
            <input 
              type="password" 
              id="register-password" 
              required 
              placeholder="Mínimo 6 caracteres"
              minlength="6"
              autocomplete="new-password"
              class="w-full pl-3.5 pr-10 py-2.5 bg-[var(--surface)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--muted)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/15 transition-all"
            />
            <button 
              type="button" 
              id="toggle-register-pass" 
              class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[var(--muted)] hover:text-[var(--ink)] cursor-pointer focus:outline-none"
              title="Mostrar / ocultar contraseña"
            >
              <svg id="eye-icon-register" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Botón Crear Cuenta -->
        <div class="pt-2">
          <button 
            type="submit" 
            id="btn-register" 
            class="w-full py-2.5 px-4 bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-white font-medium rounded-xl shadow-sm hover:shadow transition-all text-sm flex justify-center items-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span id="btn-register-text">Crear Cuenta</span>
            <svg id="spinner-register" style="display: none;" class="w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </button>
        </div>
      </form>

      <!-- Alternar hacia Iniciar Sesión -->
      <div class="mt-8 text-center text-sm text-[var(--muted)]">
        ¿Ya tienes una cuenta? 
        <button type="button" id="go-to-login" class="text-[var(--accent)] hover:underline font-semibold cursor-pointer ml-1">
          Inicia sesión
        </button>
      </div>
    </div>

  </div>
</div>

<script>
(function() {
  const sectionLogin = document.getElementById('section-login');
  const sectionRegister = document.getElementById('section-register');
  const goToRegister = document.getElementById('go-to-register');
  const goToLogin = document.getElementById('go-to-login');

  const formLogin = document.getElementById('form-login');
  const formRegister = document.getElementById('form-register');

  const btnLogin = document.getElementById('btn-login');
  const btnLoginText = document.getElementById('btn-login-text');
  const spinnerLogin = document.getElementById('spinner-login');

  const btnRegister = document.getElementById('btn-register');
  const btnRegisterText = document.getElementById('btn-register-text');
  const spinnerRegister = document.getElementById('spinner-register');

  const alertBox = document.getElementById('auth-alert');
  const themeToggle = document.getElementById('theme-toggle');

  // Asegurar explícitamente que los spinners estén ocultos
  if (spinnerLogin) spinnerLogin.style.display = 'none';
  if (spinnerRegister) spinnerRegister.style.display = 'none';

  // Toggle Tema Claro / Oscuro
  themeToggle?.addEventListener('click', () => {
    const root = document.documentElement;
    const currentTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = currentTheme;
    localStorage.setItem('codewebai-theme', currentTheme);
  });

  // Alertas UX
  function showAlert(msg, isError = true) {
    alertBox.textContent = msg;
    alertBox.style.display = 'block';
    alertBox.className = isError 
      ? 'mb-6 p-3.5 rounded-xl text-sm font-medium bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-center'
      : 'mb-6 p-3.5 rounded-xl text-sm font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-center';
  }

  function hideAlert() {
    alertBox.style.display = 'none';
  }

  // Alternancia de Formularios Separados
  function setView(view) {
    hideAlert();
    if (view === 'register') {
      sectionLogin.style.display = 'none';
      sectionRegister.style.display = 'block';
    } else {
      sectionRegister.style.display = 'none';
      sectionLogin.style.display = 'block';
    }
  }

  goToRegister?.addEventListener('click', () => setView('register'));
  goToLogin?.addEventListener('click', () => setView('login'));

  // Manejo de hash en URL
  if (window.location.hash === '#register') {
    setView('register');
  }

  // Toggle de visibilidad de contraseña
  function bindPasswordToggle(btnId, inputId, iconId) {
    const btn = document.getElementById(btnId);
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    if (!btn || !input || !icon) return;

    btn.addEventListener('click', () => {
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      icon.innerHTML = isPassword
        ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />'
        : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />';
    });
  }

  bindPasswordToggle('toggle-login-pass', 'login-password', 'eye-icon-login');
  bindPasswordToggle('toggle-register-pass', 'register-password', 'eye-icon-register');

  // Submit Login
  formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideAlert();
    const supabase = window.supabaseClient;
    if (!supabase) {
      showAlert('El servicio de autenticación no está listo.');
      return;
    }

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    btnLogin.disabled = true;
    spinnerLogin.style.display = 'inline-block';
    btnLoginText.textContent = 'Verificando...';

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      showAlert('Acceso autorizado. Redirigiendo...', false);
    } catch (err) {
      console.error(err);
      let msg = err.message || 'Error al iniciar sesión';
      if (msg.includes('Invalid login credentials')) {
        msg = 'Correo electrónico o contraseña incorrectos.';
      }
      showAlert(msg, true);
      btnLogin.disabled = false;
      spinnerLogin.style.display = 'none';
      btnLoginText.textContent = 'Continuar';
    }
  });

  // Submit Register
  formRegister.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideAlert();
    const supabase = window.supabaseClient;
    if (!supabase) {
      showAlert('El servicio de autenticación no está listo.');
      return;
    }

    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;

    btnRegister.disabled = true;
    spinnerRegister.style.display = 'inline-block';
    btnRegisterText.textContent = 'Creando cuenta...';

    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;

      if (data.session) {
        showAlert('Cuenta creada exitosamente. Entrando...', false);
      } else {
        showAlert('Registro completado. Revisa tu correo electrónico para confirmar tu cuenta.', false);
        btnRegister.disabled = false;
        spinnerRegister.style.display = 'none';
        btnRegisterText.textContent = 'Crear Cuenta';
      }
    } catch (err) {
      console.error(err);
      let msg = err.message || 'Error al registrar usuario';
      if (msg.includes('User already registered')) {
        msg = 'Ya existe una cuenta con este correo electrónico.';
      }
      showAlert(msg, true);
      btnRegister.disabled = false;
      spinnerRegister.style.display = 'none';
      btnRegisterText.textContent = 'Crear Cuenta';
    }
  });
})();
</script>
