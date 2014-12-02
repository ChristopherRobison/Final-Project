$(document).ready(function() {

  var i
  var numbers = [25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500];
  var divs = ['#one', '#two', '#three', '#four', '#five', '#six', '#seven', '#eight', '#nine', '#ten', '#eleven', '#twelve', '#thirteen', '#fourteen', '#fifteen', '#sixteen', '#seventeen', '#eighteen', '#nineteen', '#twenty']

  console.log(numbers);

  var display = function(){
    for(var i=0; i<divs.length+1; i++){
      $(divs[i]).height(numbers[i] + 'px')
    }
  }

  var highlight = function(){
    $(divs[i]).css("background-color", "#add8e6");

  }

  var highlightTwo = function(){
    $(divs[j]).css("background-color", "#add8e6");
  }

  var sort = function(){
    var j = i+1;
    console.log("Switching column number " + i + " with number " + j + ".");
    highlight();
    if(numbers[j]<numbers[i]){
      var a = numbers[j];
      numbers[j] = numbers[i];
      numbers[i] = a;
      display();
    }
  }

  $("#stepByStepSort").click(function(){
    sort();
    i++;
    if(i==numbers.length-1){
      $('div').css("background-color", "#A020F0");
      i=0;
      sort();
      i++
    }
    console.log(numbers)
  })

    $("#quickSort").click(function(){
      for(i=0; i<numbers.length; i++){
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
    $('div').css("background-color", "#A020F0");
    display();
    console.log(numbers)
  })

  var shuffle = function(){
    for(i=numbers.length; i>0; i--){
      $('div').css("background-color", "#A020F0");
        var k = Math.floor(Math.random()*i);
        j = numbers[--i];
        numbers[i] = numbers[k];
        numbers[k] = j;
      }
    display();
  }

  $("#shuffle").click(function(){
    shuffle();
    console.log(numbers)
  })

  shuffle();
})
