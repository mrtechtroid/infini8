import Image from "next/image"

interface EventGateProps {
  posterSrc: string
  posterAlt: string
}

export default function EventGate({ posterSrc, posterAlt }: EventGateProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <img src="/events_gate.svg" alt="Event gate frame" width={400} height={600} className="w-full h-auto" />
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <img
          src={posterSrc || "/placeholder.svg"}
          alt={posterAlt}
          width={300}
          height={450}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  )
}

