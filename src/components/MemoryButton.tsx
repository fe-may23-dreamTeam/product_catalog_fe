import React, { useEffect } from 'react';
import { useLazyGetProductByParamsQuery } from '../redux/api/productApi';
import { useNavigate, useParams } from 'react-router';
import classNames from 'classnames';

interface MemoryButtonProps {
  capacity: string;
  isActive: boolean;
}

const MemoryButton: React.FC<MemoryButtonProps> = ({ capacity, isActive }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [trigger, { data }] = useLazyGetProductByParamsQuery();

  const handleChangeCapacity = () => {
    trigger({
      id: productId,
      capacity,
    });
  };

  useEffect(() => {
    if (data) {
      navigate(`/phones/${data?._id}`);
    }
  }, [data]);

  return (
    <button
      className={classNames(
        'border-icons border rounded-md text-primary mr-2 p-2',
        {
          'bg-primary text-white': isActive,
        },
      )}
      onClick={handleChangeCapacity}
    >
      {capacity}
    </button>
  );
};

export default MemoryButton;
