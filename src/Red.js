import React, { useRef, useEffect } from "react";
import "./Red.css";
import redqueenimage from "./images/redqueen.png";
import floor from "./images/bg_earth.jpg";
import palm from "./images/palm3.png";
import pawn from "./images/pawn.png";
import pawn2 from "./images/pawn2.png";
import smallpalm from "./images/palmsmall.png";
import pawn_down from "./images/pawn_down.png";
import bush from "./images/bush.png";
import birdimg from "./images/bird.gif";



import useWebApnimation from "@wellyshen/use-web-animations";

function Red() {
  const redQueen = useRef(null);
  const foreground = useRef(null);
    const background = useRef(null);
    const ref = useRef(null);
    console.log(ref);

  useEffect(() => {
    const spriteFrames = [
      { transform: "translateY(0)" },
      { transform: "translateY(-100%)" },
    ];

    const alice = redQueen.current.animate(spriteFrames, {
      easing: "steps(7, end)",
      direction: "reverse",
      duration: 500,
      playbackRate: 1,
      iterations: Infinity,
    });

    setInterval(function () {
      if (alice.playbackRate > 0.4) {
        alice.playbackRate -= 0.1;
        adjustSceneryPlayback();
      }
    }, 3000);

    var sceneryFrames = [
      { transform: "translateX(100%)" },
      { transform: "translateX(-100%)" },
    ];

    var sceneryTimingBackground = {
      duration: 36000,
      iterations: Infinity,
    };

    var sceneryTimingForeground = {
      duration: 12000,
      iterations: Infinity,
    };

    var foregroundMovement = foreground.current.animate(
      sceneryFrames,
      sceneryTimingForeground
    );
    var backgroundMovement = background.current.animate(
      sceneryFrames,
      sceneryTimingBackground
    );

    var sceneries = [foregroundMovement, backgroundMovement];

    var adjustSceneryPlayback = function () {
      console.log(alice.playbackRate);
      if (alice.playbackRate < 0.8) {
        sceneries.forEach(function (anim) {
          anim.playbackRate = (alice.playbackRate / 2) * -1;
        });
      } else if (alice.playbackRate > 1.2) {
        sceneries.forEach(function (anim) {
          anim.playbackRate = alice.playbackRate / 2;
        });
      } else {
        sceneries.forEach(function (anim) {
          anim.playbackRate = 0;
        });
      }
    };
    adjustSceneryPlayback();

    const goFaster = () => {
      alice.playbackRate += 0.1;
      adjustSceneryPlayback();
    };

    window.addEventListener("click", goFaster);
  });




    const { ref : bird } = useWebApnimation({
        keyframes: [
            { transform: "translateX(-100vh)" },
            { transform: "translateX(180vh)" },
        ],
        timing: {
            duration: 8000,
            iterations: Infinity,
        },
    });


  return (
    <div className="container">
      <div>
        <img className="floor" src={floor} alt="floor" />
      </div>

      <div className="alice">
        <img
          className="alicesprite"
          ref={redQueen}
          src={redqueenimage}
          alt="redqueenimage"
        />
      </div>

      <div className="scenery" id="foreground" ref={foreground}>
        <img className="palm" src={palm} alt="palm" />
      </div>

      <div className="scenery background1" ref={background}>
        <img className="pawn" src={pawn} alt="pawn" />
        <img className="pawn2" src={pawn2} alt="pawn2" />
        <img className="pawn_down" src={pawn_down} alt="pawn_down" />

              <img className="smallpalm" src={smallpalm} alt="smallpalm" />
              <img className="bush" src={bush} alt="bush" />
              <img className="bird" src={birdimg} alt="bird" ref={bird} />
        
      </div>
    </div>
  );
}

export default Red;
