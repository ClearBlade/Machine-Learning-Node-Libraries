function NaiveBayesSmokeTest(req, resp) {
  
  // Input values are readings recorded by 3 sensors - Power, Temperature and Accelerator. Using these values, we have to predict whether a maintenance
  // is required or not.

  var inputs = [
    [1350, 73.4, 0.0683], 
    [1350, 73.4, 0.0685], 
    [1532, 83.1, 0.5272], 
    [1710, 77.3, 1.7210], 
    [1200, 76.6, 0.0688], 
    [1820, 82.1, 0.4333], 
    [1421, 75.4, 0.0695], 
    [1800, 95.1, 1.9000], 
    [1520, 82.4, 0.4272], 
    [1740, 95.0, 1.7150]
  ]; 
  
  // Maintenance Not Required : 0
  // Maintenance Required : 1
  var outputs = [0, 0, 0, 1, 0, 1, 0, 1, 0, 1]; 

  /* Gaussian Naive Bayes */

  var gaussian = NaiveBayes().GaussianNB;
  var model = new gaussian();
  model.train(inputs, outputs); 
  
  // Predict if maintenance is required for sensor values - { power: 1780, temperature: 95.5, accelerometer: 1.8120 }
  var test = [[1780, 95.5, 1.8120]];
  var prediction = model.predict(test)

  if (prediction == 1){
    log("Prediction with Gaussian Classifier: Maintenance Required");
  } else {
    log("Prediction with Gaussian Classifier: Maintenance Not Required");
  }
  

  /* Multinomial Naive Bayes */
  
  var multinomial = NaiveBayes().MultinomialNB;
  var model = new multinomial();
  model.train(inputs, outputs); 
  
  // Predict if maintenance is required for sensor values - { power: 1780, temperature: 95.5, accelerometer: 1.8120 }
  var test = [[1780, 95.5, 1.8120]];
  var prediction = model.predict(test)
  
  if (prediction == 1){
    log("Prediction with Gaussian Classifier: Maintenance Required");
  } else {
    log("Prediction with Gaussian Classifier: Maintenance Not Required");
  }
  
  resp.success('Success');
}
