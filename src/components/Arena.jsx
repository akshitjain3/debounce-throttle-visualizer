import React, { useState } from "react";
import resetIcon from "../assets/loading-arrow.png";
const Arena = ({
  id,
  tailwindBgColor = "bg-blue-100",
  children,
  showDelay,
  showReset,
  title,
  actionOnClick,
  delay,
}) => {
  const [input, setInput] = useState(delay);
  return (
    <div
      className={`flex flex-col flex-1 gap-4 ${tailwindBgColor} border-2 border-gray-300 overflow-hidden rounded-xl `}
    >
      <div id={id}>
        <div className="grow flex justify-between items-center px-10 py-2 rounded-xl border-b-2 border-gray-300">
          <p className="text-black font-semibold text-2xl select-none">
            {title}
          </p>
          {showReset && !showDelay ? (
            <img
              src={resetIcon}
              alt="Reset boards"
              onClick={actionOnClick}
              height="30px"
              width="30px"
              className="select-none"
            />
          ) : !showReset && showDelay ? (
            <div className="flex gap-2 border-2 border-gray-400 bg-white px-2 py-1 rounded-lg">
              <p className="select-none">Delay :</p>
              <input
                type="text"
                pattern="\d*"
                value={input}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "") {
                    setInput("");
                    actionOnClick(0);
                  } else {
                    let input = parseInt(value);
                    if (input) {
                      input = Math.min(input, 5000);
                      setInput(input);
                      actionOnClick(input);
                    }
                  }
                }}
                name="debounceDelay"
                className="w-10 text-center"
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div
          id="normal-arena"
          className="flex justify-between items-stretch h-40 pr-18 pl-6"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Arena);
