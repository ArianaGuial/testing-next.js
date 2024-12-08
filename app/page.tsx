import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const materials = [
  {
    id: 'cement',
    name: 'Portland Cement',
    description: 'High-quality Portland cement suitable for all construction needs. Available in bulk quantities.',
    image: '/img/portland-cement.jpg',
  },
  {
    id: 'steel-rebar',
    name: 'Steel Rebar',
    description: 'Construction grade steel reinforcement bars available in various sizes and specifications.',
    image: '/img/steel-rebar.jpg',
  },
]

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Construction Materials
        </h1>
        <p className="text-lg text-gray-600">
          Browse our selection of quality materials
        </p>
      </header>

      <div className="space-y-8">
        {materials.map((material) => (
          <Card key={material.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-72 h-72 relative">
                  <Image
                    src={material.image}
                    alt={material.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {material.name}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {material.description}
                  </p>
                  <Button variant="default" className="bg-gray-900 hover:bg-gray-800">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

