const dir= [[1,0], [-1,0] , [0,1] , [0,-1]]
function walk(maze: string[], wall:string,current: Point, end: Point, seen: boolean[][] , path: Point[]) {
    // Base Cases
    // 1.End of maze
    if(current.x < 0 && current.x > maze[0].length || current.y<0 && current.y>maze.length) {
        return false
    }
    // 2.Hit a wall 
    if(maze[current.y][current.x] === wall) {
        return false
    }
    // 3.seen a exit 
    if(current.x === end.x && current.y === end.y) {
        path.push({x: current.x, y: current.y})
        return true
    }
    // 4.already seen 
    if (seen[current.y][current.x]) {
        return false
    }
    // Recursion
    // pre 
    seen[current.y][current.x] = true
    path.push(current)

    // recursive 
    for (let i =0 ; i< dir.length; i++) {
        const next = {x: current.x + dir[i][0], y: current.y + dir[i][1]}
        if(walk(maze , wall ,next, end, seen , path)){
            return true
        }
    }
    // post 
    path.pop()
    return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen : boolean[][] = []
    const path: Point[] = []

    for(let i = 0 ; i< maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false))
    }
    walk(maze,wall, start,end,seen,path)
    return path

}