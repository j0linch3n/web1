console.log('dark mode');

$(document).ready(function(){  
    $('#showhide').click(function(){
        $('button').toggleClass('active');
        $('.assignments').toggleClass('active');
    });   
    $('#darkmode').click(function(){
       $('body').toggleClass('darkmode');
    });       
});