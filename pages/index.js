import Layout from '../components/Layout';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Service from '../components/Hero/Service';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Gallery from '../components/Gallery/Gallery';

const Index = () => {
  return (
    <Layout pageTitle="Apex RopeAccess">
      <Header />
      <Hero />
      <About />
      <Service />
      <Gallery />
      <Footer />
    </Layout>
  );
};

export default Index;
