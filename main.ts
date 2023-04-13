import {Linkedlist} from "./linkedlist";

let linkedList = new Linkedlist();
linkedList.insertFirstNode(1);
linkedList.insertFirstNode(4);
linkedList.insertLastNode(22);
linkedList.insertLastNode(33);
console.log(linkedList.getSize());
console.log(linkedList.readList())