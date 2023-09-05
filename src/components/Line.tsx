import React from 'react';

interface LineProps {
  width: string;
  height?: string;
}

const Line: React.FC<LineProps> = ({ width, height = '1px' }) => {
  return (
    <span
      className={`bg-elements inline-block ${width}`}
      style={{
        height,
      }}
    ></span>
  );
};

export default Line;
