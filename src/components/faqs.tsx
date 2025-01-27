// @ts-nocheck
"use client"

import React, { useEffect, useState } from "react"
import { useRef } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "登録方法を教えてください。",
    questionEn: "How do we register ?",
    answer:
      "Visit the events page and fill out the Google Form for the event you wish to participate in. A QR code is available in the form. Non-IIITB students should scan the QR code, complete the payment, take a screenshot of the receipt, and submit it through the form. IIITB students are exempt from event fees; however, they should also upload a picture of their student ID as part of the registration process.",
    icon: "📝",
  },
  {
    question: "大学のイベントで自分の身元を確認するにはどうすればよいですか?",
    questionEn: "How do I verify my identity in college events ?",
    answer:
      "If you are an IIITB student, please carry your ID card. For non-IIITB students, we will verify your payment and send you the tickets to the email address you provided in the form. This email confirmation will be considered as your identity verification",
    icon: "🪪",
  },
  {
    question:
      "個別のイベントのチケットを購入する必要がありますか、それともすべてのイベントのチケットを 1 枚で入手できますか?",
    questionEn: "Should I buy a ticket for individual events, or can I get a single ticket for all the events ?",
    answer:
      "One ticket for any of the events is enough to get you into the college for the day the event is happening, but for participating in any other event, you would still have to pay.",
    icon: "💴",
  },
  {
    question: "イベントの最新情報を入手するにはどうすればよいですか?",
    questionEn: "How will I get updates of the events ?",
    answer:
      "You can get updates of each event by contacting one of the SPOCS of the event or by following @infin8_iiitb on Instagram.",
    icon: "📱",
  },
  {
    question: "企業や団体にスポンサーシップの機会はありますか ?",
    questionEn: "Are there sponsorship opportunities for businesses or organisations ?",
    answer: "Yes, there are many. You can contact us at sac@iiitb.ac.in for more details.",
    icon: "🤝",
  },
]

export default function FAQs() {
  const sectionRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    const faqItems = document.querySelectorAll(".faq-card")

    faqItems.forEach((item, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              item.style.opacity = "1"
              item.style.transform = "translateY(0) rotateX(0)"
            }
          })
        },
        { threshold: 0.1 },
      )

      observer.observe(item)
    })
  }, [])

  const japaneseBackgroundSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 1000">
      <g opacity="0.1" fill="none" stroke="#FF69B4" stroke-width="2">
        <path d="M-50 200 Q100 250, 200 150 Q300 50, 400 100" />
        <path d="M800 -50 Q900 50, 950 200" />
        <path d="M-100 800 Q0 900, 200 850" />
      </g>
      <g opacity="0.05">
        <path d="M700 200 L750 300 L650 300Z" fill="#8B4513" />
        <path d="M650 300 L750 300 L700 400Z" fill="#A0522D" />
        <path d="M200 600 L250 550 L300 600 L250 650Z" fill="#E6E6FA" stroke="#4169E1" stroke-width="1" />
        <path d="M500 100 Q550 50, 600 100 Q650 150, 500 200 Q350 150, 400 100Z" fill="#FF6347" opacity="0.7" />
      </g>
      <defs>
        <pattern id="wave-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <path d="M0,100 Q50,50 100,100 T200,100" fill="none" stroke="#1E90FF" stroke-width="1" opacity="0.05"/>
        </pattern>
        <pattern id="kumiko-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0,0 L40,40 M40,0 L0,40" stroke="#FF4500" stroke-width="0.5" opacity="0.05"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#wave-pattern)" />
      <rect x="0" y="0" width="100%" height="100%" fill="url(#kumiko-pattern)" />
    </svg>
  `


    return (
      <div ref={sectionRef} className="relative min-h-screen pb-16 bg-[#EBE1CE]">
        {/* Background with gradient and patterns */}
        {/* <div className="absolute inset-0 bg-[#EBE1CE]">
          {/* ... background divs remain the same ... */}
        {/* </div>  */}

        {/* Content Container */}
        <div className="relative z-10 h-full mt-5">
          {/* Title Section - Only show on mobile */}
          <div className="md:hidden text-center py-8">
            <h2 className="text-4xl font-bold text-red-600">よくある質問</h2>
            <div className="mt-2 text-black-400">Frequently Asked Questions</div>
          </div>

          {/* Main Content Grid */}
          <div className="flex flex-col md:flex-row h-full">
            {/* FAQ Section */}
            <div className="w-full md:w-1/2 p-4 md:p-8 lg:p-16">
              {/* Title - Only show on desktop */}
              <div className="hidden md:block text-center mb-8">
                <h2 className="text-4xl font-bold text-red-600">よくある質問</h2>
                <div className="mt-2 text-white font-bold">Frequently Asked Questions</div>
              </div>

              {/* FAQ Cards Container */}
              <div
                className="space-y-4 custom-scrollbar max-h-[calc(100vh-16rem)] overflow-y-auto pr-4 mb-8"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#DC2626 #1F2937",
                }}
              >
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="faq-card"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div
                      className="group relative bg-[#ED3C1F] rounded-lg overflow-hidden cursor-pointer border border-red-900/20"
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900/50 via-red-600 to-red-900/50"></div>
                      <div className="p-6 relative">
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-red-700 to-red-900 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300 shadow-lg">
                          <span className="text-2xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                            {faq.icon}
                          </span>
                        </div>
                        <div className="pr-12">
                          <h3 className="text-xl font-bold text-black mb-1">{faq.question}</h3>
                          <p className="text-white text-sm">{faq.questionEn}</p>
                        </div>
                        <ChevronDown
                          className={`absolute right-6 top-6 w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                            }`}
                        />
                        <div
                          className={`mt-4 text-gray-300 overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-48" : "max-h-0"
                            }`}
                        >
                          <div className="border-t border-red-900/30 pt-4 relative text-white">
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent"></div>
                            {faq.answer}
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-br from-red-700 to-red-900 transform rotate-45 translate-x-4 translate-y-4"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="hidden md:block md:w-1/2 relative">
              <div className="h-[calc(100vh-4rem)] overflow-hidden">
                <img
                  src="/noodles.png"
                  alt="Japanese Noodles"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-105 hover:rotate-3"
                  style={{
                    transformOrigin: "center center"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
