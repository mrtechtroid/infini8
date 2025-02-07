'use client'
// basically same as the about section but this is the fish pond version
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutKoi() {
  const sectionRef = useRef<HTMLElement>(null)
  const koiRef = useRef<SVGSVGElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(koiRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'center center',
            toggleActions: 'play none none reverse'
          }
        }
      )

      gsap.fromTo(textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'center center',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#1E1F44] overflow-hidden py-20"
    >
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="relative w-full lg:w-1/2">
            <svg ref={koiRef} viewBox="0 0 540 540" className="w-full">
              {/* Insert the full koi SVG code here */}
              <defs>
                <linearGradient x1="100%" y1="100%" x2="0%" y2="0%" id="water-color">
                  <stop stopColor="#3D41DA" offset="0%"></stop>
                  <stop stopColor="#1E1F44" offset="100%"></stop>
                </linearGradient>

                <radialGradient id="inset-shadow" cx="50%" cy="55%">
                  <stop offset="75%" stopColor="#1E1F4400" />
                  <stop offset="100%" stopColor="#1E1F4455" />
                </radialGradient>

                <circle id="pond-boundary" cx="270" cy="270" r="270"></circle>

                <path id="koi-body-path" d="M91,113 C94,105 68,119 68,34 C68,13 61,0 49,0 C37,2.78257871e-15 30,13 30,34 C30,103 88,121 91,113 Z">
                  <animate attributeType="XML" attributeName="d" values="M91,113 C94,105 68,119 68,34 C68,13 61,0 49,0 C37,2 30,13 30,34 C30,103 88,121 91,113 Z; M7,113 C10,121 68,103 68,34 C68,13 61,0 49,0 C37,2 30,13 30,34 C30,119 4,105 7,113 Z; M91,113 C94,105 68,119 68,34 C68,13 61,0 49,0 C37,2 30,13 30,34 C30,103 88,121 91,113 Z" begin="0" dur="3s" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" calcMode="spline" repeatCount="indefinite" />
                </path>
              </defs>

              <g id="pond" fill="none" fillRule="evenodd">

                <g id="pond-contents">

                  <mask id="pond-mask" fill="white">
                    <use href="#pond-boundary"></use>
                  </mask>

                  <use id="pond" fill="url(#water-color)" href="#pond-boundary"></use>

                  <g mask="url(#pond-mask)">
                    <g id="koi" fill="none" transform="translate(-50 -90) rotate(90 60 70)">

                      <g id="fins" fill="#FFFFFF" style={{opacity:0.7}}>
                        <path id="right-fin" d="M80,42 C73,42 64,36 64,29 C64,26 64,24 66,24 C78,24 96,30 98,35 C97,39 88,42 80,42 Z">
                          <animateTransform attributeType="XML" attributeName="transform" type="rotate" values="0 68 30; 15 68 30; 0 68 30" begin="0" dur="1s" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" calcMode="spline" repeatCount="indefinite" />
                          <animateTransform attributeType="XML" attributeName="transform" type="rotate" values="0 68 30; 40 68 30; 0 68 30" begin="koi.mouseenter" restart="whenNotActive" dur="1s" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" calcMode="spline" repeatCount="1" />
                        </path>
                        <path id="left-fin" d="M16,42 C24,42 33,36 33,29 C33,26 33,24 31,24 C19,24 0,30 0,35 C0,39 9,42 16,42 Z">
                          <animateTransform attributeType="XML" attributeName="transform" type="rotate" values="0 32 30; -15 32 30; 0 32 30" begin="0" dur="1s" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" calcMode="spline" repeatCount="indefinite" />
                          <animateTransform attributeType="XML" attributeName="transform" type="rotate" values="0 32 30; -40 32 30; 0 32 30" begin="koi.mouseenter" restart="whenNotActive" dur="1s" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" calcMode="spline" repeatCount="1" />
                        </path>
                        <g>
                          <path id="back-fin" d="M113,104 C118,106 106,111 103,118 C101,126 106,137 102,135 C93,132 82,120 85,112 C88,103 105,101 113,104 Z">
                            <animateTransform attributeType="XML" attributeName="transform" type="rotate" values="0 96 117; 140 96 117; 0 96 117" begin="0" dur="3s" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" calcMode="spline" repeatCount="indefinite" />
                          </path>
                          <animateTransform attributeType="XML" attributeName="transform" type="translate" values="2 0; -96 0; 2 0" begin="0" dur="3s" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" calcMode="spline" repeatCount="indefinite" />
                        </g>
                      </g>

                      <g id="body">
                        <mask id="mask-koi-body" fill="white">
                          <use href="#koi-body-path"></use>
                        </mask>
                        <use fill="#FFFFFF" href="#koi-body-path"></use>
                        <g>
                          <circle id="bottom-red" fill="#FF5050" mask="url(#mask-koi-body)" cx="40" cy="75" r="17.5"></circle>
                          <circle id="middle-red" fill="#FF5050" mask="url(#mask-koi-body)" cx="60" cy="50" r="12.5"></circle>
                          <circle id="top-red" fill="#FF5050" mask="url(#mask-koi-body)" cx="30" cy="20" r="12.5"></circle>
                        </g>
                        <use href="#koi-body-path"></use>
                      </g>

                      <g id="eyes" transform="translate(38, 17)" fill="#1E1F44">
                        <g>
                          <circle id="left-eye" cx="2" cy="2" r="2"></circle>
                          <circle id="right-eye" cx="22" cy="2" r="2"></circle>
                          <animateTransform attributeType="XML" attributeName="transform" type="scale" values="1 1; 0.9 0.4; 1 1" begin="koi.mouseenter" restart="whenNotActive" dur="1s" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" calcMode="spline" repeatCount="1" />
                        </g>
                      </g>

                      <animateMotion dur="25s" repeatCount="indefinite" fill="freeze" rotate="auto">
                        <mpath href="#swim" />
                      </animateMotion>

                    </g>

                    <g id="stuff-in-pond" transform="translate(-40, -19)">

                      <path id="swim" d="M132.072164,421.924184 C209.85391,344.142439 264.104973,376.992683 341.886719,299.210938 C419.668465,221.429192 388.37841,125.15284 466.160156,47.3710938 C543.941902,-30.4106522 570.271044,9.80192058 600.902344,21.3476563 C631.533643,32.8933919 663.77784,86.8393478 585.996094,164.621094 C508.214348,242.40284 365.417402,188.578947 287.635656,266.360693 C209.85391,344.142439 295.108744,485.397273 217.326998,563.179018 C139.545252,640.960764 68.8334105,621.24292 48.3710938,587.339844 C27.908777,553.436767 54.2904182,499.70593 132.072164,421.924184 Z"></path>

                      <g id="lilies-bottom" fillRule="evenodd" transform="translate(408, 402)">
                        <path d="M61.9652416,42.039645 L54.5144508,65.9605492 L78.6361911,58.4472028 C82.0518652,64.522727 84,71.5338579 84,79 C84,102.195959 65.1959595,121 42,121 C18.8040405,121 0,102.195959 0,79 C0,55.8040405 18.8040405,37 42,37 C49.2266387,37 56.0269901,38.8251526 61.9652416,42.039645 Z" className="lily" fill="#4AE5AC"></path>
                        <path d="M120.564272,14.0748826 L114.348553,34.0305654 L134.471781,27.7626602 C137.32126,32.8310821 138.946464,38.6800208 138.946464,44.9085464 C138.946464,64.259454 123.259454,79.9464641 103.908546,79.9464641 C84.5576388,79.9464641 68.8706287,64.259454 68.8706287,44.9085464 C68.8706287,25.5576388 84.5576388,9.87062865 103.908546,9.87062865 C109.93727,9.87062865 115.610368,11.3932369 120.564272,14.0748826 Z" className="lily" fill="#93F164" transform="translate(103.908546, 44.908546) rotate(-70.000000) translate(-103.908546, -44.908546) "></path>

                        <path d="M77.9033345,59.0876356 C71.3381552,48.6495907 59.7168622,41.7126196 46.4753528,41.7126196 C25.9852595,41.7126196 9.37475691,58.3231222 9.37475691,78.8132155 M46.4753528,115.913811 C61.1783651,115.913811 73.8837676,107.361027 79.8877837,94.9592335" className="lily-accent" stroke="#1E1F44" strokeWidth="2" opacity="0.100000001" strokeLinecap="round" transform="translate(44.631270, 78.813216) rotate(-193.000000) translate(-44.631270, -78.813216) "></path>

                        <g transform="translate(0.000000, 55.000000)">
                          <g id="flower">
                            <path d="M43.687351,30.6944746 C50.5123812,31.392868 60.7962963,32.8346791 60.7962963,34.5 C60.7962963,36.1653209 50.5123812,37.607132 43.687351,38.3055254 C48.0195375,43.6253893 54.2718491,51.9167298 53.0942894,53.0942894 C51.9167298,54.2718491 43.6253893,48.0195375 38.3055254,43.687351 C37.607132,50.5123812 36.1653209,60.7962963 34.5,60.7962963 C32.8346791,60.7962963 31.392868,50.5123812 30.6944746,43.687351 C25.3746107,48.0195375 17.0832702,54.2718491 15.9057106,53.0942894 C14.7281509,51.9167298 20.9804625,43.6253893 25.312649,38.3055254 C18.4876188,37.607132 8.2037037,36.1653209 8.2037037,34.5 C8.2037037,32.8346791 18.4876188,31.392868 25.312649,30.6944746 C20.9804625,25.3746107 14.7281509,17.0832702 15.9057106,15.9057106 C17.0832702,14.7281509 25.3746107,20.9804625 30.6944746,25.312649 C31.392868,18.4876188 32.8346791,8.2037037 34.5,8.2037037 C36.1653209,8.2037037 37.607132,18.4876188 38.3055254,25.312649 C43.6253893,20.9804625 51.9167298,14.7281509 53.0942894,15.9057106 C54.2718491,17.0832702 48.0195375,25.3746107 43.687351,30.6944746 Z" fill="#FF8D7E" transform="translate(34.500000, 34.500000) rotate(22.500000) translate(-34.500000, -34.500000) "></path>
                            <path d="M43.687351,30.6944746 C50.5123812,31.392868 60.7962963,32.8346791 60.7962963,34.5 C60.7962963,36.1653209 50.5123812,37.607132 43.687351,38.3055254 C48.0195375,43.6253893 54.2718491,51.9167298 53.0942894,53.0942894 C51.9167298,54.2718491 43.6253893,48.0195375 38.3055254,43.687351 C37.607132,50.5123812 36.1653209,60.7962963 34.5,60.7962963 C32.8346791,60.7962963 31.392868,50.5123812 30.6944746,43.687351 C25.3746107,48.0195375 17.0832702,54.2718491 15.9057106,53.0942894 C14.7281509,51.9167298 20.9804625,43.6253893 25.312649,38.3055254 C18.4876188,37.607132 8.2037037,36.1653209 8.2037037,34.5 C8.2037037,32.8346791 18.4876188,31.392868 25.312649,30.6944746 C20.9804625,25.3746107 14.7281509,17.0832702 15.9057106,15.9057106 C17.0832702,14.7281509 25.3746107,20.9804625 30.6944746,25.312649 C31.392868,18.4876188 32.8346791,8.2037037 34.5,8.2037037 C36.1653209,8.2037037 37.607132,18.4876188 38.3055254,25.312649 C43.6253893,20.9804625 51.9167298,14.7281509 53.0942894,15.9057106 C54.2718491,17.0832702 48.0195375,25.3746107 43.687351,30.6944746 Z" fill="#FFDEDA"></path>
                            <path d="M39.7698857,32.7073843 C43.9803983,33.0901348 51.5925926,34.0427851 51.5925926,35.1574074 C51.5925926,36.1882036 45.0823079,37.0804741 40.7728858,37.5115788 C43.4946761,40.8656862 47.1625891,45.7570324 46.4598107,46.4598107 C45.6655581,47.2540633 39.5214005,42.4657911 36.2926157,39.7698857 C35.9098652,43.9803983 34.9572149,51.5925926 33.8425926,51.5925926 C32.8117964,51.5925926 31.9195259,45.0823079 31.4884212,40.7728858 C28.1343138,43.4946761 23.2429676,47.1625891 22.5401893,46.4598107 C21.8374109,45.7570324 25.5053239,40.8656862 28.2271142,37.5115788 C23.9176921,37.0804741 17.4074074,36.1882036 17.4074074,35.1574074 C17.4074074,34.0427851 25.0196017,33.0901348 29.2301143,32.7073843 C26.5342089,29.4785995 21.7459367,23.3344419 22.5401893,22.5401893 C23.2519211,21.8284575 28.2596255,25.5994919 31.6158551,28.3306696 C32.0813327,24.1128906 32.9046115,18.7222222 33.8425926,18.7222222 C34.8564946,18.7222222 35.7363745,25.0208558 36.1751971,29.3283068 C39.3699498,26.65245 45.6558211,21.7361997 46.4598107,22.5401893 C47.2540633,23.3344419 42.4657911,29.4785995 39.7698857,32.7073843 Z" fill="#FFFFFF" transform="translate(34.500000, 35.157407) rotate(22.500000) translate(-34.500000, -35.157407) "></path>
                            <circle fill="#FF6550" cx="34.5" cy="34.5" r="3.94444444"></circle>
                          </g>
                        </g>
                      </g>
                      <g id="lilies-top" fillRule="evenodd" transform="translate(0, 8)">
                        <path d="M279.965242,12.039645 L272.514451,35.9605492 L296.636191,28.4472028 C300.051865,34.522727 302,41.5338579 302,49 C302,72.1959595 283.195959,91 260,91 C236.804041,91 218,72.1959595 218,49 C218,25.8040405 236.804041,7 260,7 C267.226639,7 274.02699,8.82515257 279.965242,12.039645 Z" className="lily" fill="#1ECE8E" transform="translate(260.000000, 49.000000) rotate(170.000000) translate(-260.000000, -49.000000) "></path>
                        <path d="M99.2747747,267.178753 L89.2516871,299.358064 L121.701171,289.250824 C126.296066,297.423851 128.916771,306.855491 128.916771,316.89923 C128.916771,348.103319 103.62086,373.39923 72.4167712,373.39923 C41.2126828,373.39923 15.9167712,348.103319 15.9167712,316.89923 C15.9167712,285.695142 41.2126828,260.39923 72.4167712,260.39923 C82.1383208,260.39923 91.2864126,262.854495 99.2747747,267.178753 Z" className="lily" fill="#1ECE8E" transform="translate(72.416771, 316.899230) rotate(-70.000000) translate(-72.416771, -316.899230) "></path>
                        <path d="M182.965242,52.039645 L175.514451,75.9605492 L199.636191,68.4472028 C203.051865,74.522727 205,81.5338579 205,89 C205,112.195959 186.195959,131 163,131 C139.804041,131 121,112.195959 121,89 C121,65.8040405 139.804041,47 163,47 C170.226639,47 177.02699,48.8251526 182.965242,52.039645 Z" className="lily" fill="#1ECE8E" transform="translate(163.000000, 89.000000) rotate(10.000000) translate(-163.000000, -89.000000) "></path>
                        <path d="M233.667594,91.0689674 L225.773304,116.413735 L251.330862,108.453166 C254.94985,114.890328 257.013945,122.318788 257.013945,130.229344 C257.013945,154.806015 237.090617,174.729344 212.513945,174.729344 C187.937274,174.729344 168.013945,154.806015 168.013945,130.229344 C168.013945,105.652672 187.937274,85.7293436 212.513945,85.7293436 C220.170741,85.7293436 227.375875,87.6631362 233.667594,91.0689674 Z" className="lily" fill="#93F164" transform="translate(212.513945, 130.229344) rotate(40.000000) translate(-212.513945, -130.229344) "></path>
                        <path d="M123.513157,100.478109 L112.78047,134.935602 L147.527263,124.112805 C152.44746,132.864453 155.253702,142.96382 155.253702,153.71862 C155.253702,187.131848 128.166929,214.21862 94.7537021,214.21862 C61.3404747,214.21862 34.2537021,187.131848 34.2537021,153.71862 C34.2537021,120.305393 61.3404747,93.2186202 94.7537021,93.2186202 C105.163503,93.2186202 114.959247,95.847709 123.513157,100.478109 Z" className="lily" fill="#93F164" transform="translate(94.753702, 153.718620) rotate(-70.000000) translate(-94.753702, -153.718620) "></path>

                        <path d="M213.505758,62.0413247 C225.838382,59.1963786 236.064264,50.8431376 241.453236,39.711769" className="lily-accent" stroke="#1E1F44" strokeWidth="2" opacity="0.100000001" strokeLinecap="round" transform="translate(227.479497, 50.876547) rotate(125.000000) translate(-227.479497, -50.876547) "></path>
                        <path d="M117.895173,293.141433 C109.135204,279.213869 93.6288222,269.957815 75.9605736,269.957815 C48.6204833,269.957815 26.4569609,292.121337 26.4569609,319.461427 M75.9605736,368.96504 C95.5789169,368.96504 112.531834,357.552993 120.543039,341.005184" className="lily-accent" stroke="#1E1F44" strokeWidth="2" opacity="0.100000001" strokeLinecap="round" transform="translate(73.500000, 319.461427) rotate(-113.000000) translate(-73.500000, -319.461427) "></path>
                        <path d="M245.889274,109.480645 C238.906331,98.3783932 226.545537,91 212.461427,91 C190.667483,91 173,108.667483 173,130.461427 C173,152.255372 190.667483,169.922855 212.461427,169.922855 C228.10004,169.922855 241.613929,160.825829 248,147.634869" className="lily-accent" stroke="#1E1F44" strokeWidth="2" opacity="0.100000001" strokeLinecap="round"></path>
                        <path d="M144.129412,123.133677 C134.63261,108.034615 117.821931,98 98.6675414,98 C69.0277767,98 45,122.027777 45,151.667541 C45,181.307306 69.0277767,205.335083 98.6675414,205.335083 C119.936055,205.335083 138.314943,192.963127 147,175.023422" className="lily-accent" stroke="#1E1F44" strokeWidth="2" opacity="0.100000001" strokeLinecap="round" transform="translate(96.000000, 151.667541) rotate(140.000000) translate(-96.000000, -151.667541) "></path>

                        <use href="#flower" transform="translate(233.000000, 15.000000)"></use>
                        <use href="#flower" transform="translate(58.000000, 285.000000)"></use>
                      </g>

                    </g>
                  </g>
                </g>

                <use fill="url(#inset-shadow)" href="#pond-boundary" pointerEvents="none" />

              </g>
            </svg>
          </div>

          <div
            ref={textRef}
            className="w-full lg:w-1/2 text-white space-y-8 px-6 lg:px-0"
          >
            <h3
              className="text-4xl md:text-5xl mb-8 text-[#4AE5AC]"
              style={{ fontFamily: 'The Last Shuriken, sans-serif' }}
            >
              The Cultural Extravaganza
            </h3>

            <div className="space-y-6">
              <p
                className="text-xl text-gray-300 leading-relaxed"
                style={{ fontFamily: 'Tektur, sans-serif' }}
              >
                Infin8, the yearly cultural bash at IIITB, is a three-day extravaganza filled with vibrant shows, performances, competitions, games, and stalls.
              </p>

              <blockquote
                className="text-2xl text-[#4AE5AC] pl-6 border-l-2 border-[#4AE5AC] my-8"
                style={{ fontFamily: 'Tektur, sans-serif' }}
              >
                A unique and exciting experience for everyone
              </blockquote>

              <p
                className="text-xl text-gray-300 leading-relaxed"
                style={{ fontFamily: 'Tektur, sans-serif' }}
              >
                Talented artists from all corners of India come to showcase their skills, turning it into a thrilling spectacle. What's more, lots of students from other colleges in Bangalore join the fun, making Infin8 a true festival of creativity and celebration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
