import ImagePlaceholder from 'images/img-placeholder.jpeg'

export const getImageData = (name: string, url?: string): { url: string; alt: string } => ({
  url: url ?? ImagePlaceholder,
  alt: url ? name : 'Placeholder image',
})
