function solution(genres, plays) {
    const best_album = []
    let genres_map = new Map()
                            
    for(let i=0;i<genres.length;i++) {
        if(!genres_map.has(genres[i])) {
           genres_map.set(genres[i],{size:plays[i],songs:[[i,plays[i]]]})
        } else {
            let cur_genres = genres_map.get(genres[i]);
            genres_map.set(genres[i],{size:cur_genres.size+plays[i],songs:[...cur_genres.songs,[i,plays[i]]]});                
        }
    }
    

    
    // 장르별 정렬 
    const sorted_map = new Map([... genres_map].sort((a,b)=>b[1].size - a[1].size))
    
    // console.log(sorted_map)
    
    for(let value of sorted_map.values()) {
        if(value.songs.length < 2) { // 곡이 1개인 경우
            
            best_album.push(value.songs[0][0])
        } else {
           value.songs.sort((a,b) => b[1]-a[1]); // 재생횟수로 정렬
           best_album.push(value.songs[0][0],value.songs[1][0])
        }
    }
    return best_album
}