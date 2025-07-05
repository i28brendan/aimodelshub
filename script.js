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
    },
    {
        id: 11,
        name: "Claude 3 Haiku",
        company: "Anthropic",
        type: "Language Model",
        description: "Fast and lightweight AI model optimized for speed and efficiency. Perfect for quick tasks and high-volume applications.",
        specs: {
            parameters: "Unknown",
            contextLength: "200K",
            pricing: "$0.0003/1K",
            performance: "82%"
        },
        features: ["Ultra Fast", "Cost Efficient", "Lightweight", "High Volume"],
        releaseDate: "2024-03-01"
    },
    {
        id: 12,
        name: "Gemini 1.5 Pro",
        company: "Google",
        type: "Multimodal",
        description: "Google's latest multimodal AI with extended context length and improved reasoning capabilities across text, images, and code.",
        specs: {
            parameters: "Unknown",
            contextLength: "2M",
            pricing: "$0.007/1K",
            performance: "92%"
        },
        features: ["Extended Context", "Multimodal", "Advanced Reasoning", "Long Documents"],
        releaseDate: "2024-02-15"
    },
    {
        id: 13,
        name: "Grok-1",
        company: "xAI",
        type: "Language Model",
        description: "Open-source language model from xAI with real-time information access and unique conversational style.",
        specs: {
            parameters: "314B",
            contextLength: "8K",
            pricing: "$5/month",
            performance: "86%"
        },
        features: ["Real-time Info", "Open Source", "Conversational", "Humor"],
        releaseDate: "2024-03-17"
    },
    {
        id: 14,
        name: "Mixtral 8x7B",
        company: "Mistral AI",
        type: "Language Model",
        description: "Sparse mixture of experts model offering excellent performance with efficient inference and multilingual capabilities.",
        specs: {
            parameters: "46.7B",
            contextLength: "32K",
            pricing: "$0.0007/1K",
            performance: "88%"
        },
        features: ["Mixture of Experts", "Multilingual", "Efficient", "Open Source"],
        releaseDate: "2023-12-11"
    },
    {
        id: 15,
        name: "Command R+",
        company: "Cohere",
        type: "Language Model",
        description: "Enterprise-focused language model with strong RAG capabilities and tool use for business applications.",
        specs: {
            parameters: "104B",
            contextLength: "128K",
            pricing: "$0.003/1K",
            performance: "90%"
        },
        features: ["RAG Optimized", "Tool Use", "Enterprise", "Search"],
        releaseDate: "2024-04-04"
    },
    {
        id: 16,
        name: "Stable Diffusion XL",
        company: "Stability AI",
        type: "Vision Model",
        description: "High-resolution image generation model with improved prompt adherence and photorealistic outputs.",
        specs: {
            parameters: "3.5B",
            contextLength: "N/A",
            pricing: "$0.002/image",
            performance: "91%"
        },
        features: ["High Resolution", "Photorealistic", "Open Source", "Fine-tunable"],
        releaseDate: "2023-07-26"
    },
    {
        id: 17,
        name: "GPT-4 Omni",
        company: "OpenAI",
        type: "Multimodal",
        description: "OpenAI's flagship multimodal model with native audio, vision, and text capabilities in a single model.",
        specs: {
            parameters: "Unknown",
            contextLength: "128K",
            pricing: "$0.005/1K",
            performance: "96%"
        },
        features: ["Native Multimodal", "Audio Support", "Real-time", "Vision"],
        releaseDate: "2024-05-13"
    },
    {
        id: 18,
        name: "Llama 3 70B",
        company: "Meta",
        type: "Language Model",
        description: "Meta's latest open-source language model with significantly improved performance and safety measures.",
        specs: {
            parameters: "70B",
            contextLength: "8K",
            pricing: "Free",
            performance: "91%"
        },
        features: ["Open Source", "Safety Focused", "Multilingual", "Commercial Use"],
        releaseDate: "2024-04-18"
    },
    {
        id: 19,
        name: "Titan Text Express",
        company: "Amazon",
        type: "Language Model",
        description: "Amazon's enterprise language model optimized for text generation and summarization tasks.",
        specs: {
            parameters: "Unknown",
            contextLength: "8K",
            pricing: "$0.0008/1K",
            performance: "85%"
        },
        features: ["Enterprise", "AWS Integration", "Cost Effective", "Summarization"],
        releaseDate: "2023-09-28"
    },
    {
        id: 20,
        name: "GitHub Copilot",
        company: "Microsoft",
        type: "Language Model",
        description: "AI coding assistant trained on billions of lines of code to help developers write better code faster.",
        specs: {
            parameters: "Unknown",
            contextLength: "8K",
            pricing: "$10/month",
            performance: "89%"
        },
        features: ["Code Generation", "IDE Integration", "Multiple Languages", "Context Aware"],
        releaseDate: "2021-10-29"
    },
    {
        id: 21,
        name: "Perplexity Pro",
        company: "Perplexity",
        type: "Language Model",
        description: "AI-powered search and answer engine with real-time information access and source citations.",
        specs: {
            parameters: "Unknown",
            contextLength: "16K",
            pricing: "$20/month",
            performance: "88%"
        },
        features: ["Real-time Search", "Source Citations", "Research", "Factual"],
        releaseDate: "2024-01-04"
    },
    {
        id: 22,
        name: "Claude 3.5 Sonnet",
        company: "Anthropic",
        type: "Language Model",
        description: "Enhanced version of Claude 3 Sonnet with improved coding capabilities and reasoning performance.",
        specs: {
            parameters: "Unknown",
            contextLength: "200K",
            pricing: "$0.003/1K",
            performance: "93%"
        },
        features: ["Enhanced Coding", "Improved Reasoning", "Artifacts", "Long Context"],
        releaseDate: "2024-06-20"
    },
    {
        id: 23,
        name: "Mistral Large",
        company: "Mistral AI",
        type: "Language Model",
        description: "Mistral's flagship model with top-tier reasoning capabilities and multilingual support.",
        specs: {
            parameters: "Unknown",
            contextLength: "32K",
            pricing: "$0.008/1K",
            performance: "91%"
        },
        features: ["Top Performance", "Multilingual", "Function Calling", "JSON Mode"],
        releaseDate: "2024-02-26"
    },
    {
        id: 24,
        name: "Gemini 1.5 Flash",
        company: "Google",
        type: "Multimodal",
        description: "Lightweight multimodal model optimized for speed and efficiency with long context support.",
        specs: {
            parameters: "Unknown",
            contextLength: "1M",
            pricing: "$0.0005/1K",
            performance: "87%"
        },
        features: ["Ultra Fast", "Long Context", "Multimodal", "Cost Efficient"],
        releaseDate: "2024-05-14"
    },
    {
        id: 25,
        name: "Stable Video Diffusion",
        company: "Stability AI",
        type: "Vision Model",
        description: "AI model for generating high-quality video content from text prompts and images.",
        specs: {
            parameters: "1.2B",
            contextLength: "N/A",
            pricing: "$0.04/second",
            performance: "88%"
        },
        features: ["Video Generation", "Text-to-Video", "Image-to-Video", "Open Source"],
        releaseDate: "2023-11-21"
    },
    {
        id: 26,
        name: "Jurassic-2 Ultra",
        company: "AI21 Labs",
        type: "Language Model",
        description: "Advanced language model with strong instruction following and creative writing capabilities.",
        specs: {
            parameters: "178B",
            contextLength: "8K",
            pricing: "$0.015/1K",
            performance: "86%"
        },
        features: ["Instruction Following", "Creative Writing", "Customizable", "Task Specific"],
        releaseDate: "2023-03-09"
    },
    {
        id: 27,
        name: "Deepseek Coder",
        company: "DeepSeek",
        type: "Language Model",
        description: "Specialized coding model trained on vast amounts of code with strong programming capabilities.",
        specs: {
            parameters: "33B",
            contextLength: "16K",
            pricing: "$0.0014/1K",
            performance: "90%"
        },
        features: ["Code Specialized", "Multiple Languages", "Open Source", "Fill-in-Middle"],
        releaseDate: "2023-11-20"
    },
    {
        id: 28,
        name: "Falcon-180B",
        company: "TII",
        type: "Language Model",
        description: "Large open-source language model with strong performance across various tasks and languages.",
        specs: {
            parameters: "180B",
            contextLength: "2K",
            pricing: "Free",
            performance: "87%"
        },
        features: ["Open Source", "Large Scale", "Multilingual", "Commercial Use"],
        releaseDate: "2023-09-06"
    },
    {
        id: 29,
        name: "Llama 3 405B",
        company: "Meta",
        type: "Language Model",
        description: "Meta's largest open-source language model with state-of-the-art performance across benchmarks.",
        specs: {
            parameters: "405B",
            contextLength: "8K",
            pricing: "Free",
            performance: "95%"
        },
        features: ["Largest Open Source", "SOTA Performance", "Multilingual", "Research"],
        releaseDate: "2024-07-23"
    },
    {
        id: 30,
        name: "Phi-3 Medium",
        company: "Microsoft",
        type: "Language Model",
        description: "Compact but powerful language model optimized for edge deployment and efficiency.",
        specs: {
            parameters: "14B",
            contextLength: "128K",
            pricing: "$0.0012/1K",
            performance: "84%"
        },
        features: ["Edge Optimized", "Compact", "Long Context", "Efficient"],
        releaseDate: "2024-04-23"
    },
    {
        id: 31,
        name: "Dbrx",
        company: "Databricks",
        type: "Language Model",
        description: "Enterprise-focused mixture of experts model with strong performance on business tasks.",
        specs: {
            parameters: "132B",
            contextLength: "32K",
            pricing: "$0.0075/1K",
            performance: "89%"
        },
        features: ["Enterprise", "Mixture of Experts", "Business Tasks", "Data Analytics"],
        releaseDate: "2024-03-27"
    },
    {
        id: 32,
        name: "Emu Video",
        company: "Meta",
        type: "Vision Model",
        description: "AI model for generating and editing videos from text descriptions with high quality output.",
        specs: {
            parameters: "Unknown",
            contextLength: "N/A",
            pricing: "Research",
            performance: "86%"
        },
        features: ["Video Generation", "Text-to-Video", "Video Editing", "Research"],
        releaseDate: "2023-11-16"
    },
    {
        id: 33,
        name: "Eleven Labs v2",
        company: "Eleven Labs",
        type: "Audio Model",
        description: "Advanced text-to-speech model with natural voice synthesis and voice cloning capabilities.",
        specs: {
            parameters: "Unknown",
            contextLength: "N/A",
            pricing: "$5/month",
            performance: "94%"
        },
        features: ["Voice Cloning", "Natural Speech", "Multilingual", "Emotion Control"],
        releaseDate: "2024-01-30"
    },
    {
        id: 34,
        name: "Suno AI v3",
        company: "Suno",
        type: "Audio Model",
        description: "AI music generation model that creates full songs from text prompts with vocals and instruments.",
        specs: {
            parameters: "Unknown",
            contextLength: "N/A",
            pricing: "$10/month",
            performance: "91%"
        },
        features: ["Music Generation", "Vocals", "Instruments", "Full Songs"],
        releaseDate: "2024-03-21"
    },
    {
        id: 35,
        name: "Codestral",
        company: "Mistral AI",
        type: "Language Model",
        description: "Specialized coding model with strong performance in code generation and completion tasks.",
        specs: {
            parameters: "22B",
            contextLength: "32K",
            pricing: "$0.001/1K",
            performance: "89%"
        },
        features: ["Code Generation", "80+ Languages", "Fill-in-Middle", "Fast Inference"],
        releaseDate: "2024-05-29"
    },
    {
        id: 36,
        name: "GPT-4.5",
        company: "OpenAI",
        type: "Language Model",
        description: "OpenAI's latest unified AI system integrating GPT and reasoning capabilities for enhanced performance across all tasks.",
        specs: {
            parameters: "12.8T",
            contextLength: "128K",
            pricing: "$75/$150 per 1M tokens",
            performance: "97%"
        },
        features: ["Unified AI System", "Enhanced Reasoning", "Multimodal", "Reduced Hallucinations"],
        releaseDate: "2025-02-27"
    },
    {
        id: 37,
        name: "GPT-4.1",
        company: "OpenAI",
        type: "Language Model",
        description: "Advanced GPT model with 1M token context window and improved tool-calling capabilities for developers.",
        specs: {
            parameters: "Unknown",
            contextLength: "1M",
            pricing: "$15/$30 per 1M tokens",
            performance: "94%"
        },
        features: ["Ultra Long Context", "Enhanced Tool Calling", "Improved Instructions", "Three Variants"],
        releaseDate: "2025-04-14"
    },
    {
        id: 38,
        name: "OpenAI o3",
        company: "OpenAI",
        type: "Language Model",
        description: "Advanced reasoning model with stratospheric performance on complex mathematical and coding problems.",
        specs: {
            parameters: "Unknown",
            contextLength: "128K",
            pricing: "$60/$180 per 1M tokens",
            performance: "98%"
        },
        features: ["Advanced Reasoning", "Mathematical Excellence", "ARC-AGI Champion", "Safety Focused"],
        releaseDate: "2025-04-16"
    },
    {
        id: 39,
        name: "Grok-3",
        company: "xAI",
        type: "Language Model",
        description: "Enhanced reasoning model with real-time X integration and superior performance across multiple domains.",
        specs: {
            parameters: "Unknown",
            contextLength: "1M",
            pricing: "$10/month",
            performance: "92%"
        },
        features: ["DeepSearch", "Real-time X Data", "Big Brain Mode", "Super Grok Agents"],
        releaseDate: "2024-12-09"
    },
    {
        id: 40,
        name: "Gemini 2.0 Flash",
        company: "Google",
        type: "Multimodal",
        description: "Google's latest multimodal model with Large Action Model capabilities and native tool integration.",
        specs: {
            parameters: "Unknown",
            contextLength: "1M",
            pricing: "$0.075/$0.3 per 1M tokens",
            performance: "93%"
        },
        features: ["Large Action Models", "Native Tool Use", "Real-time Multimodal", "Efficiency Focus"],
        releaseDate: "2024-12-11"
    },
    {
        id: 41,
        name: "DeepSeek V3",
        company: "DeepSeek",
        type: "Language Model",
        description: "Open-source reasoning model with exceptional cost-efficiency and superior coding performance.",
        specs: {
            parameters: "671B",
            contextLength: "128K",
            pricing: "$0.27/$1.1 per 1M tokens",
            performance: "90%"
        },
        features: ["Open Source", "Ultra Cost-Effective", "MoE Architecture", "Strong Reasoning"],
        releaseDate: "2024-12-26"
    },
    {
        id: 42,
        name: "Claude 3.5 Haiku",
        company: "Anthropic",
        type: "Language Model",
        description: "Fast and efficient Claude model optimized for speed while maintaining high quality outputs.",
        specs: {
            parameters: "Unknown",
            contextLength: "200K",
            pricing: "$1/$5 per 1M tokens",
            performance: "86%"
        },
        features: ["Ultra Fast", "Vision Capabilities", "Cost Efficient", "Strong Safety"],
        releaseDate: "2024-11-05"
    },
    {
        id: 43,
        name: "Amazon Nova Pro",
        company: "Amazon",
        type: "Multimodal",
        description: "Amazon's flagship multimodal model combining text, image, and video understanding capabilities.",
        specs: {
            parameters: "Unknown",
            contextLength: "300K",
            pricing: "$0.8/$3.2 per 1M tokens",
            performance: "88%"
        },
        features: ["Multimodal", "Video Understanding", "AWS Integration", "Enterprise Focus"],
        releaseDate: "2024-12-03"
    },
    {
        id: 44,
        name: "Qwen2.5-Coder-32B",
        company: "Alibaba",
        type: "Language Model",
        description: "Advanced coding model with exceptional performance in software development tasks and multiple programming languages.",
        specs: {
            parameters: "32B",
            contextLength: "128K",
            pricing: "Free",
            performance: "87%"
        },
        features: ["Code Specialized", "92+ Languages", "Open Source", "Instruction Following"],
        releaseDate: "2024-11-12"
    },
    {
        id: 45,
        name: "Llama 3.3 70B",
        company: "Meta",
        type: "Language Model",
        description: "Meta's latest open-source model with improved performance and efficiency optimizations.",
        specs: {
            parameters: "70B",
            contextLength: "128K",
            pricing: "Free",
            performance: "89%"
        },
        features: ["Open Source", "Improved Efficiency", "Multilingual", "Commercial Use"],
        releaseDate: "2024-12-06"
    },
    {
        id: 46,
        name: "Pixtral Large",
        company: "Mistral AI",
        type: "Vision Model",
        description: "Advanced vision-language model with state-of-the-art multimodal understanding and reasoning capabilities.",
        specs: {
            parameters: "124B",
            contextLength: "128K",
            pricing: "$2/$6 per 1M tokens",
            performance: "91%"
        },
        features: ["Vision-Language", "High Resolution", "Multimodal Reasoning", "Commercial Use"],
        releaseDate: "2024-12-11"
    },
    {
        id: 47,
        name: "Reka Core",
        company: "Reka AI",
        type: "Multimodal",
        description: "Powerful multimodal model with strong performance across text, vision, audio, and video understanding.",
        specs: {
            parameters: "Unknown",
            contextLength: "128K",
            pricing: "$10/$25 per 1M tokens",
            performance: "85%"
        },
        features: ["Multimodal", "Video Processing", "Audio Understanding", "Real-time"],
        releaseDate: "2024-10-08"
    },
    {
        id: 48,
        name: "Reflection 70B",
        company: "Matt Shumer",
        type: "Language Model",
        description: "Self-correcting language model that can identify and fix its own reasoning errors in real-time.",
        specs: {
            parameters: "70B",
            contextLength: "128K",
            pricing: "$0.5/$1.5 per 1M tokens",
            performance: "88%"
        },
        features: ["Self-Correction", "Reasoning Verification", "Error Detection", "Open Source"],
        releaseDate: "2024-09-05"
    },
    {
        id: 49,
        name: "Flux.1 Pro",
        company: "Black Forest Labs",
        type: "Vision Model",
        description: "Professional text-to-image model with exceptional prompt following and photorealistic image generation.",
        specs: {
            parameters: "12B",
            contextLength: "N/A",
            pricing: "$0.055/image",
            performance: "93%"
        },
        features: ["Photorealistic", "Prompt Following", "Commercial Use", "High Quality"],
        releaseDate: "2024-08-01"
    },
    {
        id: 50,
        name: "Nemotron-4 340B",
        company: "NVIDIA",
        type: "Language Model",
        description: "NVIDIA's flagship language model optimized for synthetic data generation and instruction following.",
        specs: {
            parameters: "340B",
            contextLength: "4K",
            pricing: "$4.2/$4.2 per 1M tokens",
            performance: "86%"
        },
        features: ["Synthetic Data", "Instruction Tuned", "Commercial Use", "High Quality Training"],
        releaseDate: "2024-06-14"
    }
];

// Global Variables
let filteredModels = [...aiModelsData];
let selectedModels = [];
let builderSelectedModels = [];
let searchTimeout;
let builderSearchTimeout;

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
    initializeComparisonsBuilder();
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
}

// Comparisons Builder Functions
function initializeComparisonsBuilder() {
    const builderSearchInput = document.getElementById('builderSearchInput');
    const builderTypeFilter = document.getElementById('builderTypeFilter');
    const builderCompanyFilter = document.getElementById('builderCompanyFilter');
    
    if (builderSearchInput) {
        builderSearchInput.addEventListener('input', debounceBuilderSearch);
    }
    if (builderTypeFilter) {
        builderTypeFilter.addEventListener('change', filterBuilderModels);
    }
    if (builderCompanyFilter) {
        builderCompanyFilter.addEventListener('change', filterBuilderModels);
    }
    
    filterBuilderModels();
}

function debounceBuilderSearch() {
    clearTimeout(builderSearchTimeout);
    builderSearchTimeout = setTimeout(() => {
        filterBuilderModels();
    }, 300);
}

function filterBuilderModels() {
    const builderSearchInput = document.getElementById('builderSearchInput');
    const builderTypeFilter = document.getElementById('builderTypeFilter');
    const builderCompanyFilter = document.getElementById('builderCompanyFilter');
    
    if (!builderSearchInput || !builderTypeFilter || !builderCompanyFilter) return;
    
    const searchTerm = builderSearchInput.value.toLowerCase();
    const selectedType = builderTypeFilter.value;
    const selectedCompany = builderCompanyFilter.value;
    
    const filteredBuilderModels = aiModelsData.filter(model => {
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
    
    renderAvailableModels(filteredBuilderModels);
}

function renderAvailableModels(models) {
    const availableModelsContainer = document.getElementById('availableModels');
    
    if (!availableModelsContainer) return;
    
    if (models.length === 0) {
        availableModelsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h4>No models found</h4>
                <p>Try adjusting your search criteria.</p>
            </div>
        `;
        return;
    }
    
    availableModelsContainer.innerHTML = models.map(model => {
        const isSelected = builderSelectedModels.some(selected => selected.id === model.id);
        const isDisabled = builderSelectedModels.length >= 5 && !isSelected;
        
        return `
            <div class="available-model-item ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}" 
                 onclick="${isDisabled ? '' : `addToComparison(${model.id})`}">
                <div class="available-model-info">
                    <div class="available-model-name">${model.name}</div>
                    <div class="available-model-company">${model.company}</div>
                    <div class="available-model-type">${model.type}</div>
                </div>
            </div>
        `;
    }).join('');
}

function addToComparison(modelId) {
    const model = aiModelsData.find(m => m.id === modelId);
    if (!model) return;
    
    // Check if already selected
    if (builderSelectedModels.some(selected => selected.id === modelId)) {
        return;
    }
    
    // Check max limit
    if (builderSelectedModels.length >= 5) {
        alert('You can compare up to 5 models at once.');
        return;
    }
    
    builderSelectedModels.push(model);
    updateSelectedModelsList();
    updateBuilderActions();
    filterBuilderModels(); // Refresh to update disabled states
}

function removeFromComparison(modelId) {
    builderSelectedModels = builderSelectedModels.filter(model => model.id !== modelId);
    updateSelectedModelsList();
    updateBuilderActions();
    filterBuilderModels(); // Refresh to update disabled states
}

function updateSelectedModelsList() {
    const selectedModelsListContainer = document.getElementById('selectedModelsList');
    const selectedCountElement = document.getElementById('selectedCount');
    
    if (!selectedModelsListContainer || !selectedCountElement) return;
    
    selectedCountElement.textContent = `(${builderSelectedModels.length}/5)`;
    
    if (builderSelectedModels.length === 0) {
        selectedModelsListContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-plus-circle"></i>
                <p>Select models from the left to start comparing</p>
            </div>
        `;
        return;
    }
    
    selectedModelsListContainer.innerHTML = builderSelectedModels.map(model => `
        <div class="selected-model-item">
            <div class="selected-model-info">
                <div class="selected-model-name">${model.name}</div>
                <div class="selected-model-company">${model.company}</div>
            </div>
            <button class="remove-model-btn" onclick="removeFromComparison(${model.id})" title="Remove model">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
}

function updateBuilderActions() {
    const generateButton = document.getElementById('generateComparison');
    const saveButton = document.getElementById('saveComparison');
    
    if (generateButton) {
        generateButton.disabled = builderSelectedModels.length < 2;
    }
    if (saveButton) {
        saveButton.disabled = builderSelectedModels.length === 0;
    }
}

function clearBuilderSelection() {
    builderSelectedModels = [];
    updateSelectedModelsList();
    updateBuilderActions();
    filterBuilderModels();
}

function generateDetailedComparison() {
    if (builderSelectedModels.length < 2) {
        alert('Please select at least 2 models to compare.');
        return;
    }
    
    renderDetailedComparison();
    showComparisonResults();
}

function renderDetailedComparison() {
    renderPerformanceChart();
    renderPricingChart();
    renderAdvancedComparisonTable();
}

function renderPerformanceChart() {
    const performanceChart = document.getElementById('performanceChart');
    if (!performanceChart) return;
    
    const chartHTML = builderSelectedModels.map(model => {
        const performance = parseInt(model.specs.performance);
        return `
            <div class="chart-bar">
                <div class="chart-label">${model.name}</div>
                <div class="chart-bar-bg">
                    <div class="chart-bar-fill" style="width: ${performance}%">
                        <div class="chart-value">${model.specs.performance}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    performanceChart.innerHTML = chartHTML;
    
    // Animate bars
    setTimeout(() => {
        const bars = performanceChart.querySelectorAll('.chart-bar-fill');
        bars.forEach(bar => {
            bar.style.width = bar.style.width;
        });
    }, 100);
}

function renderPricingChart() {
    const pricingChart = document.getElementById('pricingChart');
    if (!pricingChart) return;
    
    // Convert pricing to comparable numbers for visualization
    const maxPrice = Math.max(...builderSelectedModels.map(model => {
        const pricing = model.specs.pricing;
        if (pricing === 'Free' || pricing === 'Research') return 0;
        // Extract first number from pricing string
        const match = pricing.match(/\d+/);
        return match ? parseInt(match[0]) : 0;
    }));
    
    const chartHTML = builderSelectedModels.map(model => {
        const pricing = model.specs.pricing;
        let value = 0;
        let displayValue = pricing;
        
        if (pricing === 'Free' || pricing === 'Research') {
            value = 0;
        } else {
            const match = pricing.match(/\d+/);
            value = match ? parseInt(match[0]) : 0;
        }
        
        const percentage = maxPrice > 0 ? (value / maxPrice) * 100 : 0;
        
        return `
            <div class="chart-bar">
                <div class="chart-label">${model.name}</div>
                <div class="chart-bar-bg">
                    <div class="chart-bar-fill" style="width: ${percentage || 5}%">
                        <div class="chart-value">${displayValue}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    pricingChart.innerHTML = chartHTML;
}

function renderAdvancedComparisonTable() {
    const advancedComparisonTable = document.getElementById('advancedComparisonTable');
    if (!advancedComparisonTable) return;
    
    const tableHTML = `
        <thead>
            <tr>
                <th>Specification</th>
                ${builderSelectedModels.map(model => `<th>${model.name}<br><small>${model.company}</small></th>`).join('')}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Model Type</strong></td>
                ${builderSelectedModels.map(model => `<td>${model.type}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Parameters</strong></td>
                ${builderSelectedModels.map(model => `<td>${model.specs.parameters}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Context Length</strong></td>
                ${builderSelectedModels.map(model => `<td>${model.specs.contextLength}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Pricing</strong></td>
                ${builderSelectedModels.map(model => `<td>${model.specs.pricing}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Performance Score</strong></td>
                ${builderSelectedModels.map(model => `<td>${model.specs.performance}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Release Date</strong></td>
                ${builderSelectedModels.map(model => `<td>${new Date(model.releaseDate).toLocaleDateString()}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Key Features</strong></td>
                ${builderSelectedModels.map(model => `<td>${model.features.join(', ')}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Description</strong></td>
                ${builderSelectedModels.map(model => `<td style="max-width: 250px;">${model.description}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Open Source</strong></td>
                ${builderSelectedModels.map(model => {
                    const isOpenSource = model.features.some(feature => 
                        feature.toLowerCase().includes('open source') || 
                        feature.toLowerCase().includes('open-source')
                    ) || model.specs.pricing === 'Free';
                    return `<td class="${isOpenSource ? 'feature-cell' : 'no-feature-cell'}">${isOpenSource ? '✓' : '✗'}</td>`;
                }).join('')}
            </tr>
            <tr>
                <td><strong>Multimodal</strong></td>
                ${builderSelectedModels.map(model => {
                    const isMultimodal = model.type === 'Multimodal' || model.features.some(feature => 
                        feature.toLowerCase().includes('multimodal') || 
                        feature.toLowerCase().includes('vision')
                    );
                    return `<td class="${isMultimodal ? 'feature-cell' : 'no-feature-cell'}">${isMultimodal ? '✓' : '✗'}</td>`;
                }).join('')}
            </tr>
            <tr>
                <td><strong>Coding Capabilities</strong></td>
                ${builderSelectedModels.map(model => {
                    const hasCoding = model.features.some(feature => 
                        feature.toLowerCase().includes('code') || 
                        feature.toLowerCase().includes('programming')
                    ) || model.name.toLowerCase().includes('code');
                    return `<td class="${hasCoding ? 'feature-cell' : 'no-feature-cell'}">${hasCoding ? '✓' : '✗'}</td>`;
                }).join('')}
            </tr>
        </tbody>
    `;
    
    advancedComparisonTable.innerHTML = tableHTML;
}

function showComparisonResults() {
    const comparisonResults = document.getElementById('comparisonResults');
    if (comparisonResults) {
        comparisonResults.style.display = 'block';
        comparisonResults.scrollIntoView({ behavior: 'smooth' });
    }
}

function hideComparisonResults() {
    const comparisonResults = document.getElementById('comparisonResults');
    if (comparisonResults) {
        comparisonResults.style.display = 'none';
    }
}

function saveComparison() {
    if (builderSelectedModels.length === 0) {
        alert('No models selected to save.');
        return;
    }
    
    const comparisonData = {
        models: builderSelectedModels,
        timestamp: new Date().toISOString(),
        title: `Comparison of ${builderSelectedModels.map(m => m.name).join(', ')}`
    };
    
    // Save to localStorage
    const savedComparisons = JSON.parse(localStorage.getItem('savedComparisons') || '[]');
    savedComparisons.push(comparisonData);
    localStorage.setItem('savedComparisons', JSON.stringify(savedComparisons));
    
    alert('Comparison saved successfully!');
}

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