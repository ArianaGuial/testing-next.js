import Image from 'next/image'

const featuredMaterials = [
  {
    id: 'sand',
    name: 'Construction Sand',
    description: 'Fine quality sand for construction use',
    image: '/img/constructionsand.png',
  },
  {
    id: 'gravel',
    name: 'Gravel',
    description: 'Mixed size gravel for various uses',
    image: '/img/gravel.png',
  },
  {
    id: 'timber',
    name: 'Timber',
    description: 'Treated timber for construction',
    image: '/img/constructiontimber.png',
  },
]

export default function MaterialGrid() {
  return (
    <section className="grid-section">
      <h2>Featured Materials</h2>
      <div className="materials-grid">
        {featuredMaterials.map((material) => (
          <div key={material.id} className="grid-item">
            <Image src={material.image} alt={material.name} width={250} height={200} />
            <h3>{material.name}</h3>
            <p>{material.description}</p>
            <button className="view-details-btn" data-material-id={material.id}>View Details</button>
          </div>
        ))}
      </div>
    </section>
  )
}

