process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]); //a : 행 길이, b : 열 길이
    
    const star = '*'
    let answer=''
    for(let i=0;i<b;i++) {
          let line=''
        for(let i=0;i<a;i++) { 
                              
            (i=== (a-1)) ? line += star + '\n' : line += star
        }
        answer += line
    }
            console.log(answer)
});