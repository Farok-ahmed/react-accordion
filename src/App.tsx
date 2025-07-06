import Accordion from "./components/Accordion";
import Loader from "./components/Loader";
import Select from "./components/Select";

const App = () => {
  return (
    <div className="">
      <div className="contaienr">
        <h1>Welcome To My scss tutorial</h1>
      </div>
      <Loader />
      <Accordion />
      <Select />
    </div>
  );
};

export default App;
