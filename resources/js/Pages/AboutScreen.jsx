import React from 'react'
import Layout from './Components/Layout'
import Teamcard from './Components/Teamcard'
import { Typography } from '@material-tailwind/react'

function AboutScreen() {
  const employees = [
    {
      'id': '1',
      'name': 'Opoka Daniel',
      'title': 'Software Developer',
      'image': 'https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
      'facebook': '',
      "twitter": '',
      "linkedIn": ''
    },
    {
      'id': '1',
      'name': 'Opoka Daniel',
      'title': 'Software Developer',
      'image': 'https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
      'facebook': '',
      "twitter": '',
      "linkedIn": ''
    },
    {
      'id': '1',
      'name': 'Opoka Daniel',
      'title': 'Software Developer',
      'image': 'https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
      'facebook': '',
      "twitter": '',
      "linkedIn": ''
    },
    {
      'id': '1',
      'name': 'Opoka Daniel',
      'title': 'Software Developer',
      'image': 'https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
      'facebook': '',
      "twitter": '',
      "linkedIn": ''
    },
  ]

  return (
    <div>
      <div>
        <div id="about" className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100"></polygon>
              </svg>

              <div className="pt-1"></div>

              <main className="mt-5 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                    Who we are
                  </h2>
                  <p className='pr-4'>

                    <Typography>

                      Association of Volunteers for Health Action (AVHA) – Uganda is an established Non-governmental Organization (NGO) with its head office in Northern Uganda in Gulu City. The organisation operates in the Acholi sub region covering the districts of Gulu, Amuru, Nwoya, and Amuru. This region has a history of over 20 years of civil war between the rebels of the Lord’s Resistance Army (LRA) and the Ugandan Government which ended around 2006 after the two warrying parties – Government and the LRA – signed a Peace Agreement. To date, however, the impact of the war remains visible in all service sectors, with health being one of the most hit. Other challenges include limited access to safe water, limited access to health services, high prevalence of HIV/AIDS, poor indicators for Reproductive, Maternal, Neonatal, Child and Adolescent health and inadequate access to health information, among others. Therefore, there is need for a concrete, collective and multi-sectoral course of action to address these challenges.
                      AVHA - Uganda has its origins in the Gulu School of Clinical Officers in 2000 where an informal group, mainly composed of students regularly met for academic discussion. And because of what these students had experienced since they lived in the war-ravaged area and the conditions in which their parents, brothers and sisters were subjected to live in, they resolved to form a health club called Student’s Volunteer Health Club (SVHC). The major objective was to make a contribution towards alleviating the suffering of their people in the Internally Displaced People’s Camps (IDPs). Many of the club members participated in the treatment and prevention of the Ebola viral outbreak in Gulu (2000-2001).
                      In 2005, the members of this Students Movement regrouped to form AVHA-Uganda, a bigger organization with broader aims and objectives and comprising of members with varied experience and specialties, ranging from the field of health discipline to the humanities and social sciences.
                      AVHA now boasts of a strong team available and committed to deliver quality health interventions in the community.

                    </Typography>
                  </p>

                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" src="/Images/Web/hero1.jpg" alt="" />
          </div>
        </div>

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

                        "Welcome to AVHA-Uganda: Making a Difference in Health Action"<br /><br />

                        "Established in Northern Uganda's Gulu City, AVHA-Uganda is a reputable non-governmental organization (NGO) dedicated to improving health and well-being in the Acholi sub-region. Our organization traces its roots back to the year 2000 when a group of students from the war-ravaged area gathered at the Gulu School of Clinical Officers for academic discussions. Witnessing the challenging conditions their community faced, they decided to form a health club known as the Student's Volunteer Health Club (SVHC)."<br /><br />

                        "Driven by a deep desire to alleviate the suffering of their people residing in the Internally Displaced People's Camps (IDPs), the members of SVHC actively participated in treating and preventing the Ebola viral outbreak in Gulu between 2000 and 2001."<br /><br />

                        "In 2005, the SVHC members regrouped and established AVHA-Uganda as a more substantial organization with broader aims and objectives. Our team now consists of dedicated individuals with diverse backgrounds, ranging from health disciplines to humanities and social sciences. Together, we are committed to delivering high-quality health interventions to the community."<br /><br />

                        "Today, AVHA-Uganda stands as a beacon of hope, working tirelessly to address the health challenges faced by our region. With a focus on Reproductive, Maternal, Newborn, Child, and Adolescent Health (RMNCAH), Water and Sanitation (WATSAN), HIV & AIDS/TB, Human Resources for Health (HRH), as well as policy and advocacy, we believe in making a tangible difference in the lives of individuals, families, and communities."<br /><br />

                        "Join us on our journey as we strive to create a healthy community where individuals are empowered to take charge of their health and contribute to the overall development of our country."

                    </Typography>
                    {/* </p> */}
                </div>



            </div>
            {/*End Events and Travel Section Section*/}
    


      </div>
    </div>
  )
}
AboutScreen.layout = page => <Layout children={page} />
export default AboutScreen