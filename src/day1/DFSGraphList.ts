function walk(
    graph: WeightedAdjacencyList , 
    curr:number , 
    needle: number , 
    seen: boolean[] , 
    path: number[]): boolean {

        //Base cases
        if ( seen[curr]) {
            return false
        }

        seen[curr] = true

        //recurse
        //pre
        //Base cases
        
        path.push(curr)
        if(curr === needle) {
            //if found push the destination 
            // in the path and then return, helps the recursive step
            return true
        }


        //recurse
        const list = graph[curr] //who is this node connected to
        for(let i = 0 ;i<list.length; i++ ) {
            const edge = list[i]
            if(walk(graph, edge.to, needle , seen, path)) {
                return true
            }
        }

        //post
        path.pop();

        return false

    }

export default function dfs(
    graph: WeightedAdjacencyList, 
    source: number, 
    needle: number): number[] | null {

        const seen = new Array(graph.length).fill(false)
        const path:number[] = []

        walk(graph, source, needle, seen, path)

        if(path.length === 0 ) {
            return null
        }
        return path

}