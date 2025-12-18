import "./App.css"
import UserCard from "./Components/UserCard";
import Sum from "./Components/Sum";
import Capital from "./Assignment/Capital";
import Reverse from "./Assignment/Reverse";
import { Add , Sub, Mul, Div } from "./Assignment/Calculator";
import CaesarCipher from "./Assignment/CaesarCipher";
import AnalyzeArray from "./Assignment/AnalyzeArray";


function App() {
  const analysis = AnalyzeArray([1, 8, 3, 4, 2, 6]);
   
  return (
    <>
    <div className="app-container">
      <div className="card">
        <UserCard name="Nasrin"/>
      </div>
     

     <div className="card">
      <Sum a={4} b={8} />
    </div>
    
    <div className="card">
      <Capital name="Thaiba" />
      </div>
      
      <div className="card" >
      <Reverse word="WELCOME HOME" />
    </div>

    <div className="card">
      <Add num1={3} num2={14} />
      <Sub num1={390} num2={142} />
      <Mul num1={84} num2={14} />
      <Div num1={32} num2={8} />
    </div>

    <div className="card">
      <CaesarCipher text="Nasrin Thaiba M" shift={8} />
    </div>
     
      <div className="card analyze-array">
      <h3>Analyze Array</h3>
      <p>Average: {analysis.average}</p>
      <p>Minimum: {analysis.minimum}</p>
      <p>Maximum: {analysis.maximum}</p>
      <p>Length: {analysis.length}</p>
    </div>
    
     </div>

    </>
  )
}

export default App
