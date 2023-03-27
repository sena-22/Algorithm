function solution(a, b) {
  let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  let month = 1
    let day = 0
  while (month<a){
    
      switch (month) {
        case 2:
          day += 29
          break;

        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
           day += 31
           break;

        default:
          day+=30
          break;
      } 
   month++   
  }
    day += b
   return week[parseInt(day+4)%7]

}
