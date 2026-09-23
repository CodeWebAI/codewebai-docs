---
title: Configurar Contraseña
---

<style>
  .set-password-view {
    display: flex;
    width: 100%;
    min-height: 100dvh;
    align-items: center;
    justify-content: center;
    padding: .75rem;
  }

  .set-password-card {
    width: 100%;
    max-width: 27.5rem;
    max-height: calc(100dvh - 1.5rem);
    overflow-y: auto;
    padding: 1.25rem;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 1rem;
    box-shadow: var(--shadow-lg);
  }

  .set-password-title {
    margin: 0 0 .5rem;
    color: var(--ink);
    font-size: 1.25rem;
    line-height: 1.25;
    text-align: center;
    font-weight: 700;
  }

  .set-password-description {
    margin: 0 0 1.25rem;
    color: var(--muted);
    font-size: .875rem;
    line-height: 1.375;
    text-align: center;
  }

  .set-password-field {
    margin-bottom: 1rem;
  }

  .set-password-label {
    display: block;
    margin-bottom: .125rem;
    color: var(--ink);
    font-size: .875rem;
    font-weight: 600;
  }

  .set-password-control {
    width: 100%;
    padding: .625rem .875rem;
    color: var(--ink);
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: .75rem;
    font-size: .875rem;
    transition: border-color var(--t), box-shadow var(--t);
  }

  .set-password-control::placeholder {
    color: var(--muted);
  }

  .set-password-control:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 2px var(--accent-glow);
  }

  .set-password-email {
    display: block;
    overflow: hidden;
    color: var(--muted);
    background: var(--surface-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .set-password-submit {
    width: 100%;
    margin-top: .25rem;
    padding: .625rem 1rem;
    color: #fff;
    background: var(--accent);
    border: 0;
    border-radius: .75rem;
    box-shadow: var(--shadow-sm);
    font-size: .875rem;
    font-weight: 500;
    transition: background var(--t), box-shadow var(--t);
  }

  .set-password-submit:hover {
    background: var(--accent-strong);
    box-shadow: var(--shadow-md);
  }

  @media (min-width: 640px) {
    .set-password-view {
      padding: 1.5rem;
    }

    .set-password-card {
      padding: 2rem;
    }

    .set-password-title {
      font-size: 1.5rem;
    }
  }
</style>

<div class="set-password-view">
  <div class="set-password-card">

    <div id="set-pwd-alert" style="display: none;" class="mb-4 p-3 rounded-xl text-sm font-medium transition-all"></div>

    <div id="section-set-password">
      <h2 class="set-password-title">
        Crea tu contraseña
      </h2>

      <div class="set-password-field">
        <label class="set-password-label">
          Correo electrónico
        </label>
        <div class="set-password-control set-password-email" id="user-email-display">
          Cargando...
        </div>
      </div>

      <form id="form-set-password">
        <div class="set-password-field">
          <label for="new-password" class="set-password-label">
            Nueva contraseña
          </label>
          <div class="relative">
            <input 
              type="password" 
              id="new-password" 
              required 
              minlength="8"
              placeholder="8 caracteres mínimo"
              autocomplete="new-password"
              class="set-password-control pr-10"
            />
            <button 
              type="button" 
              id="toggle-new-pass" 
              class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-(--muted) hover:text-(--ink) cursor-pointer focus:outline-none"
              title="Mostrar / ocultar contraseña"
            >
              <svg id="eye-icon-new" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>

        <div class="set-password-field">
          <label for="confirm-password" class="set-password-label">
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
              class="set-password-control pr-10"
            />
            <button 
              type="button" 
              id="toggle-confirm-pass" 
              class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-(--muted) hover:text-(--ink) cursor-pointer focus:outline-none"
              title="Mostrar / ocultar contraseña"
            >
              <svg id="eye-icon-confirm" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <button 
            type="submit" 
            id="btn-set-password" 
            class="set-password-submit flex justify-center items-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
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
