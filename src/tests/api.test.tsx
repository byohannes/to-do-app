import axios from "axios";
import { getTodos, addTodo } from "../api";
// import { waitFor } from "@testing-library/react";

describe("Testing api calls", () => {
  const todos = [
    { _id: 1, name: "Todo 1", description: "desc1", status: true },
    { _id: 2, name: "Todo 2", description: "desc2", status: false },
  ];
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Should get Todos successfuly", async () => {
    const mockGet = jest.spyOn(axios, "get");
    mockGet.mockResolvedValue({ todos });
    const result = await getTodos();
    expect(result).toStrictEqual({ todos });
  });
  it("Should throw an error if the API call fails.", async () => {
    const mockGet = jest.spyOn(axios, "get");

    const errorMessage = "Network error";
    mockGet.mockRejectedValue(errorMessage);
    try {
      await getTodos();
    } catch (err) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(err).toBeTruthy();
    }
  });
});

describe("Add todos", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("Should add Todo successfuly from the API call", async () => {
    const mockPost = jest.spyOn(axios, "post");
    const newTodo = {
      _id: "1",
      name: "Todo 1",
      description: "desc1",
      status: true,
    };
    mockPost.mockResolvedValue({
      ...newTodo,
      createdAt: "12/12/12",
      updatedAt: "55/55/55",
    });

    expect(await addTodo(newTodo)).toStrictEqual({
      ...newTodo,
      createdAt: "12/12/12",
      updatedAt: "55/55/55",
    });
  });
});
