export default function Gallery() {
    const images = [
      { src: '/placeholder.svg?height=300&width=400', alt: 'Tokyo skyline' },
      { src: '/placeholder.svg?height=300&width=400', alt: 'Kyoto temple' },
      { src: '/placeholder.svg?height=300&width=400', alt: 'Mount Fuji' },
      { src: '/placeholder.svg?height=300&width=400', alt: 'Cherry blossoms' },
      { src: '/placeholder.svg?height=300&width=400', alt: 'Japanese garden' },
      { src: '/placeholder.svg?height=300&width=400', alt: 'Bullet train' },
    ]
  
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  