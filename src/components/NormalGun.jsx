import { useDispatch } from "react-redux";
import Gun from "./Gun";
import React from "react";

import { incrementNormalBulletCount } from "../store/slices/gunSlice";
const NormalGun = () => {
  const dispatch = useDispatch();
  return (
    <div
      id="normal-gun"
      className="aspect-3/1 my-4 cursor-pointer"
      onClick={() => dispatch(incrementNormalBulletCount())}
    >
      <Gun strokeColor={"black"} fillColor={"oklch(80.9% 0.105 251.813)"} />
    </div>
  );
};

export default React.memo(NormalGun);
