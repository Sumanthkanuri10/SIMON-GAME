var colors=["red", "blue", "green", "yellow"];
var gamepattern=[];
var userpattern=[];
started=false;
var level=0;
$(document).keypress(function(){
if (!started){
    $("#level-title").text("level"+ level);
    sequence();
    started=True;
}

});
$(".btn").click(function(){
    var usercolor=$(this).attr("id");
    userpattern.push(usercolor);
    playsound(usercolor);
    animatePress(usercolor);
    checkanswer(userpattern.length-1);
});

function checkanswer(clevel){
    if (gamepattern[clevel]===userpattern[clevel]){
        console.log("success");
        if (userpattern.length===gamepattern.length){
            setTimeout(function(){
                sequence();
            },1000);
        }
    }else {

        
        playsound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Touch me to Restart");
            setTimeout(function(){
                $("body").removeClass("game-over");
            },200)
           
            start();
    }
}

function sequence(){
    userpattern=[];
    level++;
    $("#level-title").text("Level " + level);
    var randomnum=Math.floor(Math.random()*4);
    var buttoncolor=colors[randomnum];
    gamepattern.push(buttoncolor);
    
    $("#"+ buttoncolor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(buttoncolor);
    
}
function playsound(name){
    var audio=new Audio(name+".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
function start(){
    level=0;
    gamepattern=[];
    started=false;
}