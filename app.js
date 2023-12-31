function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
init();





let tl = gsap.timeline();
// navbar Animation
tl.from('#nav', {
    opacity:0,
    delay: 0.6,
    duration: 1
});

tl.from('#nav ul li', {
    opacity: 0,
    delay: 0.5,
    duration: 1,
    stagger: 0.6
});
// hero Page Animation
tl.from('#img-sec', {
    opacity: 0,
    // delay: 0.,
    duration: 1
});
tl.from('#hero-img p', {
    opacity: 0,
    y: 50,
    delay: 0.2,
    duration: 1,
});

tl.from('#hero-intro h3', {
    // scale:2,
    opacity: 0,
    // delay: 0.2,
    duration: 1
});


tl.from('#hero-intro h1 span, h1', {
    // scale:2,
    opacity: 0,
    // delay: 0.1,
    duration: 3,
    // repeat:-1,
    stagger:0.3
});

gsap.from('#page2 #skill-cont #skill-head h1', {
    opacity:0,
    duration: 1,
   
    scrollTrigger:{
        trigger:'#hero-intro h1',
        scroller:'#main',
        // markers:true,
        scrub:true,
        start:'top 30%',
        end:'bottom -50%'
    }

});

gsap.from('#page2 #skill-cont #skill-sec .skill-icons ', {
    x:-5000,
    duration: 2,
    opacity:0,
    // ease: "power2.out",
    scrollTrigger:{
        trigger:'#page1',
        scroller:'#main',
        // markers:true,
        scrub:true,
        start:'top 50%',
        end:'bottom -10%'
    }

});
gsap.from('#page3',{
    backgroundColor:'#fff',
    duration:1,
    // delay:0.2,
    repeat:-1,
    yoyo:true
    
})
gsap.from('#page3 h3',{
    backgroundColor:'#fff',
    color:'#000',
    duration:1,
    // delay:0.2,
    repeat:-1,
    yoyo:true
    
})
gsap.from('#about #about-me h3, #about #who-am-I h3, #about #apart h3, #apart ul li, #whyCode h3,#about-me p, #about #who-am-I p, #about #apart p, #whyCode p ',{
    y:13,
    duration: 3,
    opacity:0,
    stagger:1,
    // ease: "power2.out",
    scrollTrigger:{
        trigger:'#about',
        scroller:'#main',
        // markers:true,
        scrub:true,
        start:'top 70%',
        end:'bottom 100%'
    }
});