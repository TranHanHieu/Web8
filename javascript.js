// function aRose(){
//   console.log("Sweet!");
// }
//
// var anotherName = aRose;
//
// typeof(anotherName); // “function”
// anotherName(); // “Sweet!”
//
// function multiplyBy3(num){
//   return num*3;
// }
//
// function multiplyBy6(num){
//   return num*6;
// }
//
// function transformNumberWith(num, transformer){
//   console.log(transformer(num));
// }
//
// transformNumberWith(3, multiplyBy3); //3*3 = 9
// transformNumberWith(3, multiplyBy6); //3*6 = 18

function countDown(time){
  for(var i = time; i>=0; i--){
    setTimeout(function(){
      console.log(i);
    }, (time-i)*1000);
  }
}

countDown(5);

function countDown2(time){
  setTimeout(function(){
    console.log(time);
    if(time > 0) countDown2(time-1);
  }, 1000);
}

countDown2(5);

function countDown3(time){
  for(var i=0; i <= time; i++){
    countDown3B(i, time-i);
  }
}

function countDown3B(time, num){
  setTimeout(function(){
    console.log(num);
  }, time*1000);
}

countDown3(5);


// public class MyClass{
//   private int numberOfVisitor;
//
//   public MyClass(){
//     this.numberOfVisitor = 0;
//   }
//
//   public int getNumberOfVisitor(){
//     return numberOfVisitor;
//   }
// }
//
// MyClass myWebsite = new MyClass();
// myWebsite.numberOfVisitor // unknown


function createWebsiteCounter(){
  var numberOfVisitor = 0;

  function getNumberOfVisitor(){
    return numberOfVisitor;
  }

  function setNumberOfVisitor(num){
    if(num > 0) numberOfVisitor = num;
  }

  return {
    getNumberOfVisitor : getNumberOfVisitor,
    setNumberOfVisitor : setNumberOfVisitor
  }
}

var myWebsite = createWebsiteCounter();
