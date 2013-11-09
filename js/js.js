$(document).ready(function(){
    $('.more').live('click',function(){
        var href = $(this).attr('href');
        if ($('#ajax').is(':visible')) {
            $('#ajax').css('display','block').animate({height:'1px'}).empty();
        }
        $('#ajax').css('display','block').animate({height:'380px'},function(){
            $('#ajax').html('<img class="loader" src="images/loader.gif" alt="">');
            $('#ajax').load('content.php #'+href, function(){
                $('#ajax').hide().fadeIn().highlightFade({color:'#717171'});
            });
        });
        return true;
    });
});
