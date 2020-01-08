import React from "react"
import BathtubSharpIcon from '@material-ui/icons/BathtubSharp';
export default function Info(){

    let [email,setEmail]= React.useState("")

    const onChangeHandler = (event)=>{
        setEmail (event.target.value)
console.log(email)

    }

    return (
        <div>
    <BathtubSharpIcon></BathtubSharpIcon>
    <input type= "text" onChange={onChangeHandler}></input>
    </div>
    )
}
