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
        
     

     $("#submitform").submit((e)=>{
         if(tex1&& mai1&& ph1){
             
         
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbwV3fbB9HW-eOfrVjEx1_QLU4TVyJycJ1KV0Zjg528ibhl5E0EldkG4T-gm3AxunLuw/exec",
                data:$("#submitform").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        }else{
            alert("Fill up Correctly")
        }
        })
    
    });
    var tex1
    function name1(){
        var username = document.getElementById('user').value
        var check
        var pattern=/^[a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/
        if(username==""){
           check="Enter the Name";
            tex1=false
        }else if(username.match(pattern)){
            check=""
           tex1=true
        }else{
            check="Please use Alphabets "
          tex1=false
        }

        document.getElementById('userr').innerHTML=check
      }
      var mai1
      function email1(){
        var email = document.getElementById('mail').value
        var check
        var pattern=/^[^]+@[^]+\.[a-z]{2,3}$/
        if(email==""){
           check="Enter the E-mail";
           mai1=false
        }else if(email.match(pattern)){
            check=""
            mai1=true
        }else{
            check="Enter correct Email"
            mai1=false
        }

        document.getElementById('emaill').innerHTML=check
      }
      var ph1
      function phone1(){
        var phone = document.getElementById('phone').value
        var check
        var pattern=/^\d{10}$/
        if(phone==""){
           check="Enter valid number";
           ph1=false
        }else if(phone.match(pattern)){
            check=""
            ph1=true
        }else{
            check="Enter correct Number"
            ph1=false
        }

        document.getElementById('phonee').innerHTML=check
      }
      