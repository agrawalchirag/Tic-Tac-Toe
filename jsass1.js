// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
var big = -1000000000;
var secondLargest = -100000000;
for(var i=0;i<array.length;i++){
if(array[i]>big){
secondLargest = big;
big=array[i];
}else if(array[i]>secondLargest && array[i]!=big){

secondLargest =array[i]
}

}
console.log(secondLargest);
  return secondLargest;}

      
// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string){
      var ch = [], char, obj = {};
  var charfreq = [];
  for(var i =0; i<string.length; i++){
    char = string.charAt(i);
    if(char>='a' && char<='z'){
      if(ch.includes(char)){
        charfreq[ch.indexOf(char)]++;
      }
      else{
        ch.push(char);
        charfreq[ch.indexOf(char)] = 1;
      }
      
      }
    }
  for(var i=0;i<ch.length;i++){
        obj[ch[i]] = charfreq[i];
      }
  return obj;
  }
    
// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {

}
  
  
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {

}
