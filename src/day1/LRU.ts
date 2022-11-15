type Node<T> = {
    value: T,
    next?:Node<T>,
    prev?:Node<T>
}
export default class LRU<K, V> {
    private length: number;
    private head?: Node<V>;
    private tail?: Node<V>;
    private lookup: Map<K ,Node<V>>
    private reverseLookup: Map<Node<V>, K>
    

    constructor(private capacity: number = 10) {
        this.length = 0
        this.head = this.tail = undefined
        this.lookup = new Map<K, Node<V>>()
        this.reverseLookup = new Map< Node<V>, K>()
    }

    private createNode(value: V) : Node<V> {
        return {value}
    }
    update(key: K, value: V): void {
        //does it exist?
        //get()

        const node = this.lookup.get(key)

        if(!node) {
            this.length++
            const newNode = this.createNode(value)
            this.prepend(newNode)
            this.trimCache()

            this.lookup.set(key, newNode)
            this.reverseLookup.set(newNode, key)
            return
        }

        this.detach(node)
        this.prepend(node)
        node.value = value


        //if it doesn, we insert

        //  --check capcacity and evict if over

        // if it does
        //update to front of list and update value

}
    get(key: K): V | undefined {
        // check the cache for existence
        const node = this.lookup.get(key)
        if(!node) {
            return undefined
        }

        //update the value we found and move it to front
        this.detach(node)
        this.prepend(node)

        return node.value

        //return value found or undefined if not exits

}
    private detach(node:Node<V>):void {

        if(node.prev) {
            node.prev.next = node.next
        }
        if(node.next) {
            node.next.prev = node.prev
        }

        if(this.head === node) {
            this.head = node.next
            node.next = undefined
        }
        if(this.tail === node) {
            this.tail = node.prev
            node.prev = undefined
        }
        node.next = undefined
        node.prev = undefined
    }
    private prepend(node:Node<V>):void {
        if(!this.head) {
            this.head = this.tail = node
            return
        }
        node.next = this.head
        this.head.prev = node
        this.head = node
    }
    private trimCache():void {
        if(this.length <= this.capacity) {
            return
        }

        const tail = this.tail as Node<V>
        this.detach(this.tail as Node<V>)

        const key = this.reverseLookup.get(tail) as K
        console.log(tail)
        this.lookup.delete(key)
        this.reverseLookup.delete(tail)
        this.length--

    }
}