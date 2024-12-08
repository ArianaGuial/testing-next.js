'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Please fill out all required fields')
    } else if (password !== confirmPassword) {
      setError('Passwords do not match')
    } else {
      setError('')
      // Here you would typically handle the registration logic
      console.log('Registering...')
      // Redirect to sign-in page after successful registration
      setTimeout(() => {
        router.push('/signin')
      }, 1000)
    }
  }

  return (
    <div className="container">
      <div className="signin-card">
        <h1>Create Account</h1>
        <p className="subtitle">Get started with your free account</p>

        <form id="create-account-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        
          <button type="submit" className="signin-button">Create Account</button>
        
          {error && <p className="error-message">{error}</p>}
        
          <p className="signup-prompt">
            Already have an account? <Link href="/signin">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

