import Header from "../components/Header/header";
const Home: React.FC = () => {
  return (
    <>
    <div className="flex flex-col bg-slate-800 text-white items-center justify-center h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
    </div>
    </>
  );
};

export default Home;
