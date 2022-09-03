import React from 'react'
import './App.css';
import { useState } from 'react';

const Todo = () => {
  const [array,setArray] = useState([]);
  const [typedtext,settypedtext] = useState("");
  const [editMode, seteditMode] = useState(false);
  const [indexNumberforEdit, setindexNumberforEdit] = useState();
  const [editedText,seteditedText] = useState("");
  let newArray = [];

function list(event){
  settypedtext(event.target.value);
}
function submit(){
  setArray([...array,typedtext]); 

  // array = apple, banana, orange, pineapple
  // setArray(array.filter(m => return m.id!==index ))
  // setArray(apple, banana, pineapple)

  settypedtext('');
}
function handleDelete(index) {
  setArray(array.filter((m,id)=> { return array[id]!==array[index] }))

}
function handleEdit(index){
  seteditedText(array[index]);
  setindexNumberforEdit(index);
  seteditMode (true);
  // console.log(indexNumberforEdit)
  // console.log(editMode)
  
}
function handleSave(index){ //typedtext = niranjana
          //array = [siva, madhadeva, bhava, rudra]
  seteditMode(false);   //index = 2
  newArray = array;
  newArray[index] = editedText;
  setArray(newArray);
}
function editfunction(event){
  seteditedText(event.target.value);

}

 
// setTimeout(() => {
//     setArray(['hara']);
//   }, 9000);
  return (
    <div>
        <input className='sivainput' type="text" placeholder='Tasks' onChange={list} value={typedtext}></input>
    <button className='siva'onClick={submit}>Submit</button>
    {/* <div className='sivaarray'>{array}</div> */}

    <div className='make-flex'>
    {
      array.map((m,index) => 
      <div className='gridpedadham'>
        { editMode===true 
                          ? indexNumberforEdit === index ? <input type ="text" onChange={editfunction} value={editedText}></input>
                                                          : <div className='child'>{m}</div>
                          : <div className='child'>{m}</div> }

        {editMode===true 
          ? indexNumberforEdit === index ? 
         <button className='editbutton' onClick={() => handleSave(index)}>SAVE</button> : <button className='editbutton' onClick={() => handleEdit(index)}>EDIT</button>
                                                                                                  
                 : <button className='editbutton' onClick={() => handleEdit(index)}>EDIT</button>}
        <button className='deletebutton' onClick={() => handleDelete(index)}>DELETE</button>
        
      </div>
      )
    }
    </div>
    </div>
  )
}


export default Todo