//Question 2 solution :

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
  var res = JSON.parse(request.response);
 
for(var i=0;i<res.length;i++){
 console.log(res[i].flags);
  
}
}


// Question 3 solution

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
  var res = JSON.parse(request.response);
 
for(var i=0;i<res.length;i++){
 console.log(res[i].name);
 console.log(res[i].region);
 console.log(res[i].subregion);
 console.log(res[i].population);
  
}
}