import { deleteItems, getAllItems, setItem } from "@/storage/storage";
import { INote, ITodo } from "@/type/data";
import { format } from "date-fns";
import React, { createContext, useEffect, useState } from "react";
import { ToastAndroid } from "react-native";
// import "react-native-get-random-values";
import { Delta } from "quill";
import Toast from "react-native-toast-message";

interface DataContextType {
  notes: INote[];
  // noteBody: Delta;
  // setNoteBody: React.Dispatch<React.SetStateAction<string>>;
  noteHeading: string;
  setNoteHeading: React.Dispatch<React.SetStateAction<string>>;
  noteId: string;
  setNoteId: React.Dispatch<React.SetStateAction<string>>;
  saveNote: (noteBody: Delta) => void;
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
  deleteData: () => void;
  selectModeOn: boolean;
  setSelectModeOn: React.Dispatch<React.SetStateAction<boolean>>;
  todoSelectModeOn: boolean;
  setTodoSelectModeOn: React.Dispatch<React.SetStateAction<boolean>>;
  saveTodo: ({ id, todo }: { id: string; todo: string }) => void;
  todos: ITodo[];
  toggleTodo: ({ id }: { id: string }) => void;
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  categories: string[];
}

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

const categories: string[] = ["Today", "All", "Completed"];

const getFilteredTodos = (todos: ITodo[], activeCategory: string) => {
  if (activeCategory === "Today") {
    return todos.filter(
      (todo) =>
        format(todo.createdAt, "dd/mm/yyyy") ===
        format(new Date(), "dd/mm/yyyy")
    );
  } else if (activeCategory === "Completed") {
    return todos.filter((todo) => todo.isCompleted);
  } else {
    return todos;
  }
};

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [notes, setNotes] = useState<INote[]>([]);
  const [noteHeading, setNoteHeading] = useState<string>("");
  const [noteId, setNoteId] = useState<string>("");
  // const [noteBody, setNoteBody] = useState<Delta>("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [selectModeOn, setSelectModeOn] = useState<boolean>(false);
  const [todoSelectModeOn, setTodoSelectModeOn] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const saveNote = (noteBody: Delta) => {
    if (!noteBody) {
      ToastAndroid.show("Note cannot be empty", ToastAndroid.SHORT);
    }
    const noteObj: INote = {
      id: noteId,
      title: noteHeading,
      createdAt: new Date(),
      body: noteBody,
      dataType: "NOTE",
    };
    console.log(noteObj);
    setItem(noteObj.id, JSON.stringify(noteObj))
      .then((data) => {
        setNotes((data as INote[]).filter((d) => d.dataType === "NOTE"));
        Toast.show({
          type: "success",
          text1: "Note saved successfully",
        });
      })
      .catch((error) => console.log(error));
  };

  const saveTodo = ({ id, todo }: { id: string; todo: string }) => {
    const todoObj: ITodo = {
      id,
      todo,
      createdAt: new Date(),
      isCompleted: false,
      dataType: "TODO",
    };
    setItem(todoObj.id, JSON.stringify(todoObj))
      .then((data) => {
        setTodos(
          (data as ITodo[]).filter((d) => d.dataType === "TODO").reverse()
        );
      })
      .catch((error) => {
        console.log(error);
        Toast.show({
          type: "error",
          text1: "something wrong",
        });
      });
  };

  const toggleTodo = ({ id }: { id: string }) => {
    const todoObj = todos.find((todo) => todo.id === id);
    setItem(
      id,
      JSON.stringify({ ...todoObj, isCompleted: !todoObj?.isCompleted })
    )
      .then((data) => {
        setTodos(
          getFilteredTodos(
            (data as ITodo[]).filter((d) => d.dataType === "TODO"),
            activeCategory
          )
        );
      })
      .catch((error) => {
        console.log(error);
        Toast.show({
          type: "error",
          text1: "something wrong",
        });
      });
  };

  // delete data
  const deleteData = () => {
    deleteItems(selectedItems)
      .then(() => {
        if (selectModeOn) {
          setNotes((prev) =>
            prev.filter((item) => !selectedItems.includes(item.id))
          );
        }
        if (todoSelectModeOn) {
          setTodos((prev) =>
            getFilteredTodos(
              prev.filter((item) => !selectedItems.includes(item.id)),
              activeCategory
            )
          );
        }
        setSelectModeOn(false);
        setTodoSelectModeOn(false);
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
        setTodos(
          getFilteredTodos(
            (data as ITodo[]).filter((d) => d.dataType === "TODO"),
            activeCategory
          )
        );
      })
      .catch((error) => console.log(error));
  }, [getFilteredTodos, activeCategory]);

  useEffect(() => {
    getAllItems()
      .then((data) => {
        setNotes((data as INote[]).filter((d) => d.dataType === "NOTE"));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <DataContext.Provider
      value={{
        notes,
        // noteBody,
        // setNoteBody,
        saveNote,
        noteHeading,
        setNoteHeading,
        noteId,
        setNoteId,
        selectedItems,
        setSelectedItems,
        deleteData,
        selectModeOn,
        setSelectModeOn,
        todoSelectModeOn,
        setTodoSelectModeOn,
        saveTodo,
        todos,
        toggleTodo,
        activeCategory,
        setActiveCategory,
        categories,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
