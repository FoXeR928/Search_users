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
    $('.section-result__article').click(function(){
        user=$(this).childre('h3').text()
        if(search.length>0){
            $.getJSON(api+'/?term='+user, function(data){
                for (users of data){
                    $("body").append('<div class="info-container"><section class="section -back"><h2 class="section__h2">'+users.name+'</h2><article class="section__article-about -info"><h4 class="article-about__h4">Телефон</h4><a class="article-about__a -link" href="tel:'+users.phone+'">'+users.phone+'</a></article><article class="section__article-about -info"><h4 class="article-about__h4">Почта</h4><a class="article-about__a -link" href="mailto:'+users.email+'">'+users.email+'</a></article><article class="section__article-about -info"><h4 class="article-about__h4">Дата приёма</h4><p class="article-about__p -link">'+users.hire_date+'</p></article><article class="section__article-about -info"><h4 class="article-about__h4">Должность</h4><p class="article-about__p -link">'+users.department+'</p></article><article class="section__article-about -info"><h4 class="article-about__h4">Подраздиление</h4><p class="article-about__p -link">'+users.address+'</p></article><article class="section__article-about -about"><h4 class="article-about__h4">Дополнительная информация</h4><p class="article-about__p -link">'+users.position_name+'</p></article></section></div>')
                }
            }
        )}
    })
})