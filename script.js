// AI Tools Hub JavaScript

// Sample AI Models Data
const aiModelsData = [
    {
        id: 1,
        name: "GPT-4 Turbo",
        company: "OpenAI",
        type: "Language Model",
        description: "Advanced language model with improved reasoning capabilities and up-to-date knowledge cutoff. Excellent for complex tasks, coding, and creative writing.",
        specs: {
            parameters: "1.8T",
            contextLength: "128K",
            pricing: "$0.01/1K",
            performance: "95%"
        },
        features: ["Text Generation", "Code Generation", "Reasoning", "Multi-language"],
        releaseDate: "2024-01-01"
    },
    {
        id: 2,
        name: "GPT-4 Vision",
        company: "OpenAI",
        type: "Multimodal",
        description: "Multimodal AI that can understand and analyze images alongside text. Perfect for visual content analysis and image-based tasks.",
        specs: {
            parameters: "1.8T",
            contextLength: "128K",
            pricing: "$0.02/1K",
            performance: "93%"
        },
        features: ["Image Analysis", "Text Generation", "Visual Understanding", "OCR"],
        releaseDate: "2023-10-01"
    },
    {
        id: 3,
        name: "Claude 3 Opus",
        company: "Anthropic",
        type: "Language Model",
        description: "Highly capable AI assistant with strong reasoning abilities and safety measures. Excellent for complex analysis and creative tasks.",
        specs: {
            parameters: "Unknown",
            contextLength: "200K",
            pricing: "$0.015/1K",
            performance: "94%"
        },
        features: ["Long Context", "Safety", "Reasoning", "Analysis"],
        releaseDate: "2024-03-01"
    },
    {
        id: 4,
        name: "Claude 3 Sonnet",
        company: "Anthropic",
        type: "Language Model",
        description: "Balanced AI model offering good performance with cost efficiency. Great for everyday tasks and business applications.",
        specs: {
            parameters: "Unknown",
            contextLength: "200K",
            pricing: "$0.003/1K",
            performance: "89%"
        },
        features: ["Cost Effective", "Balanced", "Business", "General Purpose"],
        releaseDate: "2024-03-01"
    },
    {
        id: 5,
        name: "Gemini Pro",
        company: "Google",
        type: "Multimodal",
        description: "Google's flagship multimodal AI model with strong performance across text, code, and reasoning tasks.",
        specs: {
            parameters: "Unknown",
            contextLength: "32K",
            pricing: "$0.0005/1K",
            performance: "87%"
        },
        features: ["Multimodal", "Code Generation", "Reasoning", "Fast"],
        releaseDate: "2023-12-01"
    },
    {
        id: 6,
        name: "Gemini Ultra",
        company: "Google",
        type: "Multimodal",
        description: "Google's most capable AI model with state-of-the-art performance on complex reasoning and multimodal tasks.",
        specs: {
            parameters: "Unknown",
            contextLength: "32K",
            pricing: "$0.002/1K",
            performance: "96%"
        },
        features: ["State-of-the-art", "Complex Reasoning", "Multimodal", "Research"],
        releaseDate: "2024-02-01"
    },
    {
        id: 7,
        name: "Llama 2 70B",
        company: "Meta",
        type: "Language Model",
        description: "Open-source language model with strong performance and commercial usage rights. Great for customization and fine-tuning.",
        specs: {
            parameters: "70B",
            contextLength: "4K",
            pricing: "Free",
            performance: "85%"
        },
        features: ["Open Source", "Commercial Use", "Fine-tuning", "Self-hosted"],
        releaseDate: "2023-07-01"
    },
    {
        id: 8,
        name: "DALL-E 3",
        company: "OpenAI",
        type: "Vision Model",
        description: "Advanced image generation model with improved understanding of prompts and higher quality outputs.",
        specs: {
            parameters: "Unknown",
            contextLength: "N/A",
            pricing: "$0.04/image",
            performance: "92%"
        },
        features: ["Image Generation", "High Quality", "Prompt Understanding", "Style Control"],
        releaseDate: "2023-10-01"
    },
    {
        id: 9,
        name: "Whisper v3",
        company: "OpenAI",
        type: "Audio Model",
        description: "State-of-the-art speech recognition model with support for multiple languages and robust performance.",
        specs: {
            parameters: "1.5B",
            contextLength: "30s",
            pricing: "$0.006/min",
            performance: "98%"
        },
        features: ["Speech Recognition", "Multi-language", "Robust", "Real-time"],
        releaseDate: "2023-11-01"
    },
    {
        id: 10,
        name: "Midjourney v6",
        company: "Midjourney",
        type: "Vision Model",
        description: "Premium image generation model known for artistic quality and style versatility. Popular among creatives and designers.",
        specs: {
            parameters: "Unknown",
            contextLength: "N/A",
            pricing: "$10/month",
            performance: "94%"
        },
        features: ["Artistic Quality", "Style Versatility", "Creative", "Community"],
        releaseDate: "2024-01-01"
    }
];

// Global Variables
let filteredModels = [...aiModelsData];
let selectedModels = [];
let searchTimeout;

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const searchInput = document.getElementById('searchInput');
const typeFilter = document.getElementById('typeFilter');
const companyFilter = document.getElementById('companyFilter');
const modelsGrid = document.getElementById('modelsGrid');
const comparisonInfo = document.getElementById('comparisonInfo');
const comparisonCount = document.getElementById('comparisonCount');
const comparisonModal = document.getElementById('comparisonModal');
const comparisonTable = document.getElementById('comparisonTable');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    renderModels();
    updateComparisonInfo();
}

function setupEventListeners() {
    // Navigation toggle
    navToggle.addEventListener('click', toggleNavMenu);
    
    // Close nav menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeNavMenu);
    });
    
    // Search functionality
    searchInput.addEventListener('input', debounceSearch);
    typeFilter.addEventListener('change', filterModels);
    companyFilter.addEventListener('change', filterModels);
    
    // Close modal when clicking outside
    comparisonModal.addEventListener('click', function(e) {
        if (e.target === comparisonModal) {
            closeComparison();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeComparison();
            closeNavMenu();
        }
    });
}

// Navigation Functions
function toggleNavMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

function closeNavMenu() {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    closeNavMenu();
}

// Search and Filter Functions
function debounceSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        filterModels();
    }, 300);
}

function filterModels() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedType = typeFilter.value;
    const selectedCompany = companyFilter.value;
    
    filteredModels = aiModelsData.filter(model => {
        const matchesSearch = !searchTerm || 
            model.name.toLowerCase().includes(searchTerm) ||
            model.company.toLowerCase().includes(searchTerm) ||
            model.type.toLowerCase().includes(searchTerm) ||
            model.description.toLowerCase().includes(searchTerm) ||
            model.features.some(feature => feature.toLowerCase().includes(searchTerm));
        
        const matchesType = !selectedType || model.type === selectedType;
        const matchesCompany = !selectedCompany || model.company === selectedCompany;
        
        return matchesSearch && matchesType && matchesCompany;
    });
    
    renderModels();
}

// Model Rendering Functions
function renderModels() {
    if (filteredModels.length === 0) {
        modelsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No models found</h3>
                <p>Try adjusting your search criteria or filters.</p>
            </div>
        `;
        return;
    }
    
    modelsGrid.innerHTML = filteredModels.map(model => createModelCard(model)).join('');
}

function createModelCard(model) {
    const isSelected = selectedModels.includes(model.id);
    
    return `
        <div class="model-card ${isSelected ? 'selected' : ''}" data-model-id="${model.id}">
            <div class="model-card-header">
                <div class="model-info">
                    <h3>${model.name}</h3>
                    <div class="model-company">${model.company}</div>
                </div>
                <div class="model-type">${model.type}</div>
            </div>
            <div class="model-card-body">
                <p class="model-description">${model.description}</p>
                <div class="model-specs">
                    <div class="spec-item">
                        <div class="spec-value">${model.specs.parameters}</div>
                        <div class="spec-label">Parameters</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-value">${model.specs.contextLength}</div>
                        <div class="spec-label">Context</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-value">${model.specs.pricing}</div>
                        <div class="spec-label">Pricing</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-value">${model.specs.performance}</div>
                        <div class="spec-label">Performance</div>
                    </div>
                </div>
                <div class="model-actions">
                    <button class="btn-compare" onclick="toggleModelSelection(${model.id})">
                        <i class="fas fa-balance-scale"></i>
                        ${isSelected ? 'Remove' : 'Compare'}
                    </button>
                    <button class="btn-details" onclick="showModelDetails(${model.id})">
                        <i class="fas fa-info-circle"></i>
                        Details
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Comparison Functions
function toggleModelSelection(modelId) {
    const index = selectedModels.indexOf(modelId);
    
    if (index > -1) {
        selectedModels.splice(index, 1);
    } else {
        if (selectedModels.length >= 5) {
            alert('You can compare up to 5 models at once.');
            return;
        }
        selectedModels.push(modelId);
    }
    
    updateComparisonInfo();
    renderModels();
}

function updateComparisonInfo() {
    comparisonCount.textContent = selectedModels.length;
    
    if (selectedModels.length > 0) {
        comparisonInfo.style.display = 'flex';
    } else {
        comparisonInfo.style.display = 'none';
    }
}

function showComparison() {
    if (selectedModels.length < 2) {
        alert('Please select at least 2 models to compare.');
        return;
    }
    
    const selectedModelData = selectedModels.map(id => 
        aiModelsData.find(model => model.id === id)
    );
    
    renderComparisonTable(selectedModelData);
    comparisonModal.style.display = 'block';
}

function renderComparisonTable(models) {
    const tableHTML = `
        <thead>
            <tr>
                <th>Feature</th>
                ${models.map(model => `<th>${model.name}</th>`).join('')}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Company</strong></td>
                ${models.map(model => `<td>${model.company}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Type</strong></td>
                ${models.map(model => `<td>${model.type}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Parameters</strong></td>
                ${models.map(model => `<td>${model.specs.parameters}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Context Length</strong></td>
                ${models.map(model => `<td>${model.specs.contextLength}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Pricing</strong></td>
                ${models.map(model => `<td>${model.specs.pricing}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Performance</strong></td>
                ${models.map(model => `<td>${model.specs.performance}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Release Date</strong></td>
                ${models.map(model => `<td>${new Date(model.releaseDate).toLocaleDateString()}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Key Features</strong></td>
                ${models.map(model => `<td>${model.features.join(', ')}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Description</strong></td>
                ${models.map(model => `<td>${model.description}</td>`).join('')}
            </tr>
        </tbody>
    `;
    
    comparisonTable.innerHTML = tableHTML;
}

function closeComparison() {
    comparisonModal.style.display = 'none';
}

// Model Details Function
function showModelDetails(modelId) {
    const model = aiModelsData.find(m => m.id === modelId);
    if (!model) return;
    
    alert(`
Model: ${model.name}
Company: ${model.company}
Type: ${model.type}
Description: ${model.description}
Features: ${model.features.join(', ')}
Release Date: ${new Date(model.releaseDate).toLocaleDateString()}
    `);
}

// Utility Functions
function simulateAPIFetch() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(aiModelsData);
        }, 500);
    });
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll-based navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200 && scrollY < sectionTop + sectionHeight - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Add loading animation for model cards
function showLoadingState() {
    modelsGrid.innerHTML = `
        <div class="loading-container">
            <div class="loading"></div>
            <p>Loading AI models...</p>
        </div>
    `;
}

// Add error handling for failed operations
function handleError(error, message) {
    console.error('Error:', error);
    alert(message || 'An error occurred. Please try again.');
}

// Add analytics tracking (placeholder)
function trackEvent(eventName, properties = {}) {
    console.log('Event tracked:', eventName, properties);
    // In a real application, you would send this to your analytics service
}

// Track search events
searchInput.addEventListener('input', () => {
    trackEvent('search', { query: searchInput.value });
});

// Track model selection events
function trackModelSelection(modelId, action) {
    const model = aiModelsData.find(m => m.id === modelId);
    trackEvent('model_selection', {
        modelId,
        modelName: model?.name,
        action
    });
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 'k':
                e.preventDefault();
                searchInput.focus();
                break;
            case 'c':
                if (selectedModels.length >= 2) {
                    e.preventDefault();
                    showComparison();
                }
                break;
        }
    }
});

// Add CSS for additional elements
const additionalStyles = `
    .no-results {
        text-align: center;
        padding: 4rem 2rem;
        color: #94a3b8;
        grid-column: 1 / -1;
    }
    
    .no-results i {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #64748b;
    }
    
    .no-results h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: #e2e8f0;
    }
    
    .loading-container {
        text-align: center;
        padding: 4rem 2rem;
        color: #94a3b8;
        grid-column: 1 / -1;
    }
    
    .loading-container p {
        margin-top: 1rem;
        font-size: 1.1rem;
    }
    
    .nav-link.active {
        color: #60a5fa;
        background-color: rgba(59, 130, 246, 0.1);
    }
`;

// Inject additional styles
const styleElement = document.createElement('style');
styleElement.textContent = additionalStyles;
document.head.appendChild(styleElement);

// Initialize tooltips for better UX
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = e.target.dataset.tooltip;
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// Performance optimization: Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if supported
if ('IntersectionObserver' in window) {
    lazyLoadImages();
}

// Export functions for global access
window.toggleModelSelection = toggleModelSelection;
window.showModelDetails = showModelDetails;
window.showComparison = showComparison;
window.closeComparison = closeComparison;
window.scrollToSection = scrollToSection;