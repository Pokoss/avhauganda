import React from 'react'
import Layout from './Components/Layout'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Input, Typography } from '@material-tailwind/react';
import { Link } from '@inertiajs/react';

function HomeScreen() {
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
                <div className="relative h-[750px] bg-gray-900 bg-opacity-50 xl:h-[600px]">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    AVHA    < span className="text-green-900"> UGANDA</span>
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
                                    Learn more
                                    <svg
                                        className="inline-block w-3 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="w-full max-w-xl xl:px-8 xl:w-5/12 opacity-40 hover:opacity-95">
                                <div className="bg-white rounded shadow-2xl p-5 sm:p-7">
                                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                        Contact Us
                                    </h3>
                                    <form>
                                        <div className='my-4'>
                                            <Input color="green" label='Name' />
                                        </div>
                                        <div className='my-4'>
                                            <Input color="green" label='Email' />
                                        </div>
                                        <div className='my-4'>
                                            <Input color="green" label='Reason' />
                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-900 hover:bg-green-500 focus:shadow-outline focus:outline-none"
                                            >
                                                Contact
                                            </button>
                                        </div>
                                        <p className="text-xs text-gray-600 sm:text-sm">
                                            We appriate your intrest in us
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Hero Section*/}



            {/*Mission Section*/}
            <div className="grid grid-cols-1 md:grid-cols-2">

                <div className="bg-white p-12 md:p-24 flex justify-end items-center">
                    <a href="" data-aos='fade-right'>
                        <img src="/Images/Web/mission.png" className="w-full max-w-md" />
                    </a>
                </div>

                <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
                    <div className="max-w-md" data-aos='fade-left'>
                        <div className="w-24 h-2 bg-green-800 mb-4"></div>
                        <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">Mission</h2>
                        {/* <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed"> */}
                        <Typography>
                            AVHA Mission is to partner with the government and development agencies to provide health services, promote environmental health, safe water and nutritional support to achieve good health for the people.
                        </Typography>
                        {/* </p> */}
                        {/* <a href="" className="inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Book Now</a> */}
                    </div>
                </div>

            </div>

            {/* End Mission Section*/}

            {/* Vision Section Section*/}
            <div className="grid grid-cols-1 md:grid-cols-2">


                <div className="bg-white p-12 md:p-24 flex justify-start items-center">
                    <a href="" data-aos='fade-left'>
                        <img src="/Images/Web/vision.png" className="w-full max-w-md" />
                    </a>
                </div>

                <div className="md:order-first bg-gray-100 p-12 md:p-24 flex justify-end items-center">
                    <div className="max-w-md" data-aos='fade-right'>
                        <div className="w-24 h-2 bg-green-800 mb-4"></div>
                        <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">Vision</h2>
                        {/* <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed"> */}
                        <Typography>

                            AVHA envisions a healthy community in which individuals, families and communities take charge of their health and are able to play their role in the development of the country. This vision aspires for the realization of a healthy and developed community.
                        </Typography>
                        {/* </p> */}
                        {/* <a href="" className="inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Book Custom Package</a> */}
                    </div>
                </div>

            </div>

            {/* End Vision Section Section*/}
            {/*Core Values Section*/}
            <div className="grid grid-cols-1 md:grid-cols-2">

                <div className="bg-white p-12 md:p-24 flex justify-end items-center">
                    <a href="" data-aos='fade-right'>
                        <img src="/Images/Web/values.png" className="w-full max-w-md" />
                    </a>
                </div>

                <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
                    <div className="max-w-md" data-aos='fade-left'>
                        <div className="w-24 h-2 bg-green-800 mb-4"></div>
                        <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">Core Values</h2>
                        {/* <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed"> */}
                        <Typography>
                            AVHA works with integrity and commitment to improve the health of the people and strives to be fully accountable, transparent and cost effective. We are committed to learning and innovation and to giving our full support to the schools education programme.
                        </Typography>
                        {/* </p> */}

                    </div>
                </div>

            </div>

            {/* End About Section*/}

            {/* Events and Travel Section Section*/}
            <div style={{ backgroundImage: 'url("/Images/Web/20210329_184046.jpg")', backgroundAttachment: 'fixed', backgroundSize: "cover", backgroundRepeat: "no-repeat" }} >
                <div className="w-full px-20 mx-auto text-center pt-10 md:py-10 bg-black bg-opacity-70" data-aos='fade-down'>
                    <div className="w-24 h-2 bg-green-800 mb-4 mx-auto"></div>
                    <h2 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-8">History of AVHA</h2>

                    {/* <p className="font-light text-white mb-6 leading-relaxed" data-aos='fade-left'> */}
                    <Typography color='white'>

                        "Welcome to AVHA-Uganda: Making a Difference in Health Action"<br/><br/>

                        "Established in Northern Uganda's Gulu City, AVHA-Uganda is a reputable non-governmental organization (NGO) dedicated to improving health and well-being in the Acholi sub-region. Our organization traces its roots back to the year 2000 when a group of students from the war-ravaged area gathered at the Gulu School of Clinical Officers for academic discussions. Witnessing the challenging conditions their community faced, they decided to form a health club known as the Student's Volunteer Health Club (SVHC)."<br/><br/>

                        "Driven by a deep desire to alleviate the suffering of their people residing in the Internally Displaced People's Camps (IDPs), the members of SVHC actively participated in treating and preventing the Ebola viral outbreak in Gulu between 2000 and 2001."<br/><br/>

                        "In 2005, the SVHC members regrouped and established AVHA-Uganda as a more substantial organization with broader aims and objectives. Our team now consists of dedicated individuals with diverse backgrounds, ranging from health disciplines to humanities and social sciences. Together, we are committed to delivering high-quality health interventions to the community."<br/><br/>

                        "Today, AVHA-Uganda stands as a beacon of hope, working tirelessly to address the health challenges faced by our region. With a focus on Reproductive, Maternal, Newborn, Child, and Adolescent Health (RMNCAH), Water and Sanitation (WATSAN), HIV & AIDS/TB, Human Resources for Health (HRH), as well as policy and advocacy, we believe in making a tangible difference in the lives of individuals, families, and communities."<br/><br/>

                        "Join us on our journey as we strive to create a healthy community where individuals are empowered to take charge of their health and contribute to the overall development of our country."

                    </Typography>
                    {/* </p> */}
                </div>



            </div>
            {/*End Events and Travel Section Section*/}

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

                                "Our community in the Acholi sub-region has endured the devastating effects of a prolonged civil war that spanned over 20 years. The conflict between the Lord's Resistance Army (LRA) rebels and the Ugandan Government inflicted immense suffering and left a lasting impact on all sectors, particularly in the realm of healthcare. Today, even after the signing of a Peace Agreement in 2006, the repercussions of the war continue to manifest in limited access to safe water, inadequate healthcare services, a high prevalence of HIV/AIDS, poor reproductive, maternal, neonatal, child, and adolescent health indicators, and insufficient access to health information, among other challenges."<br/><br/>

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





        </div>
    )
}
HomeScreen.layout = page => <Layout children={page} />
export default HomeScreen