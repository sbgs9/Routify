class Graph {

    // constructor for undirected graph
    constructor() {
        this.adjList = new Map();
    }

    get adjList() {
        return this.adjList;
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