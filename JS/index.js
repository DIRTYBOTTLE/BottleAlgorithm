import Dictionary from "../Structure/Dictionary.js";
import Graph from "../Structure/Graph.js";
import { Queue } from "../Structure/Queue.js";

const enqueueInp = document.getElementById('enqueueInp');
const enqueueBtn = document.getElementById('enqueueBtn');
const dequeueInp = document.getElementById('dequeueInp');
const dequeueBtn = document.getElementById('dequeueBtn');
const queueClearBtn = document.getElementById('queueClearBtn');
const queueResArea = document.getElementById('queueResArea');

const queue = new Queue();

enqueueBtn.addEventListener('click', () => {
    queue.enqueue(enqueueInp.value);
    queueResArea.value = queue;
});

dequeueBtn.addEventListener('click', () => {
    const res = queue.dequeue();
    dequeueInp.value = res;
    queueResArea.value = queue;
});

queueClearBtn.addEventListener('click', () => {
    queue.clear();
    queueResArea.value = queue;
});

// **********字典**********

const dic = new Dictionary();
const dictionaryKeyInp = document.getElementById('dictionaryKeyInp');
const dictionaryValInp = document.getElementById('dictionaryValInp');
const dictionarySetBtn = document.getElementById('dictionarySetBtn');
const dictionaryResArea = document.getElementById('dictionaryResArea');
const dictionaryDelInp = document.getElementById('dictionaryDelInp');
const dictionaryDelBtn = document.getElementById('dictionaryDelBtn');
const dictionaryClearBtn = document.getElementById('dictionaryClearBtn');

dictionarySetBtn.addEventListener(('click'), () => {
    dic.set(dictionaryKeyInp.value, dictionaryValInp.value);
    dictionaryResArea.value = dic;
});

dictionaryDelBtn.addEventListener(('click'), () => {
    dic.romove(dictionaryDelInp.value);
    dictionaryResArea.value = dic;
});

dictionaryClearBtn.addEventListener(('click'), () => {
    dic.clear();
    dictionaryResArea.value = dic;
});

const graphVertexInp = document.getElementById('graphVertexInp');
const graphVertexAddBtn = document.getElementById('graphVertexAddBtn');
const graphClearBtn = document.getElementById('graphClearBtn');
const graphVInp = document.getElementById('graphVInp');
const graphWInp = document.getElementById('graphWInp');
const graphEdgeAddBtn = document.getElementById('graphEdgeAddBtn');
const graphResArea = document.getElementById('graphResArea');

let graph = new Graph();

graphVertexAddBtn.addEventListener(('click'), () => {
    graph.addVertex(graphVertexInp.value);
    graphResArea.value = graph;
});

graphEdgeAddBtn.addEventListener(('click'), () => {
    graph.addEdge(graphVInp.value, graphWInp.value);
    graphResArea.value = graph;
});

graphClearBtn.addEventListener(('click'), () => {
    graph = new Graph();
    graphResArea.value = '';
});
