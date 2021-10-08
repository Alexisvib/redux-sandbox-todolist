/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";

import todo from "./Todo";
import filter from "./Filter";

const rootReducer = combineReducers({ todo, filter });

export default rootReducer;
