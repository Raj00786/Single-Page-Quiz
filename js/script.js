function submitAnswers(){
    var total=5;
    var score= 0;
    
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    
    //Validation in more lines code
/** if(q1==null||q1==''){
        alert("you missed question 1");
        return false;
    }
    if(q1==null||q1==''){
        alert("you missed question 1");
        return false;
    }
    if(q1==null||q1==''){
        alert("you missed question 1");
        return false;
    }
    if(q1==null||q1==''){
        alert("you missed question 1");
        return false;
    }
    if(q1==null||q1==''){
        alert("you missed question 1");
        return false;
    }
 **/
 
    //for loop validation
    for(var i=1  ;i<=total;i++){
       if(eval('q'+i) ==null||eval('q'+i)==''){
          alert("you missed question q"+i);
           return false;   
       }
    }
    //answers
    var answers=["b","a","c","d","b"];
    
    //check answers
    for(i=1;i<=total;i++){
        if(eval('q'+i)==answers[i-1]){
            score++;
        }
    }    
    //display result
    var results=document.getElementById("results");
    results.innerHTML = "<h3>Your score is <span>"+score+"</span> Out of </span>"+total+"</span></h3>";
    alert(score);
    
    return false;
}