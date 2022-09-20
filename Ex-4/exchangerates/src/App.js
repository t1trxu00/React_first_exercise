import {useState} from 'react';

const URL = 'https://api.exchangerate-api.com/v4/latest/usd';


function App() {
  const [eur,setEur]=useState(0);
  const [gbp,setGbp]=useState(0);
  const [rate,setRate]=useState(0);

 /*  async function convert(e) {
    e.preventDefault();
    const response = await fetch(URL);
    const data = await response.json();
    setRate(data.rates.GBP);
    setGbp(eur * data.rates.GBP);
  } */

  async function convert(e) {
    e.preventDefault()
    try {
      const address = URL;
      const response = await fetch(address);
      
      if (response.ok) {
        const data = await response.json();
        console.log(data.rates.GBP);
        setRate(data.rates.GBP);
        setGbp(eur * data.rates.GBP);
      } else {
        alert(' Error retrieving exchange rates');
        console.log(response);
      }
    } catch (err) {
      alert(err);
      }
    }
  
    return (
   <div id="container">
    <form onSubmit={convert}>
      <div>
        <label>Eur</label>&nbsp;
        <input type="number" step="0.01"
        value={eur} onChange={e=> setEur(e.target.value)}/>
        <output>{rate}</output>
      </div>
      <div>
        <label>Gbp</label>
        <output>{gbp.toFixed(2)}</output>
      </div>
        <div>
          <button type="submit">Covert</button>
        </div>
    </form>
   </div>
  );
}
export default App;


