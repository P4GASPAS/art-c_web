'use server'
import { redirect } from "next/navigation"

let accessCode: any

export const githubGetToken = async (code: string) => {

    accessCode = code

    redirect('callback/setup')

}



export const connectUser = async (user: any) => {
    const jsonUser = JSON.parse(user)

    try {
        const res = await fetch(`${process.env.AUTH_SERVICE_URL}/api/auth/oauth`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                provider: 'github',
                code: accessCode,
                userId: jsonUser.id
            })
        })
        const resData = await res.json()
        return resData
    } catch (e) {
        console.log(e)
    }
}