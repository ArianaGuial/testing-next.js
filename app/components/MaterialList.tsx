import Image from 'next/image'

const materials = [
  {
    id: 'cement',
    name: 'Portland Cement',
    description: 'High-quality Portland cement suitable for all construction needs. Available in bulk quantities.',
    image: '/img/portlandcement.png',
  },
  {
    id: 'steel-rebar',
    name: 'Steel Rebar',
    description: 'Construction grade steel reinforcement bars available in various sizes and specifications.',
    image: '/img/steelrebar.png',
  },
  {
    id: 'clay-bricks',
    name: 'Clay Bricks',
    description: 'Premium quality clay bricks perfect for both structural and aesthetic applications.',
    image: '/img/claybricks.png',
  },
]

export default function MaterialList() {
  return (
    <section className="list-view">
      {materials.map((material) => (
        <div key={material.id} className="material-list-item">
          <div className="material-image">
            <Image src={material.image} alt={material.name} width={200} height={200} />
          </div>
          <div className="material-content">
            <h2>{material.name}</h2>
            <p>{material.description}</p>
            <button className="view-details-btn" data-material-id={material.id}>View Details</button>
          </div>
        </div>
      ))}
    </section>
  )
}

