'use client'

export default function NotFoundPage() {
  if (typeof window !== 'undefined') {
    window.location.href = '/'
  }
}