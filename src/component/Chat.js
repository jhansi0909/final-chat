import React, { useState } from "react";
import dp from './dp.jpg';
import dp1 from './dp1.jpg';
import dp3 from './dp3.jpg';
import dp2 from './dp2.jpg';
import dp4 from './dp4.jpg';
import dp5 from './dp5.jpg';
import background from './background.jpg';
import "./Chat.css";
function Chat(){
    var a
    const [name,setName]=useState("")
    const [image,setImage]=useState("")
    const [id,setId]=useState("")
    const [messages,setMessages]=useState("")
    const [message,setMessage]=useState([])
    const [search,setSearch]=useState()
    const [searchmsge,setSearchmsge]=useState("")
    const [call,setCall]=useState(false)
    const x=[
        {
            id:"a",
            image:dp,
            name:"Jhansi",
            message:[]
        },
        {
            id:"a",
            image:dp,
            name:"Jhansi",
            message:[]
        },
        {
            id:"b",
            image:dp1,
            name:"Nagaraju",
            message:[]
        },
        {
            id:"c",
            image:dp3,
            name:"Lakshmi",
            message:[]
        },
        {
            id:"d",
            image:dp4,
            name:"Yash",
            message:[]
        },
        {
            id:"e",
            image:dp2,
            name:"Sirisha",
            message:[]
        },
        {
            id:"f",
            image:dp5,
            name:"Hari",
            message:[]
        },
        {

            id:"g",
            image:dp3,
            name:"Tulasi",
            message:[]
        },
        {
            id:"h",
            image:dp1,
            name:"Dev",
            message:[]
        },
        {
            id:"i",
            image:dp,
            name:"Abc",
            message:[]
        },
        {
            id:"j",
            image:dp2,
            name:"Shakila",
            message:[]
        },
        {
            id:"k",
            image:dp5,
            name:"Siri",
            message:[]
        },
    ]
    const [data,setData]=useState(x)
    const [filterdata,setFilterdata]=useState(data)
function Call(obj){
console.log("heloo")
setName(obj.name)
setImage(obj.image)
setMessage(obj.message)
setId(obj.id)
setCall(true)
console.log(id)
console.log(message)
}
function handleMessage(event){
    setMessages(event.target.value)
}
const handleEnterbutton=()=>{
       a=filterdata.map((y)=>{
       if(y.id==id){
        console.log(y.message)
       setMessages("")
       var t={...y,message:[...y.message,messages]}
       setMessage(t.message)
       return {...y,message:[...y.message,messages]}
    }
     else{
        return y
     }
    }
    )
setFilterdata(a)
} 
function handleSearch(a){
    setSearchmsge(a.target.value)
    console.log(searchmsge)
}
function Search(obj){
    const b=data.filter((m) => m.name == searchmsge)
    setFilterdata(b)
    setSearchmsge("")
}
return(
<div className="maincontainer">
    <div className="leftcontainer">
    <div className="searchbutton"><input className="input" placeholder="Search" value={searchmsge} onChange={handleSearch}></input>
        <button className="button"
         onClick={()=>{
                    Search(data)
                }}
                >Search</button></div>
        {
            filterdata.map((x)=>{
                return(
                    <div>
                <div className="leftsmallcontainer" onClick={()=>{
                    Call(x)
                }}>
                    <div className="display" >
                 <img className="image" src={x.image}></img>
                    </div> 
                    <div className="name">{x.name} </div>
                </div>
             <div className="horizontall"><hr></hr> </div>
             </div>
                )
        })
        }
    </div>
            <div>
                <div className="rightside">
                  <img className="image2" src={image}></img>
                  {/* {(call==false)?  <img className="image2" src={image}> </img>:""} */}
                    <div className="name2">{name}</div>
                </div>
                <div className="rightcontainer">
                   {
                    message.map((n)=>{
                        return(
                            <div className="message">
                      <div>  <img className="image3" src={image}></img></div>
                          <div className="msge">{n}</div>
                        </div>
                    ) 
                    })
                   }
                </div>
               <div className="downinput">  
               <div className="down"> 
               <textarea  className="rightinput" type="text" name="message" value={messages} placeholder="Type a Message" cols="40" rows="5" onChange={handleMessage}></textarea>
               <div><button className="enterbutton" onClick={()=>handleEnterbutton()}>Send</button></div> 
                </div>
               </div> 
                </div>
</div>

)
}
export default Chat;