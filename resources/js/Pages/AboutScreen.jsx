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


    


      </div>
    </div>
  )
}
AboutScreen.layout = page => <Layout children={page} />
export default AboutScreen