import Footer from "../../_molecules/Footer/Footer";
import Header from "../../_molecules/Header/Header";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
