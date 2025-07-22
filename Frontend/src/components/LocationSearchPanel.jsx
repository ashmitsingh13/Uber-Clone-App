import React from 'react'

const LocationSearchPanel = ({setPanelOpen,setVehiclePanel}) => {

  const locations = [
  "Connaught Place, New Delhi, Delhi, India",
  "Andheri West, Mumbai, Maharashtra, India",
  "Indiranagar, Bangalore, Karnataka, India",
  "Salt Lake City, Kolkata, West Bengal, India",
  "T. Nagar, Chennai, Tamil Nadu, India",
  "Banjara Hills, Hyderabad, Telangana, India",
  "Koregaon Park, Pune, Maharashtra, India",
  "Malviya Nagar, Jaipur, Rajasthan, India",
  "Navrangpura, Ahmedabad, Gujarat, India",
  "Hazratganj, Lucknow, Uttar Pradesh, India"
];

  return (
    <div>
      {
        locations.map((elem,idx)=>{
          return (
        <div key={idx} onClick={()=>{
          setVehiclePanel(true)
          setPanelOpen(false)
        }} className='flex items-center active:border-black border-gray-50 border-2 p-3 rounded-xl justify-start gap-4 my-2'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-2-fill"></i></h2>
            <h4 className='font-medium'>{elem}</h4>
        </div>
          )
        })
      }
    </div>
  )
}

export default LocationSearchPanel