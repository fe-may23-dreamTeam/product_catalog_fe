import classNames from 'classnames';
import React from 'react';

interface ColorSelectorProps {
  color: string;
  isActive: boolean;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  color,
  isActive,
}) => {
  return (
    <button
      className={classNames(
        `flex border-[2px] border-secondary rounded-full h-8 w-8`,
        { '!border-primary': isActive },
      )}
      style={{ backgroundColor: color }}
    ></button>
  );
};

export default ColorSelector;
