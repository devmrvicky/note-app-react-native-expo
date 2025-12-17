import { DataContext } from "@/context/DataContextProvider";
import { useContext } from "react";

const useLocalData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useLocalData must be used within a DataContextProvider");
  }
  return context;
};

export default useLocalData;
