import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const artists = [
  {
    name: "田中 雪",
    nameEn: "Karan Singh",
    image: "/karanSingh.jpg",
    description: {
      jp: "田中雪は、伝統的な日本の技法と現代的な美学を融合させることで知られる世界的に有名な日本人アーティストです。",
      en: "Yuki Tanaka is a globally renowned Japanese artist known for fusing traditional Japanese techniques with contemporary aesthetics.",
    },
    days: ["零日目", "一日目", "二日目"],
    bgPattern: "/japanese-wave.svg",
  },
  {
    name: "佐藤 翔",
    nameEn: "Sho Sato",
    image: "/sato.jpg",
    description: {
      jp: "伝統と革新の架け橋として知られる佐藤翔。彼の作品は日本の伝統芸術の精神を現代的な表現方法で表現し、世界中で高い評価を受けています。",
      en: "Sho Sato is known as a bridge between tradition and innovation. His works express the spirit of traditional Japanese art in contemporary ways, receiving high acclaim worldwide.",
    },
    days: ["零日目", "一日目", "二日目"],
    bgPattern: "/japanese-maple.svg",
  },
  {
    name: "木村 咲",
    nameEn: "Saki Kimura",
    image: "/kimura.jpg",
    description: {
      jp: "デジタルアートと日本の伝統的な水墨画を組み合わせた独自のスタイルで、新しい表現の可能性を追求する気鋭のアーティスト。",
      en: "A rising artist pursuing new possibilities of expression with a unique style that combines digital art and traditional Japanese ink painting.",
    },
    days: ["零日目", "一日目", "二日目"],
    bgPattern: "/japanese-pattern.svg",
  },
];

export default function ArtistSection() {
  const [currentArtist, setCurrentArtist] = useState(0);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArtist((prev) => (prev + 1) % artists.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const toggleLanguage = () => {
    setLanguage((lang) => (lang === "en" ? "jp" : "en"));
  };

  const artist = artists[currentArtist];

  const backgroundVariants = {
    initial: { opacity: 0, scale: 1.1, rotate: -5 },
    animate: {
      opacity: 0.3,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#0A0A1A] text-white overflow-hidden">
      {/* Layered Background Patterns */}
      <motion.div
        key={`bg-${currentArtist}`}
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${artist.bgPattern})`,
          filter: "contrast(150%) brightness(50%)",
        }}
      />

      {/* Cherry Blossom Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 40%, rgba(255,192,203,0.1) 0%, transparent 70%)`,
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative z-20 container mx-auto px-4 py-16">
        {/* Title with Japanese Calligraphy Effect */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-6xl md:text-8xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-br from-pink-200 via-white to-blue-200"
        >
          芸術家
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Artist Image with Advanced Hover Effect */}
          <motion.div
            key={`image-${currentArtist}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl group"
          >
            <Image
              src={artist.image}
              alt={artist.name}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">{artist.nameEn}</h3>
            </div>
          </motion.div>

          {/* Artist Description with Language Toggle */}
          <motion.div
            key={`info-${currentArtist}`}
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="max-w-lg relative"
          >
            <div
              className="absolute -top-10 right-0 cursor-pointer hover:scale-110 transition-transform"
              onClick={toggleLanguage}
            >
              {language === "en" ? "🇯🇵" : "🇬🇧"}
            </div>

            <h3 className="text-4xl font-bold mb-4 text-pink-200">
              {artist.name}
            </h3>

            <p className="text-lg mb-8 leading-relaxed text-gray-300">
              {artist.description[language]}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {artist.days.map((day, index) => (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.2,
                    type: "spring",
                  }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg text-center hover:bg-pink-900/20 transition-colors group"
                >
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-pink-200 transition-colors">
                    {day}
                  </h4>
                  <p className="text-sm text-gray-400">午後8時パフォーマンス</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {artists.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentArtist(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentArtist
                  ? "bg-pink-300 scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
