import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "登録方法を教えてください。",
    questionEn: "How do we register ?",
    answer: "Visit the events page and fill out the Google Form for the event you wish to participate in. A QR code is available in the form. Non-IIITB students should scan the QR code, complete the payment, take a screenshot of the receipt, and submit it through the form. IIITB students are exempt from event fees; however, they should also upload a picture of their student ID as part of the registration process.",
    icon: "📝"
  },
  {
    question: "大学のイベントで自分の身元を確認するにはどうすればよいですか?",
    questionEn: "How do I verify my identity in college events ?",
    answer: "If you are an IIITB student, please carry your ID card. For non-IIITB students, we will verify your payment and send you the tickets to the email address you provided in the form. This email confirmation will be considered as your identity verification",
    icon: "🪪"
  },
  {
    question: "個別のイベントのチケットを購入する必要がありますか、それともすべてのイベントのチケットを 1 枚で入手できますか?",
    questionEn: "Should I buy a ticket for individual events, or can I get a single ticket for all the events ?",
    answer: "One ticket for any of the events is enough to get you into the college for the day the event is happening, but for participating in any other event, you would still have to pay.",
    icon: "💴"
  },
  {
    question: "イベントの最新情報を入手するにはどうすればよいですか?",
    questionEn: "How will I get updates of the events ?",
    answer: "You can get updates of each event by contacting one of the SPOCS of the event or by following @infin8_iiitb on Instagram.",
    icon: "📱"
  },
  {
    question: "企業や団体にスポンサーシップの機会はありますか ?",
    questionEn: "Are there sponsorship opportunities for businesses or organisations ?",
    answer: "Yes, there are many. You can contact us at sac@iiitb.ac.in for more details.",
    icon: "🤝"
  }
];

export default function FAQs() {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const faqItems = document.querySelectorAll('.faq-card');
    
    faqItems.forEach((item, index) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0) rotateX(0)';
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(item);
    });
  }, []);

  const japaneseBackgroundSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 1000">
  {/* Cherry Blossom Branches */}
  <g opacity="0.1" fill="none" stroke="#FF69B4" stroke-width="2">
    <path d="M-50 200 Q100 250, 200 150 Q300 50, 400 100" />
    <path d="M800 -50 Q900 50, 950 200" />
    <path d="M-100 800 Q0 900, 200 850" />
  </g>

  {/* Japanese Cultural Icons */}
  <g opacity="0.05">
    {/* Torii Gate */}
    <path d="M700 200 L750 300 L650 300Z" fill="#8B4513" />
    <path d="M650 300 L750 300 L700 400Z" fill="#A0522D" />

    {/* Origami Crane */}
    <path d="M200 600 L250 550 L300 600 L250 650Z" fill="#E6E6FA" stroke="#4169E1" stroke-width="1" />

    {/* Japanese Fan */}
    <path d="M500 100 Q550 50, 600 100 Q650 150, 500 200 Q350 150, 400 100Z" fill="#FF6347" opacity="0.7" />

    {/* Sakura Flower */}
    <g transform="translate(300, 700)">
      <path d="M0 -30 Q15 -15, 30 0 Q45 -15, 0 -30Z" fill="#FFB6C1" />
      <path d="M0 -30 Q-15 -15, -30 0 Q-45 -15, 0 -30Z" fill="#FFB6C1" />
      <circle cx="0" cy="0" r="5" fill="#FF1493" />
    </g>
  </g>

  {/* Wave and Geometric Patterns */}
  <defs>
    <pattern id="wave-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
      <path 
        d="M0,100 Q50,50 100,100 T200,100 
           M-100,100 Q-50,50 0,100 T100,100
           M100,100 Q150,50 200,100 T300,100"
        fill="none" 
        stroke="#1E90FF" 
        stroke-width="1" 
        opacity="0.05"
      />
    </pattern>
    <pattern id="kumiko-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <path 
        d="M0,0 L40,40 M40,0 L0,40" 
        stroke="#FF4500" 
        stroke-width="0.5" 
        opacity="0.05"
      />
    </pattern>
  </defs>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#wave-pattern)" />
  <rect x="0" y="0" width="100%" height="100%" fill="url(#kumiko-pattern)" />
</svg>
`;

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen overflow-hidden"
    >
      
      {/* Background with gradient, patterns, and Japanese cultural SVGs */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-white">
        {/* New Japanese Cultural Background SVG */}
        <div 
          className="absolute inset-0 opacity-[0.9]"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(japaneseBackgroundSVG)}")`,
            backgroundSize: 'cover'
          }}
        />

        {/* Existing patterns */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,60 A30,30 0 0,1 60,60 A30,30 0 0,1 120,60 M0,60 A30,30 0 0,0 60,0 A30,30 0 0,0 120,0 M0,60 A30,30 0 0,0 60,120 A30,30 0 0,0 120,120' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}
        />

        {/* Vertical Lines Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v40H0V0zm20 0h4v40h-4V0z' fill='white' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Japanese-style header with decorative elements */}
          <div className="text-center mb-16 relative">
            {/* Decorative circles */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-32 h-32">
              <div className="absolute inset-0 border-2 border-red-600/20 rounded-full"></div>
              <div className="absolute inset-2 border-2 border-red-600/15 rounded-full"></div>
              <div className="absolute inset-4 border-2 border-red-600/10 rounded-full"></div>
            </div>

            <h2 className="text-5xl font-bold text-red-600 relative inline-block">
              <span className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></span>
              よくある質問
              <span className="absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></span>
            </h2>
            <div className="mt-2 text-gray-400">Frequently Asked Questions</div>

            {/* Decorative Japanese patterns */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 opacity-20">
              <svg viewBox="0 0 40 40">
                <path d="M0,20 20,0 40,20 20,40Z" fill="none" stroke="currentColor" className="text-red-600"/>
              </svg>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 opacity-20">
              <svg viewBox="0 0 40 40">
                <path d="M0,20 20,0 40,20 20,40Z" fill="none" stroke="currentColor" className="text-red-600"/>
              </svg>
            </div>
          </div>

          {/* FAQ Cards */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-card opacity-0 transform translate-y-8 -rotate-x-10 transition-all duration-700"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden cursor-pointer border border-red-900/20"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {/* Red top border with gradient */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900/50 via-red-600 to-red-900/50"></div>

                  {/* Content container */}
                  <div className="p-6 relative">
                    {/* Icon circle with paper texture */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-red-700 to-red-900 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300 shadow-lg">
                      <span className="text-2xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                        {faq.icon}
                      </span>
                    </div>

                    {/* Question */}
                    <div className="pr-12">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {faq.question}
                      </h3>
                      <p className="text-gray-400 text-sm">{faq.questionEn}</p>
                    </div>

                    {/* Chevron with custom animation */}
                    <ChevronDown 
                      className={`absolute right-6 top-6 w-6 h-6 text-red-600 transform transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />

                    {/* Answer with decorative border */}
                    <div 
                      className={`mt-4 text-gray-300 overflow-hidden transition-all duration-300 ${
                        openIndex === index ? 'max-h-48' : 'max-h-0'
                      }`}
                    >
                      <div className="border-t border-red-900/30 pt-4 relative">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent"></div>
                        {faq.answer}
                      </div>
                    </div>

                    {/* Decorative corner with gradient */}
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-br from-red-700 to-red-900 transform rotate-45 translate-x-4 translate-y-4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}