import React from 'react'

interface Iimage {
  fallback: string;
  alt: string;
  src: string;
}

const Image = ({ fallback, alt, src, ...rest }: Iimage) => {
  const handleBrokenImage = (e: React.ChangeEvent<HTMLImageElement>) => e.target.src = fallback
  return <img {...rest} alt={alt} src={src} onError={handleBrokenImage} />
}

export default Image