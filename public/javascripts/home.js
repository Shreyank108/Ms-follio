var main = document.querySelector("#main");
var cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function(e) {
    gsap.to(cursor, {duration: 0.1, left: e.pageX, top: e.pageY});
});

// // $('#text p').textillate({ in: { effect: 'rollIn' } });
//  window.addEventListener('resize', function (){ 
//  'use strict';
//  window.location.reload(); 
// })
// function init() {
//     gsap.registerPlugin(ScrollTrigger);
//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector('#main'),
//         smooth: true
//     });
//     locoScroll.on('scroll', ScrollTrigger.update);
//     ScrollTrigger.scrollerProxy('#main', {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return {
//                 top: 0,
//                 left: 0,
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             };
//         },
//         pinType: document.querySelector('#main').style.transform ? 'transform' : 'fixed'
//     });
//     ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
//     ScrollTrigger.refresh();
// }
// init()


var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      start: "top top",
      end: window.innerHeight * 3,
      scrub: true,
      pin: true,
      markers: true,
    },
  });

  tl.to("#page2",{ 
    right:"0%"
  })
  tl.to("#page3",{ 
    right:"0%"
  })
  tl.to("#page4",{ 
    right:"0%"
  })
  tl.to("#page5",{ 
    right:"0%"
  })
  tl.to("#page6",{ 
    right:"0%"
  })
  tl.to("#page7",{ 
    bottom:"0%"
  })


  const text = document.querySelector("#text p") 
text.innerHTML=text.innerText.split("").map(
    (char,i) => 
    `
      <span style ="transform:rotate(${i*6.2}deg)">${char}</span>
    `
).join("")

$('#o2 p').textillate({ in: { effect: 'rollIn' } });

var box3List = document.querySelectorAll(".box3");
box3List.forEach(function(box3) {
    var img = box3.querySelector(".img-co");
    box3.addEventListener("mousemove", function(e) {
        gsap.to(img, { duration: 1, left: e.pageX });
    });
});