//function that does every single connection
    //we're doing the either the adjancecny matrix or adjency list
    //probably adjeancy list
function add_edge (arr) {
    //set the rules
    //move either 2 y axis 1 x axis
    //or move 2 x axis or 1 y axis
        //either apply a list of different x and y axis mutliplcation
        //or do it ourselves
        //let's do the list
    //values cannot be greater than 7 or less than 0
    //if satifies then add to arr
    let addition = [[-2,-1],[-1,-2],[-2,1],[-1,2],[2,-1],[1,-2],[2,1],[1,2],]

    for(let x=0;x<arr.length;x++)
    {
        for(let y=0;y<arr.length;y++)
        {//these two loops gets all of our nodes

            // let test_node = node(x,y) => add later to master array

            //now we have to go through the addition array
            // let list =[[x,y]]
            let list =[]
            arr[x][y] =list
            for(let pointer=0;pointer<addition.length;pointer++){
                //now we set up if condition
                let changed_x = addition[pointer][0] + x
                let changed_y =addition[pointer][1] + y
                if (changed_x >=0 && changed_x <= 7){
                    if(changed_y >=0 && changed_y <= 7){
                        // let count =0
                        let valid =[changed_x,changed_y]
                        list.push(valid)//this should be pushed instead of changining to valid
                            //reason being because xand y is already a 2 dimension array
                    }
                }
            }
        }
    }

}
let path =[]
function bfs(current,end){
    console.log('end is')
    console.log(end)
    //array of count
//base case
let x_current = current[0]
let y_current =current[1]
let x_end = end[0]
let y_end =end[1]
let queue = [[x_current,y_current]]
let visited = new Set()
let result = []
while (queue.length != 0)
{
    let node = queue.shift()
    console.log('node is')
    console.log(node)
    // console.log('end is')
    // console.log(end)
    console.log('queue is')
    console.log(queue)

    if (node[0] === end[0] && node[1]===end[1]) {
        console.log('found it!')
        console.log("node is")
        console.log(node)
        result.push(node)
        break 
    }
    if (!visited.has(node)) {
        visited.add(node)
        result.push(node)
        x_current=node[0]
        y_current=node[1]
    
    for(let i=0; i<possible_moves[x_current][y_current].length;i++){
        let queue_node = possible_moves[x_current][y_current][i]
        queue_node.push(node)
        queue.push(queue_node)
        }//it might be this code that needs to have neighbors being pushed in
        //i.e. get the nieghbors from possible moves
    }
}
return result //this prints what was visited(all)
// possible_moves[x_current][y_current].forEach(node => {
//     //i can't do for each because that's an infinite loop
// });
//we don't use recursion we use a queue and a while loop


}
//should we create node function that indicates how much its been passed
function node(x,y){
    let count =0
    return (x,y,count)
}
let possible_moves = [[],[],[],[],[],[],[],[]]

add_edge(possible_moves)
console.log(bfs([0,0],[0,2]))
console.log('finished program')