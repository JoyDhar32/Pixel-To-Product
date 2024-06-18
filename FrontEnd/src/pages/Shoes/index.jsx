import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <>
    <section className="py-2 bg-white sm:py-16 lg:py-8 lg:pb-20">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our Available 3D Models</h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">
            Explore full 3D views of our models and customize every pixel to your liking. Experience a new level of personalization with our interactive features

            </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-2">
           
           
           <Link to="casual">
            <div className="relative group">
           
                <div className="overflow-hidden " >
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={'/images/casualShoe.png'} alt="" />
                </div>
               
                <div className="absolute left-3 top-3">
                    <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">Dynamic & Manual</p>
                </div>
                <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                          
                               Customizable Casual Shoes
                                <span className="absolute inset-0" aria-hidden="true"></span>
                            
                        </h3>
                     
                    </div>

                    <div className="text-right">
                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">$99.00</p>
                    </div>
                </div>
            </div>
</Link>
            <Link to="airforce">
            <div className="relative group">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="/images/nike.png" alt="" />
                </div>
                <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                    <div className="absolute left-3 top-3">
                    <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">Dynamic</p>
                </div>
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                         
                            Customizable Nike Airforce Shoes
                                <span className="absolute inset-0" aria-hidden="true"></span>
                            
                        </h3>
                        
                    </div>

                    <div className="text-right">
                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">$199.00</p>
                    </div>
                </div>
            </div>
            </Link>

          
            
        </div>
    </div>
</section>

    </>
  )
}

export default index