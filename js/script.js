$(function(){
    console.log(1)
    $('.form__button').click(function(evt){
        evt.preventDefault();
        var search=$('input[name="search"]').val();
        console.log(search)
        $.ajax({
            url: "http://127.0.0.1:3000",
            headers: {'term': search},
            data: {text: 'Текст'},
	        success: function(data){
		        console.log(data);
            }
        })
    })
})