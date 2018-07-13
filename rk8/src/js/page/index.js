$(function() {
    $.ajax({
        url: '/api/list',
        success: function(data) {
            console.log(data)
        }
    })
})