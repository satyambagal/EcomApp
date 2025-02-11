// active nabar
let nav=document.querySelector(".navigation-wrap");
window.onscroll=function()
{
    if(document.documentElement.scrollTop>20)
    {
        nav.classList.add("scroll-on");
    }
    else
    {
        nav.classList.remove("scroll-on");  
    }
}
// nav hide
let navbar=document.querySelectorAll('.nav-link')
let navCollapse=document.querySelector('.navbar-collapse');
navbar.forEach(function(a){
    a.addEventListener("click",function()
{
    navCollapse.classList.remove("show");
})
});

// counter design
document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration)
    {
        let object=document.getElementById(id),
        current=start,
        range=end -start,
        increment= end>start ? 1:-1,
        step=Math.abs(Math.floor(duration/range)),
        timer=setInterval(()=>{
            current +=increment;
            object.textContent=current;
            if(current==end)
            {
                clearInterval(timer);
            }
        },step);
    }
counter("count1",0,1233,1200);
counter("count2",0,1200,2000);
counter("count3",0,4000,5400);
counter("count4",0,200,65);

});