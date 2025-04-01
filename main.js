
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

    let addition = [[-2,-1],[-1,-2],[-2,1],[-1,2],[2,-1],[1,-2],[2,1],[1,2],]

    for(let x=0;x<arr.length;x++)
    {
        for(let y=0;y<arr.length;y++)
        {//these two loops gets all of our nodes


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
    // console.log('end is')
    // console.log(end)
    //array of count
//base case
let x_current = current[0]
let y_current =current[1]
let x_end = end[0]
let y_end =end[1]
let queue = [[x_current,y_current]]
let result = []
function data_cleaning(arr) {
    //shifts twice
    arr.push(arr.shift())
    arr.push(arr.shift())
    //removes start_history
    arr.shift()
    let result =[]
    for (let i=0; i<arr.length; i+= 2){
        result.push(arr.slice(i,i+2))
    }
    return result
    //now maps two things together

}
while (queue.length != 0)
{
    let node = queue.shift()

    if (node[0] === end[0] && node[1]===end[1]) {
        // console.log('found it!')
        // console.log("node is")
        // console.log(node)

        return data_cleaning(node.flat(Infinity))
    }
    if (hasVisited(node.slice(0,2),visited)=== false) {

        visited.add(node.slice(0,2))

        result.push(node.slice(0,2))
        x_current=node[0]
        y_current=node[1]
    
    for(let i=0; i<possible_moves[x_current][y_current].length;i++){

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
        // console.log("what's the current: "+node)//current is constant is that cuasing an issue?
        // console.log("what's node 2")//node 2 is history
        // console.log(node[2])
        // console.log("current history")
        // console.log(queue_node[2])

        // queue_node[2] = node[2]
        // console.log("queue_node is currently")
        // console.log(queue_node)

        
        queue_node[2].push([x_current,y_current])//adds current thing to history
        // console.log("queue_node is on ln 129")
        // console.log(queue_node)
        // console.log("in case you can't see it it's")
        // console.log(queue_node[2])

        queue.push(queue_node)
        }//it might be this code that needs to have neighbors being pushed in
        //i.e. get the nieghbors from possible moves
        //what are we returning
    }
}
return result //this return doesn't actually do anything. cuz i got shitty code
}
function final_formatting(arr){

    console.log("You made it in "+arr.length+" moves! Here's your path: ")
    arr.forEach((element) => {
        console.log(element)
    });
}
let possible_moves = [[],[],[],[],[],[],[],[]]

add_edge(possible_moves)
// let result =bfs([0,0],[0,2])
// let result =bfs([0,0],[4,0])
// let result =bfs([0,0],[6,1])
let result =bfs([0,0],[7,7])

final_formatting(result)
console.log('finished program')