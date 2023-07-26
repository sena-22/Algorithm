function solution(m, musicinfos) {
    
    const getMelody = (m) => {
        return m.replace(/([A-Z])#/g, (_,i)=>i.toLowerCase())
    }
    
    const getMinute = (time) => {
        const [hour, min] = time.split(':').map(Number)
        return hour * 60 + min
    }
    
    const getPlayTime = (start,end) => {
        return getMinute(end) - getMinute(start)
    }
    
    const music = musicinfos.map((m)=> {
        let [start,end,title,sheet] = m.split(',')
        
        return {
            time : getPlayTime(start,end), // 재생시간(분)
            title,
            melody : getMelody(sheet) // #가 붙은 멜로디를 소문자로 치환
        }
    })
    
    const target = getMelody(m) //ABC
    let answer = { title: '(None)' };
    
    music.forEach((m)=> {
        const {time,title, melody} = m
        let doubleMelody = melody
        // .repeat(1) // 	cDEFGABcDEFGAB
        console.log(doubleMelody)
        while(target.length + melody.length  > doubleMelody.length) { // 3 + 7  > 14 // ABC|ABC|ABC|A  > cDEFGABcDEFGAB ,ABCDEFABCDEF
            doubleMelody += melody
        }
        
        const idx = doubleMelody.indexOf(target)
        
        if(idx >= 0 && idx + target.length <= time) {
            if(answer.title === '(None)' || answer.time < time) {
                answer = m
            }
        }

    })
    
    
    return answer.title 
}