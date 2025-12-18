import {render, screen} from "@testing-library/react";
import Capital from "../Assignment/Capital";

test("Capitalize" , () => {
    render(<Capital name = "nasrin"/>);
    expect(screen.getByText("Hello Nasrin")).toBeInTheDocument()
})