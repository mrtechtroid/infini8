import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Twitter, Instagram, Linkedin, Facebook, Bold } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWaves} />

      {/* Lanterns */}
      <div className={styles.lanternContainer}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className={styles.lantern} />
        ))}
      </div>

      <div className="container mx-auto">
        <div className={styles.gridContainer}>
          {/* Event Section
          <Card className={styles.bentoBox}>
            <div className="space-y-4">
              <Image
                src="/infin8_logo.png"
                alt="Infin8 Logo"
                width={200}
                height={200}
                className="mx-auto transition-transform hover:scale-105"
              />
              <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-rose-100 to-teal-100 bg-clip-text text-transparent">
                INFIN8
              </h2>
            </div>
          </Card> */}

          {/* Institute Section */}
          <Card className={styles.bentoBox}>
            <Link href="https://iiitb.ac.in" className="block space-y-4" target="_blank" rel="noopener noreferrer">
              <Image
                src="/iiit-b-logo-10.png"
                alt="IIIT-B Logo"
                width={200}
                height={200}
                className="mx-auto transition-transform hover:scale-105 bg-white"
                style={{
                  borderRadius: 10
                }}
              />
              <p className="text-center text-sm text-muted-foreground text-white">
                International Institute of Information Technology, Bangalore
              </p>
            </Link>
          </Card>

          {/* Social Links */}
          <Card className={styles.bentoBox}>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-center text-white"
                              style={{ fontFamily: "Tektur, sans-serif" }}
>Get in Touch</h3>
              <div className={styles.socialGrid}>
                {[
                  { icon: Twitter, href: "https://twitter.com/infin8_iiitb" },
                  { icon: Instagram, href: "https://www.instagram.com/infin8_iiitb/" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/infin8-iitb/" },
                  { icon: Facebook, href: "https://www.facebook.com/infin8iiitb/" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="flex items-center justify-center p-2 rounded-full hover:bg-accent transition-colors bg-white text-red-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </Card>

          {/* Sponsors */}
          <Card className={styles.bentoBox}>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-center text-white"
                              style={{ fontFamily: "Tektur, sans-serif" }}
>Our Sponsors</h3>
              <div className={styles.sponsorGrid}>
                {[1, 2, 3].map((num) => (
                  <Image
                    key={num}
                    // src={`/sponsor${num}.png`}
                    src='/infin8_logo.png'
                    alt={`Sponsor ${num}`}
                    width={160}
                    height={160}  
                    className="transition-transform hover:scale-110"
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Powered by Section */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground text-white"
                          style={{ fontFamily: "Tektur, sans-serif",
                            fontSize: 35
                           }}
>Powered by</p>
          <Image
            src="/jhense.png"
            alt="Zense Logo"
            width={500}
            height={250}
            className="mx-auto mt-2 invert transition-transform hover:scale-105"
          />
        </div>

        <Separator className="my-8 opacity-50" />

        {/* Footer Bottom */}
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground text-white">
            &copy; {new Date().getFullYear()} IIIT-B. All rights reserved.
          </p>
          <p className={styles.kanji}>無限の可能性</p>
        </div>
      </div>
    </footer>
  )
}

