"use strict";

var _synaptic = require("synaptic");

var inputLayer = new _synaptic.Layer(2);
var hiddenLayer = new _synaptic.Layer(3);
var outputLayer = new _synaptic.Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

var myNetwork = new _synaptic.Network({
    input: inputLayer,
    hiddenLayer: [hiddenLayer],
    outputLayer: outputLayer
});

var learningRate = .3;

for (var i = 0; i < 40000; i++) {
    myNetwork.activate([0, 0]);
    myNetwork.propagate(learningRate, [0]);

    myNetwork.activate([1, 0]);
    myNetwork.propagate(learningRate, [0]);

    myNetwork.activate([0, 1]);
    myNetwork.propagate(learningRate, [0]);

    myNetwork.activate([1, 1]);
    myNetwork.propagate(learningRate, [1]);
}

function fillNandTable() {
    for (var _i = 0; _i < 2; _i++) {
        for (var j = 0; j < 2; j++) {
            document.getElementById(nandTable).append("<tr> <th>" + _i + "</th> <th>" + j + "</th> <th colspan='2'>" + myNetwork.activate([_i, j]) + "</th> </tr>");
        }
    }
}
//# sourceMappingURL=index.js.map