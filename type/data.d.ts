export interface INote {
  id: string;
  title: string;
  createdAt: Date;
  body: string;
  dataType: "NOTE";
}

export interface ITodo {
  id: string;
  todo: string;
  isCompleted: boolean;
  createdAt: Date;
  dataType: "TODO";
}
