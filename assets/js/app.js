// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
// import "phoenix_html"

window.onload = (p) => {
    const space = document.getElementById(`space`),
    spaceWidth = space.scrollWidth,
    spaceHeight = space.scrollHeight,
    perspective = 100

    space.style.setProperty(`--perspective`, `${perspective}px`)

    function makeStar() {
    const star = document.createElement(`time`),
        starWidth = gsap.utils.random(1, 2, 1),
        starHeight = starWidth * gsap.utils.random(20, 40, 1),
        randomRotation = Math.random() * 360,
        scaleModifier = Math.random()

    const visibleRangeMaximum = (spaceWidth - spaceHeight > 0 ? spaceWidth : spaceHeight) / 2

    gsap.set(star, {
    width: `${starWidth}px`,
    height: `${starHeight}px`,
    transform: `
        translateY(${starHeight / 2}px)
        rotate(${randomRotation}deg)
        rotateX(90deg)
        translateZ(0px)
        scaleX(${scaleModifier})
    `,
    });

    gsap.to(star, {
    duration: "random(5, 20)",
    transform: `
        translateY(${starHeight / 2}px)
        rotate(${randomRotation}deg)
        rotateX(90deg)
        translateZ(${perspective + visibleRangeMaximum}px)
        scaleX(${scaleModifier})
    `,
    repeat: -1,
    ease: `none`,
    }).progress( Math.random() );

    space.appendChild(star)
    }

    for (let i = 0; i < 200; i++) {
    makeStar();
    }
};
  