//import {render, screen} from "@testing-library/react"
import AnalyzeArray from "./AnalyzeArray"

test("AnalyzeArray" , () => {
   expect(AnalyzeArray([1,8,3,4,2,6])).toEqual({
    average : 4,
    minimum : 1,
    maximum : 8,
    length : 6
   })
})