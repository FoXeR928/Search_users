const api='http://127.0.0.1:3000'

$(function(){
    $('.form__button').click(function(evt){
        evt.preventDefault();
        var search=$('input[name="search"]').val();
        if(search.length>0){
             $.ajax({
                url: api,
                type: 'GET',
                data: {term: search},
                headers: { "Accept": "application/json" },
                success: function(data){
                    console.log(data);
                }
            })
        }
        else{
            $.ajax({
                url: api,
                type: 'GET',
                headers: { "Accept": "application/json" },
                success: function(data){
                    console.log(data);
                }
            })
        }  
        $('input[name="search"]').val('');
    })
})