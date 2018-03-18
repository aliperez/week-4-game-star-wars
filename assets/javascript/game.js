var obi = 120;
var luke = 100;
var darthS = 150;
var darthM = 180;

var init = function(){
    $("#hp1").text(obi);
    $("#hp2").text(luke);
    $("#hp3").text(darthS);
    $("#hp4").text(darthM);
};

init();

$("#click").on("click", function(){
    alert("I've been clicked!");
});

$("#images").on("click", ".box", function(){
    var buttonValue = $(this).val();
    $(this).attr("id", "new");
    console.log(buttonValue);

    if (buttonValue === "1"){
        $("#box2").attr("id", "newAgain");
        $("#box3").attr("id", "newAgain2");
        $("#box4").attr("id", "newAgain3");
    };

    if (buttonValue === "2"){
        $("#box1").attr("id", "newAgain");
        $("#box3").attr("id", "newAgain2");
        $("#box4").attr("id", "newAgain3");
    };

    if (buttonValue === "3"){
        $("#box1").attr("id", "newAgain");
        $("#box2").attr("id", "newAgain2");
        $("#box4").attr("id", "newAgain3");
    };

    if (buttonValue === "4"){
        $("#box1").attr("id", "newAgain");
        $("#box2").attr("id", "newAgain2");
        $("#box3").attr("id", "newAgain3");
    };

});



