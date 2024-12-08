import Image from 'next/image'
import MaterialList from '../components/MaterialList'
import MaterialGrid from '../components/MaterialGrid'

export default function Materials() {
  return (
    <main>
      <header className="content-header">
        <h1>Construction Materials</h1>
        <p className="subtitle">Browse our selection of quality materials</p>
      </header>

      <MaterialList />
      <MaterialGrid />
    </main>
  )
}

