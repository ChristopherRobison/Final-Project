$(document).ready(function() {

  var numbers = [4,2,5,1,0,3];
  console.log(numbers);

  $("#sort").click(function(){
      for(var i=0; i<numbers.length; i++){
      var j=i+1;
      if(numbers[j]<numbers[i]){
          var a = numbers[j];
          numbers[j] = numbers[i];
          numbers[i] = a;
        for(i; i>=0; i--){
          while(numbers[j]<numbers[i]){
            var a = numbers[j];
            numbers[j] = numbers[i];
            numbers[i] = a;
          }
        }
      }
    }
    console.log(numbers)
  })

  $("#shuffle").click(function(){
    for(var i=numbers.length; i>0; i--){
      var k = Math.floor(Math.random()*i);
      j = numbers[--i];
      numbers[i] = numbers[k];
      numbers[k] = j;
    }
    console.log(numbers)
  })

})