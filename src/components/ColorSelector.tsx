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
  const { productId } = useParams();
  const [trigger, { data }] = useLazyGetProductByParamsQuery();
  const navigate = useNavigate();

  const handleChangeColor = () => {
    trigger({
      id: productId,
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
        `flex border-[2px] border-secondary-light dark:border-secondary-dark rounded-full h-8 w-8`,
        { '!border-primary-light dark:!border-primary-dark': isActive },
      )}
      style={{ backgroundColor: color }}
      onClick={handleChangeColor}
    />
  );
};

export default ColorSelector;
