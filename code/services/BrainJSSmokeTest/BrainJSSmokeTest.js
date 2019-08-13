function BrainJSSmokeTest(req, resp) {

  // Training Data includes Readings recorded from 3 sensors (Power, Temperature and Accelerometer) inside a machine. Using these values, 
  // we have to predict whether a machine requires maintenance
  // 0 - Maintenance Not Required
  // 1 - Maintenance Required
  var trainingData = [
    { input : { power: 1350, temperature: 73.4, accelerometer: 0.0683 }, output: { not_required : 0 } },
    { input : { power: 1350, temperature: 73.4, accelerometer: 0.0685 }, output: { not_required : 0 } }, 
    { input : { power: 1532, temperature: 83.1, accelerometer: 0.5272 }, output: { not_required : 0 } },
    { input : { power: 1710, temperature: 77.3, accelerometer: 1.7210 }, output: { required : 1 } }, 
    { input : { power: 1200, temperature: 76.6, accelerometer: 0.0688 }, output: { not_required : 0 } },
    { input : { power: 1820, temperature: 82.1, accelerometer: 0.4333 }, output: { required : 1 } },
    { input : { power: 1421, temperature: 75.4, accelerometer:0.0695 }, output: { not_required : 0 } },
    { input : { power: 1800, temperature: 95.1, accelerometer: 1.9000 }, output: { required : 1 } },
    { input : { power: 1520, temperature: 82.4, accelerometer: 0.4272 }, output: { not_required : 0 } },
    { input : { power: 1740, temperature: 95.0, accelerometer: 1.7150 }, output: { required : 1 } },
  ]

  var brain = BrainJS();
  var net = new brain.NeuralNetwork({
    activation: "relu",
    hiddenLayers: [64, 128]
  });
  net.train(
    trainingData,     
    {
      iterations: 100,
      learningRate: 0.1,
      log: true,
      logPeriod: 10
    }
  );

  // Predict if maintenance is required for sensor values - { power: 1780, temperature: 95.5, accelerometer: 1.8120 }

  var output = net.run({ power: 1780, temperature: 95.5, accelerometer: 1.8120 });
  
  log(output);
  resp.success('Success');
}
