import React from 'react'
import Container from "../../components/common/containerClass/index"
import { IoClose } from "react-icons/io5";

import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import tables from "../../assets/home/new5.png"
import { BsCheck } from 'react-icons/bs';


const CartPage = (props) => {
  return (
      <div>
          <Container>
        <div>
            <div className="relative z-10 w-full" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <div className="pointer-events-auto w-screen max-w-md">
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div className="flex items-start gap-28">
                                            <div className=" flex h-7 items-center">
                                                      <button
                                                          onClick={props.closeCart}
                                                          className='p-[10px] bg-[#f8f7fb] rounded-full'>
                                               <IoClose className='w-6 h-6 text-black hover:text-[#7c71df]'/>
                                           </button>
                                            
                                            </div>
                                        <h2 className="text-[20px] font-medium text-gray-900" id="slide-over-title">Cart</h2>
                                        </div>

                                        <div className="mt-8">
                                            <div className="flow-root">
                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                    <li className="flex py-6">
                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                  <img src= {tables} alt='tables' className='h-full w-full object-cover object-center'/>
                                                        </div>

                                                        <div className="ml-4 flex flex-1 flex-col justify-between">
                                                            <div>
                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                    <h3 className=''>
                                                                    Luxe Armchair -
                                                                    Left Arm Chute
                                                                    </h3>
                                                                    <p className="ml-4 text-[14px] text-[#7c71df]">$899.00</p>
                                                                </div>
                                                            </div>
                                                            
                                                                  <div className='flex items-end justify-between'>
                                                                      
                                                                  <ul className='flex flex-row gap-2 '>
                                                                      <li 
                                                                      className={`h-7 w-7 lg:w-11 lg:h-11 bg-[#ae918c] border flex items-center justify-center rounded-full cursor-pointer`}
                                                                        >
                                                                       <span><BsCheck className='text-white text-xl md:text-lg lg:text-2xl' /></span>
                                                                      </li>
                                                                          
                                                                      <li 
                                                                      className={`h-7 w-7 lg:w-11 lg:h-11 bg-[#ae918c] border flex items-center justify-center rounded-full cursor-pointer`}
                                                                        >
                                                                       <span><BsCheck className='text-white text-xl md:text-lg lg:text-2xl'/></span>
                                                                          </li>
                                                                      </ul>
                                                                      

                                                                <div className='flex items-center gap-1'>
                                                                    <button
                                                                        className="cursor-pointer items-center font-bold text-xl border justify-center duration-100 text-[#7c71df]"
                                                                    >
                                                                        <IoMdArrowDropdown />
                                                                    </button>
                                                                    <div className="flex flex-wrap gap-4">
                                                                        0
                                                                    </div>
                                                                    <button
                                                                        className="cursor-pointer items-center font-bold text-xl border justify-center duration-100 text-[#7c71df]">
                                                                        <IoMdArrowDropup />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="flex py-6">
                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                            <img src={tables} alt="tables"className="h-full w-full object-cover object-center" />
                                                        </div>

                                                        <div className="ml-4 flex flex-1 flex-col justify-between">
                                                            <div>
                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                    <h3>
                                                                        <a href="#">Medium Stuff Satchel</a>
                                                                    </h3>
                                                                    <p className="ml-4">$32.00</p>
                                                                </div>
                                                            </div>
                                                              <div className='flex items-end justify-between'>
                                                              <ul className='flex flex-row gap-2 '>
                                                                      <li 
                                                                      className={`h-7 w-7 lg:w-11 lg:h-11 bg-[#ae918c] border flex items-center justify-center rounded-full cursor-pointer`}
                                                                        >
                                                                       <span><BsCheck className='text-white text-xl md:text-lg lg:text-2xl' /></span>
                                                                      </li>
                                                                          
                                                                      <li 
                                                                      className={`h-7 w-7 lg:w-11 lg:h-11 bg-[#ae918c] border flex items-center justify-center rounded-full cursor-pointer`}
                                                                        >
                                                                       <span><BsCheck className='text-white text-xl md:text-lg lg:text-2xl'/></span>
                                                                          </li>
                                                                      </ul>

                                                                <div className='flex items-center gap-1'>
                                                                    <button
                                                                        className="cursor-pointer items-center font-bold text-xl border justify-center duration-100 text-[#7c71df]"
                                                                    >
                                                                        <IoMdArrowDropdown />
                                                                    </button>
                                                                    <div className="flex flex-wrap gap-4">
                                                                        0
                                                                    </div>
                                                                    <button
                                                                        className="cursor-pointer items-center font-bold text-xl border justify-center duration-100 text-[#7c71df]">
                                                                        <IoMdArrowDropup />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>$262.00</p>
                                        </div>
                                        <div className="mt-6">
                                            <a href="/checkout" className="flex items-center justify-center rounded-md border border-transparent bg-[#7c71df] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-60 duration-200">Next</a>
                                        </div>
                                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                or
                                                <button
                                                    type="button"
                                                    className="font-medium text-black duration-200 hover:text-[#7c71df] ml-2"
                                                    
                                                >
                                                    Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>             


          </Container>
    </div>
  )
}

export default CartPage