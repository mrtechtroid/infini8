import React from 'react';

interface DayCardProps {
  dayNumber: string;
}

const DayCard: React.FC<DayCardProps> = ({ dayNumber }) => {
  return (
    <div
      style={{
        width: '100%', // Adjust width to be responsive
        aspectRatio: '3 / 4', // Match EventCard's aspect ratio
        backgroundColor: '#0a0456', // Deep blue background
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '10px', // Rounded corners
      }}
    >
      {/* Top black stripes */}
      <div
        style={{
          width: '100%',
          height: '10%', // Match the proportional height for stripes
          backgroundColor: '#080033',
          display: 'flex',
        }}
      >
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            style={{
              width: '20%',
              height: '100%',
              backgroundColor: index % 2 === 0 ? '#080033' : '#DC2626',
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '10px' }}>初</div>
        <div style={{ fontSize: '48px', marginBottom: '10px' }}>日</div>
        <div className="font-['The Last Shuriken']" style={{ fontSize: '48px', textTransform: 'uppercase' }}>{`Day ${dayNumber}`}</div>
      </div>

      {/* Bottom divider to match EventCard */}
      <div
        style={{
          width: '100%',
          height: '2%',
          backgroundColor: '#DC2626',
        }}
      ></div>
    </div>
  );
};

export default DayCard;
