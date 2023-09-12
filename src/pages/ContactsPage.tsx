import BreadCrumb from '../components/BreadCrumb';

const ContactsPage = () => {
  return (
    <main
      className="container mx-auto flex flex-col px-4 py-6
        tablet:px-6 desktop:w-[1200px] desktop:px-8"
    >
      <BreadCrumb />

      <h1>Our Team:</h1>
    </main>
  );
};

export default ContactsPage;
