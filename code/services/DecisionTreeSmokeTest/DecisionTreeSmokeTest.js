function DecisionTreeSmokeTest(req, resp) {
  var model = getTree();
  
  /* Decision Trees for Classification */

  var dataset = [[1350, 73.4, 0.0683], [1350, 73.4, 0.0685], [1532, 83.1, 0.5272], [1710, 77.3, 1.721], [1200, 76.6, 0.0688], [1820, 82.1, 0.4333], [1421, 75.4, 0.0695], [1800, 95.1, 1.9], [1520, 82.4, 0.4272], [1740, 95.0, 1.715]];
  var predictions = [0, 0, 0, 1, 0, 1, 0, 1, 0, 1];
  
  var classifier = new model.DecisionTreeClassifier({
    gainFunction: "gini",
    maxDepth: 10,
    minNumSamples: 3
  });
  
  classifier.train(dataset, predictions);
  
  var test = [[1780, 95.5, 1.812]];
  var output = classifier.predict(test);
  log(output);
  
  /* Decision Trees for Regression */

  var inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  var outputs = [73.4, 76.2, 62.3, 80.2, 100, 94, 88.3, 70, 78, 83, 83, 91, 74, 68, 84, 81, 90, 94, 103, 99];
  
  var classifier = new model.DecisionTreeRegression({
    gainFunction: "regression",
    minNumSamples: 3,
    maxDepth: 10
  });
  
  classifier.train(inputs, outputs);
  
  var test = [[24]];
  var output = classifier.predict(test);  
  log(output);
  
  resp.success('Success');
}
