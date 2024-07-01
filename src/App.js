import { useState, useEffect } from 'react';
import "./App.css";

const Header = () => {
  return (
    <header className='header'>
      <h1 style={style}>Vignere Cipher</h1>
    </header>
  );  
}

const createTabulaRecta = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const length = alphabet.length;
  var tabulaRecta = [];
  for (let i = 0; i < length; i++) {
    tabulaRecta[i] = [];
    for (let j = 0; j < length; j++) {
      const newIndex = (i + j) % length;
      tabulaRecta[i][j] = alphabet[newIndex];
    }
  }  
  return tabulaRecta;
}

const App = () => {
  const [table, setTable] = useState([]);

  useEffect(() => {
    const tabulaRecta = createTabulaRecta();
    setTable(tabulaRecta);
  }, []);

  return (
    <>
    <Header />
    <table className='tabulaRecta'>
      <tbody>
        {table.map((row, i) => {
           return <tr key={i}>
            {row.map((col, colIndex) => {
              return <td key={colIndex}>{col}</td>
            })}
          </tr>
        })}
      </tbody>
    </table>
    </>
  );
}

export default App;
