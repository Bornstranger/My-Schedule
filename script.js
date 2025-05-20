 document.querySelectorAll("h3").forEach(h3 => {
    // Bright text color: high saturation, medium lightness
    const hueText = Math.floor(Math.random() * 360);
    const textColor = `hsl(${hueText}, 100%, 50%)`;

    // Soft background color: low saturation, high lightness
    const hueBg = Math.floor(Math.random() * 360);
    const bgColor = 'hsla(200, 100%, 50%, 0.1)';
    h3.style.color = textColor;
    h3.style.backgroundColor = bgColor;
    h3.style.padding = "10px";
    h3.style.margin = "5px 0";
  });


   const scrollMap = {
    daily: ".img1",
    exercise: ".img2",
    hygiene: ".img3"
  };

  // Loop through each h1 class in the map
  Object.keys(scrollMap).forEach(headerClass => {
    const heading = document.querySelector("." + headerClass);
    const targetSelector = scrollMap[headerClass];
    const target = document.querySelector(targetSelector);

    if (heading && target) {
      heading.style.cursor = "pointer"; // make it look clickable
      heading.addEventListener("click", () => {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1500; // duration in ms
        let start = null;

        function animation(currentTime) {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Easing function for smoothness
        function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
      });
    }
  });