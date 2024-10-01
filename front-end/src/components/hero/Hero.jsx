import React,{useState,useEffect} from 'react'
import './hero.css'

// images silde zone 
import image1 from '../../assets/vegetable/broccoli.jpeg'
import image2 from '../../assets/vegetable/carrot.jpeg'
import image3 from '../../assets/vegetable/chili.jpeg'
// array silde images 
 const images = [image1,image2,image3];

export default function Hero() {
  const [currentImageIndex,setCurrentImageIndex] = useState(0);

  //slide images loop
  useEffect(()=>{
    const interval =setInterval(()=>{
      setCurrentImageIndex((prevIndex)=>
      prevIndex === images.length - 1 ? 0: prevIndex +1);
    },3000);
    return () => clearInterval(interval);
  },[]);

  return (
    <div className="hero">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="hero-image"
      />
    </div>
  )
}
