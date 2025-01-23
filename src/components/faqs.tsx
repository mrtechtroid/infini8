import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "参加費について",
    questionEn: "About Participation Fees",
    answer: "Early bird tickets are ¥5000, regular admission is ¥7000. Group discounts available for parties of 4 or more.",
    icon: "💴"
  },
  {
    question: "コスプレルール",
    questionEn: "Cosplay Rules",
    answer: "Props must be under 2 meters. All weapons must be peace-bonded. Please register at the cosplay desk upon arrival.",
    icon: "🎭"
  },
  {
    question: "会場アクセス",
    questionEn: "Venue Access",
    answer: "Located 5 minutes from Shibuya Station. Take the Hachiko exit and follow the signs to the convention center.",
    icon: "🚉"
  },
  {
    question: "食事オプション",
    questionEn: "Food Options",
    answer: "Food court features both Japanese and international cuisine. Outside food is permitted in designated areas.",
    icon: "🍱"
  },
  {
    question: "写真撮影",
    questionEn: "Photography Policy",
    answer: "Photography is allowed in public areas. Please ask for permission before taking photos of cosplayers.",
    icon: "📸"
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

  return (
    <section ref={sectionRef} className="py-16 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Japanese-style header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl font-bold text-red-600 relative inline-block">
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-px bg-red-600"></span>
            よくある質問
            <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-px bg-red-600"></span>
          </h2>
          <div className="mt-2 text-gray-400">Frequently Asked Questions</div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-card opacity-0 transform translate-y-8 -rotate-x-10 transition-all duration-700"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {/* Red top border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>

                {/* Content container */}
                <div className="p-6 relative">
                  {/* Icon circle */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    <span className="text-2xl">{faq.icon}</span>
                  </div>

                  {/* Question */}
                  <div className="pr-12">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {faq.question}
                    </h3>
                    <p className="text-gray-400 text-sm">{faq.questionEn}</p>
                  </div>

                  {/* Chevron */}
                  <ChevronDown 
                    className={`absolute right-6 top-6 w-6 h-6 text-red-600 transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />

                  {/* Answer */}
                  <div className={`mt-4 text-gray-300 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-48' : 'max-h-0'
                  }`}>
                    <p className="border-t border-red-600/30 pt-4">{faq.answer}</p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-red-600 transform rotate-45 translate-x-4 translate-y-4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}