import Image from "next/image"
import { signIn } from "next-auth/react"

function Login() {
  return (
    <div className="py-20 grid space-y-12 place-items-center">
        <Image src="https://links.papareact.com/t4i"
        className="py-10"
        alt=""
        height={400}
        width={400}
        objectfit="contain" />
        <h1 
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer hover:bg-blue-800">Login with Facebook</h1>
    </div>
  )
}

export default Login