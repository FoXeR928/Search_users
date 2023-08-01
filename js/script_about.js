$(document).ready(function(){
    $('.section-result__article').on('click', function(){
        user=$(this).children('h3').text()
        $.getJSON(api+'/?term='+user, function(data){
            for (users of data){
                $("body").prepend('<div class="info-container"><section class="section -back"><article class="section__article-about -info"><h2 class="article-about__h2">'+users.name+'</h2><img class="article-about__img" src="img/close.png" alt=""></article><article class="section__article-about -info"><h4 class="article-about__h4">Телефон</h4><a class="article-about__a -link" href="tel:'+users.phone+'">'+users.phone+'</a></article><article class="section__article-about -info"><h4 class="article-about__h4">Почта</h4><a class="article-about__a -link" href="mailto:'+users.email+'">'+users.email+'</a></article><article class="section__article-about -info"><h4 class="article-about__h4">Дата приёма</h4><p class="article-about__p -link">'+users.hire_date+'</p></article><article class="section__article-about -info"><h4 class="article-about__h4">Должность</h4><p class="article-about__p -link">'+users.department+'</p></article><article class="section__article-about -info"><h4 class="article-about__h4">Подраздиление</h4><p class="article-about__p -link">'+users.address+'</p></article><article class="section__article-about -about"><h4 class="article-about__h4">Дополнительная информация</h4><p class="article-about__p -link">'+users.position_name+'</p></article></section></div>')
            }
        })
    })
})