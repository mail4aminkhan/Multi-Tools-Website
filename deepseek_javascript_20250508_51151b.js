// Tools data structure
const toolsData = [
    {
        id: 'image-to-png',
        name: 'Image to PNG Converter',
        category: 'image',
        description: 'Convert any image format to PNG',
        keywords: ['image', 'converter', 'png', 'photo'],
        icon: 'image-icon.png'
    },
    {
        id: 'word-counter',
        name: 'Word Counter',
        category: 'text',
        description: 'Count words and characters in your text',
        keywords: ['text', 'word', 'counter', 'character'],
        icon: 'text-icon.png'
    },
    // ... all other tools data
];

// Categories data
const categories = [
    {
        id: 'image',
        name: 'Image Tools',
        description: 'Convert, resize, compress and edit images',
        icon: 'fa-image'
    },
    {
        id: 'text',
        name: 'Text Tools',
        description: 'Utilities for working with text',
        icon: 'fa-font'
    },
    // ... other categories
];

// Initialize homepage
document.addEventListener('DOMContentLoaded', function() {
    loadCategories();
    loadPopularTools();
    loadRecentTools();
});

function loadCategories() {
    const container = document.getElementById('categories-container');
    
    categories.forEach(category => {
        const categoryTools = toolsData.filter(tool => tool.category === category.id);
        
        const categoryHTML = `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">
                            <i class="fas ${category.icon} me-2"></i>
                            ${category.name}
                        </h5>
                        <p class="card-text">${category.description}</p>
                        <div class="tools-list">
                            ${categoryTools.slice(0, 5).map(tool => `
                                <a href="tools/${tool.category}/${tool.id}.html" class="d-block tool-link">
                                    <i class="fas fa-wrench me-2"></i>${tool.name}
                                </a>
                            `).join('')}
                        </div>
                    </div>
                    <div class="card-footer bg-transparent">
                        <a href="category.html?cat=${category.id}" class="btn btn-sm btn-outline-primary">
                            View All ${category.name} (${categoryTools.length})
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML += categoryHTML;
    });
}