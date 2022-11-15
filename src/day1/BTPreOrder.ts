function walk(curr: BinaryNode<number>|null, path: number[]) : number[] {
    if(!curr) {
        return path
    }

    //Recursion
    //pre
    path.push(curr.value)
    //recurse
    walk(curr.left, path)
    walk(curr.right, path)
    //post
    
    return path
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, [])
}


//TO PROVE: passing array as param, passes it via reference, hence ,mutating it, results in overall mutation
// function walk(curr: BinaryNode<number>|null, path: number[]) : void{
//     if(!curr) {
//         return
//     }

//     //Recursion
//     //pre
//     path.push(curr.value)
//     //recurse
//     walk(curr.left, path)
//     walk(curr.right, path)
//     //post
    
//     return
// }

// export default function pre_order_search(head: BinaryNode<number>): number[] {
//     const path:number[] = []
//     walk(head, path)
//     return path

// }