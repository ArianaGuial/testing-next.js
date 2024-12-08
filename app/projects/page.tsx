import Image from 'next/image'

const projects = [
  {
    id: 'foundation',
    title: 'Foundation Completed',
    description: 'The foundation for Building A has been completed as of November 15. The site inspection report is scheduled for November 18.',
    image: '/img/foundation.jpg',
  },
  {
    id: 'scaffolding',
    title: 'Pending Tasks',
    description: '- Install scaffolding for the next phase\n- Review material inventory for plumbing and electrical works\n- Finalize contractor assignments for interior design',
    image: '/img/scaffolding.jpg',
  },
  {
    id: 'completed',
    title: 'Completed Milestones',
    description: '- Excavation completed on October 25\n- Permit approvals secured on November 1\n- Initial concrete pouring finalized on November 10.',
    image: '/img/completed.jpg',
  },
]

export default function Projects() {
  return (
    <main>
      <header className="content-header">
        <h1>Project Updates</h1>
        <p className="subtitle">See the active projects that are using our materials</p>
      </header>

      {projects.map((project) => (
        <div key={project.id} className="material-list-item">
          <div className="material-image">
            <Image src={project.image} alt={project.title} width={200} height={180} />
          </div>
          <div className="material-content">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </main>
  )
}

