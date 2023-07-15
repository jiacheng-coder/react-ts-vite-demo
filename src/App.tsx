import Demo from './components/hooks-useInput'
import ImmerjsDemo from './components/immerjs-demo'
import Home from './pages/Home'

type SuccessProps = {
  status: 'success'
  data: string
}
type FailProps = {
  status: 'fail'
  message: string
}
type Props = {
  time: Date
} & (SuccessProps | FailProps)

function App() {
  const a = 12
  const res: Props = {
    time: new Date(),
    status: 'success',
    data: 'It works',
  }
  return (
    <>
      <h1>Demo</h1>
      <Demo />
      <ImmerjsDemo />
      <Home />
    </>
  )
}

export default App
