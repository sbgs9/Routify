class Graph {

    // constructor for undirected graph
    constructor() {
        this.adjList = new Map();
    }

    get adjList() {
        return this.adjList;
    }

    get neighbors(vertex) {
        return this.adjList.get(vertex);
    }

    //Adds a vertex with the specified value in the adjacency list
    addVertex(value) {
        this.adjList.set(value, []);
    }

    //Takes two vertices and adds an edge between them so they are able to go in both directions
    addEdge(vertex, otherVertex, weight) {
        this.adjList.get(vertex).push({otherVertex: otherVertex, weight: weight});
        this.adjList.get(otherVertex).push({otherVertex: vertex, weight: weight});
    }

    djikstra(node) {
        let pQueue = new PriorityQueue();
        let vertices = []
        for(vertex of this.adjList.keys()) {
            vertices.push({vertex: vertex, distance: Infinity, previousNode: null, done: false});
        }
        pQueue.enqueue(node, 0);
        while(!pQueue.isEmpty()) {
            let curr = pQueue.front();
            pQueue.dequeue();
            vertices.find(curr)
        }
    }
    
    print() {
        for(let key of this.adjList.keys()) {
            let values = "";
            for(let value of this.adjList.get(key)) {
                values += value.otherVertex + "," + value.weight + " ";
            }
            console.log(key + " => " + values);
        }
    }

    constructor(hello);
    addVertex(h);
    addVertex(e);
    addEdge(l);
    print();
}