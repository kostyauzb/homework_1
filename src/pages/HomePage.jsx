import Header from "../components/Header/Header";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Articles from "../components/Articles_resources/Articles";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Services />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
