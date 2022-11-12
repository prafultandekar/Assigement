import { Box } from '@mui/system'
import React from 'react'

export default function Element({item,handleElement}) {

   

  return (
    <Box onClick={()=>handleElement(item) }>
        {item}
    </Box >
  )
}
