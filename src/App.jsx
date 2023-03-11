import { useState } from "react"
import axios from "axios"

function App() {

  let [fact, setFact] = useState({})
  let headers = {'Accept': 'application/json'}

  let getFact = () =>{

    axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en" , headers)
    .then((response) => {
    // handle success
    setFact(response)
    console.log(response)
     })
  .catch( (error) => {
    // handle error
    console.log(error);
  })
  .finally( () => {
    // always executed
    console.log("fact received")
  });

  }

  let text = ""
 
  Object.keys(fact).length === 0 ? text : (text = fact.data.text)

  return (
    <main className="container">


    <h1>React</h1>
    <h2>Useless Facts</h2>
    <div className="square">
      <button className="getFact" onClick={getFact}>Get Quote</button>
      <p className="fact">{text}</p>
    </div>
  </main>
  )
}

export default App
