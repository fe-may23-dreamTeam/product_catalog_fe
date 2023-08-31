import '../index.css';

const NotFound = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <img
          src={require('../assets/404-error.png')}
          alt="404-error-image"
          className="mx-auto w-[250px] mb-4 mt-[-100px]"
        />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-secondary">
          Most likely, this page has been moved or deleted
          <br /> You may have made a mistake when entering the address
          <br /> Please check it again
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Take me home
          </a>
          <a href="/" className="text-sm font-semibold text-primary">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
