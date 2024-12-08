'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ShoppingCart, User } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('products')

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/img/logo.png"
              alt="BuildSource"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            <Link
              href="/products"
              className={cn(
                "text-gray-900 hover:text-gray-900 px-1 py-2 text-sm font-medium relative",
                activeLink === 'products' && "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-900"
              )}
            >
              Products
            </Link>
            <Link
              href="/projects"
              className="text-gray-900 hover:text-gray-900 px-1 py-2 text-sm font-medium"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-gray-900 px-1 py-2 text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-gray-900 hover:text-gray-900">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="text-gray-900 hover:text-gray-900">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

