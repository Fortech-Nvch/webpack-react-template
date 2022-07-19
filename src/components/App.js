import React from 'react'
import './App.css'
import './App2.scss'
import { Box } from '@mui/system'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { observer } from 'mobx-react-lite'

import { mobxCounter } from '../mobx/mobxCounter'
import SvgIcon from '../icons/icon.svg'
import JpgIcon from '../icons/icon2.jpg'
import PngIcon from '../icons/icon3.png'

const RedBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`

const StyledIcon = styled.img`
  width: 100px;
  height: 100px;
  background-color: gray;
`

export const App = observer(() => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)

  return (
    <div>
      <h1>Hello world!</h1>
      <p id='text-example'>Some text!</p>

      <RedBox>Styled Component</RedBox>

      <Box
        display='flex'
        gap={1}
        mt={2}
        mb={2}
        sx={{ backgroundColor: '#f1e2e2' }}
      >
        <Typography color='AppWorkspace'>Material</Typography>
        <Typography color='GrayText'>components</Typography>
        <Typography color='GrayText'>Counter: {counter}</Typography>
      </Box>

      <Button type='primary' onClick={() => dispatch({ type: 'inc' })}>
        Antd buttom
      </Button>

      <Box mt={4} fontSize={40}>
        Mobx counter: {mobxCounter.count}
      </Box>
      <Button type='primary' onClick={() => mobxCounter.increase()}>
        Increment
      </Button>

      <Box mt={2}>
        <StyledIcon src={SvgIcon} alt='Svg Icon' />
        <StyledIcon src={JpgIcon} alt='Jpg Icon' />
        <StyledIcon src={PngIcon} alt='Png Icon' />
      </Box>
    </div>
  )
})
