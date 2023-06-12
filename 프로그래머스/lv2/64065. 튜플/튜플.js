function solution(s) {
    const tuples = s.replace('{{','').replace('}}','').split('},{').sort((a,b)=> a.length - b.length)
    const result = []
    
    tuples.forEach((tuple)=> {
        tuple = tuple.split(',')
        result.push(tuple.find((el)=>!result.includes(el)))
    })

    
    return result.map((el)=>parseInt(el))
}