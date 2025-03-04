# World Mood 🌍

A modern web application for analyzing and visualizing global cultural, political, and economic trends. World Mood provides deep insights into the collective consciousness of our world through beautiful and intuitive visualizations.

## 🌟 Features

- **Interactive World Map**: Visualize regional sentiment and trends across the globe
- **Global Sentiment Overview**: Track the distribution of positive, neutral, and negative sentiments
- **Trending Topics Analysis**: Monitor current hot topics with sentiment indicators
- **Real-time Data Updates**: Stay current with the latest trends and sentiments
- **Beautiful and Responsive UI**: Modern design that works on all devices

## 🚀 Live Demo

Visit the live demo at: [World Mood Demo](https://swetlana-ai.github.io/world-mood/)

## 🛠️ Technologies Used

- **Frontend Framework**: React with TypeScript
- **UI Components**: Material-UI
- **Data Visualization**: D3.js, Recharts
- **HTTP Client**: Axios
- **Styling**: Emotion (CSS-in-JS)

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps

1. Clone the repository:
```bash
git clone https://github.com/Swetlana-AI/world-mood.git
cd world-mood
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## 🔧 Project Structure

```
world-mood/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation and search
│   │   ├── WorldMoodMap.tsx    # Interactive world map
│   │   ├── SentimentOverview.tsx # Global sentiment metrics
│   │   └── TrendAnalysis.tsx   # Trending topics
│   ├── theme.ts               # Material-UI theme configuration
│   ├── App.tsx                # Main application component
│   └── index.tsx              # Application entry point
├── public/                    # Static assets
├── package.json              # Project dependencies
└── README.md                 # Project documentation
```

## 📊 Data Sources

Currently, the application uses mock data for demonstration purposes. In a production environment, it would integrate with:

- Social media APIs (Twitter, Reddit, etc.)
- News sentiment analysis services
- Economic indicators and market data
- Public opinion polls and surveys
- Natural Language Processing (NLP) analysis

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Swetlana-AI

## 🙏 Acknowledgments

- Material-UI for the beautiful components
- D3.js for the powerful visualization capabilities
- The React community for the amazing ecosystem
