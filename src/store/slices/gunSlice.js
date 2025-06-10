import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    normalBulletCount: 0,
    debounceBulletCount: 0,
    throttleBulletCount: 0,
    debounceCount: 0,
    throttleCount: 0,
    debounceDelay: 500,
    throttleDelay: 500
}

const gunSlice = createSlice({
    name: 'gun',
    initialState,
    reducers: {
        incrementNormalBulletCount(state){
            state.normalBulletCount += 1;
        },
        incrementDebounceCount(state){
            state.debounceCount += 1;
        },
        incrementThrottleCount(state){
            state.throttleCount += 1;
        },
        resetAll(state){
            state.normalBulletCount = 0;
            state.debounceCount = 0;
            state.throttleCount = 0;
            state.debounceBulletCount = 0;
            state.throttleBulletCount = 0
        },
        setDebouncedBulletCount(state){
            state.debounceBulletCount = state.debounceCount;
        },
        setThrottledBulletCount(state){
            state.throttleBulletCount = state.throttleCount
        },
        setDebounceDelay(state, action){
            state.debounceDelay = action.payload
        },
        setThrottleDelay(state, action){
            state.throttleDelay = action.payload
        }
    }
})

export const { incrementNormalBulletCount, incrementDebounceCount, incrementThrottleCount, setDebouncedBulletCount, setThrottledBulletCount, setDebounceDelay, setThrottleDelay, resetAll } = gunSlice.actions;
export default gunSlice.reducer;