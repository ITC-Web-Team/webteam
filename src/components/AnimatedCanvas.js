import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

const AnimatedCanvas = () => {
  const canvasRef = useRef(null);
  const [animations, setAnimations] = useState([]);
  const [bgColor, setBgColor] = useState('#6B8A7A');
  const colorPicker = useRef({
    colors: ["#6B8A7A", "#E7D37F", "#FD9B63", "#DAD3BE"],
    index: 0,
    next() {
      this.index = this.index++ < this.colors.length - 1 ? this.index : 0;
      return this.colors[this.index];
    },
    current() {
      return this.colors[this.index];
    }
  }).current;

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext('2d');
    let cW, cH;

    const resizeCanvas = () => {
      cW = window.innerWidth;
      cH = window.innerHeight;
      c.width = cW * window.devicePixelRatio;
      c.height = cH * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const calcPageFillRadius = (x, y) => {
      const l = Math.max(x - 0, cW - x);
      const h = Math.max(y - 0, cH - y);
      return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
    };

    const Circle = function(opts) {
      Object.assign(this, opts);
    };

    Circle.prototype.draw = function() {
      ctx.globalAlpha = this.opacity || 1;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
      if (this.stroke) {
        ctx.strokeStyle = this.stroke.color;
        ctx.lineWidth = this.stroke.width;
        ctx.stroke();
      }
      if (this.fill) {
        ctx.fillStyle = this.fill;
        ctx.fill();
      }
      ctx.closePath();
      ctx.globalAlpha = 1;
    };

    const handleEvent = (e) => {
      if (e.touches) {
        e.preventDefault();
        e = e.touches[0];
      }
      const currentColor = colorPicker.current();
      const nextColor = colorPicker.next();
      const targetR = calcPageFillRadius(e.pageX, e.pageY);
      const rippleSize = Math.min(200, (cW * 0.4));
      const minCoverDuration = 750;

      const pageFill = new Circle({
        x: e.pageX,
        y: e.pageY,
        r: 0,
        fill: nextColor
      });

      const fillAnimation = anime({
        targets: pageFill,
        r: targetR,
        duration: Math.max(targetR / 2, minCoverDuration),
        easing: 'easeOutQuart',
        complete: function() {
          setBgColor(pageFill.fill);
          setAnimations((prev) => prev.filter((a) => a !== fillAnimation));
        }
      });

      const ripple = new Circle({
        x: e.pageX,
        y: e.pageY,
        r: 0,
        fill: currentColor,
        stroke: {
          width: 3,
          color: currentColor
        },
        opacity: 1
      });

      const rippleAnimation = anime({
        targets: ripple,
        r: rippleSize,
        opacity: 0,
        easing: 'easeOutExpo',
        duration:10,
        complete: () => setAnimations((prev) => prev.filter((a) => a !== rippleAnimation))
      });

      const particles = [];
      for (let i = 0; i < 32; i++) {
        const particle = new Circle({
          x: e.pageX,
          y: e.pageY,
          fill: currentColor,
          r: anime.random(24, 48)
        });
        particles.push(particle);
      }

      const particlesAnimation = anime({
        targets: particles,
        x: (particle) => particle.x + anime.random(rippleSize, -rippleSize),
        y: (particle) => particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15),
        r: 0,
        easing: 'easeOutExpo',
        duration: anime.random(1000, 1300),
        complete: () => setAnimations((prev) => prev.filter((a) => a !== particlesAnimation))
      });

      setAnimations((prev) => [...prev, fillAnimation, rippleAnimation, particlesAnimation]);
    };

    const animate = anime({
      duration: Infinity,
      update: function() {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, cW, cH);
        animations.forEach(function(anim) {
          anim.animatables.forEach(function(animatable) {
            animatable.target.draw();
          });
        });
      }
    });

    const addClickListeners = () => {
      document.addEventListener('touchstart', handleEvent);
      document.addEventListener('mousedown', handleEvent);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    addClickListeners();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('touchstart', handleEvent);
      document.removeEventListener('mousedown', handleEvent);
    };
  }, [animations, bgColor, colorPicker]);

  return <canvas ref={canvasRef} style={{position:'fixed', display: 'block', width: '100vw', height: '100vh', zIndex:'10' }} />;
};

export default AnimatedCanvas;
