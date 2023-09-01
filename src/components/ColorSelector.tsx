import React from 'react';

interface ColorSelectorProps {
  color: string;
  onClick: () => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ color, onClick }) => {
  const circleSize = 32;

  return (
    <div
      className='flex'
      onClick={onClick}
      style={{
        width: `${circleSize}px`,
        height: `${circleSize}px`,
        marginRight: '8px',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={circleSize}
        height={circleSize}
        viewBox={`0 0 ${circleSize} ${circleSize}`}
        style={{ fill: color }}
        fill="none"
        className="absolute"
      >
        <rect x="2" y="2" width={circleSize - 4} height={circleSize - 4} rx={(circleSize - 4) / 2} fill="#FCDBC1" stroke="white" strokeWidth="2"/>
        <rect x="0.5" y="0.5" width={circleSize - 1} height={circleSize - 1} rx={(circleSize - 1) / 2} stroke="#0F0F11"/>
      </svg>
    </div>
  );
};

export default ColorSelector;
