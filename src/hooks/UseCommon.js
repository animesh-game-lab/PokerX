import {useContext} from "react";
import {MainContext} from "../context/index.js";

export const useCommon = () => {
    return  useContext(MainContext)
}