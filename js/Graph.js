class Graph {
    // constructor for undirected graph
    constructor(numValues) {
        this.numValues = numValues;
        this.adjList = new Map();
    }

    //Adds a vertex with the specified value in the adjacency list
    addVertex(value) {
        this.adjList.set(value, []);
    }

    //Takes two vertices and adds an edge between them so they are able to go in both directions
    addEdge(vertex, otherVertex) {
        this.adjList.get(vertex).push(otherVertex);
        this.adjList.get(otherVertex).push(vertex);
    }
    
    print() {
        for(let key of this.adjList.keys()) {
            let values = "";
            for(let value of this.adjList.get(key)) {
                values += value + " ";
            }
            console.log(key + " => " + values);
        }
    }
}