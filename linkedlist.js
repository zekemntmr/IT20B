class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{

    constructor(){
        this.head = null;
    }

    insert_at_beginning(element){
        const node = new Node(element);
        node.next = this.head;
        this.head = node;
    }

    traverse(){
        let current = this.head;
        let output = "";

        while(current){
            output += current.value + " ";
            current = current.next;
        }

        return output;
    }

    insert_at_end(element){
        const node = new Node(element);

        if(!this.head){
            this.head = node;
            return;
        }

        let current  = this.head;

        while(current.next){
            current = current.next;
        }

        current.next = node;
    }
    search(element){
        let current = this.head;

        while(current){
            if(current.value === element)
            return "Element found";
            current = current.next;
        }
        return "Element not found";
    }


}




let list1 = new LinkedList();
list1.insert_at_beginning(2);
console.log(list1.traverse());
list1.insert_at_end(8);
list1.insert_at_end(7);

console.log(list1.search(4));

console.log(list1.traverse());
