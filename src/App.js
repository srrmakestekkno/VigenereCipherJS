
import { useState, useEffect } from 'react';

const Header = () => {
  const style = {
    textAlign: "center",
    margin: 0,
    paddingTop: "6px",
    backgroundColor: "#111111",
    color: "white",
    height: "50px",
  };
  
  return <h1 style={style}>Vignere Cipher</h1>;
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
    <table style={{margin: "0 auto 0 auto"}}>
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
