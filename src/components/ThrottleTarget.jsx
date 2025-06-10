import { useSelector } from "react-redux";
import TargetBoard from "./TargetBoard";
import React from "react";

const ThrottleTarget = () => {
  const count = useSelector((state) => state.gun.throttleBulletCount);
  return (
    <div id="throttle-target" className="relative py-4">
      <TargetBoard height={"100%"} />
      <div className="absolute px-2 border-1 rounded-lg bg-gray-200 top-[10%] left-full text-black font-xl select-none">
        {count}
      </div>
    </div>
  );
};

export default React.memo(ThrottleTarget);
