# Machine-Learning-Node-Libraries
Machine Learning Node Libraries are transpiled to run on the ClearBlade Platform

## Contents

### [Overview](#overview-1)
### [System Installation](#system-installation)
### [Transpilation Steps](#transpilation-steps-1)
### [Usage](#usage-1)
### [Assets](#assets-1)

## Overview

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

## Transpilation Steps

1. Steps to install Node and NPM.
```
  https://www.npmjs.com/get-npm
```

2. Check if Node and NPM are successfully installed by running the commands - 
```
  node -v
  npm -v
```

3. Steps to install CB-Dev-Kit and to Transpile your code service/library
```
  https://github.com/ClearBlade/cb-dev-kit
```
Before executing ``` cb-dev-kit build ``` command for tranpilation, navigate to -
```
  Your Project Folder -> cb-dev-kit -> Open webpack.config.js  
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
and save the file and then you can execute the ``` cb-dev-kit build ``` command to Transpile.

2. Each of the Node libraries are NPM Packages which can be installed from 
```
https://www.npmjs.com/

```
For example, to install ml-regression library, run the command ``` npm i ml-regression ```. Executing this command will create a *node_modules* folders which will have all the library dependency files.

## Usage

## Assests

### Libraries 

| Library  | Description  | Official Documentation |   
|---|---|---|
| ``` BrainJS ```  | A Library to Implement Neural Networks | https://github.com/BrainJS/brain.js  |   
| ``` SynapticLibrary ``` | A Library to Implement Neural Networks  | https://github.com/cazala/synaptic  | 
| ``` RegressionLibrary ```  | A Library Implementing Linear and Polynomial Regression  | https://github.com/mljs/regression  | 
| ``` NaiveBayesLibrary ```  | A Library Implementing Gaussian and Multoinomial Naive Bayes Algorithms  | https://github.com/mljs/naive-bayes  | 

### Code Services

``` BrainJSSmokeTest ``` : A code service to show working of BrainJS Library.

``` SynapticSmokeTest ``` : A code service to show working of Synaptic Library.

``` RegressionSmokeTest ``` : A code service to show working of Regression Library.

``` NaiveBayesSmokeTest ``` : A code service to show working of Naive Bayes Library.
