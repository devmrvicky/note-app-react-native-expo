import { deleteItems, getAllItems, setItem } from "@/storage/storage";
import { INote } from "@/type/data";
import React, { createContext, useEffect, useState } from "react";
// import "react-native-get-random-values";
import Toast from "react-native-toast-message";
// import { v4 as uuidv } from "uuid";

interface DataContextType {
  notes: INote[];
  saveNote: ({
    noteBody,
    noteHeading,
    noteId,
  }: {
    noteBody: string;
    noteHeading: string;
    noteId: string;
  }) => void;
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
  deleteData: () => void;
  selectModeOn: Boolean;
  setSelectModeOn: React.Dispatch<React.SetStateAction<Boolean>>;
}

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [notes, setNotes] = useState<INote[]>([]);
  const [selectModeOn, setSelectModeOn] = useState<Boolean>(false);

  const saveNote = ({
    noteBody,
    noteHeading,
    noteId,
  }: {
    noteBody: string;
    noteHeading: string;
    noteId: string;
  }) => {
    const noteObj = {
      id: noteId,
      title: noteHeading,
      createdAt: new Date(),
      body: noteBody,
    };
    console.log(noteObj);
    setItem(noteObj.id, JSON.stringify(noteObj))
      .then((data) => {
        setNotes(data as INote[]);
        Toast.show({
          type: "success",
          text1: "Note saved successfully",
        });
      })
      .catch((error) => console.log(error));
  };

  // delete data
  const deleteData = () => {
    deleteItems(selectedItems)
      .then(() => {
        setNotes((prev) =>
          prev.filter((item) => !selectedItems.includes(item.id))
        );
        setSelectModeOn(false);
        setSelectedItems([]);
        Toast.show({
          type: "success",
          text1: `${selectedItems.length} item deleted`,
        });
      })
      .catch((error) => {
        console.log(error);
        // toast.show({
        //   type: ""
        // })
      });
  };

  useEffect(() => {
    getAllItems()
      .then((data) => {
        console.log(data);
        setNotes(data as INote[]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <DataContext.Provider
      value={{
        notes,
        saveNote,
        selectedItems,
        setSelectedItems,
        deleteData,
        selectModeOn,
        setSelectModeOn,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
