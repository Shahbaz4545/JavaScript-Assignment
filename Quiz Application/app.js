function check(){
    var score = 0;
    var rightAns1 = document.getElementById('q1-op3');
    var q1_Ans_2 = document.getElementById('q1-op2');
    var q1_Ans_3 = document.getElementById('q1-op1');
    var q1_Ans_4 = document.getElementById('q1-op4');

    if(rightAns1.checked === true){
        score++
        window.alert("Answer No. 01 is Corret!")
    }
    else{
        window.alert("Answer No. 01 is Wrong!")
    }


    var rightAns2 = document.getElementById('q2-op1');
    var q2_Ans_2 = document.getElementById('q2-op2');
    var q2_Ans_3 = document.getElementById('q2-op3');
    var q2_Ans_4 = document.getElementById('q2-op4');

    if(rightAns2.checked === true){
        score++
        window.alert("Answer No. 02 is Corret!")
    }
    else{
        window.alert("Answer No. 02 is Wrong!")
    }

    var rightAns3 = document.getElementById('q3-op3');
    var q3_Ans_2 = document.getElementById('q3-op1');
    var q3_Ans_3 = document.getElementById('q3-op2');
    var q3_Ans_4 = document.getElementById('q3 -op4');

    if(rightAns3.checked === true){
        score++
        window.alert("Answer No. 03 is Corret!")
    }
    else{
        window.alert("Answer No. 03 is Wrong!")
    }

    var rightAns4 = document.getElementById('q4-op1');
    var q4_Ans_2 = document.getElementById('q2-op2');
    var q4_Ans_3 = document.getElementById('q3-op3');
    var q4_Ans_4 = document.getElementById('q4-op4');

    if(rightAns2.checked === true){
        score++
        window.alert("Answer No. 04 is Corret!")
    }
    else{
        window.alert("Answer No. 04 is Wrong!")
    }
    alert("Your Score is: "+score + '/4 Execellent')

}
