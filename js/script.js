const api='http://[::1]:3000'
$(function(){
    $('.form__button').click(function(evt){
        evt.preventDefault();
        var search=$('input[name="search"]').val();
        $(".section-result").empty();
        if(search.length>0){
            $.getJSON(api+'/?term='+search, function(data){
                for (users of data){
                    $(".section-result").append('<article class="section-result__article"><h3 class="article__h3" class="article__h2">'+users.name+'</h3><a class="article__a -tel -link" href="tel:'+users.phone+'">'+users.phone+'</a><a class="article__a -mail -link" href="mailto:'+users.email+'">'+users.email+'</a></article>')
                }
            }
        )}
        else{
            $.getJSON(api, function(data){
                    for (users of data){
                        $(".section-result").append('<article class="section-result__article"><h3 class="article__h3" class="article__h2">'+users.name+'</h3><a class="article__a -tel -link" href="tel:'+users.phone+'">'+users.phone+'</a><a class="article__a -mail -link" href="mailto:'+users.email+'">'+users.email+'</a></article>')
                    }
                }
            )
        }  
        $('input[name="search"]').val('');
    })
    
})