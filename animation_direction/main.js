

    $('#normal').click(function() {
        
        $('.box').removeClass('reverse'); 
        $('.box').removeClass('alternate');

        setTimeout(function() {  $('.box').addClass('normal') }, 1);
    });
    $('#reverse').click(function() {
        $('.box').removeClass('normal'); 
        $('.box').removeClass('alternate');      
          setTimeout(function() {  $('.box').addClass('reverse') }, 1);   

    });
    $('#alternate').click(function() {
        $('.box').removeClass('reverse'); 
        $('.box').removeClass('normal'); 
         setTimeout(function() {  $('.box').addClass('alternate') }, 1);
    });




