import { useDispatch, useSelector } from "react-redux";
import useDebounce from "./custom-hooks/useDebounce";
import Gun from "./Gun";
import {
  incrementDebounceCount,
  setDebouncedBulletCount,
} from "../store/slices/gunSlice";
import React from "react";

const DebouncedGun = () => {
  const dispatch = useDispatch();
  const debounceDelay = useSelector((state) => state.gun.debounceDelay);
  const debouncedFn = useDebounce(
    () => dispatch(setDebouncedBulletCount()),
    debounceDelay
  );

  function handleDebounceClick() {
    dispatch(incrementDebounceCount());
    debouncedFn();
  }
  return (
    <div
      id="debounce-gun"
      className="aspect-3/1 my-4 cursor-pointer"
      onClick={handleDebounceClick}
    >
      <Gun height={"100"} strokeColor={"black"} fillColor={"#05df72"} />
    </div>
  );
};

export default React.memo(DebouncedGun);
