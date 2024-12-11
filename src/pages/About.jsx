import { about_image } from "../assets"

const About = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>ABOUT <span className="text-gray-700 font-medium">US</span></p>
      </div>

      <div className=" my-10 flex flex-col md:flex-row gap-12">
        <img className=" w-full md:max-w-[360px]" src={about_image} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>Welcome to Prescripto, your trusted pertner in managing your healthcare needs conveniently and efficiently. at Prescripto,we understand the challanges individuals face when it comes to scheduling Doctor appointments and monoging their healthy records.</p>
          <p>Prescripto is committed to excellence in healthcase Technology. We continuously Strive to Enhonce Our platform. Integrating the latest advencements to imporve user exprience and deliver superior service</p>
          <b className="text-gray-800">Our Vision</b>
          <p>Our vision at Prescripto is to Create a seamless healthcare experience for every user. we Aim to Bridge the gap Between patients and healthcase Provider,making it easier for you to access the care you need, when you need it</p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>WHY <span className="text-gray-700 font-semibold">CHOOSE US</span> </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duraction-360 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>Streamliend appointment schedules that fits info your busy lifestyle.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duraction-360 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcase professionals in your area.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duraction-360 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About