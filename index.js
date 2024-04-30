gsap.from("#box1 #box",{
    delay:.3,
    duration:2,
    opacity:0,
    rotate:750,
    scale:0,
}
)

gsap.from("#box2 #box",{
    delay:.3,
    duration:2,
    opacity:0,
    rotate:750,
    scale:0,
    scrollTrigger:{
        trigger:"#box2 #box",
        scroller:"body",
        markers:true,
        start:'top 60%',
        end:"top 40%",
        scrub:4
     }
}
)

gsap.from("#box3 #h1",{
    delay:.3,
    x:40,
    duration:2,
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:"#box3 #h1",
        scroller:"body",
        markers:true,
        start:'top 80%',
        end:"top 80%",
        scrub:4
     }
}
)

gsap.from("#box3 #h2",{
    delay:.3,
    x:40,
    duration:2,
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:"#box3 #h2",
        scroller:"body",
        markers:true,
        start:'top 80%',
        end:"top 80%",
        scrub:4
     }
}
)

var tl = gsap.timeline()

tl.from("#nav #p",{
    delay:.3,
    y:-30,
    duration:1,
    opacity:0
})

tl.from("#nav li",{
    y:-30,
    duration:1,
    opacity:0,
    stagger:.3
})

