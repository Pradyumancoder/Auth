import { Box, Button, Image, Input, Link, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Google from "../assets/google.png"
function Login() {
  let Navigate = useNavigate()
const [data,setdata]=useState([])
const [cred,setcred]=useState({email:"",password:""})

 const handlechange=(e)=>{
  let {name,value}=e.target
  setcred({...cred,[name]:value})
 }
  const handlesubmit=(e)=>{
   
    e.preventDefault()
    let correctdata=false;
    for(let i=0;i<data.length;i++){
      if(data[i].email==cred.email && data[i].password==cred.password){
           correctdata=true;
           break;
      }
    }
    if(correctdata){
      Navigate("/user")
    }else{
      alert("put invalid cred...")
    }
  }

  useEffect(()=>{
    axios.get("https://mockserver-230o.onrender.com/userdata")
    .then((res)=>{
      console.log(res.data)
      setdata(res.data)
    })
    // .catch((err)=>{
    //   console.log("not match with previous data")
    // })
  } ,[])

  const handleclick=()=>{
     Navigate("/signup")
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
      <Box><Image margin="auto" src="https://sso.masaischool.com/brand_dark.svg"></Image> </Box>

      <Box h="300px" w="450px"  margin="auto" marginTop="20px">

        <Text textAlign="left">*Email</Text>
        <Input onChange={handlechange} type="email" name="email" value={cred.email} outlineColor="GrayText"></Input>

        <Text textAlign="left">*Password</Text> 
        <Input onChange={handlechange} type="password" name="password" value={cred.password} outlineColor="GrayText"></Input>
            <Box w="400px"  margin="auto" marginTop="20px">
            <Button type='submit' w="400px" color="white" bg="grey" _hover="none">SIGN IN</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button  w="400px" color="black" bg="fffff" outlineColor="blackAlpha.500" >
              <Image w="20px"  src={Google}></Image>
              &nbsp;
              Continue With Google</Button>
               <Text>Ready have an account? <Link color='blue' href='#'  onClick={handleclick}  >Sign Up</Link></Text>
            </Box>
      </Box>
      </form>
    </div>
  )
}

export default Login