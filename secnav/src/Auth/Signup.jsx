import { Box, Button, Image, Input, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
function Signup() {
  const [data, setdata] = useState({ name: "", email: "", password: "" })
  const navigate = useNavigate()
  const handlechange = (e) => {
    let { name, value } = e.target;
    setdata({ ...data, [name]: value })
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    axios.post("https://mockserver-230o.onrender.com/userdata", data)
      .then((res) => {
        console.log(res.data);
        navigate("/login")
      }).catch((err) => {
        console.log("showing an error")
        alert("some thing shown error")
      })
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <Box><Image margin="auto" src="https://sso.masaischool.com/brand_dark.svg"></Image> </Box>

        <Box h="300px" w="450px" margin="auto" marginTop="20px" >
          <Text textAlign="left">*Full Name</Text>
          <Input type="text" onChange={handlechange} name="name" value={data.name} outlineColor="GrayText" placeholder='full name'></Input>

          <Text textAlign="left">*Email</Text>
          <Input type="email" onChange={handlechange} name="email" value={data.email} outlineColor="GrayText" placeholder='email'></Input>
          <Text textAlign="left">*Password</Text>
          <Input type="password" name="password" value={data.password} onChange={handlechange} outlineColor="GrayText" placeholder='password'></Input>
          <Text fontSize="sm" noOfLines={[1, 2]}>By signing up,I accept the Masai school<Link color='blue.500' href='#' > <u>terms of service</u> </Link> and acknowledge the <Link color='blue.500' href='#' ><u> privacy Policy </u></Link></Text>
          <Box w="400px" margin="auto" marginTop="20px">

            <Button type='submit' w="400px" color="white" bg="grey" _hover="none">SIGN UP</Button>

            <Text>Ready have an account? <Link color='blue' href='#'><Button bg="white" w="60px" _hover="none" onClick={() => navigate("/login")}> Sign In</Button> </Link></Text>
          </Box>
        </Box>
      </form>
    </div>
  )
}

export default Signup