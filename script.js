const quizData = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"],
      correctAnswer: 0
    },
    {
      question: "Which property is used to change the background color in CSS?",
      options: ["color", "background-color", "bgcolor", "background"],
      correctAnswer: 1
    },
    {
      question: "What is the correct way to declare a variable in JavaScript?",
      options: ["variable x;", "var x;", "v x;", "int x;"],
      correctAnswer: 1
    },
    {
      question: "How do you create a function in JavaScript?",
      options: ["function: myFunction()", "function myFunction()", "create function myFunction()", "function = myFunction()"],
      correctAnswer: 1
    },
    {
      question: "Which of the following is not a JavaScript framework?",
      options: ["Angular", "React", "Vue", "JavaFX"],
      correctAnswer: 3
    }
  ];
var currenque=1;
function start() {
  currenque =1;
  document.getElementById("quiz").style.display="block";
  document.getElementById("buttons").style.display="flex";
  document.getElementById("start").style.display="none";
  document.getElementById("q1").style.display="block";
}
var flag=0;
function next(){
  if(flag==1)
  {
    calculate();

  } 
  if(currenque<5)
  {
    document.getElementById("q"+currenque).style.display="none";
    document.getElementById("q"+(currenque+1)).style.display="block";
    currenque+=1;
  }
  if(currenque==5)
  {
    document.getElementById("nxt").innerHTML="Submit the response ";
    flag=1;
  } 

}
function pre(){
 
  if (currenque>1)
  {
    document.getElementById("q"+currenque).style.display="none";
    document.getElementById("q"+(currenque-1)).style.display="block";
    currenque-=1;
    document.getElementById("nxt").innerHTML="Next";
    flag=0;
  }

}

var score=0;
function calculate(){
  if(document.getElementById("op11").checked)
  {
    score+=1;
  }
  if(document.getElementById("op22").checked)
  {
    score+=1;
  }
  if(document.getElementById("op32").checked)
  {
    score+=1;
  }
  if(document.getElementById("op42").checked)
  {
    score+=1;
  }
  if(document.getElementById("op54").checked)
  {
    score+=1;
  }
  document.getElementById("container").style.display="none";
  document.getElementById("result").style.display="block";
  document.getElementById("message").innerHTML="Your score is : "+score+"/5";
}
function restart()
{
  document.location.reload();
}
