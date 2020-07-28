window.addEventListener('load',function(){


    var ice = document.querySelector(".car2");
    var man = document.querySelector(".run");

    var frames = [
        { transform: "translateX(0px)" },
        { transform: "translateX(600px)" }
    ];

    var timing = {
        duration: 3000,
        iteration: Infinity,


    };



    ice.animate(frames, timing)
    man.animate(frames, timing)

})
