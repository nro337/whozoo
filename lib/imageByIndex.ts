import image1 from '../assets/images/slide-1.jpg'
import image2 from '../assets/images/slide-2.jpg'

export const images: string[] = [image1.src, image2.src]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex