(function () {
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
	menuToggle?.addEventListener('click', () => {
		const isOpen = sidebar.classList.toggle('is-open');
		menuToggle.setAttribute('aria-expanded', String(isOpen));
	});

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
}());
