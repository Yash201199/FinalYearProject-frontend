// import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ navbar = true, children }) => {
  return (
    <>
         {navbar && <Navbar />}
      <div className="container-fluid mt-3">
    <main style={{minHeight : "180vh"}}>
        {children}
    </main>
    </div>
    {/* <Footer/>  */}
    </>
  );
};

export default Layout;
