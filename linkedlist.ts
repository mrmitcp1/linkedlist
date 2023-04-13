import {Node} from "./node";

export class Linkedlist<T>{
    head:Node<T>|null;
    tail:Node<T>|null;
    size:number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertFirstNode(data:T){
        let node = new Node(data);
        node.next=this.head;
        this.head=node;
        if (!this.tail){
            this.tail=node
        }
        this.size++
    }
    insertLastNode(data:T){
        if (!this.head){
            this.insertFirstNode(data);
        }else {
            let node = new Node(data);
            if (this.tail!==null){
                this.tail.next = node;
            }
            this.tail = node
            this.size++
        }

    }
    getSize():number{
        return this.size
    }
    readList():T[]{
        let listData = [];
        let currentNode = this.head;
        while (currentNode!==null){
            listData.push(currentNode.readData());
            currentNode=currentNode.next
        }
        return listData
    }
}