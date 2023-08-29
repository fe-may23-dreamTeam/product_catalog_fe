import Pagination from './components/Pagination';

const App = () => {
  return (
    <div>
      <Pagination
        total={15}
        perPage={3}
        currentPage={5}
        onPageChange={() => {}}
      />
    </div>
  );
};

export default App;
