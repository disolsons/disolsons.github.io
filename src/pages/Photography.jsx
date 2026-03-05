import { useState, useEffect } from 'react'

const API = '/api'

export default function Photography() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadPhotos = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API}/photos`)
      if (!res.ok) throw new Error('Failed to load photos')
      const data = await res.json()
      setPhotos(data)
    } catch (err) {
      setError(err.message)
      setPhotos([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPhotos()
  }, [])

  return (
    <>
      <h2>★ PHOTOGRAPHY ★</h2>
      <p>Some of my favorite shots. Add your own below!</p>

      {error && <p className="gallery-error">{error}</p>}
      {loading && <p className="gallery-loading">Loading gallery…</p>}

      {!loading && photos.length === 0 && !error && (
        <p className="gallery-empty">No photos yet. Upload one above!</p>
      )}

      <div className="gallery-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="gallery-item">
            <img
              src={photo.url}
              alt={photo.alt || 'Gallery photo'}
              width={200}
              height={200}
              className="gallery-img"
            />
          </div>
        ))}
      </div>
    </>
  )
}
