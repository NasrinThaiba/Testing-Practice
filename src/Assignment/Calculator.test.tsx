import {render, screen} from "@testing-library/react"
import { Add, Sub, Mul, Div } from "./Calculator"
// import {add, sub, mul, div} from "./Calculator"

// describe("Calculator" , () => {
//     test("Addition" , () => {
//       expect(add(3, 4)).toBe(7)
//     })
//     test("Subtraction" , () => {
//         expect(sub(5,2)).toBe(3)
//     })
//     test("Multiplication", () => {
//         expect(mul(4, 5)).toBe(20)
//     })
//     test("Division" , () => {
//         expect(div(8,2)).toBe(4)
//     })
// })

describe("Calculator" , () => {
    test("Addition" , () => {
        render(<Add num1={3} num2={4}/>)
        expect(screen.getByText("7")).toBeInTheDocument()
    })
    test("Subtraction" , () => {
        render(<Sub num1={8} num2={4}/>)
        expect(screen.getByText("4")).toBeInTheDocument()
    })
    test("Multiplication" , () => {
        render(<Mul num1={3} num2={4}/>)
        expect(screen.getByText("12")).toBeInTheDocument()
    })
    test("Division" , () => {
        render(<Div num1={10} num2={2}/>)
        expect(screen.getByText("5")).toBeInTheDocument()
    })
})