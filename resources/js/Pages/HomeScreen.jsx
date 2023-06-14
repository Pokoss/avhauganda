import React from 'react'
import Layout from './Components/Layout'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Input, Typography } from '@material-tailwind/react';
import { Link, useForm } from '@inertiajs/react';

function HomeScreen() {
    const contactForm = useForm({
        'name': null,
        'email': null,
        'message': null
    });

    const handleSubmitContact = e => {
        e.preventDefault();
        contactForm.post('/contact', {
            preserveScroll: true, preserveState: true,
            onSuccess: ()=>{
                contactForm.reset()
            } 
        })
    }

    return (
        <div>




            {/* Hero Section */}
            <div className="relative">
                <div className='absolute inset-0 w-full'>

                    <Splide options={{ autoplay: true, rewind: true, arrows: false }}>
                        <SplideSlide>
                            <img
                                src="/Images/Web/hero1.jpg"
                                className="h-[750px] object-cover w-full xl:h-[600px]"
                                alt=""
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <img
                                src="/Images/Web/hero2.jpg"
                                className="h-[750px] object-cover w-full xl:h-[600px]"
                                alt=""
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <img
                                src="/Images/Web/hero3.jpg"
                                className="h-[750px] object-cover w-full xl:h-[600px]"
                                alt=""
                            />
                        </SplideSlide>
                    </Splide>
                </div>
                <div className="relative h-[750px] xl:h-[650px]">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-center xl:flex-row">
                            <div className="bg-black grid place-items-center mt-32 items-center bg-opacity-30 p-3 rounded-lg mb-12 xl:mb-0 xl:pr-16 xl:w-8/12 ">

                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    AVHA    < span className="text-light-green-400"> UGANDA</span>
                                </h2>
                                {/* <p className="max-w-xl mb-4 text-base text-gray-100 md:text-lg font-thin"> */}
                                <Typography color='white'>

                                    AVHA-Uganda is an NGO based in Gulu City, Northern Uganda, addressing the impact of the civil war on healthcare and other challenges. It originated as a student health club in 2000 and later formed AVHA-Uganda in 2005. With a diverse team, AVHA is committed to delivering quality health interventions in the community.
                                </Typography>
                                {/* </p> */}
                                <Link
                                    href="/about-us"
                                    aria-label=""
                                    className="mt-4 inline-flex text-white items-center font-semibold tracking-wider transition-colors duration-200 rounded p-2 bg-green-700 hover:bg-green-400"
                                >
                                    <Typography>

                                        Learn more
                                    </Typography>
                                    <svg
                                        className="inline-block w-3 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                    </svg>
                                </Link>
                            </div>

                            {/* <div className="w-full max-w-xl xl:px-8 xl:w-5/12 opacity-70   hover:opacity-100">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10 " data-aos='zoom-in-left'>
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Book your perfect getaway trip
                  </h3>
                  <form onSubmit={handleSubmitContact}>
                    <div className='my-2'>
                      <Input color="green" label='Name' value={contactForm.data.name ?? ''} onChange={e => contactForm.setData('name', e.target.value)} />
                    </div>
                    <div className='my-2'>
                      <Input color="green" label='Email' value={contactForm.data.email ?? ''} onChange={e => contactForm.setData('email', e.target.value)} />
                    </div>
                    <div className='my-2'>
                      <Input color="green" label='Phone' value={contactForm.data.phone ?? ''} onChange={e => contactForm.setData('phone', e.target.value)} />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      >
                        Send
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      We look forword to planning your trip
                    </p>
                  </form>
                </div>
              </div> */}



                        </div>
                    </div>
                </div>
            </div>
            {/*End Hero Section*/}






            {/* Hero Section */}
            
            {/*End Hero Section */}





            

            {/*Consultation  Section*/}
            <div className="max-w-xl mx-auto text-center pt-10 md:py-4" data-aos='fade-down'>
                <div className="w-24 h-2 bg-green-800 mb-4 mx-auto"></div>
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">COMMITMENT</h2>

            </div>
            <div className='w-full'>
                <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            {/* <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">AVHA UGANDA'S COMMINTMENT TO ADDRESSING HEALTH CHALLENGES</h1> */}
                            {/* <p class="my-4 text-gray-600 dark:text-gray-300"> */}
                            <Typography>

                                "Our community in the Acholi sub-region has endured the devastating effects of a prolonged civil war that spanned over 20 years. The conflict between the Lord's Resistance Army (LRA) rebels and the Ugandan Government inflicted immense suffering and left a lasting impact on all sectors, particularly in the realm of healthcare. Today, even after the signing of a Peace Agreement in 2006, the repercussions of the war continue to manifest in limited access to safe water, inadequate healthcare services, a high prevalence of HIV/AIDS, poor reproductive, maternal, neonatal, child, and adolescent health indicators, and insufficient access to health information, among other challenges."<br /><br />

                                "At AVHA-Uganda, we recognize the urgent need for a united and multi-sectoral approach to tackle these challenges head-on. We believe that only through concrete and collective action can we bring about sustainable change and uplift our community. By partnering with the government, development agencies, and local stakeholders, we aim to forge a path towards a brighter future, where the scars of war are healed, and the well-being of our people is restored."
                            </Typography>

                            {/* </p> */}
                            {/* <Link href="/consultation" className="inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Consult with us</Link> */}

                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img class="object-cover w-full h-full max-w-2xl rounded-md" src="/Images/Web/IMG-20210806-WA0035.jpg" alt="glasses photo" />
                    </div>
                </div>
            </div>

            {/*End consultation section*/}

            {/* Slogan Section*/}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>

                        <div className="max-w-xl mx-auto text-center py-10 md:py-10">
                            <div className="w-24 h-2 bg-green-800 mb-4 mx-auto" data-aos='fade-down'></div>
                        </div>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        Rebuilding Lives, Restoring Hope: Addressing the Legacy of Conflict

                    </h2>
                    {/* <p className="text-base text-gray-700 md:text-lg"> */}
                    <Typography>

                        The civil war that ravaged our community in the Acholi sub-region for over two decades has left an indelible mark on the lives of our people. The conflict between the Lord's Resistance Army (LRA) rebels and the Ugandan Government brought about unimaginable suffering, displacements, and loss. As we emerge from the shadows of this dark chapter, it is crucial to recognize the profound impact of the civil war and the urgent need for collective action to address the resulting challenges.
                    </Typography>
                    {/* </p> */}
                </div>
                <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
                    <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                        <div className="mr-4">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-3 text-xl font-bold leading-5">Health System Devastation</h6>
                            {/* <p className="mb-3 text-sm text-gray-900"> */}
                            <Typography>

                                The impact of the civil war on our health system has been staggering. The conflict disrupted healthcare services, destroyed infrastructure, and created a widespread sense of fear and mistrust. Even after the signing of the Peace Agreement, the scars remain evident. Limited access to safe water, inadequate healthcare facilities, and a lack of health information continue to plague our community. The prevalence of HIV/AIDS, coupled with poor indicators for reproductive, maternal, neonatal, child, and adolescent health, demands immediate attention.
                            </Typography>
                            {/* </p> */}

                        </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                        <div className="mr-4">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-3 text-xl font-bold leading-5">
                                Socio-economic Implications
                            </h6>
                            {/* <p className="mb-3 text-sm text-gray-900"> */}
                            <Typography>

                                The civil war's aftermath has deeply affected our socio-economic landscape. Displacement and loss of livelihoods have crippled many families, exacerbating poverty and food insecurity. Rebuilding shattered lives and restoring economic stability requires a unified effort. Collective action is essential to provide sustainable solutions, create opportunities for economic empowerment, and break the cycle of poverty that the conflict perpetuated.
                            </Typography>
                            {/* </p> */}

                        </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                        <div className="mr-4">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-3 text-xl font-bold leading-5">
                                Psychological Trauma and Healing
                            </h6>
                            {/* <p className="mb-3 text-sm text-gray-900"> */}
                            <Typography>

                                The psychological toll of the civil war cannot be underestimated. Our community bears the weight of trauma, including the loss of loved ones, forced separations, and witnessing unimaginable atrocities. Healing from these wounds necessitates collective action. By prioritizing mental health support, counseling, and trauma-informed care, we can foster resilience and restore hope in the hearts of our people.
                            </Typography>
                            {/* </p> */}

                        </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                        <div className="mr-4">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-3 text-xl font-bold leading-5">
                                Education and Reintegration
                            </h6>
                            {/* <p className="mb-3 text-sm text-gray-900"> */}
                            <Typography>

                                The civil war disrupted the education of countless children, denying them the opportunity to learn and grow. As we rebuild our society, prioritizing education and facilitating the reintegration of affected individuals is paramount. Collective action can ensure that children receive quality education, access vocational training, and have the chance to rebuild their lives with hope for a brighter future.
                            </Typography>
                            {/* </p> */}

                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                {/* <p className="text-base text-gray-700 md:text-lg"> */}
                <Typography>

                    The impact of the civil war on our community is far-reaching, but we refuse to let it define our future. We stand united, recognizing the need for collective action to address the challenges we face. Together, we can rebuild our health system, uplift socio-economic conditions, heal psychological wounds, and provide education opportunities for our youth. By joining hands, we can pave the way for a resilient and thriving community, where the scars of the past become testimonies of our strength and unity in the face of adversity.
                </Typography>
                {/* </p> */}
            </div>
            {/* End Slogan Section*/}


            <div className="container my-24 px-6 mx-auto">


<section className="mb-32 text-gray-800">

  <div className="relative overflow-hidden h-96 bg-no-repeat bg-cover" style={{ backgroundPosition: '50%', backgroundImage: "url('/Images/Web/avha25.jpg')", backgroundAttachment: 'fixed', backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
  >
    <div className="max-w-xl mx-auto text-center pt-10 md:py-10" data-aos='fade-down'>
      <div className="w-24 h-2 bg-green-800 mb-4 mx-auto"></div>
      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">Contact Us</h2>
    </div>
  </div>
  <div className="container text-gray-800 px-4 md:px-12" style={{ marginTop: "-200px", background: 'hsla(0, 0%, 100%, 0.8)' }}>
    <div className="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6" style={{ backdropFilter: "blur(20px)" }}
    >
      <div className="flex flex-wrap" data-aos='zoom-in-left' >
        <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
          <form>
            <div className="form-group mb-6">
              <input type="text" className="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                placeholder="Name" />
            </div>
            <div className="form-group mb-6">
              <input type="email" className="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                placeholder="Email address" />
            </div>
            <div className="form-group mb-6">
              <textarea className="
      form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
            </div>
            <div className="form-group form-check text-center mb-6">
              <input type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                id="exampleCheck87" />
              <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck87">Send me a copy of this
                message</label>
            </div>
            <button type="submit" className="w-full px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Send
            </button>
          </form>
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
          <div className="flex flex-wrap">
            <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
              <div className="flex items-start bg-white p-2 rounded bg-opacity-70">
                <div className="shrink-0">
                  <div className="p-4 bg-primary rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" className="w-5 text-white"
                      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                      </path>
                    </svg>
                  </div>
                </div>
                <div className="grow ml-6">
                  <p className="font-bold mb-1 text-gray-600 text-sm md:text-base leading-relaxed">Call Us</p>
                  <p className="font-light text-gray-600 text-sm md:text-base leading-relaxed">+256 756 777 995</p>
                </div>
              </div>
            </div>
            <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6 ">
              <div className="flex items-start bg-white p-2 rounded bg-opacity-70">
                <div className="shrink-0">
                  <div className="p-4 bg-primary rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>

                  </div>
                </div>
                <div className="grow ml-6">
                  <p className="font-bold mb-1 text-gray-600 text-sm md:text-base leading-relaxed">Email</p>
                  <p className="font-light text-gray-600 text-xs leading-relaxed">info@avhauganda.com</p>
                </div>
              </div>
            </div>
            <div className="mb-12 md:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
              <div className="flex align-start bg-white p-2 rounded bg-opacity-70">
                <div className="shrink-0">
                  <div className="p-4 bg-primary rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="white" className="h-5">
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </div>
                </div>
                <div className="grow ml-6">
                  <p className="font-bold mb-1 text-gray-600 text-sm md:text-base leading-relaxed">Twitter</p>
                  <p className="font-light text-gray-600 text-sm md:text-base leading-relaxed">@avhauganda</p>
                </div>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
              <div className="flex align-start bg-white p-2 rounded bg-opacity-70">
                <div className="shrink-0">
                  <div className="p-4 bg-primary rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="white" className="h-5 ">
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </div>
                </div>
                <div className="grow ml-6">
                  <p className="font-bold mb-1 text-gray-600 text-sm md:text-base leading-relaxed">Facebook</p>
                  <p className="font-light text-gray-600 text-sm md:text-base leading-relaxed">AVHA UGANDA</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>


</div>


        </div>
    )
}
HomeScreen.layout = page => <Layout children={page} />
export default HomeScreen