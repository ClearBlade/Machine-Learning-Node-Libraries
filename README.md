# Machine-Learning-Node-Libraries
Machine Learning Node Libraries are transpiled to run on the ClearBlade Platform

## Contents

### [Overview](#overview-1)
### [System Installation](#system-installation)
### [Steps for Transpilation to ES5](#steps-for-transpilation-to-es5-1)
### [Usage](#usage-1)
### [Assets](#assets-1)

## Overview

This IPM package consists of different Machine Learning Libraries that can be used for Classification and Prediction tasks on the ClearBlade Platform.

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## System Installation

1. Open the ClearBlade Platform and enter your login credentials
```
https://platform.clearblade.com/
```
2. Click on **Add System** -> **Advanced** and copy the link of this repository in the box.
```
https://github.com/ClearBlade/Machine-Learning-Node-Libraries
```
3. Click **Create**
4. You can now access this system in the platform.

## Steps for Transpilation to ES5

1. Steps to install Node and NPM.
```
  https://www.npmjs.com/get-npm
```

2. Check if Node and NPM are successfully installed by running the commands - 
```
  node -v
  npm -v
```

3. Create a new System [here](https://platform.clearblade.com) and [create](https://docs.clearblade.com/v/4/code/) a new Library. 
4. Sample code inside the Library in your platform - 

```
  require("@babel/polyfill")
  
  function getLib(){
    const lib = require("ml-regression")    // NPM package which you want to use
    return lib;
  }
  
  function execute(){
    var lib = getLib();
    
    const model = lib.SLR;
    let inputs = [80, 60, 10, 20, 30];
    let outputs = [20, 40, 30, 50, 60];
    
    let regression = new model(inputs, outputs);
    
    regression.predict(40);
  }
  
  global.getLib = getLib
  
```

5. Steps to install CB-Dev-Kit and to Transpile your code service/library. Follow all the steps till ``` cb-dev-kit build ```.
```
  https://github.com/ClearBlade/cb-dev-kit
```
Before executing ``` cb-dev-kit build ``` command for tranpilation, do the following three steps -

   - Install the NPM package that you want to use. Example - 
     ```
        npm i ml-regression
     ```
   - Navigate to
      ```
        Your Project Folder -> cb-dev-kit Folder -> Open webpack.config.js  
      ```
      Search for ``` loader: "babel-loader" ``` and add this option after it - 

      ``` 
        loader: "babel-loader",
        option: {
          preset: [
            [
              "@babel/preset-env"
            ]
          ]
        }
      ```
      and save the file.
      
   - Go to your code service and add an import if you have not imported it
     ```
        require("@babel/polyfill")
     ```
     If it is not installed on your machine run the command ``` npm i @babel/polyfill ```.
     (Note: These options might not work for all the NPM Packages).
     
     You can now execute the ``` cb-dev-kit build ``` command to Transpile.

6. Push all changes back to your system 
```
   https://github.com/ClearBlade/cb-cli
```
7. Go to the platform and check if the library code has been transpiled. [Create](https://docs.clearblade.com/v/4/code/) a new code service. Add the library which was created earlier to the code service. 

8. Finally, copy the code inside the *execute() function* (execute() is the Function Name in my example) of your library in the code service. 

## Usage

- This IPM package consists for five Machine Learning Libraries which allow you to train and test models on the ClearBlade Platform. These Libraries are NPM packages that have been transpiled to work on the ClearBlade Platform. The libraries that have been transpiled are - 
  - brain-js
  - synaptic
  - ml-regression
  - ml-naivebayes
  - ml-cart

- These Libraries can be used to design Neural Networks Model and Bayesian Models for Classification, and Regression Models for Prediction. 

- The implementation of these libraries is done in the Code Services and you can refer to **Official Documentation** of that library to explore more options that you can use.  

## Assests

### Libraries 

| Library  | Description  | Official Documentation |   
|---|---|---|
| ``` BrainJS ```  | A Library to Implement Neural Networks | https://github.com/BrainJS/brain.js  |   
| ``` SynapticLibrary ``` | A Library to Implement Neural Networks  | https://github.com/cazala/synaptic  | 
| ``` RegressionLibrary ```  | A Library Implementing Linear and Polynomial Regression  | https://github.com/mljs/regression  | 
| ``` NaiveBayesLibrary ```  | A Library Implementing Gaussian and Multoinomial Naive Bayes Algorithms  | https://github.com/mljs/naive-bayes  |
| ``` CARTDecisionTreeLibrary ```  | A Library Implementing Classification and Regression Trees  | https://github.com/mljs/decision-tree-cart |

### Code Services

``` BrainJSSmokeTest ``` : A code service to show working of BrainJS Library.

``` SynapticSmokeTest ``` : A code service to show working of Synaptic Library.

``` RegressionSmokeTest ``` : A code service to show working of Regression Library.

``` NaiveBayesSmokeTest ``` : A code service to show working of Naive Bayes Library.

``` DecisionTreeSmokeTst ``` : A code service to show working of Decision Tree Library.
