function solution(bridge_length, weight, truck_weights) {
    
    const bridge = new Array(bridge_length).fill(0)
    let time = 0
    let total_weight = 0
 
    while(bridge.length) {
            total_weight -= bridge.shift()  
            if(truck_weights.length) { 
                if(total_weight + truck_weights[0] <= weight) {
                    let cur_truck = truck_weights.shift()
                    bridge.push(cur_truck)
                    total_weight += cur_truck
                }  else {
                    bridge.push(0)
                }   
             }
       time++  
    }
    return time
}