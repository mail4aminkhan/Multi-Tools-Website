document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('tool-search');
    const searchBtn = document.getElementById('search-btn');
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});

function performSearch() {
    const query = document.getElementById('tool-search').value.toLowerCase();
    
    if (query.trim() === '') {
        alert('Please enter a search term');
        return;
    }
    
    const results = toolsData.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.keywords.some(keyword => keyword.includes(query))
    );
    
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const mainContent = document.querySelector('main.container');
    mainContent.innerHTML = `
        <section class="search-results">
            <h2 class="mb-4">Search Results for "${query}"</h2>
            ${results.length > 0 ? `
                <div class="row">
                    ${results.map(tool => `
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">${tool.name}</h5>
                                    <p class="card-text">${tool.description}</p>
                                    <a href="tools/${tool.category}/${tool.id}.html" class="btn btn-primary">Use Tool</a>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : `
                <div class="alert alert-warning">
                    No tools found matching your search. Try different keywords.
                </div>
            `}
            <button id="back-to-home" class="btn btn-secondary mt-3">Back to Home</button>
        </section>
    `;
    
    document.getElementById('back-to-home').addEventListener('click', () => {
        location.reload();
    });
}