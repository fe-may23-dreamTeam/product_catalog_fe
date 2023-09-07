/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useLazyGetProductByParamsQuery } from '../redux/api/productApi';

interface ColorSelectorProps {
  color: string;
  isActive: boolean;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ color, isActive }) => {
  const { phoneId } = useParams();
  const [trigger, { data, isLoading, isUninitialized }] =
    useLazyGetProductByParamsQuery();
  const navigate = useNavigate();

  const handleChangeColor = () => {
    trigger({
      id: phoneId,
      color,
    });
  };

  useEffect(() => {
    if (data) {
      navigate(`/phones/${data._id}`);
    }
  }, [data]);

  return (
    <button
      className={classNames(
        `flex border-[2px] border-secondary rounded-full h-8 w-8`,
        { '!border-primary': isActive },
      )}
      style={{ backgroundColor: color }}
      onClick={handleChangeColor}
    />
  );
};

export default ColorSelector;
