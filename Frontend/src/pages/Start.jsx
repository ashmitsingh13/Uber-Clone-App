import { Link } from "react-router-dom"

const Start = () => {
  return (
    <>
    <div className="h-screen w-full bg-[url('/images/Uber-Home.png')] bg-cover bg-center flex flex-col justify-between pt-8">
        <img className="w-16 ml-8" src="/images/Uber-Logo.png" alt="Uber Logo"/>
        <div className="bg-white pb-7 py-4 px-4">
            <h2 className="text-3xl font-bold">Get Started With Uber</h2>
            <Link to='/user/login' className=" flex items-center justify-center w-full bg-black text-white py-3 rounded-md mt-4">Continue</Link>
        </div>
    </div>
    </>
  )
}

export default Start;