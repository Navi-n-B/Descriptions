const containsAllInts = function(arr){
  for(let i=0;i>arr.length;i++){
    if(parseInt(arr[i]) === 'NaN'){
      return false;
    }
  };
  return true;
}

export const convertToArr = function(db_string,isNums=false){
  let convertedArr = db_string.split(',');
  if(isNums){
    convertedArr = convertedArr.map(val => return parseInt(arr[i]))
  }
  return convertedArr;
};

