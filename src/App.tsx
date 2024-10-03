import { SplitScreen } from "./components/split-screen"

const LeftSideComp = () => {
  return (
    <h2>I'm left!</h2>
  )
}

const RightSideComp = () => {
  return (
    <h2>I'm right!</h2>
  )
}

function App() {
  return (
    <SplitScreen 
      Left={LeftSideComp}
      Right={RightSideComp}
    />
  )
}

export default App
