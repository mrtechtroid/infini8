import Image from "next/image"
import Link from "next/link"
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react"
import { useState,useEffect } from "react"
import Carousal from "@/components/Carousal"
export default function GalleryScene() {
  return (
    <div className="relative h-screen w-screen bg-black">    
        <Carousal images={["https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300"]}/>
    </div>)
}