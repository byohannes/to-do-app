import { screen, render, fireEvent } from "@testing-library/react";
import AddTodo from "../components/AddTodo";

describe("<AddTodo/>", () => {
  const mockSaveTodo = jest.fn();
  const saveTodoFun = mockSaveTodo;

  it("Should render labels and inputs", async () => {
    render(<AddTodo saveTodo={saveTodoFun} />);
    const labelName = await screen.findByLabelText("Name");
    const labelDescription = await screen.findByLabelText("Description");
    const inputName = await screen.findByTestId("nameInput");
    const descriptionInput = await screen.findByTestId("descriptionInput");

    expect(labelName).toBeTruthy();
    expect(labelDescription).toBeTruthy();
    expect(inputName).toBeTruthy();
    expect(descriptionInput).toBeTruthy();
  });

  it("Should render a disabled button", async () => {
    render(<AddTodo saveTodo={saveTodoFun} />);
    const btn = await screen.findByTestId("btn");

    expect(btn).toBeTruthy();
    expect(btn).toHaveTextContent("Add Todo");
    expect(btn).toBeDisabled();
  });

  it("should render submit button", async () => {
    render(<AddTodo saveTodo={saveTodoFun}></AddTodo>);
    const submitButton = await screen.findByTestId("btn");
    expect(submitButton).toBeTruthy();
    expect(submitButton).toBeDisabled();
  });
  it("Should submit the form", async () => {
    render(<AddTodo saveTodo={saveTodoFun} />);
    const inputName = await screen.findByTestId("nameInput");
    const descriptionInput = await screen.findByTestId("descriptionInput");
    fireEvent.change(inputName, {
      currentTarget: { id: "name", value: "My name" },
    });
    fireEvent.change(descriptionInput, {
      currentTarget: { id: "description", value: "My description" },
    });

    const submitButton = await screen.findByTestId("btn");
    fireEvent.submit(submitButton);
    expect(mockSaveTodo).toBeCalled();
  });
});
