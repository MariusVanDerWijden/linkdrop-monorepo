import React from 'react'
import variables from 'variables'

const Copy = props => (
  <svg width={30} height={30} fill='none' {...props}>
    <path
      d='M28.27 0H7.5c-.954 0-1.73.776-1.73 1.73v4.04H1.73C.777 5.77 0 6.545 0 7.5v20.77C0 29.224.776 30 1.73 30H22.5c.955 0 1.73-.776 1.73-1.73v-4.04h4.04c.954 0 1.73-.775 1.73-1.73V1.73C30 .777 29.224 0 28.27 0zm-5.193 28.27a.577.577 0 0 1-.577.576H1.73a.577.577 0 0 1-.576-.576V7.5c0-.318.259-.577.577-.577H22.5c.317 0 .576.26.576.577v20.77zm5.77-5.77a.577.577 0 0 1-.577.577h-4.04V7.5c0-.954-.775-1.73-1.73-1.73H6.923V1.73c0-.317.26-.576.577-.576h20.77c.318 0 .576.259.576.577V22.5z'
      fill={variables.blackColor}
    />
  </svg>
)

export default Copy