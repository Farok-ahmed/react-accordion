import About from "./components/About";
import Accordion from "./components/Accordion";
import ButtonTab from "./components/ButtonTab";
import ImageCard from "./components/ImageCard";
import ImageHotspot from "./components/ImageHotspot";
import Loader from "./components/Loader";
import Select from "./components/Select";
import TextMotion from "./components/TextMotion";
import TransitionType from "./components/TransitionType";
import Variants from "./components/Variants";

const App = () => {
  return (
    <div className="">
      <div className="contaienr">
        <h1>Welcome To My scss tutorial</h1>
      </div>
      <Loader />
      <Accordion />
      <Select />
      <ButtonTab />
      <TextMotion />
      <TransitionType />
      <Variants />
      <ImageHotspot />
      <ImageCard />
      <About />
    </div>
  );
};

export default App;
