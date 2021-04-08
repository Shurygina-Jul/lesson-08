import block from 'bem-cn'
import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import './Author.css'

interface Props {
}

const b = block('author')


export const Author: React.FC<Props> = () => {
  return<div className={b()}>
  Authors
</div>

}

function App() {
  
  const [appState, setAppState] = useState();
  
  useEffect(() => {
    const apiUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
    });
  }, [setAppState]);

 
  return (
    <div className="app">
    
    </div>
  );
}

export default App;