import { useContext } from "react";
import { FilterContext } from "@contexts/filter";

export const useFilter = () => useContext(FilterContext)
