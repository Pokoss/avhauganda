import React, { useState } from 'react'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { Link } from '@inertiajs/react';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>



      <nav className="flex flex-wrap items-center justify-between shadow-lg bg-green-900 sticky top-0 z-50">
        <div className="container flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className='flex lg:hidden items-center py-2 px-4 bg-white'>
              <Link href='/'>
                <img className='h-8 object-contain' src='/Images/logo.jpg' alt="AVAH logo" />
              </Link>
              <Link href='/'>
                <h1 className="relative pl-5 text-lg text-gray-900 font-bold tracking-tight">
                  AVHA UGANDA
                </h1>
              </Link>
            </div>

            <div className='flex items-center'>
              <span className='text-white cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'>
                <Popover>
                  <PopoverHandler>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </PopoverHandler>

                </Popover>
              </span>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>

          <div onClick={() => setNavbarOpen(false)} className={"lg:flex flex-grow flex-col md:flex-row" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
            <div className='hidden lg:flex items-center bg-white py-2 px-8'>
              <Link href='/'>
                <img className='h-12 object-contain' src='/Images/logo.jpg' alt="AVAH logo" />
              </Link>
              <Link href='/'>
                <h1 className="relative pl-5 xl:text-2xl ml-3 text-gray-900 font-bold tracking-tight">
                  AVHA UGANDA
                </h1>
              </Link>
            </div>


            <ul className="flex flex-col lg:flex-row items-center list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center   leading-snug text-white hover:opacity-75"
                  href="/">
                  <span className="ml-2">
                    <Typography>
                      Home
                      </Typography>
                      </span>
                </Link>
              </li>
              <li className="nav-item">
                <Menu>
                  <MenuHandler>
                    <div className='cursor-pointer text-white ml-3'>
                      <Typography>
                    Programs
                      </Typography>
                    </div>
                  </MenuHandler>
                  <MenuList>
                  <Link href='/rmncah' className='w-full h-full'><MenuItem>RMNCAH</MenuItem></Link>
                  <Link href='/hivaidstb' className='w-full h-full'><MenuItem>HIV & AIDS/TB</MenuItem></Link>
                  <Link href='/watsan' className='w-full h-full'><MenuItem>Water and Sanitation</MenuItem></Link>
                  <Link href='/advocacy' className='w-full h-full'><MenuItem>Advocacy Activities</MenuItem></Link>
                  </MenuList>
                </Menu>
                {/* <a
                  className="px-3 py-2 flex items-center   leading-snug text-white hover:opacity-75"
                  href="https://www.youtube.com/@SSGTVSouthSudanGlobal" target='_blank'
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">RMNCAH</span>
                </a> */}
              </li>
              <li>
                <Link
                  className="px-3 py-2 flex items-center   leading-snug text-white hover:opacity-75"
                  href="/gallery"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-3">
                    <Typography>
                    Gallery
                    </Typography>
                    </span>
                </Link>
              </li>
              <li>

                <Link
                  className="px-3 py-2 flex items-center   leading-snug text-white hover:opacity-75"
                  href="/about-us"
                >
                  <i className="fab fa-pinterest leading-md text-white opacity-75"></i><span className="ml-3">
                    <Typography>
                    About Us
                    </Typography>
                    </span>
                </Link>
              </li>
              {/* <li>

                <Link
                  className="px-3 py-2 flex items-center   leading-snug text-white hover:opacity-75"
                  href="/donate"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-3">
                    <Typography>
                    Donate
                    </Typography>
                    </span>
                </Link>
              </li> */}


            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar