function hasUnvisited(seen:boolean[] , dists:number[]) : boolean {
    return seen.some((s, i ) => !s && dists[i] < Infinity)

}

function getLowestUnvisted(seen:boolean[] , dists:number[]) : number {
    let idx = -1 //VAriable to track the index
    let lowestDistance = Infinity
    for(let i =0; i< seen.length; i++) {
        if(seen[i]) {continue}

        //walk through the distance array and check if any distance < Infinity
        if(lowestDistance > dists[i]) {
            //Update lowest idx
            lowestDistance = dists[i]
            idx = i
        }

    }

    return idx

}

export default function dijkstra_list (
    source:number,
    sink:number,
    arr: WeightedAdjacencyList): number[] {
        const seen:boolean[] = new Array(arr.length).fill(false)
        const prev:number[] = new Array(arr.length).fill(-1)
        const dists = new Array(arr.length).fill(Infinity)
    
        dists[source] = 0
    
        while( hasUnvisited(seen, dists)) {
            const curr = getLowestUnvisted(seen,dists)
            
            //Now you've offically seen it
            seen[curr] = true

            const adjs = arr[curr] //list of out edges
            for(let i =0; i< adjs.length ; i++) {
                const edge =adjs[i]
                if(seen[edge.to]) {
                    continue
                }
                const dist = dists[curr] + edge.weight
                if(dist < dists[edge.to]) { 
                    dists[edge.to] = dist
                    prev[edge.to] = curr
                }
            }
        }
    
        const out : number[] = []
        let curr = sink;
        while(prev[curr] !== -1) {
            out.push(curr)
            curr = prev[curr]
        }
    
        out.push(source)
        // console.log(dists)
        return out.reverse()
    }