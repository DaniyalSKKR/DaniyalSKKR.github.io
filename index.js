function showeducation(){
    $("#edu_container").css("display","inherit");
    $("#edu_container").addClass("animated slideInRight");
    $(".background-image").css("filter", "blur(5px)");
    setTimeout(function(){
        $("#edu_container").removeClass("animated slideInRight");
    },900);
}
function closeeducation(){
    $("#edu_container").addClass("animated slideOutRight");
    $(".background-image").css("filter", "None");
    $(".background-image").css("filter", "None");
    setTimeout(function(){
        $("#edu_container").removeClass("animated slideOutRight");
        $("#edu_container").css("display","none");
    },900);
}
function showabout(){
    $("#about_container").css("display","inherit");
    // $("#about_container").addClass("animated slideInLeft");
    // setTimeout(function(){
    //     $("#about_container").removeClass("animated slideInLeft");
    // },900);
    $("#about_container").addClass("animated slideInRight");
    $(".background-image").css("filter", "blur(5px)");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInRight");
    },900);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutRight");
    $(".background-image").css("filter", "None");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutRight");
        $("#about_container").css("display","none");
    },900);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    $(".background-image").css("filter", "blur(5px)");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },900);
}
function closework(){
    $("#work_container").addClass("animated slideOutRight");
    $(".background-image").css("filter", "None");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },900);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInRight");
    $(".background-image").css("filter", "blur(5px)");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInRight");
    },900);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutRight");
    $(".background-image").css("filter", "None");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutRight");
        $("#contact_container").css("display","none");
            },900);
}
function showresume(){
    $("#resume_container").css("display","inherit");
    $("#resume_container").addClass("animated slideInRight");
    $(".background-image").css("filter", "blur(5px)");
    setTimeout(function(){
        $("#resume_container").removeClass("animated slideInRight");
    },900);
}
function closeresume(){
    $("#resume_container").addClass("animated slideOutRight");
    $(".background-image").css("filter", "None");
    setTimeout(function(){
        $("#resume_container").removeClass("animated slideOutRight");
        $("#resume_container").css("display","none");
            },900);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#menu").removeClass("animated fadeIn"); //added
    //   $("#about").removeClass("animated fadeIn");
    //   $("#contact").removeClass("animated fadeIn");
    //   $("#work").removeClass("animated fadeIn");
    },1000);
},1500);
