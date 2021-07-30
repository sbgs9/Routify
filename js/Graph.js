class Graph {

    // constructor for undirected graph
    constructor() {
        this.adjList = new Map();
    }

    //Returns the adjacency list map which represents the graph
    adjList() {
        return this.adjList;
    }

    //Returns an array containing the neighbors of the input node
    neighbors(vertex) {
        return this.adjList.get(vertex);
    }

    //Returns the edge weight between two nodes
    get edgeWeight(vertex, otherVertex) {
        for(let value of this.adjList.get(vertex)) {
            if(value.otherVertex === otherVertex) {
                return value.weight;
            }
        }
        return -1;
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

    //Takes one node and runs djikstra's algorithm, returning a list of distances from the input node to every other node in the graph
    djikstra(sNode) {
        let pQueue = new PriorityQueue();
        let distances = {};
        let visited = {};
        let previousNodes = {}; 
        distances[sNode] = 0;
        pQueue.enqueue(sNode, 0);
        for(let node of this.adjList.keys()) {
            if(node !== sNode) distances[node] = Infinity;
            previousNodes[node] = null;
            visited[node] = false;
        }
        while(!pQueue.isEmpty()) {
            let curr = pQueue.dequeue();
            let currWeight = curr.priority;
            if(visited[curr.element] === false) {
                visited[curr.element] = true;
                for(let neighbor of this.neighbors(curr.element)) {
                    let dist = distances[curr.element] + this.edgeWeight(curr.element, neighbor.otherVertex);
                    if(dist < distances[neighbor.otherVertex]) {
                        distances[neighbor.otherVertex] = dist;
                        previousNodes[neighbor.otherVertex] = curr.element;
                        pQueue.enqueue(neighbor.otherVertex, distances[neighbor.otherVertex]);
                    }
                }
            }

        }
        return distances;
    }
    
    //Prints out the adjacency list of the graph
    print() {
        for(let key of this.adjList.keys()) {
            let values = "";
            for(let value of this.adjList.get(key)) {
                values += value.otherVertex + "," + value.weight + " ";
            }
            console.log(key + " => " + values);
        }
    }
}