const api='http://[::1]:3000'
$(function(){
    $('.form__button').click(function(evt){
        evt.preventDefault();
        var search=$('input[name="search"]').val();
        $(".section-result").empty();
        if(search.length>0){
            $.getJSON(api+'/?term='+search, function(data){
                for (users of data){
                    $(".section-result").append('<article class="section-result__article"><h3 class="article__h3" class="article__h2">'+users.name+'</h3><p class="article__p -tel -link">'+users.phone+'</p><p class="article__p -mail -link">'+users.email+'</p></article>')
                }
            }
        )}
        else{
            $.getJSON(api, function(data){
                    for (users of data){
                        $(".section-result").append('<article class="section-result__article"><h3 class="article__h3" class="article__h2">'+users.name+'</h3><p class="article__p -tel -link">'+users.phone+'</p><p class="article__p -mail -link">'+users.email+'</p></article>')
                    }
                }
            )
        }  
        $('input[name="search"]').val('');
    })
    
})