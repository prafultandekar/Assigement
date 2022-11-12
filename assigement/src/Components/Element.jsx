import { Box } from '@mui/system'
import React from 'react'

export default function Element({item,handleElement,id}) {

   

  return (
    <Box onClick={()=>handleElement(item,id) }>
        {item}
    </Box >
  )
}
