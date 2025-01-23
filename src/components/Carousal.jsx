import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Carousel = (images) => {
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const itemsRef = useRef([]);
  const radiusRef = useRef(0);
  const rotationRef = useRef(0);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  

  useEffect(() => {
    const container = containerRef.current;
    const carousel = carouselRef.current;
    const items = itemsRef.current;

    const itemCount = items.length;
    const rY = 360 / itemCount;
    const radius = Math.round(250 / Math.tan(Math.PI / itemCount));
    radiusRef.current = radius;

    // Set container 3D props
    gsap.set(container, { perspective: 600 });
    gsap.set(carousel, { z: -radius });

    // Position carousel items
    items.forEach((item, index) => {
      const rotationY = rY * index;
      gsap.set(item, {
        rotationY,
        z: radius,
        transformOrigin: `50% 50% ${-radius}px`,
        autoAlpha: 1,
      });
    });

    // Mouse event listener
    const handleMouseMove = (e) => {
      mouseXRef.current = -(-(window.innerWidth * 0.5) + e.pageX) * 0.0025;
      mouseYRef.current = -(-(window.innerHeight * 0.5) + e.pageY) * 0.01;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const loop = () => {
      rotationRef.current += mouseXRef.current;
      gsap.to(carousel, {
        rotationY: rotationRef.current,
        rotationX: mouseYRef.current,
        ease: 'power1.out',
      });
      requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className='flex justify-center items-center'>

    
    <div id="contentContainer" ref={containerRef} style={styles.container}>
      <section id="carouselContainer" ref={carouselRef} style={styles.carousel}>
        {[...Array(12)].map((_, index) => (
          <figure
            key={index}
            className="carouselItem"
            style={styles.item}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <img src={images[index]} alt="image" />
          </figure>
        ))}
      </section>
    </div>
    </section>
  );
};

const styles = {
  container: {
    position: 'absolute',
    width: '1000px',
    height: '1000px',
    left: '50%',
    top: '50%',
    marginLeft: '-500px',
    marginTop: '-500px',
    transformStyle: 'preserve-3d',
  },
  carousel: {
    position: 'absolute',
    width: '1000px',
    height: '1000px',
    left: '50%',
    top: '50%',
    marginLeft: '-500px',
    marginTop: '-500px',
    transformStyle: 'preserve-3d',
  },
  item: {
    width: '320px',
    height: '130px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: '-160px',
    marginTop: '-90px',
    transformStyle: 'preserve-3d',
  },
  itemInner: {
    width: '320px',
    height: '130px',
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    border: '10px solid rgba(255, 255, 255, 0.5)',
    color: 'aqua',
    fontSize: '72px',
    textAlign: 'center',
    lineHeight: '130px',
    left: '50%',
    top: '50%',
    marginLeft: '-160px',
    marginTop: '-90px',
  },
};

export default Carousel;
