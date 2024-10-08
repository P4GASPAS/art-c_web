import Image from "next/image"
import Link from "next/link"
import path from "@/public/images/path.json"

const LoginPage = () => {
  return (
    
    <div className="bg-white h-screen">
        <div className="w-full grid grid-cols-12">

        <div className="col-span-12 lg:col-span-6">

            <div className="m-8 lg:m-14">
                <Link href="#" className="bg-black text-white font-bold text-lg lg:text-xl p-4">Art-C</Link>
            </div>

            <div className="px-8 lg:px-28">
                <p className="text-center text-3xl">Welcome.</p>
                <form className="flex flex-col pt-3 lg:pt-8">
                    <div className="flex flex-col pt-4">
                        <label className="text-lg">Email</label>
                        <input type="email" id="email" placeholder="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div className="flex flex-col pt-4">
                        <label className="text-lg">Password</label>
                        <input type="password" id="password" placeholder="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <input type="submit" value="Log In" className="bg-primary text-white font-bold text-lg hover:bg-secondary hover:text-black p-2 mt-8 rounded-lg transition ease-out duration-300" />

                </form>

                <Line />

                <Links />

                <div className="text-center pt-12 md:pb-12">
                    <p>Don't have an account? <Link href={"/register"} className="underline font-semibold">Register here.</Link></p>
                </div>
            </div>

        </div>

        <div className="hidden lg:block col-span-6">
            <img className="object-cover w-full h-screen hidden md:block" src={path.login} />
        </div>
        </div>
    </div>
    
  )
}

const Line = () => {

    return (
        <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">Or</span>
            <div className="flex-grow border-t border-gray-400"></div>
        </div>
    )
}

const Links = () => {

    return (
        <div className="grid gap-1 md:gap-2 lg:grid-cols-12 lg:gap-4">
            <button className="bg-secondary text-white font-bold text-lg hover:bg-gray-800 p-2 rounded-lg col-span-4 transition ease-out duration-300">
                <svg
                data-v-54e46119=""
                width="30"
                height="22"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
                >
                <path
                    data-v-54e46119=""
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.3019 0C5.50526 0 0 5.50526 0 12.3019C0 17.7392 3.52669 22.3458 8.4127 23.977C9.0244 24.0902 9.25095 23.7126 9.25095 23.3804C9.25095 23.0858 9.2434 22.3156 9.23585 21.2885C5.81488 22.0286 5.08991 19.6422 5.08991 19.6422C4.53108 18.2225 3.72304 17.8373 3.72304 17.8373C2.60537 17.0746 3.80611 17.0897 3.80611 17.0897C5.03705 17.1803 5.69405 18.3584 5.69405 18.3584C6.78906 20.2388 8.57129 19.6951 9.27361 19.3779C9.38688 18.585 9.70406 18.0412 10.0514 17.7316C7.32524 17.4295 4.45556 16.3723 4.45556 11.66C4.45556 10.3158 4.93132 9.22074 5.72426 8.35984C5.59588 8.04266 5.17298 6.79662 5.83754 5.10501C5.83754 5.10501 6.87213 4.77274 9.22074 6.36616C10.2025 6.0943 11.2522 5.95837 12.3019 5.95082C13.344 5.95837 14.4013 6.0943 15.383 6.36616C17.7316 4.77274 18.7662 5.10501 18.7662 5.10501C19.4383 6.79662 19.0154 8.05021 18.887 8.35984C19.6724 9.22074 20.1482 10.3158 20.1482 11.66C20.1482 16.3874 17.271 17.422 14.5297 17.7316C14.9677 18.1092 15.3679 18.8644 15.3679 20.0123C15.3679 21.6586 15.3528 22.9801 15.3528 23.3879C15.3528 23.7202 15.5718 24.0978 16.1986 23.977C21.0846 22.3458 24.6038 17.7392 24.6038 12.3094C24.6038 5.50526 19.0985 0 12.3019 0Z"
                    fill="black"
                ></path>
                </svg>
            </button>

            <button className="bg-secondary text-white font-bold text-lg hover:bg-gray-800 p-2 rounded-lg col-span-4 transition ease-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 256 262" className="mx-auto">
                    <path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/>
                    <path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/>
                    <path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/>
                    <path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/>
                </svg>
            </button>

            <button className="bg-secondary text-white font-bold text-lg hover:bg-gray-800 p-2 rounded-lg col-span-4 transition ease-out duration-300">
                <svg width="30" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" className="mx-auto">
                    <path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"/>
                    <path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"/>
                </svg>
            </button>
        </div>
    )
}

export default LoginPage