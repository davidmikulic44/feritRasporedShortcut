$(function(){

    chrome.storage.sync.get('code', function(result){
        $('#code').val(result.code);
    })

    $('#saveCode').click(function(){
        var code = $('#code').val();
        if(code){
            chrome.storage.sync.set({'code':code}, function(){
                console.log(code);
            })
            
        } 
    });
    
})