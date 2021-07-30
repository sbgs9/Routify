//class with constructor for storing the element and its priority
class QueueEntry {
    constructor (element, priority){
        this.element = element; 
        this.priority = priority;  
  }    
}
//class with constructor of empty array for the priority queue itself
class PriorityQueue { 
    constructor(){
        this.items = [];
    }

    //adds element to queue based on priority 
    enqueue(element, priority){
        var newElement = new QueueEntry(element, priority);
        var valueExists = false; 

        for(var i = 0; i < this.items.length; i++){
            if(this.items[i].priority > newElement.priority) {
                this.items.splice(i, 0, newElement);
                valueExists = true; 
                break; 
            }
        }
        if(!valueExists){
            this.items.push(newElement);
        }
    }

    //removes element at front of queue which has highest priority 
    dequeue(){
        if(this.isEmpty()){
            return "Empty Queue"
        }
        return this.items.shift();
    }

    //helper method to tell you if priority queue is empty 
    isEmpty(){
        return this.items.length == 0; 
    }
    
    //returns the front element 
    front(){
        if(this.isEmpty()){
            return "Empty Queue" 
        }
        return this.items[0];
    }

    //returns last element 
    rear(){
        if(this.isEmpty()){
            return "Empty Queue"
        }
        return this.items[this.items.length - 1]; 
    }

    //prints the priority queue elements with space in between
    print(){
        var str = "";
        for(var i = 0; i < this.items.length; i++){
            str += this.items[i].element + " ";
        }
        return str; 
    }
}
