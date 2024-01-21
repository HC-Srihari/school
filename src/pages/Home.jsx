import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../carouselImages/1.jpg'
import img2 from '../carouselImages/2.jpg'
import img3 from '../carouselImages/3.jpg'

function Home() {

    //images list
     const carouselImages = [
   img1,
   img2,
   img3
  ];

   const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };


  //testimoials
  const testimonials = [
    {
      id: 1,
      name: 'Ramesh',
      text: 'Our experience with Karnataka Public School has been outstanding. The dedicated teachers and excellent facilities have made a significant impact on our child\'s education.',
    },
    {
      id: 2,
      name: 'Surekha',
      text: 'I am impressed with the holistic approach to education at KPS. The focus on both academics and extracurricular activities has contributed to the overall development of my child.',
    },
    {
      id: 3,
      name: "Mohan",
      text: 'KPS provides a nurturing environment for students to thrive. The supportive staff and engaging curriculum have created a positive learning experience for our family.',
    },
  ];
  return (
   <>
     {/* Carousel */}
      <div className="container mx-auto mt-8 p-4">
        {/* <h2 className="text-3xl font-bold mb-4">Image Carousel</h2> */}
        <Slider {...sliderSettings}>
          {carouselImages.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`Image ${index + 1}`} className="w-full h-80 object-cover rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>


      <div className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Testimonials</h1>
          <h2 className="text-3xl font-bold mb-8 text-center">What Parents Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-800">{testimonial.text}</p>
                <div className="mt-4">
                  <p className="font-semibold"> - {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>~

     
   </>
  )
}

export default Home
