import {Layer, Network} from 'synaptic';


let inputLayer = new Layer(2);
let hiddenLayer = new Layer(3);
let outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

let myNetwork = new Network({
    input: inputLayer,
    hiddenLayer: [hiddenLayer],
    outputLayer: outputLayer
});

const learningRate = .3;

for(let i=0; i < 40000; i++){
    myNetwork.activate([0,0]);
    myNetwork.propagate(learningRate, [0]);
    
    myNetwork.activate([1,0]);
    myNetwork.propagate(learningRate, [0]);

    myNetwork.activate([0,1]);
    myNetwork.propagate(learningRate, [0]);

    myNetwork.activate([1,1]);
    myNetwork.propagate(learningRate, [1]);
}

function fillNandTable(){
    for(let i = 0; i < 2; i++)
        for(let j=0; j < 2; j++)
            document.getElementById(nandTable).append("<tr> <th>" + i + "</th> <th>" + j + "</th> <th colspan='2'>" + myNetwork.activate([i,j]) + "</th> </tr>");
}

