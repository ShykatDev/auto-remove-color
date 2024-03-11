import { useState } from "react";

const filledArray = Array.from({ length: 7 }).fill(0);
const BoxContainer = () => {
  const [clickedBoxes, setClickedBoxes] = useState([]);

  const onClickBox = (event) => {
    event.target.classList.add("bg-green-400");
    setClickedBoxes((prev) => [...prev, event.target]);
  };

  const removeAuto = () => {
    console.log("start removing");
    clickedBoxes.map((box, i) => {
      return setTimeout(() => {
        box.classList.remove("bg-green-400");
      }, i * 500);
    });
    setClickedBoxes([]);
  };

  console.log(clickedBoxes.length);

  if (clickedBoxes.length === filledArray.length) {
    setTimeout(() => {
      removeAuto();
    }, 1000);
  }

  return (
    <div className="w-fit mx-auto h-fit place-content-center grid grid-cols-3 gap-8">
      {filledArray.map((_, i) => {
        return (
          <div
            onClick={(e) => onClickBox(e)}
            key={i}
            className={`cursor-pointer size-16 sm:size-20 md:size-28 xl:size-32 rounded-lg border border-gray-700 duration-300 ${
              i === 3 ? "col-span-3" : "col-span-1"
            }`}
          ></div>
        );
      })}
    </div>
  );
};

export default BoxContainer;
