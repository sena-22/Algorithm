function solution(cacheSize, cities) {
    let answer = 0; 
    let cache = []
    
    // if(cacheSize === 0) return cities.length*5

    for(let i=0;i<cities.length;i++) {
        let city = cities[i].toLowerCase()
        let isCache = cache.find((cache_city)=> cache_city === city)
        
        if(isCache) { // cache hit
            cache = cache.filter((cache_city)=> cache_city !==  city) // 현재 도시 제거
            cache.push(city)  // 마지막에 추가
            answer += 1
        } else {
            cache.push(city)
            if(cache.length > cacheSize) {
                cache.shift() // 제일 앞의 도시 제거
            }
            answer += 5 // cache miss
        }
    }
    return answer;
}