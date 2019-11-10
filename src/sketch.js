import ml5 from 'ml5';

const featureExtractor = ml5.featureExtractor('MobileNet');

export const classifier = featureExtractor.classification();
