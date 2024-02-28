import Slider from "./components/Slider";
import UseRef from "./components/Useref";
import Input from "./ui/Input";

function App() {
  const showNumber = (value) => {
    return (
      <>
        <h1>{value}</h1>
      </>
    );
  };

  const showName = (value) => {
    return (
      <>
        <h5>{value}</h5>
      </>
    );
  };
  return (
    <div>
      {/* <Slider /> */}
      {/* <Input type={"number"} placeholder={"Roll No"} renderProps={showNumber} />
      <br />
      <Input type={"text"} placeholder={"name"} renderProps={showName} /> */}
      <UseRef />
    </div>
  );
}

export default App;
