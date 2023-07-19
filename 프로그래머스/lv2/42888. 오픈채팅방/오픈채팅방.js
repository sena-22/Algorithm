function solution(record) {
    const result = [];
    
    const map = new Map();
    
    record.forEach((r)=>{
        const [command,id,nickname] = r.split(' '); 
        switch(command) {
            case 'Enter':
                map.set(id,nickname);
                break;
            case 'Change':
                map.set(id,nickname);
                break;
            default:
                break;
        }
    })
    
    record.forEach((r)=> {
        const [command,id,_] = r.split(' ');
        const nickname = map.get(id);
        
        switch(command) {
            case 'Enter':
                 result.push(`${nickname}님이 들어왔습니다.`);
                 break;
            case 'Leave':
                result.push(`${nickname}님이 나갔습니다.`);
                break;
            default:
                break;
        }
    })
    
    return result;
}