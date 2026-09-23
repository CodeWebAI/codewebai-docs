---
title: Configurar Contraseña
---

<div class="min-h-screen w-full flex items-center justify-center p-5 sm:p-8">
  <div class="w-full max-w-[400px] bg-[var(--surface)] border border-[var(--line)] rounded-2xl shadow-xl p-8 sm:p-10 relative transition-all duration-200">
    
    <!-- Logotipo oficial CodeWebAI -->
    <div class="flex justify-center mb-6">
      <img src="../assets/img/logoCWAI.svg" alt="CodeWebAI Logo" class="h-10 w-10 object-contain" />
    </div>

    <!-- Feedback de estado (Alerta) -->
    <div id="set-pwd-alert" style="display: none;" class="mb-6 p-3.5 rounded-xl text-sm font-medium transition-all"></div>

    <!-- =========================================================
         FORMULARIO: CONFIGURAR CONTRASEÑA
    ========================================================== -->
    <div id="section-set-password">
      <h1 class="text-2xl font-bold text-center text-[var(--ink)] tracking-tight mb-2">
        Configura tu Contraseña
      </h1>
      <p class="text-sm text-center text-[var(--muted)] mb-7">
        Establece una contraseña para acceder a la documentación.
      </p>

      <!-- Email del usuario (solo lectura) -->
      <div class="mb-5">
        <label class="block text-sm font-medium text-[var(--ink)] mb-2">
          Correo electrónico
        </label>
        <div class="w-full px-3.5 py-2.5 bg-[var(--surface-muted)] border border-[var(--line)] rounded-xl text-[var(--muted)] text-sm select-none" id="user-email-display">
          Cargando...
        </div>
      </div>

      <form id="form-set-password" class="space-y-5">
        <!-- Campo Nueva Contraseña -->
        <div>
          <label for="new-password" class="block text-sm font-medium text-[var(--ink)] mb-2">
            Nueva contraseña
          </label>
          <div class="relative">
            <input 
              type="password" 
              id="new-password" 
              required 
              minlength="8"
              placeholder="Mínimo 8 caracteres"
              autocomplete="new-password"
              class="w-full pl-3.5 pr-10 py-2.5 bg-[var(--surface)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--muted)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/15 transition-all"
            />
            <button 
              type="button" 
              id="toggle-new-pass" 
              class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[var(--muted)] hover:text-[var(--ink)] cursor-pointer focus:outline-none"
              title="Mostrar / ocultar contraseña"
            >
              <svg id="eye-icon-new" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Campo Confirmar Contraseña -->
        <div>
          <label for="confirm-password" class="block text-sm font-medium text-[var(--ink)] mb-2">
            Confirmar contraseña
          </label>
          <div class="relative">
            <input 
              type="password" 
              id="confirm-password" 
              required 
              minlength="8"
              placeholder="Repite tu contraseña"
              autocomplete="new-password"
              class="w-full pl-3.5 pr-10 py-2.5 bg-[var(--surface)] border border-[var(--line)] rounded-xl text-[var(--ink)] placeholder-[var(--muted)] text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/15 transition-all"
            />
            <button 
              type="button" 
              id="toggle-confirm-pass" 
              class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[var(--muted)] hover:text-[var(--ink)] cursor-pointer focus:outline-none"
              title="Mostrar / ocultar contraseña"
            >
              <svg id="eye-icon-confirm" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Botón Guardar Contraseña -->
        <div class="pt-2">
          <button 
            type="submit" 
            id="btn-set-password" 
            class="w-full py-2.5 px-4 bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-white font-medium rounded-xl shadow-sm hover:shadow transition-all text-sm flex justify-center items-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span id="btn-set-pwd-text">Guardar Contraseña</span>
            <svg id="spinner-set-pwd" style="display: none;" class="w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </button>
        </div>
      </form>
    </div>

  </div>
</div>

<script>
(function() {
  const form = document.getElementById('form-set-password');
  const btnSubmit = document.getElementById('btn-set-password');
  const btnText = document.getElementById('btn-set-pwd-text');
  const spinner = document.getElementById('spinner-set-pwd');
  const alertBox = document.getElementById('set-pwd-alert');
  const emailDisplay = document.getElementById('user-email-display');

  // Asegurar que el spinner esté oculto al cargar
  if (spinner) spinner.style.display = 'none';

  // ── Alertas UX ──
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

  // ── Toggle de visibilidad de contraseña ──
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

  bindPasswordToggle('toggle-new-pass', 'new-password', 'eye-icon-new');
  bindPasswordToggle('toggle-confirm-pass', 'confirm-password', 'eye-icon-confirm');

  // ── Mostrar email del usuario autenticado ──
  function displayUserEmail() {
    const supabase = window.supabaseClient;
    if (!supabase) return;

    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user && user.email) {
        emailDisplay.textContent = user.email;
      } else {
        emailDisplay.textContent = 'Usuario no identificado';
      }
    });
  }

  // Intentar mostrar el email inmediatamente o esperar a que el cliente esté listo
  if (window.supabaseClient) {
    displayUserEmail();
  } else {
    // Esperar a que supabase-auth.js inicialice el cliente
    const observer = new MutationObserver(() => {
      if (window.supabaseClient) {
        observer.disconnect();
        displayUserEmail();
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }

  // ── Submit: Actualizar contraseña ──
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideAlert();

    const supabase = window.supabaseClient;
    if (!supabase) {
      showAlert('El servicio de autenticación no está listo.');
      return;
    }

    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validaciones
    if (newPassword.length < 8) {
      showAlert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    if (newPassword !== confirmPassword) {
      showAlert('Las contraseñas no coinciden.');
      return;
    }

    // Estado de carga
    btnSubmit.disabled = true;
    spinner.style.display = 'inline-block';
    btnText.textContent = 'Guardando...';

    try {
      const { data, error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;

      showAlert('¡Contraseña configurada exitosamente! Redirigiendo...', false);

      // Limpiar la marca de invitación pendiente
      sessionStorage.removeItem('codewebai-invite-pending');

      // Redirigir al home después de un breve delay para que el usuario vea la confirmación
      setTimeout(() => {
        window.location.replace(window.__HOME_URL__ || '/');
      }, 1500);

    } catch (err) {
      console.error('Error al actualizar contraseña:', err);
      let msg = err.message || 'Error al guardar la contraseña.';
      if (msg.includes('same_password')) {
        msg = 'La nueva contraseña no puede ser igual a la actual.';
      }
      showAlert(msg, true);
      btnSubmit.disabled = false;
      spinner.style.display = 'none';
      btnText.textContent = 'Guardar Contraseña';
    }
  });
})();
</script>
