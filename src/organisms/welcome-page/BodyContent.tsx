import Button from '@/atom/Button'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import welcomeLogo from '@/assets/images/welcome-logo.png'
import AuthPage from '@/template/auth';


function BodyContent() {
  const [isAuthPageOpen, setIsAuthPageOpen] = React.useState(false)

  const handleEmailAuthentication = () => {
    console.log('Email Authentication')
    setIsAuthPageOpen(true)
  }
  return (
    <main>
      <div className="relative w-full h-screen bg-cover bg-center flex items-center justify-center " >

        <div className="px-6 mt-[80%] rounded-lg text-center w-11/12 max-w-md text-white">
          <span>
            <img src={welcomeLogo} alt="Discover St. Kitts & Nevis" className="mx-auto w-28" />
            <h1 className="text-xl font-bold mt-4">Experience the Real Saint Kitts & Nevis</h1>
            <p className="text-xs mt-2">Discover the heart of Saint Kitts & Nevis through authentic, local experiences</p>
          </span>
          <div className="mt-6 space-y-3">

            <Button
              label="Continue with  Google"
              containerClassName="w-full flex items-center justify-center bg-white text-black py-2 rounded-full py-2"
              buttonClassName=" text-sm"
              icon={<FcGoogle className="w-5 h-5 mr-2" />}
            />
            <Button
              label="Continue with Facebook"
              containerClassName='w-full flex items-center justify-center bg-white text-black py-2 rounded-full py-2'
              buttonClassName=" text-sm"
              icon={<IoLogoFacebook className="w-5 h-5 mr-2 text-cyan-500" />}
            />

            <Button
              label="Continue with Email"
              handleClick={handleEmailAuthentication}
              containerClassName="w-full flex items-center justify-center bg-gray-500 bg-opacity-50 py-2 rounded-full py-2"
              buttonClassName="bg-transparent text-white text-sm"
            />
          </div>

          <p className="text-xs mt-4 text-gray-300">
            By signing up you agree to our <a href="#" className="underline">Terms and Conditions</a> and <a href="#" className="underline">Privacy Policy</a>
          </p>
        </div>
      </div>
      {/*  Auth Page */}
      {isAuthPageOpen &&
        <AuthPage onClose={() => setIsAuthPageOpen(false)} />
      }
    </main>
  )
}

export default BodyContent

