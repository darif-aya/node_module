const natural = require('natural');
const { SentimentAnalyzer, PorterStemmer } = natural;

class SentimentAnalyzerModule {
    constructor(language = 'English') {
        this.language = language;
        this.analyzer = new SentimentAnalyzer(this.language, PorterStemmer, 'afinn');
    }

    analyzeSentiment(text) {
        const tokens = text.split(/\s+/);
        const analysisScore = this.analyzer.getSentiment(tokens);
        let sentiment;

        if (analysisScore > 0.2) {
            sentiment = 'positif';
        } else if (analysisScore < -0.2) {
            sentiment = 'négatif';
        } else {
            sentiment = 'neutre';
        }

        return {
            score: analysisScore,
            sentiment: sentiment,
            text: text
        };
    }
    
}

module.exports = SentimentAnalyzerModule;
