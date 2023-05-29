import React from 'react'
import Layout from './Components/Layout'
import { Typography } from '@material-tailwind/react'

function AdvocacyScreen() {
  return (
     <main>
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{
        minHeight: "75vh"
      }}>
      <div className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: "url('/Images/Web/hero2.jpg')"
        }}>
        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl">
                <Typography variant='h1'>

                Advocacy Activities
                </Typography>
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                <Typography>

                Advocacy plays a vital role in creating sustainable change and addressing the root causes of health and social challenges. At AVHA, we are committed to advocating for policies and practices that prioritize the well-being of individuals and communities in Uganda. Through our advocacy activities, we aim to raise awareness, influence decision-makers, and mobilize collective action to bring about positive transformations in the healthcare sector and beyond.
                </Typography>
              </p>
            </div>
          </div>

        </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: "70px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>

    <section className="pb-20 bg-gray-300 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">


          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                  <i className="fas fa-retweet"></i>
                </div>
                <h6 className="text-xl font-semibold">
                  Our Approach
                </h6>
                <p className="mt-2 mb-4 text-gray-600">
                  <Typography>
                  Our Advocacy Activities focus on the following key areas:
                  </Typography>
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
              <i className="fas fa-user-friends text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Health Policy and Governance
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            We advocate for policies that promote equitable access to quality healthcare services for all. We engage with government entities, policymakers, and relevant stakeholders to shape health policies, strengthen health systems, and improve the overall delivery of healthcare in Uganda.
             
            </p>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
              <img
                alt="..."
                src="/Images/Web/hero3.jpg"
                className="w-full align-middle rounded-t-lg"
              />
              
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="relative py-20">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src="/Images/Web/avha24.jpg"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                <i className="fas fa-rocket text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold">
              Community Empowerment
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
              AVHA believes in empowering communities to voice their needs and contribute to decision-making processes. We facilitate community dialogues, workshops, and training sessions to build the capacity of individuals and community leaders in advocating for their rights and promoting community-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


   
   
    <section className="pb-20 bg-gray-300 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
              <i className="fas fa-user-friends text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Social Determinants of Health
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            We recognize that health outcomes are influenced by various social determinants, such as education, gender equality, poverty, and environmental factors. AVHA advocates for policies and interventions that address these determinants and create enabling environments for individuals and communities to thrive
             
            </p>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
              <img
                alt="..."
                src="/Images/Web/avha21.jpg"
                className="w-full align-middle rounded-t-lg"
              />
              
            </div>
          </div>

        </div>
      </div>
    </section>
   
   
    <section className="relative py-20">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src="/Images/Web/avha2.jpg"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                <i className="fas fa-rocket text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold">
              Gender Equality and Women's Empowerment
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
              AVHA is dedicated to promoting gender equality and empowering women and girls. We advocate for policies and initiatives that address gender-based violence, promote reproductive health rights, and ensure equal access to healthcare, education, and economic opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
   
   
   
    {/* <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">
              Here are our heroes
            </h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              According to the National Oceanic and Atmospheric
              Administration, Ted, Scambos, NSIDClead scentist, puts the
              potentially record maximum.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src={"/Images/Web/20210329_184046.jpg"}
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">
                  Ryan Tompson
                </h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Web Developer
                </p>
                <div className="mt-6">
                  <button
                    className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button
                    className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-dribbble"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src={"/Images/Web/20210329_184046.jpg"}
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">
                  Romina Hadid
                </h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Marketing Specialist
                </p>
                <div className="mt-6">
                  <button
                    className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-google"></i>
                  </button>
                  <button
                    className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src={"/Images/Web/20210329_184046.jpg"}
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">
                  Alexa Smith
                </h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  UI/UX Designer
                </p>
                <div className="mt-6">
                  <button
                    className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-google"></i>
                  </button>
                  <button
                    className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src={"/Images/Web/20210329_184046.jpg"}
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">
                  Jenna Kardi
                </h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Founder and CEO
                </p>
                <div className="mt-6">
                  <button
                    className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-dribbble"></i>
                  </button>
                  <button
                    className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-google"></i>
                  </button>
                  <button
                    className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    <section className="pb-20 bg-gray-300 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
              <i className="fas fa-user-friends text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Partnerships and Collaboration
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            We actively engage in partnerships and collaborations with like-minded organizations, networks, and alliances to amplify our advocacy efforts. By joining forces, we strengthen our collective voice, share knowledge and resources, and advocate for systemic changes that benefit the most vulnerable populations.
             
            </p>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
              <img
                alt="..."
                src="/Images/Web/avha25.jpg"
                className="w-full align-middle rounded-t-lg"
              />
             
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="pb-20 relative block bg-gray-900">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-900 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
        
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
            Through our Advocacy Activities, we aim to foster an enabling environment where individuals can access quality healthcare, participate in decision-making processes, and enjoy improved health outcomes. Together, we can create a society that prioritizes health, equality, and social justice.
            </p>
          </div>
        </div>
        
      </div>
    </section>
    <section className="relative block py-24 lg:pt-0 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">
                  Want to work with us?
                </h4>
                <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                  Complete this form and we will get back to you in 24 hours.
                </p>
                <div className="relative w-full mb-3 mt-8">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="full-name"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Full Name"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Email"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    cols="80"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Type a message..."
                  />
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}
AdvocacyScreen.layout = page => <Layout children={page} />
export default AdvocacyScreen