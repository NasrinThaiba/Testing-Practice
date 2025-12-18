type CapitalProps ={
    name :  string
}

export default function Capital({name} : CapitalProps){
 return(
    <div>
        <h3>First letter as Capital</h3>
        <p>Hello {name[0].toUpperCase() + name.slice(1).toLowerCase()}</p>
    </div>
 )
}