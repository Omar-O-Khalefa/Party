let widthe = $(".slidnew").outerWidth()
console.log(widthe);
let lefto = $(".slidnew ").css("width")

$(".slidnew ").css({
    width: `-${ $(".slidnew").outerWidth()}px`
})

$("#cbtn").click( function () {
    console.log(widthe);

  $(".slidnew  ").animate({
        width: `0px`
    }, 500)



   $("#home-content").animate({
        marginLeft:  `0px`
    }, 500)
    console.log(widthe);

})

$(".openbtn").click(function () {

    $(".slidnew ").animate({
        width: `${widthe}px`
    }, 500)
    $("#home-content").animate({
        marginLeft: widthe + `px`
    }, 500)


})




// $(".openbtn").click(function(){
//     $(".slidnew").animate({ width:'250px'},50)
//    $("#home-content").animate({marginLeft :'250px'},50)
// })

// $("#cbtn").click(function(){
//     $(".slidnew").animate({ width:'0px'},50)
//    $("#home-content").animate({marginLeft :'0px'},50)
// })







// ++++++++++++++++++++

// if (lefto = "0px") {
//     $(".slidnew ").animate({
//         width: `${widthe}px`
//     }, 500)
// } else {
//     $(".slidnew ").animate({
//         width: `0px`
//     }, 500)
// }








$(".sup").slideUp(0)

$(".slidebt").click(function () {

    $(".textinner").not($(this).next()).slideUp(400);
    $(this).next().slideToggle(400);

});



var countDownDate = new Date("dec 5, 2025 15:37:25").getTime();
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("cont").innerHTML =

        `   <div class="col-md-3 ">
    <div class="tim">
        <span class=" days">${days + "d " }</span>
    </div>
</div>

<div class="col-md-3">
    <div class="tim">
        <span class=" hours">${ hours + "h "}</span>
    </div>
</div>

<div class="col-md-3">
    <div class="tim">
        <span class=" minutes">${minutes + "m "}</span>
        </div>
</div>

<div class="col-md-3">
    <div class="tim">
        <span class="seconds">${ seconds + "s "}</span>
        </div>
</div>`

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

$(".texxer").keyup(function () {
    let tel = $(".texxer").val().length
    let oflength = 100
    let athertext = oflength - tel
    if (athertext == 0) {
        $("#conttext").text("No availabe");
    } else {
        $("#conttext").text(athertext);
    }
})



$(".noo").click(function () {

    let hrefval = $(this).attr("href")
    let tall = $(hrefval).offset().top  

    $("html,body").animate({
        scrollTop: tall
    }, 2000)
})