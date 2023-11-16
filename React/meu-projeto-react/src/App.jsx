import { useState } from "react"

const minhaLista = [
  { id: 1, value: 'Fruta'},
  { id: 2, value: 'Legume'},
  { id: 3, value: 'Carne'}
]


function App() {

  const [produtos, setProdutos] = useState(minhaLista)
    
  return produtos.map( (item) => {
      return (
          <div key={item.id}>
              <h4>{item.value}</h4>
          </div>
      )
  })

}



export default App
