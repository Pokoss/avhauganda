import React, { Fragment, useState } from 'react'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
  
} from "@material-tailwind/react";
import { Link, useForm } from '@inertiajs/react';
import FlutterWavePayment from '../FlatterwavePayment';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const { data, setData, processing, post, reset, errors, transform } = useForm();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  transform((data) => ({
    ...data,
    'activities': JSON.stringify((data.activities ?? '').split(',')),
    'addons': JSON.stringify((data.addons ?? '').split(',')),
  }));

  const [userName, setUsername] = useState();
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    post('/packages', {
      preserveScroll: true, preserveState: true,
      onSuccess: () => {
        // toast.success('We have received you request, we shall contact you shortly')
        reset();
        setData({});
        handleOpen();
      }
    });
  }

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
              <li>

              <Fragment>
                  <Button color='white' onClick={handleOpen}>
                    Donate
                  </Button>
                  <Dialog size='xl' open={open} handler={handleOpen}>
                    <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                      <DialogHeader>
                        <Typography variant="h5" color="blue-gray">
                          Thank you for supporting AVHA UGANDA
                        </Typography>
                      </DialogHeader>
                      <DialogBody divider className="grid items-center justify-center align-middle place-items-center">
                        <div className="mb-2 flex flex-col gap-3">
                          <Input color='green' size="lg" label="Full Name"
                            value={userName} onChange={e => setUsername(e.target.value)} error={errors.name} />
                          <Input color='green' size="lg" label="Email"
                            value={email} onChange={e => setEmail(e.target.value)} error={errors.email} />
                          <Input color='green' size="lg" label="Amount (UGX)" type='number'
                            value={amount} onChange={e => setAmount(e.target.value)} error={errors.amount} />
                          {/* <Input color='green' type='file' size="lg" label="Image" accept="image/*"
                    onChange={e => setData('image', e.target.files[0])} /> */}
                        
                          <Textarea color='green' size="lg" label="Few notes(optional)"
                            value={description} onChange={e => setDescription(e.target.value)} error={errors.description} />

                            <Typography>Note: The amount will be deducted in Ugandan shillings so the equivallent will be deducted from your account</Typography>
                    
                        </div>
                      </DialogBody>
                      <DialogFooter className="space-x-2">
                        <Button variant="text" color="blue-gray" onClick={handleOpen}>
                          close
                        </Button>
                        
                        <FlutterWavePayment amount={amount} email={email} username={userName} descrition={description}/>
                      </DialogFooter>
                    </form>
                  </Dialog>
                </Fragment>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar