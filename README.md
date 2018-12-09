# voiceCommand
Easy library for voice commands using machine learning in javascript

<h1> Documentation </h1>

The library was written with the intention of being easy to use for people with no machine learning background. 
The network configuration (amount of layers/nodes) it the only machine learning related setting of the library. 

Initialise the network: 
```javascript
nn = new neuralNetwork([27, H1, H2, O]);
```
The input must be 27, as the network supports every lowercase letter of the alphabet and a space. 
H1 and H2 stand for hidden layer 1 and hidden layer 2, the library supports as many layers as necessary. 
O stands for the output layer. This will correlate with the amount of functions you put in later on. 










```javascript
function hello(name) {
  console.log(name);
}
```
