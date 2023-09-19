var rect = document.querySelector("#box") ;
var panel = document.querySelector("#panel");






rect.addEventListener("mousemove", function(details){
    // console.log("Kaam kar rha hai") ; 
    var rectLoacation  = rect.getBoundingClientRect() ;
    //  console.log(rectLoacation) ;
    var insideRectVal = details.clientX - rectLoacation.left ;

    // console.log(insideRectVal) ;
    if( insideRectVal < rectLoacation.width/2){
        // console.log("left");
        var redColor = gsap.utils.mapRange(0,rectLoacation.width/2,255,0,insideRectVal);
        
        gsap.to(rect,{
            backgroundColor : `rgb(${redColor},0,0)`,
            ease : Power4,
        });
        gsap.to(panel ,{
            backgroundColor : `rgb(0,0,${blueColor})`,
            ease : Power4 ,
        });

    }else{
        // console.log("right") ;
        var blueColor = gsap.utils.mapRange(rectLoacation.width/2 , rectLoacation.width ,0,255,insideRectVal);
        
        gsap.to(rect,{
            backgroundColor : `rgb(0,0,${blueColor})`,
            ease :Power4,
        });
        gsap.to(panel ,{
            backgroundColor : `rgb(${redColor},0,0)`,
            ease : Power4 ,
        });
       
    }
})
rect.addEventListener("mouseleave",function() {
    gsap.to(rect , {
        backgroundColor : "white" ,
    });

})
var flag = 0 ;
rect.addEventListener("click", function(){
    if (flag == 0){
        gsap.to(rect ,{
            backgroundColor : "aqua",
        });
        gsap.to(panel ,{
            backgroundColor : "white" ,
        });
        flag++;
    }else{
        gsap.to(panel ,{
            backgroundColor : "aqua",
        });
        gsap.to(rect ,{
            backgroundColor : "white" ,
        });
        flag = 0;
    }
    
})
// panel.addEventListener("click" , function(){
//     gsap.to(rect ,{
//         backgroundColor : "white",
//     });
//     gsap.to(panel,{
//         backgroundColor : "aqua",
//     });
// })