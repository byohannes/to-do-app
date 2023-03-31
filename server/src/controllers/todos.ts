import { ITodo } from "./../types/todo";
import { Request, Response } from "express";
import Todo from "../models/todo";

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find();
    res.status(200).json({ todos });
  } catch (err) {
    throw err;
  }
};
export const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req.body);
    const body = req.body as Pick<ITodo, "name" | "status" | "description">;

    const todo: ITodo = new Todo({
      name: body.name,
      description: body.description,
      status: body.status,
    });
    const newTodo: ITodo = await todo.save();
    const allTodos: ITodo[] = await Todo.find();
    res
      .status(201)
      .json({ msg: "Todo added!", todos: allTodos, todo: newTodo });
  } catch (err) {
    throw err;
  }
};
// =============================
export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updatedTodo: ITodo | null = await Todo.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allTodos: ITodo[] = await Todo.find();
    res
      .status(200)
      .json({ msg: "Todo updated!", todo: updatedTodo, todos: allTodos });
  } catch (err) {
    throw err;
  }
};
// ================================
export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(
      req.params.id
    );
    const allTodos: ITodo[] = await Todo.find();
    res
      .status(200)
      .json({ msg: "Todo deleted!", todo: deletedTodo, todos: allTodos });
  } catch (err) {
    throw err;
  }
};
