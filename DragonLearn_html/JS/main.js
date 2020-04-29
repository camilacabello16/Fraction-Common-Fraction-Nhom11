$(document).ready(function(){
    var right_answer_audio = new Audio('../sound/right_answer.mp3');
    var wrong_answer_audio = new Audio("../sound/wrong_answer.mp3");
    //lesson 1
    $('#wrong_answer_1').click(function(event){
        $('#wrong_answer_1').addClass('test');
        wrong_answer_audio.play();
        setTimeout(function(){$('#wrong_answer_1').removeClass('test');},1300);
    }),
    $('#wrong_answer_2').click(function(event){
        $('#wrong_answer_2').addClass('test');
        wrong_answer_audio.play();
        setTimeout(function(){$('#wrong_answer_2').removeClass('test');},1300);
    }),
    $('#right_answer_1').click(function(event){
        right_answer_audio.play();
    }),
    //lesson 2
    $('#wrong_answer_3').click(function(event){
        $('#wrong_answer_3').addClass('test');
        wrong_answer_audio.play();
        setTimeout(function(){$('#wrong_answer_3').removeClass('test');},1300);
    }),
    $('#wrong_answer_4').click(function(event){
        $('#wrong_answer_4').addClass('test');
        wrong_answer_audio.play();
        setTimeout(function(){$('#wrong_answer_4').removeClass('test');},1300);
    }),
    $('#right_answer_2').click(function(event){
        right_answer_audio.play();
    })
    //lesson 3

})
