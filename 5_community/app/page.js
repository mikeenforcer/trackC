import { Footer, Navbar } from '../components';
import { About, Insights } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      
    </div>
    <div className="relative">
     
      <div className="gradient-04 z-0" />
      
    </div>
   
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      
    </div>
    <Footer />
  </div>
);

export default Page;