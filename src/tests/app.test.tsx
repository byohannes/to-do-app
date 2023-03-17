import { screen, fireEvent, render } from "@testing-library/react";
import App from "../App";

describe("<App/>", () => {
  it("Should render header with the text 'My Todos'.", async () => {
    render(<App />);
    const myHeader = await screen.findByText(/My Todos/);
    expect(myHeader).toBeInTheDocument();
  });
  it("Should render 2 input, 'name, description'", async () => {
    render(<App />);
    const inputArr = await screen.findAllByRole("textbox");
    const ids = inputArr.map((item) => item.id);

    expect(ids).toEqual(["name", "description"]);
  });
  it("Should render 2 label text in componnent=> 'name' & 'description'.", async () => {
    render(<App />);
    const nameLabel = await screen.findByLabelText("Name");
    const descLabel = await screen.findByLabelText("Description");
    expect(nameLabel).toBeInTheDocument();
    expect(descLabel).toBeInTheDocument();
  });
  it("Should render a disabled btn", async () => {
    render(<App />);
    const btn = await screen.findByRole("button", { name: /Add Todo/ });

    expect(btn).toBeTruthy();
    expect(btn).toBeDisabled();
  });
});
