# voiceCommand
Easy library for voice commands using machine learning in javascript

<h1> Documentation </h1>

The library was written with the intention of being easy to use for people with no machine learning background. The network configuration (amount of layers/nodes) it the only machine learning related setting of the library. 

<h3> Initialise the network: </h3> 

```javascript
nn = new neuralNetwork([27, H1, H2, O]);
```
Pass an array as a parameter which function as the network configuration. The first element will be the amount of input nodes and must be 27 nodes. The last layer is the output layer and must be the length of the function array we will pass to the network later on. All the layers inbetween are hidden layers. 


<h3> Pass output functions: </h3>

```javascript
nn.setOutput(outputF);
```
Every output node must be linked to a function. The array of funtions must be the same size as the amount of output nodes. The output node with the highest value will decide what function will be excecuted. If output 1 turns out to be the highest probability, function[1] is excecuted. 

<h3> Pass data correlated with the output function: </h3>

```javascript
nn.setOutput(outputF);
```



```javascript
function hello(name) {
  console.log(name);
}
```
