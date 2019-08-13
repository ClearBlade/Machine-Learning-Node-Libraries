function RegressionSmokeTests(req, resp) {

  /* Simple Linear Regression Example */

  // This data is recorded by a temperature sensor over a period of 20 days. 
  var inputs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  var outputs = [73.4, 76.2, 62.3, 80.2, 100, 94, 88.3, 70, 78, 83, 83, 91, 74, 68, 84, 81, 90, 94, 103, 99];

  const model = MLRegression().SLR;
  var regression = new model(inputs, outputs);

  // Predict the temperature on 24th day
  var test = [24];
  var expected_outputs = [];

  log("Simple Linear Regression Prediction: " + regression.predict(test[0]));


  /* Polynomial Regression Example */

  //Using the same dataset used for Linear Regression
  const degree = 2;

  const new_model = MLRegression().PolynomialRegression
  var regression = new new_model(inputs, outputs, degree);

  var test = 24;
  log("Polynomial Regression Prediction: " + regression.predict(test));

  resp.success('Success');
}

/* Other Options Available ->
  log(regression.coefficients);
  log(regression.toString(3));
  log(regression.toLaTeX());
*/