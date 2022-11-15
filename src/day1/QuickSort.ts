function swap(arr: number[], index1:number ,index2:number) : void {
    const temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

function partition ( arr:number[] , lo:number, hi: number): number {
    const pivot = arr[hi]
    let index = lo
    for(let i = lo; i< hi ;i++) {
        if(arr[i] <= pivot) {
            swap(arr,index, i)
            index +=1
        }

    }
    swap(arr, index, hi)
    return index
}

function qs (arr: number[] , lo: number, hi:number) : void {
    if((hi-lo)<1) {
        return 
    }
    const pivotIndex = partition(arr, lo,hi)
    qs(arr ,lo , pivotIndex -1)
    qs(arr, pivotIndex+ 1, hi)
}
export default function quick_sort(arr: number[]): void {
    const lo = 0
    const hi = arr.length -1
    qs(arr, lo, hi)
    
}