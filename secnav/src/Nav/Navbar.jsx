import React from 'react'
import {Stack,Button,Box}from "@chakra-ui/react"
import Signup from '../Auth/Signup'
import Jobform from '../Admin/Jobform'
import Joblisting from '../Admin/Joblisting'
import Login from '../Auth/Login'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'


function Navbar() {

  return (
    <Box bg="lightcoral" color="white">
<Stack direction='row' spacing={4} align='center' justifyContent="space-between">
 <Link to={"/authenticate"} >
 <Button colorScheme='teal' variant='solid'>
    Authenticate
  </Button>
  </Link> 

 <Link to={"/admin"}>
 <Button colorScheme='teal' variant='solid'>Admin</Button>
 </Link>
 <Link to={"/user"}>
 <Button colorScheme='teal' variant='solid'>User</Button>
 </Link>
</Stack>

    </Box>
  )
}

export default Navbar