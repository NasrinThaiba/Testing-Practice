import {render, screen} from "@testing-library/react"
import Reverse from "./Reverse"

test("Reverse a string" , () => {
    render(<Reverse word="Hello"/>)
    expect(screen.getByText("olleH")).toBeInTheDocument();
})