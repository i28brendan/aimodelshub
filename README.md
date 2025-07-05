# 🤖 AI Tools Hub

A sleek, modern web application for discovering, comparing, and exploring AI models and tools. Built with vanilla JavaScript, HTML, and CSS featuring a sophisticated dark theme with glass-morphism effects.

![AI Tools Hub](https://img.shields.io/badge/AI%20Tools%20Hub-v2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-brightgreen)

## ✨ Features

### 🔍 Advanced Search & Filtering
- **Real-time search** across model names, companies, types, and descriptions
- **Multi-filter system** with company and model type filters
- **Intelligent search suggestions** and autocomplete
- **Keyboard shortcuts** for enhanced productivity (Ctrl+K for search, Ctrl+C for compare)

### 📊 Interactive Model Comparison
- **Side-by-side comparison** of up to 5 AI models simultaneously
- **Comprehensive comparison table** with specifications, pricing, and features
- **Visual performance metrics** and detailed analytics
- **Export comparison** results for external use

### 🎨 Modern UI/UX Design
- **Dark theme** with glass-morphism effects and smooth animations
- **Responsive design** optimized for desktop, tablet, and mobile
- **Accessible interface** with ARIA labels and keyboard navigation
- **Custom scrollbars** and selection styling for enhanced UX

### 🤖 Extensive AI Model Database
- **35+ AI models** from leading companies including OpenAI, Google, Anthropic, Meta, and more
- **Multiple model types**: Language Models, Vision Models, Audio Models, and Multimodal systems
- **Detailed specifications** including parameters, context length, pricing, and performance metrics
- **Regular updates** with latest AI releases and improvements

### 💫 Interactive Features
- **Real-time statistics** dashboard
- **Model cards** with hover effects and detailed information
- **Modal dialogs** for detailed model comparisons
- **Smooth scrolling** navigation with section highlighting
- **Loading states** and error handling

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (for local development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-tools-hub.git
   cd ai-tools-hub
   ```

2. **Serve the application**
   
   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js:**
   ```bash
   npx http-server
   ```
   
   **Using PHP:**
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Deployment

#### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

#### Netlify
1. Connect your GitHub repository to Netlify
2. Build settings: 
   - Build command: (leave empty)
   - Publish directory: `/`
3. Deploy automatically on every push

#### Vercel
1. Import your GitHub repository
2. Framework preset: Other
3. Build and output settings: (leave default)
4. Deploy with zero configuration

## 🎮 Usage

### Basic Navigation
- **Search**: Use the search bar to find specific models or companies
- **Filter**: Apply filters by model type or company
- **Compare**: Select models using the "Compare" button, then click "Compare Now"
- **Details**: View detailed information about any model

### Keyboard Shortcuts
- `Ctrl/Cmd + K`: Focus search bar
- `Ctrl/Cmd + C`: Open comparison (when 2+ models selected)
- `Escape`: Close modals or clear selection

### Model Selection
1. Browse the models grid
2. Click "Compare" on models you want to compare
3. Selected models will be highlighted with a blue border
4. Click "Compare Now" when you have 2-5 models selected

### Comparison Features
- **Specifications**: Parameters, context length, pricing, performance
- **Features**: Key capabilities and use cases
- **Company Info**: Developer and release information
- **Side-by-side view**: Easy comparison of multiple models

## 🏗️ Project Structure

```
ai-tools-hub/
├── index.html          # Main HTML file
├── style.css           # CSS styles with dark theme
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── assets/             # Images and icons (if any)
```

### File Descriptions

- **`index.html`**: Main application structure with semantic HTML
- **`style.css`**: Modern CSS with glass-morphism effects, animations, and responsive design
- **`script.js`**: Vanilla JavaScript with model data, search functionality, and interactive features

## 🔧 Customization

### Adding New Models
1. Open `script.js`
2. Add new model object to `aiModelsData` array:
   ```javascript
   {
       id: 36,
       name: "Your Model Name",
       company: "Company Name",
       type: "Language Model", // or "Vision Model", "Audio Model", "Multimodal"
       description: "Model description...",
       specs: {
           parameters: "Number of parameters",
           contextLength: "Context window size",
           pricing: "Pricing information",
           performance: "Performance percentage"
       },
       features: ["Feature 1", "Feature 2", "Feature 3"],
       releaseDate: "YYYY-MM-DD"
   }
   ```

### Modifying Styles
- **Colors**: Update CSS custom properties in `:root` selector
- **Animations**: Modify `@keyframes` rules for different effects
- **Layout**: Adjust CSS Grid and Flexbox properties
- **Responsive**: Update media queries for different breakpoints

### Adding Features
- **New filters**: Add options to filter dropdowns in HTML and update filter logic in JavaScript
- **Export functionality**: Add buttons and implement export functions
- **User preferences**: Implement localStorage for saving user settings
- **API integration**: Replace static data with API calls

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

### Mobile Features
- **Collapsible navigation** with hamburger menu
- **Touch-friendly** buttons and interactions
- **Optimized layouts** for small screens
- **Swipe gestures** for model cards

## 🎨 Design System

### Color Palette
- **Primary**: `#3b82f6` (Blue)
- **Secondary**: `#60a5fa` (Light Blue)
- **Accent**: `#8b5cf6` (Purple)
- **Background**: `#0a0a0a` (Dark)
- **Surface**: `#1e293b` (Dark Blue)
- **Text**: `#e2e8f0` (Light Gray)

### Typography
- **Font Family**: Inter, system fonts
- **Headings**: 700 weight
- **Body**: 400 weight
- **Captions**: 500 weight

### Effects
- **Glass-morphism**: `backdrop-filter: blur(20px)`
- **Gradients**: Linear gradients for buttons and text
- **Shadows**: Multiple layered shadows for depth
- **Animations**: Smooth transitions and hover effects

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern features including Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Vanilla JavaScript with modern syntax
- **Font Awesome**: Icons for enhanced UI
- **Google Fonts**: Inter font family

### Performance Optimizations
- **Lazy loading**: Images and content loaded on demand
- **Debounced search**: Prevents excessive API calls
- **Efficient filtering**: Optimized search algorithms
- **Minimal dependencies**: Pure vanilla JavaScript

### Browser Compatibility
- **Chrome**: 80+
- **Firefox**: 75+
- **Safari**: 13+
- **Edge**: 80+

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Style
- Use consistent indentation (2 spaces)
- Follow JavaScript ES6+ conventions
- Use semantic HTML elements
- Write descriptive comments
- Test on multiple browsers

### Types of Contributions
- **Bug fixes**: Report and fix issues
- **New features**: Add functionality
- **Model updates**: Add new AI models
- **Documentation**: Improve README and code comments
- **Performance**: Optimize code and loading times

## 📊 Model Categories

### Language Models (20+)
- **OpenAI**: GPT-4 Turbo, GPT-4 Omni
- **Anthropic**: Claude 3 Opus, Claude 3 Sonnet, Claude 3 Haiku, Claude 3.5 Sonnet
- **Google**: Gemini Pro, Gemini Ultra, Gemini 1.5 Pro, Gemini 1.5 Flash
- **Meta**: Llama 2 70B, Llama 3 70B, Llama 3 405B
- **Microsoft**: GitHub Copilot, Phi-3 Medium
- **Mistral AI**: Mixtral 8x7B, Mistral Large, Codestral
- **And many more...**

### Vision Models (8+)
- **OpenAI**: DALL-E 3, GPT-4 Vision
- **Stability AI**: Stable Diffusion XL, Stable Video Diffusion
- **Midjourney**: Midjourney v6
- **Meta**: Emu Video
- **And more...**

### Audio Models (3+)
- **OpenAI**: Whisper v3
- **Eleven Labs**: Eleven Labs v2
- **Suno**: Suno AI v3

### Multimodal Models (5+)
- **OpenAI**: GPT-4 Omni, GPT-4 Vision
- **Google**: Gemini Pro, Gemini Ultra, Gemini 1.5 Pro, Gemini 1.5 Flash

## 🔮 Future Plans

### Upcoming Features
- **User accounts**: Save comparisons and favorites
- **Advanced filters**: More granular filtering options
- **API integration**: Real-time model information
- **Performance benchmarks**: Live performance data
- **Community features**: Reviews and ratings
- **Dark/light theme toggle**: Theme customization
- **Export options**: PDF, CSV, and JSON exports

### Roadmap
- **Q1 2025**: User accounts and authentication
- **Q2 2025**: API integration and real-time data
- **Q3 2025**: Community features and reviews
- **Q4 2025**: Advanced analytics and insights

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **AI Companies**: For developing amazing AI models
- **Open Source Community**: For inspiration and contributions
- **Font Awesome**: For beautiful icons
- **Google Fonts**: For the Inter font family
- **Contributors**: Everyone who helps improve this project

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/ai-tools-hub/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/ai-tools-hub/discussions)
- **Email**: support@aitoolshub.com

---

<div align="center">
  <strong>Built with ❤️ for the AI community</strong>
  <br>
  <br>
  <a href="#top">Back to top</a>
</div>