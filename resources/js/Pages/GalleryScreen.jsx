import React from 'react'
import Layout from './Components/Layout'
import { Tooltip } from '@material-tailwind/react'

function GalleryScreen() {
  return (
    <div>
      <div className="text-center mt-5">
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Our<span className="text-green-800"> Gallery</span>
        </h3>
      </div>
      {/* <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-10">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
            </div>
          </div>
          <div class="flex w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
            </div>
          </div>
        </div>
      </div> */}


      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <Tooltip content="" placement="bottom">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="/Images/Web/hero2.jpg" />
              </Tooltip>
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <Tooltip content="" placement="bottom">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="/Images/Web/hero3.jpg" />
              </Tooltip>
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <Tooltip content="" placement="bottom">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="/Images/Web/avha20.jpg" />
              </Tooltip>
            </div>    
          </div>''
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <Tooltip content="" placement="bottom">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="/Images/Web/hero1.jpg" />
              </Tooltip>
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <Tooltip content="" placement="bottom">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="/Images/Web/avha25.jpg" />
              </Tooltip>
            </div>

            
          </div>
            

        </div>
      </div>




    </div>
  )
}
GalleryScreen.layout = page => <Layout children={page} />
export default GalleryScreen