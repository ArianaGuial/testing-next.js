'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      setError('Please fill out all required fields')
    } else {
      setError('')
      // Here you would typically handle the sign-in logic
      console.log('Signing in...')
      // Redirect to materials page after successful sign-in
      setTimeout(() => {
        router.push('/materials')
      }, 1000)
    }
  }

  return (
    <div className="container">
      <div className="signin-card">
        <h1>Sign In</h1>
        <p className="subtitle">Welcome back! Please enter your details</p>

        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link href="#" className="forgot-password">Forgot password?</Link>
          </div>
        
          <button type="submit" className="signin-button">Sign In</button>
        
          {error && <p className="error-message">{error}</p>}

          <p className="signup-prompt">
            Don't have an account? <Link href="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

