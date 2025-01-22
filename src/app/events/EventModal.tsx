import { X } from 'lucide-react';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    id: number;
    name: string;
    prizePool: number;
    image: string;
    // Add more fields as needed
  };
}

export default function EventModal({ isOpen, onClose, event }: EventModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg w-full max-w-2xl mx-4 overflow-hidden animate-scale-up">
        {/* Japanese-style top border */}
        <div className="h-1 bg-red-600 bg-[url('/japanese-pattern.png')] bg-repeat-x" />
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-full hover:bg-red-50 transition-colors"
        >
          <X className="w-6 h-6 text-gray-500" />
        </button>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                <img 
                  src={event.image || "/infin8_logo.png"}
                  alt={event.name}
                  className="object-cover w-full h-full"
                />
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-red-600" />
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-red-600" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-red-600" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-red-600" />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-['The Last Shuriken'] text-gray-900 mb-4">{event.name}</h2>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                  <p className="text-lg font-semibold text-red-600">
                    Prize Pool: ₹{event.prizePool.toLocaleString()}
                  </p>
                </div>
                {/* Add more details here as needed */}
                <div className="prose prose-sm">
                  <h3 className="font-['The Last Shuriken']">Event Details</h3>
                  <p>More details about the event can be added here...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Japanese-style bottom border */}
        <div className="h-1 bg-red-600 bg-[url('/japanese-pattern.png')] bg-repeat-x" />
      </div>
    </div>
  );
}