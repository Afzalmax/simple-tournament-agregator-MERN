import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import './form.css'
import {useNavigate} from 'react-router-dom'
function Form() {
  const [name, setName] = useState('')
  const [sport, setsport] = useState('')
  const [mobile, setmobile] = useState('')
   const [image,setImage] = useState('');
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name){
    await axios.post('http://localhost:5001/users', { name, sport, mobile, image})
      .then(() => navigate('/'))
      .catch(err => console.log(err))
   
    }

  } 
  
  const handleFileUpload = async (e) =>{
      const file =e.target.files[0];
     const base64 = await coverToBase64(file);
     console.log(base64);
     setImage(base64);
     
     }

  return (
    <>
    <h1 style={{textAlign:'center'}}>Form</h1>
    <h3 style={{textAlign:'center'}}>Enter all the required details</h3>
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <div className='group'>
  <label htmlFor="name">
    Name<span className="required">*</span>:
  </label>
  <input type="text" id="name" name="name" required="" 
  onChange = {(e)=> setName(e.target.value)}/>
  <br></br>
  </div>
  <div className='group'>
  <label htmlFor="sport">
    Sport Name<span className="required">*</span>:
  </label>
  <input
    type="text"
    id="sport"
    name="sport"
    placeholder="sport name"
    required=""
    onChange = {(e)=> setsport(e.target.value)}
  />
  <br></br>
  </div>
  <div className='group'>
  <label htmlFor="mobile">
    Mobile Number<span className="required">*</span>:
  </label>
  <input
    type="number"
    id="mobile"
    name="mobile"
    placeholder="your mobile number"
    required=""
    onChange = {(e)=> setmobile(e.target.value)}
  />
  <br></br>
  </div>
  <div className='group'>
  <label htmlFor="image">Pamplet Upload:</label>
  <input type="file" id="image" name="image" accept="image/*" onChange={handleFileUpload}/>
  <br></br>
  </div>
  <button className="button" type="submit">Submit</button>
</form>
</div>

</>
  )
}
export default Form  
function coverToBase64(file){
  return new Promise((resolve,reject)=> {
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file);
    fileReader.onload = ()=>{
     resolve(fileReader.result)
    };
    fileReader.onerror =(error) => {
      reject(error)
    }
  })
}