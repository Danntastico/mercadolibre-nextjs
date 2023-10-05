import '@/styles/pages/home.scss'
import { IconSearch } from '@tabler/icons-react';

export default function Home() {
  return (
    <div className='home-container'>
      <IconSearch color='grey' size={100} />
      <h2>¡Bienvenido!</h2>
      <h3>Buscar productos, marcas y más...</h3>
    </div>
  )
}
