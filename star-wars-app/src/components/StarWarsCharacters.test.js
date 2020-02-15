import React from "react";
// no default export, so we're importing everyting from this library
import * as rtl from "@testing-library/react";
// not importing to a variable, since this just overrides jest global variables
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import StarWarsCharacters from "./StarWarsCharacters";
import axios from "axios";

test("Does the Next button Work", async () => {
  const wrapper = rtl.render(<App />);
  await wrapper.findByText(/luke/i);

  const nextButton = wrapper.getByText(/next/i);
  rtl.act(() => {
    rtl.fireEvent.click(nextButton);
  });
  const luke = wrapper.queryByText(/luke/i);
  await expect(luke).toBeNull();
});
console.log("something");
