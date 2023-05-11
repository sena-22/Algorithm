function solution(n) {
    let result = n
    
    const binaryOneLength = (number) =>  {
        return String(number.toString(2)).split('').filter((el)=>el ==='1').length
    }
    
   let binaryN = binaryOneLength(n)

   const getNextBigNumber = (m)=> {
        let binaryM = binaryOneLength(m)

        if(binaryN===binaryM) {
            return result = m
        }
   }
   
   for (let i=n;i<1000000;i++) {
     if (result !== n) return result
     getNextBigNumber(i)
   }
    return result
}