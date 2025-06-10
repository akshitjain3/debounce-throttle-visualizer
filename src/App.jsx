import "./App.css";
import NormalGun from "./components/NormalGun";
import NormalTarget from "./components/NormalTarget";
import DebouncedGun from "./components/DebouncedGun";
import ThrottleGun from "./components/ThrottleGun";
import DebounceTarget from "./components/DebounceTarget";
import ThrottleTarget from "./components/ThrottleTarget";
import { useDispatch, useSelector } from "react-redux";
import {
  setDebounceDelay,
  setThrottleDelay,
  resetAll,
} from "./store/slices/gunSlice";
import Arena from "./components/Arena";
import { useCallback, useMemo } from "react";
import useDebounce from "./components/custom-hooks/useDebounce";

function App() {
  const debounceDelay = useSelector((state) => state.gun.debounceDelay);
  const throttleDelay = useSelector((state) => state.gun.throttleDelay);
  const dispatch = useDispatch();
  const normalAction = useCallback(() => {
    dispatch(resetAll());
  }, [dispatch]);
  const debounceAction = useDebounce((value) => {
    dispatch(setDebounceDelay(value));
  }, 500);
  const throttleAction = useDebounce((value) => {
    dispatch(setThrottleDelay(value));
  }, 500);
  const normalArenaChildren = useMemo(
    () => (
      <>
        <NormalGun />
        <NormalTarget />
      </>
    ),
    []
  );
  const debounceArenaChildren = useMemo(
    () => (
      <>
        <DebouncedGun />
        <DebounceTarget />
      </>
    ),
    []
  );
  const throttleArenaChildren = useMemo(
    () => (
      <>
        <ThrottleGun />
        <ThrottleTarget />
      </>
    ),
    []
  );
  return (
    <div className="flex flex-col gap-10">
      <Arena
        title={"Normal Gun"}
        showReset={true}
        actionOnClick={normalAction}
        id={"normal"}
        tailwindBgColor="bg-blue-100"
      >
        {normalArenaChildren}
      </Arena>
      <Arena
        id={"debounce"}
        title={"Debounced Gun"}
        showDelay={true}
        delay={debounceDelay}
        actionOnClick={debounceAction}
        tailwindBgColor="bg-blue-100"
      >
        {debounceArenaChildren}
      </Arena>

      <Arena
        id={"throttle"}
        title={"Throttle Gun"}
        showDelay={true}
        delay={throttleDelay}
        actionOnClick={throttleAction}
        tailwindBgColor="bg-blue-100"
      >
        {throttleArenaChildren}
      </Arena>
    </div>
  );
}

export default App;
