import OrderHistoryCard from '../components/OrderHistoryCard';

export const ProfilePage = () => {
  return (
    <main className="grid grid-cols-4 tablet:grid-cols-12 desktop:grid-cols-24 my-6 mx-2 tablet:mx-4">
    <div className="bg-white overflow-hidden shadow rounded-lg tablet:px-4 py-5 px-6 border col-span-4 tablet:col-span-5 desktop:col-span-8">
      <div className="">
        <h3 className="text-lg leading-6 font-medium text-primary">
          Your Profile
        </h3>
        <p className="mt-1 max-w-2xl py-3 text-sm text-secondary">
          This is some information about the user.
        </p>
      </div>
      <div className="border-t border-gray-200 ">
        <dl>
          <div className="py-3">
            <dt className="text-sm font-medium text-secondary">Full name</dt>
            <dd className="mt-1 text-sm text-primary">
              John Doe
            </dd>
          </div>
          <div className="py-3 ">
            <dt className="text-sm font-medium text-secondary">Email address</dt>
            <dd className="mt-1 text-sm text-primary">
              johndoe@example.com
            </dd>
          </div>
          <div className="py-3">
            <dt className="text-sm font-medium text-secondary">Phone number</dt>
            <dd className="mt-1 text-sm text-primary">
              (123) 456-7890
            </dd>
          </div>
          <div className="py-3">
            <dt className="text-sm font-medium text-secondary">Address</dt>
            <dd className="mt-1 text-sm text-primary">
              123 Main St <br />
              Anytown, USA 12345
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <div className="col-span-4 tablet:col-start-7 tablet:col-span-full desktop:col-start-10 desktop:col-span-full mt-6 tablet:mt-0">
      <div className="bg-white overflow-hidden shadow rounded-lg tablet:px-4 py-5 px-6 border">
        <h3 className="text-lg leading-6 font-medium text-primary mb-3">
          Your Orders
        </h3>
        <OrderHistoryCard />
        <OrderHistoryCard />
        <OrderHistoryCard />
        <OrderHistoryCard />
      </div>
    </div>
  </main>
  );
};
