import Layout from "../components/Layout";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Service from "../components/Service/Service";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

const Index = () => {
  return (
    <Layout pageTitle="Apex RopeAccess">
      <Header />
      <Hero />
      <About />
      <Service />
      <Footer />
    </Layout>
  );
};

export default Index;
