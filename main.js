//function that does every single connection
    //we're doing the either the adjancecny matrix or adjency list
    //probably adjeancy list
let possible_moves = [[],[],[],[],[],[],[],[]]
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
            let list =[]
            arr[x][y] =list
            for(let pointer=0;pointer<addition.length;pointer++){
                //now we set up if condition
                let changed_x = addition[pointer][0] + x
                let changed_y =addition[pointer][1] + y
                if (changed_x >=0 && changed_x <= 7){
                    if(changed_y >=0 && changed_y <= 7){
                        let count =0
                        let valid =[changed_x,changed_y,count]
                        list.push(valid)//this should be pushed instead of changining to valid
                            //reason being because xand y is already a 2 dimension array
                    }
                }
            }
        }
    }

}
//should we create node function that indicates how much its been passed
function node(x,y){
    let count =0
    return (x,y,count)
}
add_edge(possible_moves)
console.log(possible_moves)