function validation(){
   var name=document.getElementById("name").value;
   var phone=document.getElementById("phone").value;
   var email=document.getElementById("email").value;
   var message=document.getElementById("message").value;
   var text;
    if(name.length <15){
        text="please the the correct name";
        return false;
    }

}
$(document).ready(function(){
    $(window).scroll(function(){
                if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    function validation(){
        alert("working");
    }
    var typed = new Typed(".typing", {
        strings: [ "Developer", "Designer", "Photographer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});