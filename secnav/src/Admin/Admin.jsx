import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Admin = () => {
  return (
    <div style={{display:"flex" ,gap:"10px" ,placeContent:"center"}}>
       <Link to={'/joblisting'}>
       <Button>Joblisting</Button>
       </Link>
       <Link to={'/jobform'}>
       <Button>JobForm</Button>
       </Link>
    </div>
  )
}
