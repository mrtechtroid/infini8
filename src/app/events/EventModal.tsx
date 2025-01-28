import { X, Download, ExternalLink, Calendar, MapPin } from "lucide-react";

interface Spoc {
  name: string;
  contact: string;
}

interface Registration {
  link: string;
  info: string;
}

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    id: number;
    name: string;
    spocs: Array<Spoc>;
    about: string;
    rulespdf: string;
    prizePool: number;
    fee: number;
    image: string;
    time: string;
    venue: string;
    registration_form: Array<Registration>;
  };
}

export default function EventModal({
  isOpen,
  onClose,
  event,
}: EventModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-[url('/eventModalbg.png')] rounded-lg w-full max-w-4xl mx-4 overflow-y-auto max-h-[90vh] animate-scale-up border border-red-800">
        {/* Background Layer */}

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-red-900/50 transition-colors z-10"
        >
          <X className="w-6 h-6 text-gray-300" />
        </button>

        <div className="p-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {/* Image */}
            <div className="w-full md:w-2/5">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg shadow-lg bg-gray-800">
                <img
                  src={event.image || "/infin8_logo.png"}
                  alt={event.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Main Info */}
            <div className="w-full md:w-3/5">
              <h2 className="text-3xl font-['The Last Shuriken'] text-gray-100 mb-6">
                {event.name}
              </h2>

              {/* Date & Venue Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {event.time && (
                  <div className="p-4 bg-gray-800 rounded-lg border border-red-800 flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-red-500" />
                    <div>
                      <p className="text-lg font-semibold text-red-500">Date</p>
                      <p className="text-gray-300">{event.time}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Prize Pool & Fee */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gray-800 rounded-lg border border-red-800">
                  <p className="text-lg font-semibold text-red-500">
                    Prize Pool: ₹{event.prizePool.toLocaleString()}
                  </p>
                </div>
                {event.fee !== 0 && (
                  <div className="p-4 bg-gray-800 rounded-lg border border-red-800">
                    <p className="text-lg font-semibold text-red-500">
                      Registration Fee: ₹{event.fee.toLocaleString()}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                {event.registration_form.map((form)=> <a
                  href={form.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  <ExternalLink className="w-5 h-5" />
                  {form.info==""?"Register Now":form.info}
                </a>)}
                <a
                  href={event.rulespdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-gray-100 rounded-lg hover:bg-gray-700 transition-colors font-semibold border border-red-800"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Event Rules
                </a>
              </div>

              {/* About Section */}
              <div
                className="prose prose-invert max-w-none mb-6 bg-gray-900/50 backdrop-blur-lg rounded-lg p-6"
                style={{
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #991b1b",
                }}
              >
                <h3 className="text-xl font-['The Last Shuriken'] text-gray-100 mb-3">
                  About the Event
                </h3>
                <p className="text-gray-300">{event.about}</p>
              </div>
            </div>
          </div>

          {/* SPOCs Section */}
          <div className="bg-gray-800 rounded-lg p-6 mt-8 border border-red-800">
            <h3 className="text-xl font-['The Last Shuriken'] text-gray-100 mb-4">
              Event Coordinators
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {event.spocs.map((spoc, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-4 rounded-lg shadow-sm border border-red-800"
                >
                  <p className="font-semibold text-gray-100">{spoc.name}</p>
                  <p className="text-red-500">{spoc.contact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Japanese-style bottom border */}
        <div className="h-1 bg-red-800 bg-[url('/japanese-pattern.png')] bg-repeat-x" />
      </div>
    </div>
  );
}
