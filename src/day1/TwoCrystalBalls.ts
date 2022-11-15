export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpAmount = Math.floor(Math.sqrt(breaks.length))
    let i =jumpAmount
    for(; i< breaks.length; i += jumpAmount) {
        if (breaks[i] === true) {
            break
        }
    }
    i = i -jumpAmount
    let stopCondition = i +jumpAmount
    for (; i<= stopCondition && i < breaks.length ; i++) {
        if (breaks[i] === true){
            return i
        }
    }
    return -1
}