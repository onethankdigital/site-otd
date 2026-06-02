import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Ignora completamente o cursor customizado em dispositivos mobile/touch
    const isMobile = window.matchMedia("(pointer: coarse)").matches || 
                     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      cursor.style.display = 'none';
      return;
    }
    
    // Set initial position out of view
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.15; // Lower is more laggy/fluid

    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    gsap.ticker.add(() => {
      // Interpolate for fluid follow effect
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    // Hover effect logic
    const handleMouseOver = (e) => {
      // Find closest interactive element
      const interactive = e.target.closest('a, button, [role="button"], input, .magnetic-btn');
      if (interactive) {
        cursor.classList.add('hovering');
      } else {
        cursor.classList.remove('hovering');
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      gsap.ticker.remove();
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor">
      <span className="cursor-text">VIEW</span>
    </div>
  );
};

export default CustomCursor;
