import { logo } from '../assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* ---------Left Section-------- */}
            <div>
                <img className='mb-5 w-20' src={logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor magni repudiandae quos debitis fuga? Quis, consequuntur fugit dolorum necessitatibus voluptatibus ullam dolores quia? Optio sequi unde sunt voluptatibus, consectetur inventore sint </p>
            </div>

            {/* -------Center Section---------- */}
            <div>
                <p className='text-xl font-medium mb-5' >COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* ----------Right Section----------- */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+998(90)-123-45-67</li>
                    <li>greatstackdev@gm.cm</li>
                </ul>
            </div>
        </div>
        <div>
            {/* ----------Copyright Text------------- */}
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer