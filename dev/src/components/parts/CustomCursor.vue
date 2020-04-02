<template>
  <div class="cursor">
    <div class="cursor__circle cursor__circle--big" ref="bigCircle">
      <svg height="60" width="60">
        <circle id="bigCircle" cx="30" cy="30" r="18" stroke-width="0.8" />
      </svg>
    </div>

    <div class="cursor_circle cursor__circle--small" ref="smallCircle">
      <svg height="10" width="10">
        <circle cx="4" cy="4" r="3" stroke-width="0" />
      </svg>
    </div>

    <div class="cursor__plus" ref="smallPlus">
      <svg
        class="cursor__plus--area"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ref="area"
      >
        <g stroke-width="1">
          <path
            d="M12.5,1.87037037 L12.5,11.4993704 L22.5,11.5 L22.5,12.5 L12.5,12.4993704 L12.5,22.1296296 L11.5,22.1296296 L11.5,12.4993704 L1.5,12.5 L1.5,11.5 L11.5,11.4993704 L11.5,1.87037037 L12.5,1.87037037 Z"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
// This will be the same size as all previous versions of gsap
import gsap from "gsap";
import { TweenMax } from "gsap";

export default {
  name: "CustomCursor",
  mounted() {
    const bigCircle = this.$refs.bigCircle;
    const smallCircle = this.$refs.smallCircle;
    const smallPlus = this.$refs.smallPlus;
    const smallPlusArea = this.$refs.area;

    // const hoverables = document.querySelectorAll(".hoverable");
    // const hoverablesArea = document.querySelectorAll(".hoverableArea");

    // // Listeners
    document.body.addEventListener("mousemove", onMouseMove);

    // for (let i = 0; i < hoverables.length; i++) {
    //   hoverables[i].addEventListener("mouseenter", onMouseHover);
    //   hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
    // }

    // for (let i = 0; i < hoverablesArea.length; i++) {
    //   hoverablesArea[i].addEventListener("mouseenter", onMouseHoverArea);
    //   hoverablesArea[i].addEventListener("mouseleave", onMouseHoverAreaOut);
    // }

    // Move the cursor
    function onMouseMove(e) {
      TweenMax.to(bigCircle, 0.4, {
        x: e.clientX,
        y: e.clientY
      });
      TweenMax.to(smallCircle, 0.1, {
        x: e.clientX,
        y: e.clientY
      });
      TweenMax.to(smallPlus, 0.1, {
        x: e.clientX,
        y: e.clientY
      });
    }

    // Hover an element
    function onMouseHover() {
      TweenMax.to("#bigCircle", {
        attr: {
          r: 25
        }
      });
    }
    function onMouseHoverOut() {
      TweenMax.to("#bigCircle", {
        attr: {
          r: 18
        }
      });
    }

    // Hover img an element
    function onMouseHoverArea() {
      TweenMax.to(bigCircle, 0.3, {
        fill: "#212121",
        mixBlendMode: "normal"
      });
      TweenMax.to(smallCircle, 0.3, {
        fill: "transparent"
      });
      TweenMax.to(smallPlusArea, 0.3, {
        stroke: "#DEDEDE"
      });
    }
    function onMouseHoverAreaOut() {
      TweenMax.to(bigCircle, 0.3, {
        fill: "transparent",
        mixBlendMode: "difference"
      });
      TweenMax.to(smallCircle, 0.3, {
        fill: "#DEDEDE"
      });
      TweenMax.to(smallPlusArea, 0.3, {
        stroke: "transparent"
      });
    }
  }
};
</script>