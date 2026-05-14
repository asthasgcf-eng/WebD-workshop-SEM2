import "./App.css";
import Props from "./assets/components/Props";
import UseState from "./assets/components/UseState";


function App() {
  const name='React JS Library'

  return (
    <>
      <h1>Hello {name}</h1>
      
      {/* <Props name="Astha gupta" rollno="25B018577394" course="B.Tech"/> */}
      <UseState/>
    </>
  )
}

export default App
   