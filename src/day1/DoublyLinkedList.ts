export default class DoublyLinkedList<T> {
    public length: number;
    private head?: ListNode<T>
    private tail?: ListNode<T>

    

    constructor() {
        this.length = 0
        this.head= this.tail = undefined

    }
    private debug() {
        let curr = this.head
        let out = ''
        for(let i = 0; i<this.length;i++) {
            console.log(`${i} ==> ${curr?.value}`)
            console.log(this.length)
            curr = curr?.next
        }
    }

    prepend(item: T): void {
        const node = {value: item} as ListNode<T>
        this.length++
        if (!this.head) {
            this.head = node
            this.tail = node
            return
        }
        node.next = this.head
        this.head.prev = node

        this.head = node
}
    insertAt(item: T, idx: number): void {
        if(idx > this.length) {
            throw new Error('no, not allowed')
        }

        if (idx === 0) {
            this.prepend(item)
        } else if (idx === this.length) {
            this.append(item)
        } else{
            this.length++
            let current = this.head
            for(let i =0; current && i<idx ;i++){
                current = current.next
                
            }
            if(!current) {
                return
            }
            current = current as ListNode<T>
            const node  = {value: item} as ListNode<T>
            node.next = current
            node.prev = current.prev
            current.prev = node
            if(node.prev) {
                node.prev.next = node
            }
        }

}
    append(item: T): void {
        const node = { value : item} as ListNode<T>
        if(!this.tail) {
            this.head =this.tail = node
        }
        this.length++
        node.prev = this.tail
        this.tail.next = node
        this.tail= node

}
    remove(item: T): T | undefined {
        let curr = this.head
        for(let i =0 ;curr && i<this.length; i++) {
            if(curr.value === item) {
                break
            }
            curr= curr.next
        }
        if(!curr) {
            return
        }
        this.length --
        if(this.length === 0 ){
            const out = this.head?.value
            this.head = this.tail = undefined
            return out
        }

        if(curr.prev) {
            curr.prev.next = curr.next
        }

        if (curr.next) {
            curr.next.prev = curr.prev
        }

        if(curr === this.head) {
            this.head = curr.next
        }
        if(curr === this.tail) {
            this.tail= curr.prev
        }

        curr.prev = curr.next = undefined
        return curr.value


}
    get(idx: number): T | undefined {
        if(idx > this.length) {
            throw new Error('Out of bounds')
        }
        let curr = this.head
        for(let i =0;curr && i<idx;i++){
            curr =curr.next
        }
        if(!curr) {
            return
        }
        return curr.value

}
    removeAt(idx: number): T | undefined {
        if(idx > this.length) {
            throw new Error('Out of bounds')
        }
        
        if(idx === 0 ) {
            this.length--
            const out = this.head?.value
            this.head = this.head?.next
            return out
        } else if( idx === this.length -1) {
            this.length--
            const out = this.tail?.value
            this.tail = this.tail?.prev
            return out
        } else {
            this.length--
            let curr = this.head
            for(let i= 0; curr&& i<idx ; i++) {
                curr = curr.next
            }
            if(!curr) {
                return
            }
            if(curr.prev) {
                curr.prev.next = curr.next
            }
            if(curr.next) {
                curr.next.prev = curr.prev
            }

            curr.next = curr.prev =undefined
            return curr.value

        }


}
}