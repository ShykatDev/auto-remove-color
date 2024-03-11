import BoxContainer from "./BoxContainer";

const App = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10">
      <div className="text-center text-gray-400 flex justify-center items-center gap-3">
        <p>Back to normal state after selecting all boxes to </p>
        <div className="size-6 rounded-md bg-green-400"></div>
      </div>
      <BoxContainer />
    </div>
  );
};

export default App;
