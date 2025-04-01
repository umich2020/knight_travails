//function that does every single connection
    //we're doing the either the adjancecny matrix or adjency list
    //probably adjeancy list
    let visited = new Set()
    function hasVisited(targetArray,set) {
        for (const arr of set) {
          if (Array.isArray(arr) && arr.length === targetArray.length && arr.every((value, index) => value === targetArray[index])) {
            return true;
          }
        }
        return false;
      }
      

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
let result = []

while (queue.length != 0)
{
    let node = queue.shift()
    console.log('node is before editing')
    console.log(node)
    // console.log(node[2])
    // console.log('end is')
    // console.log(end)
    // console.log('queue is')
    // console.log(queue)

    if (node[0] === end[0] && node[1]===end[1]) {
        console.log('found it!')
        console.log("node is")
        console.log(node)
        // console.log(node[2])

        result.push(node)
        break 
    }
    if (hasVisited(node.slice(0,2),visited)=== false) {
        console.log("has this been visited?: "+node.slice(0,2))
        console.log(visited.has(node.slice(0,2)))
        visited.add(node.slice(0,2))
        // console.log('the list of visited is ')
        // console.log(visited)
        result.push(node.slice(0,2))//might need to change result
        x_current=node[0]
        y_current=node[1]
    
    for(let i=0; i<possible_moves[x_current][y_current].length;i++){
        // console.log("what is possible moves currently")
        // console.log(possible_moves[x_current][y_current][i])
        // console.log("is the validation true or false")
        // console.log(hasVisited(possible_moves[x_current][y_current][i],visited))
        if(hasVisited(possible_moves[x_current][y_current][i],visited)===true){
            // console.log(possible_moves[x_current][y_current][i]+" has been skipped because it's been visited")
            continue
        }
        let queue_node = possible_moves[x_current][y_current][i]
        // console.log('queue node is on ln 107')
        // console.log(queue_node)
        //make sure queue node is fine
        if(node[2] === undefined){
            queue_node[2]=["start_history"]
            // node[2]=current
        } else {
            if(queue_node[2]===undefined){
                queue_node[2] =[]
            }
            queue_node[2].push(node[2]) 

        }
        console.log("what's the current: "+node)//current is constant is that cuasing an issue?
        console.log("what's node 2")//node 2 is history
        console.log(node[2])
        console.log("current history")
        console.log(queue_node[2])

        // queue_node[2] = node[2]
        // console.log("queue_node is currently")
        // console.log(queue_node)

        
        queue_node[2].push([x_current,y_current])//adds current thing to history
        console.log("queue_node is on ln 129")
        console.log(queue_node)
        console.log("in case you can't see it it's")
        console.log(queue_node[2])

        queue.push(queue_node)
        }//it might be this code that needs to have neighbors being pushed in
        //i.e. get the nieghbors from possible moves
        //what are we returning
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
// let result =bfs([0,0],[0,2])
// let result =bfs([0,0],[4,0])
let result =bfs([0,0],[6,1])

console.log(result[-1])
console.log('finished program')