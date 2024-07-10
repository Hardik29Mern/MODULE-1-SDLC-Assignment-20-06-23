import { createStore } from "redux";
import rootreducers from "./Redux/Reducers/Main";


const store = createStore (
    rootreducers
);

export default store;