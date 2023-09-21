const OrderHistoryCard = () => {
  return (
    <div className="flex flex-col tablet:flex-row relative mb-3">
      <div className="bg-green rounded-lg w-2 h-full absolute top-0 left-0 -mr-3"></div>
      <div className="flex-1 pr-1 pl-5">
        <dt className="text-sm font-medium text-secondary">
          № 777 from 13.09{' '}
        </dt>
        <dd className="mt-1 text-sm text-primary">Completed</dd>
      </div>
      <div className="flex-1 pr-1 pl-5">
        <dt className="text-sm font-medium text-secondary">Sum of order </dt>
        <dd className="mt-1 text-sm text-primary">888$</dd>
      </div>
      <div className="flex-1 pr-1 pl-5">
        <img
          src="../assets/images/phones-category.png"
          alt="Photo of product"
        />
      </div>
    </div>
  );
};

export default OrderHistoryCard;
