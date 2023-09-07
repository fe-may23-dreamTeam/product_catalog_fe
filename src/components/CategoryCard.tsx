import { NavLink } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../redux/api/productApi';

type Props = {
  type: string;
  image: string;
};

const CategoryCard = ({ type, image }: Props) => {
  const normalizedType = type.toLowerCase();
  const { data } = useGetProductsByCategoryQuery(normalizedType);

  return (
    <NavLink to={normalizedType} className="col-span-4 desktop:col-span-8">
      <img
        src={image}
        alt="phone-category"
        className="w-full h-4/5 border-0 box-border rounded-lg"
      />
      <p className="font-mont font-bold text-[22px] mt-[24px] text-primary">
        {type}
      </p>
      <p className="font-mont font-semibold text-[14px] text-secondary">
        {data?.totalProducts} models
      </p>
    </NavLink>
  );
};

export default CategoryCard;
