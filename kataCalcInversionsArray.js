// Calculate the number of inversions in array
function countInversions( array ){
   
    let newArray = array.slice();   // Copying the original array => will be sorted
    let count = {value: 0}          // Counter of sorting when invoking sortManual()
    newArray.sort((a,b)=> a-b);
      
    if((JSON.stringify(newArray) === JSON.stringify(array)) || (array.length === 0)){return 0} // Checks if the given array is already sorted
  
        
    function sortManual(x){    
      let output = [];
      for(let i = 0; i < x.length; i+=2){    
        if(x[i] > x[i+1]){
          output.push(x[i+1], x[i]);
          ++count.value;
        } else if(x[i+1] === undefined){
          output.push(x[i])
        }
    }
      console.log(output)
      console.log(newArray)
      return output
      }
    
    sortManual(array)
    
    
    if( JSON.stringify(output) !== JSON.stringify(newArray)){ 
      return sortManual(output)
     } else {
    return count.value
  }
    }