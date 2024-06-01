import Feedback from "../components/Feedback/Feedback";
import Footer from "../components/Footer/Footer";
import Growth from "../components/Growth/Growth";
import Home from "../components/Home/Home";
import Header from "../components/Project/Header";
import OurProject from "../components/Project/OurProject";
import WhyChooseUs from "../components/Project/WhyChooseUs";
import Service from "../components/Service/Service";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <Home />
      <Service />
      <div className="bg">
        <Header title="WHY CHOOSE US" subtitle="WHY WE ARE BEST" />
        <WhyChooseUs />
        <OurProject />
      </div>
      <div>
        <Growth />
      </div>
      <Feedback />
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default LandingPage;
