function solution(book_time) {

    const rooms = new Map()
    book_time.sort()

    const getCleaningTime = (time) => {
        let [hour, minute]  = time.split(':').map(Number)
        minute += 10
        if(minute >= 60) {
            hour += 1
            minute -= 60
        }

        let formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        return formattedTime

    }
    
    for(let i=0;i<book_time.length;i++) {
        let[start,end] = book_time[i]
        
        if(rooms.size === 0) {
          rooms.set(0,[start,end])
        } else {
            let reserved = false
             for(let [key,value] of rooms.entries()) {
                if(getCleaningTime(value[1]) <= start ) { 
                    rooms.set(key,[start,end]) // 그 방에 입실
                    reserved = true
                    break
                } 
             }
          !reserved && rooms.set(rooms.size+1,[start,end]) // 새로운 방에 입실
        }
    }
    return rooms.size
}