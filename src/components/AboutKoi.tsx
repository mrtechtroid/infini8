import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedElement } from "@/components/AnimatedElement";
gsap.registerPlugin(ScrollTrigger);

export default function AboutKoi() {
  const sectionRef = useRef<HTMLElement>(null);
  const koiRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        koiRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "center center",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "center center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
    ref={sectionRef}
    id = "aboutkoi"
    className="relative min-h-screen w-full bg-cover bg-center overflow-hidden"
    style={{
      // backgroundImage: "url('/koibg.png')",
    }}
    >
    <div className="container relative h-full">
      <div className="relative flex flex-col lg:flex-row items-center justify-center h-full min-h-screen">
          {/* Absolute positioned SVG container that covers the entire section */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <svg ref={koiRef} viewBox="0 0 540 540" className="w-full h-full">
              <defs>
                <linearGradient
                  x1="100%"
                  y1="100%"
                  x2="0%"
                  y2="0%"
                  id="water-color"
                >
                  <stop stopColor="#3D41DA" offset="0%"></stop>
                  <stop stopColor="#1E1F44" offset="100%"></stop>
                </linearGradient>

                <radialGradient id="inset-shadow" cx="50%" cy="55%">
                  <stop offset="75%" stopColor="#1E1F4400" />
                  <stop offset="100%" stopColor="#1E1F4455" />
                </radialGradient>

                <circle id="pond-boundary" cx="270" cy="270" r="1000"></circle>

                <path
                  id="koi-body-path"
                  d="M91,113 C94,105 68,119 68,34 C68,13 61,0 49,0 C37,2.78257871e-15 30,13 30,34 C30,103 88,121 91,113 Z"
                >
                  <animate
                    attributeType="XML"
                    attributeName="d"
                    values="M91,113 C94,105 68,119 68,34 C68,13 61,0 49,0 C37,2 30,13 30,34 C30,103 88,121 91,113 Z; M7,113 C10,121 68,103 68,34 C68,13 61,0 49,0 C37,2 30,13 30,34 C30,119 4,105 7,113 Z; M91,113 C94,105 68,119 68,34 C68,13 61,0 49,0 C37,2 30,13 30,34 C30,103 88,121 91,113 Z"
                    begin="0"
                    dur="3s"
                    keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                    calcMode="spline"
                    repeatCount="indefinite"
                  />
                </path>
              </defs>

              <g id="pond" fill="none" fillRule="evenodd">
                <g id="pond-contents">
                  <mask id="pond-mask" fill="white">
                    <use href="#pond-boundary"></use>
                  </mask>

                  <use id="pond" href="#pond-boundary"></use>

                  <g mask="url(#pond-mask)">
                    <g
                      id="koi"
                      fill="none"
                      transform="translate(-50 -90) rotate(90 60 70)"
                    >
                      <g id="fins" fill="#FFFFFF" style={{ opacity: 0.7 }}>
                        <path
                          id="right-fin"
                          d="M80,42 C73,42 64,36 64,29 C64,26 64,24 66,24 C78,24 96,30 98,35 C97,39 88,42 80,42 Z"
                        >
                          <animateTransform
                            attributeType="XML"
                            attributeName="transform"
                            type="rotate"
                            values="0 68 30; 15 68 30; 0 68 30"
                            begin="0"
                            dur="1s"
                            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                            calcMode="spline"
                            repeatCount="indefinite"
                          />
                          <animateTransform
                            attributeType="XML"
                            attributeName="transform"
                            type="rotate"
                            values="0 68 30; 40 68 30; 0 68 30"
                            begin="koi.mouseenter"
                            restart="whenNotActive"
                            dur="1s"
                            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                            calcMode="spline"
                            repeatCount="1"
                          />
                        </path>
                        <path
                          id="left-fin"
                          d="M16,42 C24,42 33,36 33,29 C33,26 33,24 31,24 C19,24 0,30 0,35 C0,39 9,42 16,42 Z"
                        >
                          <animateTransform
                            attributeType="XML"
                            attributeName="transform"
                            type="rotate"
                            values="0 32 30; -15 32 30; 0 32 30"
                            begin="0"
                            dur="1s"
                            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                            calcMode="spline"
                            repeatCount="indefinite"
                          />
                          <animateTransform
                            attributeType="XML"
                            attributeName="transform"
                            type="rotate"
                            values="0 32 30; -40 32 30; 0 32 30"
                            begin="koi.mouseenter"
                            restart="whenNotActive"
                            dur="1s"
                            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                            calcMode="spline"
                            repeatCount="1"
                          />
                        </path>
                        <g>
                          <path
                            id="back-fin"
                            d="M113,104 C118,106 106,111 103,118 C101,126 106,137 102,135 C93,132 82,120 85,112 C88,103 105,101 113,104 Z"
                          >
                            <animateTransform
                              attributeType="XML"
                              attributeName="transform"
                              type="rotate"
                              values="0 96 117; 140 96 117; 0 96 117"
                              begin="0"
                              dur="3s"
                              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                              calcMode="spline"
                              repeatCount="indefinite"
                            />
                          </path>
                          <animateTransform
                            attributeType="XML"
                            attributeName="transform"
                            type="translate"
                            values="2 0; -96 0; 2 0"
                            begin="0"
                            dur="3s"
                            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                            calcMode="spline"
                            repeatCount="indefinite"
                          />
                        </g>
                      </g>

                      <g id="body">
                        <mask id="mask-koi-body" fill="white">
                          <use href="#koi-body-path"></use>
                        </mask>
                        <use fill="#FFFFFF" href="#koi-body-path"></use>
                        <g>
                          <circle
                            id="bottom-red"
                            fill="#FF5050"
                            mask="url(#mask-koi-body)"
                            cx="40"
                            cy="75"
                            r="17.5"
                          ></circle>
                          <circle
                            id="middle-red"
                            fill="#FF5050"
                            mask="url(#mask-koi-body)"
                            cx="60"
                            cy="50"
                            r="12.5"
                          ></circle>
                          <circle
                            id="top-red"
                            fill="#FF5050"
                            mask="url(#mask-koi-body)"
                            cx="30"
                            cy="20"
                            r="12.5"
                          ></circle>
                        </g>
                        <use href="#koi-body-path"></use>
                      </g>

                      <g id="eyes" transform="translate(38, 17)" fill="#1E1F44">
                        <g>
                          <circle id="left-eye" cx="2" cy="2" r="2"></circle>
                          <circle id="right-eye" cx="22" cy="2" r="2"></circle>
                          <animateTransform
                            attributeType="XML"
                            attributeName="transform"
                            type="scale"
                            values="1 1; 0.9 0.4; 1 1"
                            begin="koi.mouseenter"
                            restart="whenNotActive"
                            dur="1s"
                            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                            calcMode="spline"
                            repeatCount="1"
                          />
                        </g>
                      </g>

                      <animateMotion
                        dur="25s"
                        repeatCount="indefinite"
                        fill="freeze"
                        rotate="auto"
                      >
                        <mpath href="#swim" />
                      </animateMotion>
                    </g>

                    <g id="stuff-in-pond" transform="translate(-40, -19)">
                      <path
                        id="swim"
                        d="M132.072164,421.924184 C209.85391,344.142439 264.104973,376.992683 341.886719,299.210938 C419.668465,221.429192 388.37841,125.15284 466.160156,47.3710938 C543.941902,-30.4106522 570.271044,9.80192058 600.902344,21.3476563 C631.533643,32.8933919 663.77784,86.8393478 585.996094,164.621094 C508.214348,242.40284 365.417402,188.578947 287.635656,266.360693 C209.85391,344.142439 295.108744,485.397273 217.326998,563.179018 C139.545252,640.960764 68.8334105,621.24292 48.3710938,587.339844 C27.908777,553.436767 54.2904182,499.70593 132.072164,421.924184 Z"
                      ></path>
                    </g>
                  </g>
                </g>

                <use
                  fill="url(#inset-shadow)"
                  href="#pond-boundary"
                  pointerEvents="none"
                />
              </g>
            </svg>
          </div>

          {/* Content container with relative positioning
          <div className="relative w-full lg:w-1/2 min-h-[400px]"></div> */}

          <div
            ref={textRef}
            className="relative w-full lg:w-1/2 text-white space-y-8 px-6 lg:px-0 "
          >
            <AnimatedElement>
            <h3
              className="text-4xl md:text-5xl mb-8 text-[#4AE5AC]"
              style={{ fontFamily: "The Last Shuriken, sans-serif" }}
            >
              The Cultural Extravaganza
            </h3>
            </AnimatedElement>
            <AnimatedElement>
            <div className="space-y-6">
              <p
                className="text-l md:text-xl text-gray-300 leading-relaxed"
                style={{ fontFamily: "Tektur, sans-serif" }}
              >
                Infin8, the yearly cultural bash at IIITB, is a three-day
                extravaganza filled with vibrant shows, performances,
                competitions, games, and stalls.
              </p>

              <blockquote
                className="text-xl md:text-2xl text-[#4AE5AC] pl-6 border-l-2 border-[#4AE5AC] my-8"
                style={{ fontFamily: "Tektur, sans-serif" }}
              >
                A unique and exciting experience for everyone
              </blockquote>

              <p
                className="text-l md:text-xl text-gray-300 leading-relaxed"
                style={{ fontFamily: "Tektur, sans-serif" }}
              >
                Talented artists from all corners of India come to showcase
                their skills, turning it into a thrilling spectacle. What's
                more, lots of students from other colleges in Bangalore join the
                fun, making Infin8 a true festival of creativity and
                celebration.
              </p>
            </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
}
