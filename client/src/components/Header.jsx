import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div  className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 lg:px-44 sm:mt-20'>
      
        {/* ------Left Side Header------ */}
        <div>
            <h1 className='text-4xl sm:text-5xl font-bold text-zinc-800'>
              Remove the <br className='max-md:hidden'/>
                <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>background</span> from <br className='max-md:hidden' />
                images for free.
            </h1>

            <p className='my-6 text-[15px] text-gray-500'>Just you need to upload your image and you will get your img. <br className='max-sm:hidden' />
              Banti Ipsum has been the industry's standard dummy text ever.
            </p>

          <div>
            <input type="file" name="" id="upload1" hidden />
            <label
              className="text-white inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-500 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
              htmlFor="upload1"
            >
              <img src={assets.upload_btn_icon} alt="" />
              <p>Upload your image</p>
            </label>
          </div>
        </div>

         {/* ------Right Side Header------ */}
        <div className='w-full max-w-md'>
          <img src={assets.header_img} alt="" />
        </div>

    </div>
  )
}

export default Header
