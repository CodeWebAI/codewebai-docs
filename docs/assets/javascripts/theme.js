(function () {
	if (window.__codewebaiThemeInitialized) return;
	window.__codewebaiThemeInitialized = true;

	const root = document.documentElement;
	const themeToggle = document.querySelector('#theme-toggle');
	const menuToggle = document.querySelector('#menu-toggle');
	const sidebar = document.querySelector('#site-sidebar');
	const storedTheme = localStorage.getItem('codewebai-theme');
	const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

	function setTheme(theme) {
		root.dataset.theme = theme;
		localStorage.setItem('codewebai-theme', theme);
		themeToggle?.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
	}

	setTheme(storedTheme || preferredTheme);
	themeToggle?.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
	// Control del menú hamburguesa móvil con buenas prácticas de UX y accesibilidad
	if (menuToggle && sidebar) {
		const updateMenuState = (isOpen) => {
			sidebar.classList.toggle('is-open', isOpen);
			menuToggle.setAttribute('aria-expanded', String(isOpen));
			menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
			const icon = menuToggle.querySelector('span');
			if (icon) icon.textContent = isOpen ? '✕' : '☰';
		};

		menuToggle.addEventListener('click', (e) => {
			e.stopPropagation();
			const isOpen = !sidebar.classList.contains('is-open');
			updateMenuState(isOpen);
		});

		// Cerrar menú con tecla Escape
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && sidebar.classList.contains('is-open')) {
				updateMenuState(false);
			}
		});

		// Cerrar menú al hacer clic fuera
		document.addEventListener('click', (e) => {
			if (
				sidebar.classList.contains('is-open') &&
				!sidebar.contains(e.target) &&
				!menuToggle.contains(e.target)
			) {
				updateMenuState(false);
			}
		});

		// Cerrar menú si se redimensiona a pantalla de escritorio
		window.addEventListener('resize', () => {
			if (window.innerWidth > 768 && sidebar.classList.contains('is-open')) {
				updateMenuState(false);
			}
		});
	}

	document.querySelectorAll('pre').forEach((block) => {
		const button = document.createElement('button');
		button.type = 'button';
		button.className = 'copy-code';
		button.textContent = 'Copiar';
		button.addEventListener('click', async () => {
			await navigator.clipboard.writeText(block.querySelector('code')?.innerText || block.innerText);
			button.textContent = 'Copiado';
			window.setTimeout(() => { button.textContent = 'Copiar'; }, 1400);
		});
		block.append(button);
	});

	// Scrollspy para subtemas del sidebar
	const sublinks = Array.from(document.querySelectorAll('.sidebar-sublink[href^="#"]'));
	if (sublinks.length > 0) {
		const headingTargets = sublinks.map(link => {
			const id = decodeURIComponent(link.getAttribute('href').slice(1));
			return {
				link,
				element: document.getElementById(id)
			};
		}).filter(item => item.element !== null);

		function updateScrollspy() {
			const threshold = 140;
			const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 50);
			let activeIndex = -1;

			if (isAtBottom && headingTargets.length > 0) {
				activeIndex = headingTargets.length - 1;
			} else {
				for (let i = 0; i < headingTargets.length; i++) {
					const rect = headingTargets[i].element.getBoundingClientRect();
					if (rect.top <= threshold) {
						activeIndex = i;
					} else {
						break;
					}
				}
			}

			headingTargets.forEach((item, index) => {
				if (index === activeIndex) {
					item.link.classList.add('is-active');
				} else {
					item.link.classList.remove('is-active');
				}
			});
		}

		window.addEventListener('scroll', updateScrollspy, { passive: true });
		updateScrollspy();
	}
}());
