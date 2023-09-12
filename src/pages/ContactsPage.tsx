import BreadCrumb from '../components/BreadCrumb';

const ContactsPage = () => {
  return (
    <main
      className="container mx-auto flex flex-col items-center
        tablet:items-start p-4 pb-6 tablet:px-6 desktop:w-[1200px]"
    >
      <BreadCrumb />

      <div className="mb-8">
        <h1 className="mb-2 text-[32px] font-extrabold leading-[41px] tracking-[0.32px] tablet:mt-10 tablet:text-5xl">
          Our Team
        </h1>
      </div>

      <section className="grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
        <article
          className="card box-border p-8 relative
            border border-secondary rounded-lg
            min-w-[272px]  max-h-[440px]
            bg-white
            hover:shadow-card tablet:max-h-[506px]"
        >
          <h2>Olena Vats</h2>
        </article>
        <article
          className="card box-border p-8 relative
            border border-secondary rounded-lg
            min-w-[272px]  max-h-[440px]
            bg-white
            hover:shadow-card tablet:max-h-[506px]"
        >
          <h2>Olena Vats</h2>
        </article>
        <article
          className="card box-border p-8 relative
            border border-secondary rounded-lg
            min-w-[272px]  max-h-[440px]
            bg-white
            hover:shadow-card tablet:max-h-[506px]"
        >
          <h2>Olena Vats</h2>
        </article>
        <article
          className="card box-border p-8 relative
            border border-secondary rounded-lg
            min-w-[272px]  max-h-[440px]
            bg-white
            hover:shadow-card tablet:max-h-[506px]"
        >
          <h2>Olena Vats</h2>
        </article>
        <article
          className="card box-border p-8 relative
            border border-secondary rounded-lg
            min-w-[272px]  max-h-[440px]
            bg-white
            hover:shadow-card tablet:max-h-[506px]"
        >
          <h2>Olena Vats</h2>
        </article>
        <article
          className="card box-border p-8 relative
            border border-secondary rounded-lg
            min-w-[272px]  max-h-[440px]
            bg-white
            hover:shadow-card tablet:max-h-[506px]"
        >
          <h2>Olena Vats</h2>
        </article>
      </section>
    </main>
  );
};

export default ContactsPage;
