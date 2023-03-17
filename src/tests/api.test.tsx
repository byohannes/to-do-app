import axios from "axios";
import { getTodos } from "../api";
// import { waitFor } from "@testing-library/react";

describe("Testing api calls", () => {
  const todos = [
    { id: 1, title: "Todo 1" },
    { id: 2, title: "Todo 2" },
  ];
  const mock = jest.spyOn(axios, "get");
  // jest.mock("axios");

  // beforeEach(() => {
  //   jest.resetAllMocks();

  //   mockedAxios.get.MockResolvedValueOnce({ data: todos });
  // });
  it("Should get Todos successfuly", async () => {
    mock.mockResolvedValue({ todos });
    const result = await getTodos();
    expect(result).toStrictEqual({ todos });
  });
});
