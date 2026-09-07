(function () {
	if (window.__codewebaiSearchInitialized) return;
	window.__codewebaiSearchInitialized = true;

	const form = document.querySelector('#search-form');
	const input = document.querySelector('#search-input');
	const results = document.querySelector('#search-results');
	if (!form || !input || !results) return;

	let entries = [];
	const searchIndexUrl = form.dataset.searchIndex || `${form.dataset.baseUrl || '.'}/search/search_index.json`;
	const rawBase = form.dataset.baseUrl || '';
	const baseUrl = rawBase ? (rawBase.endsWith('/') ? rawBase : `${rawBase}/`) : '';

	fetch(searchIndexUrl)
		.then((response) => response.ok ? response.json() : Promise.reject())
		.then((data) => { entries = data.docs || []; })
		.catch(() => { entries = []; });

	function render(query) {
		const normalized = query.trim().toLowerCase();
		if (!normalized) { results.hidden = true; results.innerHTML = ''; return; }
		const matches = entries.filter((entry) => `${entry.title} ${entry.text}`.toLowerCase().includes(normalized)).slice(0, 8);
		results.innerHTML = matches.length ? matches.map((entry) => {
			const cleanLocation = (entry.location || '').replace(/^\//, '');
			const href = `${baseUrl}${cleanLocation}`;
			return `<a class="search-result" href="${href}"><span class="search-result-title">${entry.title}</span><span class="search-result-text">${entry.text || ''}</span></a>`;
		}).join('') : '<span class="search-result-text">Sin resultados</span>';
		results.hidden = false;
	}

	input.addEventListener('input', () => render(input.value));
	input.addEventListener('focus', () => render(input.value));
	form.addEventListener('submit', (event) => event.preventDefault());
	document.addEventListener('keydown', (event) => {
		if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); input.focus(); }
		if (event.key === 'Escape') { input.value = ''; render(''); input.blur(); }
	});
}());
