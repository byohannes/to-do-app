import { screen, render, fireEvent } from "@testing-library/react";
import TodoItem from "../components/TodoItem";

describe("<Todo/>", () => {
  const mockUpdateTodo = jest.fn();
  const mockDeleteTodo = jest.fn();
  const props = {
    todo: {
      _id: "123",
      name: "My name",
      description: "My description",
      status: "My status",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    updateTodo: mockUpdateTodo,
    deleteTodo: mockDeleteTodo,
  };

  it("Should render name and description", async () => {
    render(<TodoItem {...props} />);
    const headerName = screen.getByText("My name");
    const description = screen.getByText("My description");

    expect(headerName).toBeTruthy();
    expect(description).toBeTruthy();
  });

  it("Should render complete and update buttons", async () => {
    render(<TodoItem {...props} />);
    const completeBtn = await screen.findByTestId("complete-btn");
    const deleteBtn = await screen.findByTestId("delete-btn");

    expect(completeBtn).toBeTruthy();
    expect(deleteBtn).toBeTruthy();
  });

  it("should update the todo list", async () => {
    render(<TodoItem {...props} />);
    const completeBtn = await screen.findByTestId("complete-btn");
    fireEvent.click(completeBtn);

    expect(mockUpdateTodo).toHaveBeenCalledWith(props.todo);
  });

  it("should delete a todo item", async () => {
    render(<TodoItem {...props} />);
    const deleteTodo = await screen.findByTestId("delete-btn");
    fireEvent.click(deleteTodo);

    expect(mockDeleteTodo).toHaveBeenCalledWith(props.todo._id);
  });
});
