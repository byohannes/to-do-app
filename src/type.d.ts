interface ITodo {
  _id: string;
  name: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
};

type TodoProps = {
  todo: ITodo;
};

type ApiDataType = {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
};
