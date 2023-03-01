interface ITodo {
  _id: string,
  name: string,
  description: string,
  status: string,
  createdAt?: string,
  updatedAt?: string
}

type TodoProps = {
  todo: ITodo
}

type ApiDataType = {
  message: string
  status: string
  todos: ITodo[]
  todo?: ITodo
}