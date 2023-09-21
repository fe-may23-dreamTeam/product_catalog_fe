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
        'border-icons-light dark:border-icons-dark border rounded-md text-primary-light dark:text-primary-dark mr-2 p-2',
        {
          'bg-primary-light dark:bg-primary-dark text-white-light dark:text-white-dark':
            isActive,
        },
      )}
      onClick={handleChangeCapacity}
    >
      {capacity}
    </button>
  );
};

export default MemoryButton;
