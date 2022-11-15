function walk(curr: BinaryNode<number>|null, path: number[]) : number[] {
    if(!curr) {
        return path
    }

    //Recursion
    //pre
    //recurse
    walk(curr.left, path)
    walk(curr.right, path)
    //post
    
    path.push(curr.value)
    return path
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, [])

}

//TO PROVE: passing array as param, passes it via reference, hence ,mutating it, results in overall mutation
// function walk(curr: BinaryNode<number>|null, path: number[]) : void{
//     if(!curr) {
//         return
//     }

//     //Recursion
//     //pre
//     //recurse
//     walk(curr.left, path)
//     walk(curr.right, path)
//     //post
    
//     path.push(curr.value)
// }
// export default function post_order_search(head: BinaryNode<number>): number[] {
//     const path: number[] = []
//     walk(head, path)
//     return path

// }