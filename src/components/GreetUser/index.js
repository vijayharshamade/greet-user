import {useState} from 'react'

import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => {
  const [name, setName] = useState('')
  // console.log(useState('')) The useState accepts the initial value as an argument
  // output : ['', ƒ]   The useState returns an array with two values
  // the current state and a function to update it
  // console.log(name) vijay
  // console.log(setName) f()

  // console.log(name) // React preserves the state variables between the re - renders ie R Ra Rah Rahu Rahul
  // console.log('Component Re rendered')
  // In Function Component when the state updates , the component re - renders and Entire Component will be called
  const onChangeName = event => setName(event.target.value)

  return (
    <MainContainer>
      <NameInput
        type="text"
        placeholder="Your name"
        value={name}
        onChange={onChangeName}
      />
      <MsgContent>
        Hello <NameText>{name}</NameText>
      </MsgContent>
    </MainContainer>
  )
}

export default GreetUser
