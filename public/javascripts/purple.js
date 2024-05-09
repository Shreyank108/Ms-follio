ScrollTrigger.matchMedia({
    "(max-width: 768px)": function() {
        gsap.to("#hii", { 
            delay: 2,
            rotate: "-90deg",
            scale: 2, 
        });
        gsap.to("#hii", { 
            delay: 3,
            x: "-160%"
        });
        gsap.to("#iam", { 
            display: "initial",
            delay: 4,
            y: "-40%",
        });
        gsap.to("#iam", { 
            delay: 4.3,
            y: "-20vh"
        });
        gsap.to("#iam", { 
            scale: 2,
            delay: 6,
            x: "-15vh",
            y: "0vh"
        });
        gsap.to("#hii", { 
            delay: 6.5,
            opacity: 0, 
            duration: 0.5
        });
        gsap.to("#iam", { 
            delay: 7,
            x: "-90vw",
            scale: 2,
        });
        gsap.to(".box", { 
            delay: 8,
            opacity: 1  
        });
        gsap.to(".cir", { 
            delay: 8.5,
            y: "-10vh"
        });
        gsap.to(".cir", { 
            delay: 9,
            y: "10vh"
        });
        gsap.to(".cir", { 
            delay: 9.5,
            y: "-10vh"
        });
        gsap.to(".cir", { 
            delay: 10,
            y: "10vh"
        });
        gsap.to(".cir", { 
            delay: 10.5,
            y: "-10vh"
        });
        gsap.to(".cir", { 
            delay: 11,
            y: "35vh"
        });
        gsap.to(".box", { 
            delay: 11.5,
            rotate: "-90deg",
        });
        gsap.to(".box", { 
            delay: 12,
            y: "16.4vh",
            x: "-30vw",
            width: "150px"
        });
        gsap.to("#iam", { 
            delay: 13,
            x: "-120vw",
        });
        gsap.to(".box", { 
            delay: 13,
            display: "none"
        });
        gsap.to("#name", { 
            delay: 13,
            y: "-10vh",
            opacity: 1,
            scale: 2
        });
        gsap.to("#name1", { 
            delay: 13,
            y: "0vh",
            opacity: 1,
            scale: 2
        });
        gsap.to("#name1", { 
            delay: 14,
            y: "0vh",
            opacity: 1,
            scale: 2
        });
    },
    "(min-width: 601px)": function() {
        $('#hii').textillate({ in: { effect: 'rollIn' } });
        gsap.to("#hii", { 
            delay: 2,
            rotate: "-90deg",
            scale: 2, 
        });
        gsap.to("#hii", { 
            delay: 3,
            x: "-190%"
        });
        gsap.to("#iam", { 
            display: "initial",
            delay: 4,
            y: "-80%"
        });
        gsap.to("#iam", { 
            delay: 4.3,
            y: "-25vh"
        });
        gsap.to("#iam", { 
            scale: 3,
            delay: 6,
            x: "15vh",
            y: "-11vh"
        });
        gsap.to("#hii", { 
            delay: 6.5,
            opacity: 0, 
            duration: 0.5
        });
        gsap.to("#iam", { 
            delay: 7,
            x: "-25vw",
            scale: 2,
        });
        gsap.to(".box", { 
            delay: 8,
            opacity: 1  
        });
        gsap.to(".cir", { 
            delay: 8.5,
            y: "-10vh"
        });
        gsap.to(".cir", { 
            delay: 9,
            y: "10vh"
        });
        gsap.to(".cir", { 
            delay: 9.5,
            y: "-10vh"
        });
        gsap.to(".cir", { 
            delay: 10,
            y: "10vh"
        });
        gsap.to(".cir", { 
            delay: 10.5,
            y: "-10vh"
        });
        gsap.to(".cir", { 
            delay: 11,
            y: "35vh"
        });
        gsap.to(".box", { 
            delay: 11.5,
            rotate: "-90deg",
        });
        gsap.to(".box", { 
            delay: 12,
            y: "16.4vh" ,
            x: "-30vw",
            width: "150px"
        });
        gsap.to("#iam", { 
            delay: 13,
            x: "-80vw",
        });
        gsap.to(".box", { 
            delay: 13,
            display: "none"
        });
        gsap.to("#name", { 
            delay: 13,
            y: "-30vh",
            opacity: 1,
            scale: 1.5
        });
        gsap.to("#name1", { 
            delay: 13,
            y: "-20vh",
            opacity: 1,
            scale: 1.5
        });
        gsap.to("#name1", { 
            delay: 14,
            y: "-10vh",
            opacity: 1,
            scale: 1.5
        });
    }
});
