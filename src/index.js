import {Layer, Network} from 'synaptic';

let inputLayer = new Layer(2);
let hiddenLayer = new Layer(3);
let outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

let myNANDNetwork = new Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
});

let myXORNetwork = new Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
});

let myORNetwork = new Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
});

let myANDNetwork = new Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
});

const learningRate = .3;

function initializeTrainNANDNetwork(myNANDNetwork){

    for(let i=0; i < 20000; i++){
        // 0,0 => 0
        myNANDNetwork.activate([0,0]);
        myNANDNetwork.propagate(learningRate, [1]);

        // 0,1 => 0
        myNANDNetwork.activate([0,1]);
        myNANDNetwork.propagate(learningRate, [1]);

        // 1,0 => 0
        myNANDNetwork.activate([1,0]);
        myNANDNetwork.propagate(learningRate, [1]);

        // 1,1 => 1
        myNANDNetwork.activate([1,1]);
        myNANDNetwork.propagate(learningRate, [0]);
    }
}

function initializeTrainXORNetwork(myXORNetwork){

    for(let i=0; i < 20000; i++){
        // 0,0 => 0
        myXORNetwork.activate([0,0]);
        myXORNetwork.propagate(learningRate, [0]);

        // 0,1 => 0
        myXORNetwork.activate([0,1]);
        myXORNetwork.propagate(learningRate, [1]);

        // 1,0 => 0
        myXORNetwork.activate([1,0]);
        myXORNetwork.propagate(learningRate, [1]);

        // 1,1 => 1
        myXORNetwork.activate([1,1]);
        myXORNetwork.propagate(learningRate, [0]);
    }
}

function initializeTrainORNetwork(myORNetwork){

    for(let i=0; i < 20000; i++){
        // 0,0 => 0
        myORNetwork.activate([0,0]);
        myORNetwork.propagate(learningRate, [0]);

        // 0,1 => 0
        myORNetwork.activate([0,1]);
        myORNetwork.propagate(learningRate, [1]);

        // 1,0 => 0
        myORNetwork.activate([1,0]);
        myORNetwork.propagate(learningRate, [1]);

        // 1,1 => 1
        myORNetwork.activate([1,1]);
        myORNetwork.propagate(learningRate, [1]);
    }
}

function initializeTrainANDNetwork(myANDNetwork){

    for(let i=0; i < 20000; i++){
        // 0,0 => 0
        myANDNetwork.activate([0,0]);
        myANDNetwork.propagate(learningRate, [0]);

        // 0,1 => 0
        myANDNetwork.activate([0,1]);
        myANDNetwork.propagate(learningRate, [0]);

        // 1,0 => 0
        myANDNetwork.activate([1,0]);
        myANDNetwork.propagate(learningRate, [0]);

        // 1,1 => 1
        myANDNetwork.activate([1,1]);
        myANDNetwork.propagate(learningRate, [1]);
    }
}

function fillTable(network, table){
    for(let i = 0; i < 2; i++)
        for(let j=0; j < 2; j++) {
            createTruthTable(i,j,network, table);
        }
}

function createTruthTable(i, j, network, table){
    let tr = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = th1.cloneNode(true);
    let th3 = th1.cloneNode(true);
    th3.setAttribute("colspan","2");
    th3.style.textAlign = "center";
    let text1 = document.createTextNode("" + i);
    let text2 = document.createTextNode("" + j);
    let text3 = document.createTextNode("" + Math.round(network.activate([i, j])));
    th1.appendChild(text1);
    th2.appendChild(text2);
    th3.appendChild(text3);

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    document.getElementById(table).appendChild(tr);
}


initializeTrainNANDNetwork(myNANDNetwork);
fillTable(myNANDNetwork, "nandTable");

initializeTrainXORNetwork(myXORNetwork);
fillTable(myXORNetwork, "xorTable");

initializeTrainORNetwork(myORNetwork);
fillTable(myORNetwork, "orTable");

initializeTrainANDNetwork(myANDNetwork);
fillTable(myANDNetwork, "andTable");



