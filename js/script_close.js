$(document).ready(function(){
    $('body').on('click', '.article-about__img',function(){
        console.log(1)
        $('.info-container').remove()
    })
})