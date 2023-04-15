/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(function(index){
    if(index.profession=="developer")
       console.log(index);
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(index){
    if(index.profession=="developer")
       console.log(index);
  })
}

function addData() {
  //Write your code here, just console.log
  let obj = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(obj);
  console.log(arr[arr.length-1]);
}

function removeAdmin() {
  //Write your code here, just console.log
  let index=new Array();
  for(let i=0;i<arr.length;i++){
      if(arr[i].profession=='admin')
        index.push(arr[i]);
  }
 
  for(let i=0;i<index.length;i++){
      
      let j = arr.indexOf(index[i]);
      arr.splice(j,1);
  }

  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let item = [
  { id: 5, name: "dhoni", age: "41", profession: "admin" },
  { id: 6, name: "virat", age: "34", profession: "developer" },
  { id: 7, name: "rohit", age: "35", profession: "admin" },
];
let array=arr.concat(item);
console.log(array);
}
