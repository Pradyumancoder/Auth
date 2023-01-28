import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Authenticate() {
  return (
    <div>
       <Link to={"/login"}>
       <Button>
            Login
        </Button>
        </Link> 

      <Link to={"/signup"}>
         <Button>
            Signup
        </Button>
        </Link> 

    </div>
  )
}

export default Authenticate