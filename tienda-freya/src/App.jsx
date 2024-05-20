import './App.css'
import NavBar from './componentes/NavBar/NavBar.jsx'

import ItemListContainer from './containers/itemListContainer/itemListContainer.jsx'

function App() {
  return(

    <div>
      <NavBar/>
      <ItemListContainer greeting='Valido entender el uso de props'/>
    </div>
    
  )
}

export default App
  

 

