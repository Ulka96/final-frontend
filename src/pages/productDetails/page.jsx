import React from 'react'
import Container from '../../components/common/containerClass'


// React icons
import { FaStar } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";

// Images
import tables from "../../assets/home/new5.png"
import box from "../../assets/products/Box.png"
import leaf from "../../assets/products/Leaf.png"


const stars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const ProductDetailsPage = () => {
  return (
      <div>
        <Container>
              <div className='mt-11 flex flex-col md:flex-row lg:flex-row'>
                  <div className='w-[361px]'>
                      <img src={tables} alt="tables" />
                  </div>

                  <div className='flex flex-col mt-6 md:mt-0 lg:mt-0'>
                      <h1 className='text-[24px] w-[351px] font-bold'>Luxe Armchair - Left Arm Chute</h1>
                    <div className='flex flex-row items-center gap-4'>
                    <div className="flex flex-row items-center gap-1">
                   {stars.map((star) => (
                 <FaStar key={star.id} className="text-yellow-500 cursor-pointer" />
                    ))}
                        </div>
                          <p className='text-[14px] font-poppins text-[#5f6980]'>5 Customer Review</p>
                      </div>
                      
                      <div className='flex flex-row items-center gap-3 mt-5'>
                          <h1 className='text-[26px] text-[#8965c8] font-poppins font-semibold'>$899.00</h1>
                          <h2 className='text-[16px] text-[#bfc3cc] line-through '>$1999.00</h2>
                          <button className='py-1 px-2 w-[58px] bg-[#fddcdf] text-[#f65162] rounded-full'>-40%</button>
                      </div>

                      <div>
                          <p className='text-[#5f6980] mt-6 mb-8'>Ultra-functional and elegantly minimalist, our Luxe Armchair Collection draws inspiration from Nordic-style décor. It features a neutral color palette and natural wood accents, highlighted by uniquely designed hexagonal legs. </p>
                      </div>

                      <ul className='flex flex-row gap-4'>
                      <li 
                      className={`h-10 w-10 bg-[#ae918c] border flex items-center justify-center rounded-full cursor-pointer`}
                        >
                       <span><BsCheck className='text-white text-xl'/></span>
                      </li>
                          
                      <li 
                      className={`h-10 w-10 bg-[#ae918c] border flex items-center justify-center rounded-full cursor-pointer`}
                        >
                       <span><BsCheck className='text-white text-xl'/></span>
                          </li>
                      </ul>


                     <div className='flex flex-row gap-4 items-center'>
                      <div className="flex items-center justify-center  font-black my-8 border border-[#8965c8] rounded-full w-[123px]">
                     <button className="text-[16px] font-bold text-[#8965c8]">-</button>
                     <input
                       value={1}
                       type="number"
                       min="1"
                       max="100"
                       className="h-14 text-[16px] text-center font-semibold text-[#8965c8]"
                     />
                     <button  className="text-[16px] font-bold text-[#8965c8]">+</button>
                          </div>
                          
                          <div className='w-[130px] h-14 items-center justify-center flex font-semibold text-[#8965c8] border border-[#8965c8] rounded-full'>
                              <button >Add To Cart</button>
                          </div>
                      </div>
                      
                  </div>

                  <div className='flex flex-row gap-2 items-center'>
                    <div className='w-5 h-5' >
                      <img src={box} alt="box" />
                    </div>
                      <p>Free shipping included</p>
                  </div>
                  
                  <div className='flex flex-row gap-2 items-center mb-8 mt-5'>
                    <div className='w-5 h-5' >
                      <img src={leaf} alt="leaf" />
                    </div>
                      <p>Made from the best of materials sourced</p>
                   </div>
              
                  <div className='border border-[#d9d9d9] w-full'></div>

                  <div className='flex flex-row justify-center items-center gap-12 my-4'>
                      <h2 className='text-[16px] font-poppins font-bold'>Description</h2>
                      <h3 className='text-[16px] font-poppins text-[#9f9f9f]'>Reviews [5]</h3>
                  </div>
                  <div>
                      <p className='text-[12px] text-[#9f9f9f] text-justify'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.<br />
                      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                  </div>

                   
              </div>
        </Container>
    </div>
  )
}

export default ProductDetailsPage