'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen)
  }

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-left">
          <Link href="/" className="logo">
            <Image src="/img/logo.png" alt="Logo" width={85} height={65} />
          </Link>
          <div className="nav-links">
            <Link href="/materials">Products</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="nav-right">
          <div className="user-profile" id="user-profile">
            <Image
              src="/img/user.png"
              alt="user"
              width={40}
              height={40}
              onClick={toggleUserDropdown}
            />

            {isUserDropdownOpen && (
              <div className="user-dropdown">
                <div className="user-info">
                  <p><strong>Ariana Guial</strong></p>
                  <p>ariana.guial@example.com</p>
                </div>
                <button className="sign-out-btn">Sign Out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

