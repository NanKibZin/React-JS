
// import { images } from './SlideData';

// const State02 = () => {

//   const [imageIndex, setImageIndex] = useState(0);

//   const handleNext = () => {
   
//     if (imageIndex < images.length - 1 ) {
//       setImageIndex(imageIndex + 1);
//     } else {
//       setImageIndex(0);
//     }
//   }
//   const handlePrevious = () => {
//     if (imageIndex > 0) {
//       setImageIndex(imageIndex - 1);
//     } else {
//       setImageIndex(images.length - 1);
//     }
//   }
//   const slideIndex = images[imageIndex];
//   return (
//     <div className=' container d-flex justify-content-center'>

//         <div className="">
//             <div className="slide">
//                 <img width={400} height={300} src={slideIndex.img} alt="" />
//             </div>
//             <div className="mt-3 d-flex justify-content-between  align-items-center">
//                 <button className='btn btn-danger' onClick={handlePrevious}>previous</button>
//                 <button className='btn btn-primary' onClick={handleNext}>next</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default State02

import { useState } from 'react';
import { image } from '../data/slideImage'
const Slide = () => {
    const [imgIndex,setImgIndex]=useState(0);
    const handleNext = () => {
        if (imgIndex < image.length - 1 ) {
                  setImgIndex(imgIndex + 1);
                } else {
                  setImgIndex(0);
                } 
    }
    const handlePrevious = () => {
        if (imgIndex > 0) {
                  setImgIndex(imgIndex - 1);
                } else {
                  setImgIndex(image.length - 1);
                }
    }
    const imgSlide=image[imgIndex];
  return (
    <div className='container'>
        <div className="text">
        <h4>ecopoe,discover,traval</h4>
        <h1>TRAVEL ARROUND THE WORLD</h1>
        <a href="#" className='btn'>discover more</a>
        </div>
       <div className="slide">
        <div className='img'>
            <img src={imgSlide.img} alt="" />
        </div>
    
        <a href="#">
             <i className="fas fa-angle-left left" onClick={handlePrevious}></i>
        </a>
        <a href="#">
            <i className="fas fa-angle-right right" onClick={handleNext}></i>
        </a>
        
       </div>
    </div>
  )
}

export default Slide
