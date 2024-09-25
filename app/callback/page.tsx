'use client'
import { useRouter, useSearchParams } from "next/navigation"
import { githubGetToken } from "@/app/callback/ServerAction"
import { useEffect } from "react"

const page = () => {

    const searchParams = useSearchParams()
    const code = searchParams.get('code')
    const router = useRouter()

    useEffect(() => {
        if (code != null || code != undefined) {
            githubGetToken(code)
            // const resData = githubGetToken(code)
            // resData.then(res => {
            //     router.push('/callback/setup')
            // })
        }
    }, [])

  return (
    <>
    <div className="flex items-center justify-center w-full h-full">
        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
            <svg fill='none' className="w-32 h-w-32 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
                <path clipRule='evenodd'
                    d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                    fill='currentColor' fillRule='evenodd' />
            </svg>
            <div className="text-lg">Loading ...</div>
        </div>
    </div>
    <p className="flex justify-center">Pls wait you will be redirecting to your dashboard</p>
    </>
  )
}

export default page