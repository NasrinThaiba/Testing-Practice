type CalculatorProps = {
  num1: number;
  num2: number;
};

// export const add = (a: number, b: number) => a + b;
// export const sub = (a: number, b: number) => a - b;
// export const mul = (a: number, b: number) => a * b;
// export const div = (a: number, b: number) => a / b;

// export default function Calculator({ num1, num2 }: CalculatorProps) {
//   return (
//     <div>
//       <div>Add : <p>{add(num1, num2)}</p></div>
//       <div>Sub : <p>{sub(num1, num2)}</p></div>
//       <div>Mul : <p>{mul(num1, num2)}</p></div>
//       <div>Div : <p>{div(num1, num2)}</p></div>
//     </div>
//   );
// }

export function Add({num1, num2} : CalculatorProps) {
    return(
        <div>
           <h3>Addition : </h3> <p>{num1 + num2}</p>
        </div>
    )
}
export function Sub({num1, num2} : CalculatorProps) {
    return(
        <div>
           <h3>Subtraction : </h3> <p>{num1 - num2}</p>
        </div>
    )
}
export function Mul({num1, num2} : CalculatorProps) {
    return(
        <div>
           <h3>Multiplication : </h3>  <p>{num1 * num2}</p>
        </div>
    )
}
export function Div({num1, num2} : CalculatorProps) {
    return(
        <div>
           <h3>Division :</h3>  <p>{num1 / num2}</p>
        </div>
    )
}