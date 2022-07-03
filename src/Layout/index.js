import Footer from "../components/Footer"
import Header from "../components/Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
