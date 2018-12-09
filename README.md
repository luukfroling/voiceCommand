# voiceCommand
Easy library for voice commands using machine learning in javascript

The library was written with the intention of being easy to use for people with no machine learning background. The network configuration (amount of layers/nodes) it the only machine learning related setting of the library. 

<h1> Documentation </h1>

<h3> Initialise the network </h3> 

```javascript
nn = new neuralNetwork([27, H1, H2, O]);
```
Pass an array as a parameter which function as the network configuration. The first element will be the amount of input nodes and must be 27 nodes. The last layer is the output layer and must be the length of the function array we will pass to the network later on. All the layers inbetween are hidden layers. 


<h3> setOutput</h3>

```javascript
nn.setOutput(outputF);
```
Every output node must be linked to a function. The array of funtions must be the same size as the amount of output nodes. The output node with the highest value will decide what function will be excecuted. If output 1 turns out to be the highest probability, function[1] is excecuted. 
OutputF template:

```javascript
let outputF = [
  function(){
    console.log("executed if node 0 of the output layer has the highest value")
  },
  function(){
    console.log("executed if node 1 of the output layer has the highest value")
  }
]
```

<h3> setData </h3>

```javascript
nn.setData(data);
```
the setData expects an array with training data. The training data consists of a sentence linked to an output. The sentence can be of any size with any lowercase character from the alphabet. 
Data template:

```javascript
let data = [
  ["Output zero", 0],
  ["Output one", 1]
]
```

<h3> setRecognition <h3> 
 
```javascript
nn.setRecognition(cont);
```
Initialises the part of the neural network library which uses the web speech API to recognise text and automatically run the network on the input. setRecognition does not start the recognition yet. cont is a boolean parameter which allows the user to control wether the program should stop listening after a succesful recognition. Set const true if the recognition should continue untill stopRecognition is called, otherwise set false. 

<h3> beginRecognition </h3> 

```javascript
nn.beginRecognition();
```
This will begin the recognition. The next time speech is recognised the neural network will run on the resulting sentence. 

<h3> endRecognition </h3>


```javascript
function hello(name) {
  console.log(name);
}
```
