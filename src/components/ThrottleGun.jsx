import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Gun from "./Gun";
import {
  incrementThrottleCount,
  setThrottledBulletCount,
} from "../store/slices/gunSlice";
import useThrottle from "./custom-hooks/useThrottle";

const ThrottleGun = () => {
  const dispatch = useDispatch();
  const throttleDelay = useSelector((state) => state.gun.throttleDelay);
  const handleThrottleCountUpdate = useThrottle(
    () => dispatch(setThrottledBulletCount()),
    throttleDelay
  );
  const handleClick = () => {
    dispatch(incrementThrottleCount());
    handleThrottleCountUpdate();
  };
  return (
    <div
      id="throttle-gun"
      className="aspect-3/1 my-4 cursor-pointer"
      onClick={handleClick}
    >
      <Gun
        height={"100"}
        strokeColor={"black"}
        fillColor={"oklch(70.4% 0.191 22.216)"}
      />
    </div>
  );
};

export default React.memo(ThrottleGun);
