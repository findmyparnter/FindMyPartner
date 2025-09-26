import { Person } from '@/types/blog'
import AnimatedImage from './AnimatedImage'
import { Phone, User, Info } from 'lucide-react'

type Props = {
  person: Person
}

export default function ProfileCard({ person }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="text-center">
        <div className="mb-4">
          <AnimatedImage
            src={person.image}
            alt={`${person.name}'s profile picture`}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full mx-auto object-cover"
          />
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-1">{person.name}</h3>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center justify-center">
            <User className="w-4 h-4 mr-2" />
            <span>Age {person.age}</span>
          </div>
          
          <div className="flex items-center justify-center">
            <Phone className="w-4 h-4 mr-2" />
            <span className="font-mono">{person.phone}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-start text-sm text-gray-600">
            <Info className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-left">{person.about}</p>
          </div>
        </div>
      </div>
    </div>
  )
}