type ReverseProps = {
    word : String
}

export default function Reverse({word} : ReverseProps){
    return(
        <div>
            <h3>Reverse String : </h3> 
            <p>{word.split("").reverse().join("")}</p>
        </div>
    )
}