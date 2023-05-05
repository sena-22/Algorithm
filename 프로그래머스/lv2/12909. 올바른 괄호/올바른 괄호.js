const solution = s => {

    let openBrakets = 0;
    let closeBrakets  = 0;
    
    if(s[0] !=='(' || s[s.length-1] !==')') return false;
   
    for (let i=0; i<s.length;i++){ 
      s[i] === '(' ?  openBrakets++ :  closeBrakets++;
       if(openBrakets < closeBrakets) return false;
    }
   
   if (openBrakets === closeBrakets) return true
    
   return false
    
}


