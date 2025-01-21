const username = 'Frode10'; // Bytt til ditt GitHub-brukernavn
		const apiKey = '79d850'; // Din Screenshot Machine API-nøkkel
		const pagesList = document.getElementById('pages-list');

		fetch(`https://api.github.com/users/${username}/repos`)
			.then(response => response.json())
			.then(data => {
				data.forEach(repo => {
					// Bygg URL for GitHub Pages
					const pagesUrl = `https://${username}.github.io/${repo.name}`;

					// URL for å hente skjermbilde
					const screenshotUrl = `https://api.screenshotmachine.com?key=${apiKey}&url=${encodeURIComponent(pagesUrl)}&dimension=300x300`;

					// Lag en kort med bilde og lenke
					const card = document.createElement('div');
					card.className = 'card';
					card.innerHTML = `
						<img src="${screenshotUrl}" alt="Forhåndsvisning av ${repo.name}" />
						<a href="${pagesUrl}" target="_blank">${repo.name}</a>
					`;
					pagesList.appendChild(card);
				});
			})
			.catch(error => console.error('Error fetching repos:', error));