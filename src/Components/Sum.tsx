type Numberprops = {
    a : number;
    b : number;
}

export default function Sum ({a, b} : Numberprops) {
    return(
        <div>
            <h4>Sum of the given number:</h4>
            <p>{a + b}</p>
        </div>
    )
}