import { NextRequest, NextResponse } from "next/server";

const authRoutes = ['/Dashboard/Home']
const notAuthRoutes = ['/login', '/register']
export default function middleware(req: NextRequest, res: NextResponse) {

    const token = req.cookies.get('accessToken')

    if(!token && authRoutes.includes(req.nextUrl?.pathname)) {
        const absoluteUrl = new URL('/', req.nextUrl?.origin)
        return NextResponse.redirect(absoluteUrl.toString())
    }
    return NextResponse.next()

}