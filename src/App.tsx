import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import PaginaDeVendas from './PaginaDeVendas'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/page-vendas" element={<PaginaDeVendas />} />
    </Routes>
  )
}

export default App