import {render, screen} from "@testing-library/react"
import CaesarCipher from "./CaesarCipher"

test("CaesarCipher", () => {
    render(<CaesarCipher text="Welcome Home !" shift={3}/>)
    expect(screen.getByText("Zhofrph Krph !")).toBeInTheDocument();
})