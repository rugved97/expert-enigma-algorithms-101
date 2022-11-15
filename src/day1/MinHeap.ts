export default class MinHeap {
    public length: number;
    private data: number[];

    

    constructor() {
        this.length = 0
        this.data = []
    }

    insert(value: number): void {
        this.data[this.length] = value
        this.headpifyUp(this.length)
        this.length++


}
    delete(): number {
        if(this.length === 0 ) {
            return -1
        }
        const out = this.data[0]
        if(this.length === 1) {
            this.data =[]
            this.length--
            return out
        }
        this.length--
        this.data[0] = this.data[this.length]
        this.heapifyDown(0)
        
        return out

}   private heapifyDown(index:number) : void {
    const leftChildIndex = this.leftChild(index)
    if(index >= this.length) {
        return
    }

    if(leftChildIndex >= this.length) {
        
        return
    }
    const rightChildIndex = this.rightChild(index)

    const leftValue = this.data[leftChildIndex]
    const rightValue = this.data[rightChildIndex]

    const value = this.data[index]

    
    if(leftValue > rightValue && value >rightValue) { //RIght values is smallest
        this.data[rightChildIndex]  = value
        this.data[index] = rightValue
        this.heapifyDown(rightChildIndex)
    } else if ( rightValue > leftValue && value > leftValue) {//left value is smallest
        this.data[leftChildIndex]  = value
        this.data[index] = leftValue
        this.heapifyDown(leftChildIndex)
    }
}
    private headpifyUp(index:number): void {
        if(index === 0 ) {
            return
        }
        const parentIndex = this.parent(index)
        const parentValue = this.data[parentIndex]
        const value = this.data[index]

        if(value < parentValue) {
            this.data[index] = parentValue
            this.data[parentIndex] = value
            this.headpifyUp(parentIndex)
        }
    }
    private leftChild(index: number) : number {
        return 2*index + 1
    }
    private rightChild(index:number) : number {
        return 2*index + 2
    }
    private parent(index: number) : number {
        return Math.floor((index - 1) / 2)
    }


}