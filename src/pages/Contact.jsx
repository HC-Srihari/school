import React,{useState} from 'react'

function Contact() {

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server, show a success message, etc.)
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };
  return (
    <>
     
     <div className="container mx-auto mt-8 p-4 flex flex-col md:flex-row">
      {/* Left Side (Location and Contact Details) */}
      <div className="md:w-1/2 pr-4">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p>
          <strong>Karnataka Public School</strong>
        </p>
        <p>529, Somagiri, Ramteerth Nagar, Lakshmipuri Layout, Auto Nagar, Belagavi, Karnataka 590017</p>
        <p><b>Phone:</b> 123-456-7890</p>
        <p><b>Email : </b> sampleEmail@gmail.com</p>
      </div>

      {/* Right Side (Embedded Google Map) */}
      <div className="md:w-1/2">
        <iframe
          title="School Location"
          width="100%"
          height="400"
          style={{ border: '2px solid black' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d959.358273290289!2d74.54177732913985!3d15.886365689195674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf61fbdcbbb629%3A0x7ae4f9c05cc2904b!2sGovernment%20Kannada%20Medium%20High%20School!5e0!3m2!1sen!2sin!4v1677655292077!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

     <div className="max-w-lg mx-auto mt-4">
      <form onSubmit={handleSubmit} className="bg-blue-200 shadow-md rounded px-4 pt-6 pb-8 mb-4 ">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </button>
      </form>
    </div>
    
    </>
  )
}

export default Contact
