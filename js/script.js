$(window).on('load', function() {
    
    //Popper
    // var instaref = $('#instalink');
    // var instapopup = $('#instapopper');
    // instapopup.hide();
    $('#instalink').tooltip();
    $('#linkedinlink').tooltip();
    $('#codeplink').tooltip();
    
    //slider script
    //counter
    // let slidenum = 0;
    // $('.slider .slide div').each(function(){
    //     slidenum += 1;
    // });
    
    // $('.slider .arrow').click(function(){
    //     let n = activeImg();

    //     $('.slider').removeClass('right left');

    //     if($(this).hasClass('left')){
    //         n -= 1;
    //         $('.slider').addClass('left');
    //         setTimeout(function(){
    //             $('.slider .slide div.active').addClass('to_left');
    //         }, 50)
    //     }
    //     else if($(this).hasClass('right')){
    //         n +=1;
    //         setTimeout(function(){
    //             $('.slider .slide div.active').addClass('to_left');
    //         }, 50)
    //     }

    //     if(n > slidenum) n = 1;
    //     if(n < 1) n = slidenum;

    //     setTimeout(function(){
    //         $('.slider .slide div').removeClass('active');
    //         $('.slider .slide div:nth-child('+n+')').addClass('active');

    //         setTimeout(function(){
    //             $('.slider .slide div').removeClass('to_left');
    //             $('.slider .slide div').removeClass('to_right');
    //         }, 500)
    //     }, 50)
    // });

    // function activeImg(){
    //     let n = 1;
    //     $('.slider .slide div').each(function(index){
    //         if($(this).hasClass('active')){
    //             n += index;
    //         }
    //     });
    //     return n;
    // }
}

)