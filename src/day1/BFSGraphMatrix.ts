export default function bfs(
    graph: WeightedAdjacencyMatrix, 
    source: number, 
    needle: number): number[] | null {

        // graph: [
        //     [0 , 0, 0, 10 , 2],
        //     [1 , 2, 0 , 0, 9],
        //     [0 , 0 , 0, 0, 0],
        //     [0 , 0 , 0, 0, 0],
        //     [0 , 0 , 0, 0, 0],
        // ]

        //Each row is one node
        //Each index of array, is node, to which the connection is
        //Each value at index is the edge weight

    const seen:boolean[] = new Array(graph.length).fill(false) //[ true, false, false, false ...]
    const prev:number[]  = new Array(graph.length).fill(-1) //[-1 , -1 ,-1 , -1 , -1]

    // <index_of_array> is the node_number
    seen[source] = true
    const q:number[] = [source]
    do {
        const curr = q.shift() as number //POP the first element

        //Search for needle
        if(curr === needle) {
            break
        }

        const adjs = graph[curr] //get all the adjacencies for the current node from the graph
        for( let i = 0 ; i< adjs.length ; i++) {

            if(adjs[i] === 0 ) {
                continue //Skip edge connection with 0 weight, == no -connection
            }

            if(seen[i]) {
                continue //Skip is already - seen
            }

            seen[i] = true
            prev[i] = curr
            q.push(i)
        }
        
    } while (q.length);

    if(prev[needle] === -1) {
        return null
    }
    //build it backwards

    let curr = needle
    const out: number[] = [] //path through the graph

    while(prev[curr] !== -1) {
        out.push(curr)
        curr = prev[curr]
    }
    
    // for source, the prev is -1 hence will not be part of path, hence add it
    return [source].concat(out.reverse())
}