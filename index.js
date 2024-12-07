const SentimentAnalyzerModule = require('./sentimentAnalyzer');

const sentimentAnalyzer = new SentimentAnalyzerModule();

const result1 = sentimentAnalyzer.analyzeSentiment("the perfect product");
const result2 = sentimentAnalyzer.analyzeSentiment("the worst service.");
const result3 = sentimentAnalyzer.analyzeSentiment("I'm really disappointed with this product.");

console.log(result1);
console.log(result2); 
console.log(result3);
