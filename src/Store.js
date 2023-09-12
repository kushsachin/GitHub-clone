import { createStore } from "redux";
import viewUser from "./reducers/gitUser";
const store=createStore(viewUser);
export default store;