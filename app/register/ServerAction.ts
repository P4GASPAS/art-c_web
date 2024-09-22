'use server'
import { redirect } from "next/navigation"
import { z } from "zod"

const requestSchema = z.object({
    first_name: z.string({ message: "Invalid first name" }).min(1, "First name is required").max(50, "First name is too long"),
    middle_name: z.string({ message: "Invalid middle name" }).optional(),
    last_name: z.string({ message: "Invalid last name" }).min(1, "Last name is required").max(50, "Last name is too long"),
    email: z.string({ message: "Invalid email" }).email("Invalid email format"),
    password: z.string({ message: "Invalid password" })
        .min(4, "Password must be at least 4 characters long")
        .max(100, "Password is too long"),
    confirm_password: z.string({ message: "Invalid confirmation password" }),
})

export const handleRegister = async (prevState: any, formData: FormData) => {
    
    const authData = requestSchema.safeParse({
        first_name: formData.get('first_name'),
        middle_name: formData.get('middle_name'),
        last_name: formData.get('last_name'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirm_password: formData.get('confirm_password'),
    })

    if(!authData.success) {
        return {
            ...prevState,
            zodErrors: authData.error.flatten().fieldErrors,
            message: 'Error input'
        }
    }

    try {

        const res = await fetch(`${process.env.AUTH_SERVICE_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                first_name: authData.data.first_name,
                middle_name: authData.data.middle_name,
                last_name: authData.data.last_name,
                email: authData.data.email,
                password: authData.data.password,
                confirm_password: authData.data.confirm_password,
            })
        })

        const resData = await res.json()
        return {
            message: 'success',
            status: resData.status,
            accessToken: resData.token,
            user: resData.user
        }
    } catch (e) {
        console.log(e)
    }
}

export const redirectGithub = async () => {
    const clientID = process.env.GITHUB_CLIENT_ID
    redirect(`https://github.com/login/oauth/authorize?client_id=${clientID}`)
}

export const redirectFacebook = async () => {
    const clientID = process.env.FACEBOOK_CLIENT_ID
    const redirectUri = 'http://localhost:3000/callback'
    redirect(`https://www.facebook.com/v10.0/dialog/oauth?client_id=${clientID}&redirect_uri=${redirectUri}`)
    // https://graph.facebook.com/v10.0/oauth/access_token
}

export const redirectGoogle = async () => {
    const clientID = process.env.GOOGLE_CLIENT_ID
    const redirectUri = 'http://localhost:3000/callback'
    redirect(`https://accounts.google.com/o/oauth2/auth?client_id=${clientID}&redirect_uri=${redirectUri}&scope=email&response_type=code`)
    // https://oauth2.googleapis.com/token
}