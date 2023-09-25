$(document).on('keypress',function(e){
    if(e.which == 13 && $("#prompt").val() !== ""){
        window.location = "#open-modal";
        request()
    }
})
function searchBTN(){
    if($("#prompt").val() == null){
        $("#button").prop('disabled', true)
        $("#button").css("cursor","not-allowed")
    }else{
        $("#button").prop('disabled', false)
        $("#button").css("cursor","pointer")
    }
}


function request() {
    $("#modal-content").text("Loading...")
    $.ajax({
        type: "POST",
        url: "https://api.dhyan99.is-a.dev/ai",
        data: { 
            "data":`${$("#prompt").val()}`
        },
        success: function(result) {
            $("#modal-content").text(result)
        },
        error: function(result) {
            alert(result);
        }
    });
};

