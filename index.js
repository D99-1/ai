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
        url: "https://d99api.vercel.app/ai",
        data: { 
            "data":`${$("#prompt").val()}`
        },
        success: function(result) {
            $("#modal-content").text(result.text)
        },
        error: function(result) {
            alert(result);
        }
    });
};

