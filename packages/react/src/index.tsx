import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  background: '$ignite500',
  borderRadius: '$md',
})

export function App() {
  return <Button>hello world</Button>  
}
