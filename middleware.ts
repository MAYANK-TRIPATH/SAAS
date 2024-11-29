import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
    "/signin",
    "/signup",
    "/",
    "/home"
])

const isPublicApiRoute = createRouteMatcher([
    "api/videos"
])

export default clerkMiddleware((auth, req) => {
    const {userId} = auth();
    const currentUrl = new URL(req.url);
    const isAccessingDashboard = currentUrl.pathname === "/home"
    const isApiRequest = currentUrl.pathname.startsWith("/api")


    // If User loggedin and accesing a public route but not the dashboard
    if(userId && isPublicRoute(req) && !isAccessingDashboard){
        return NextResponse.redirect(new URL("/home", req.url))
    }

    // Not loggedin
    if(!userId){
        // If user is not loggedin and trying to accesing procted route
        if(!isPublicRoute(req) && !isPublicApiRoute(req)){
            return NextResponse.redirect(new URL("/signin", req.url))
        }

        // If he request if for protected API and user is not logged in.

        if(isApiRequest && !isPublicApiRoute(req)){
            return NextResponse.redirect(new URL("/signin", req.url))
        }
    }
    return NextResponse.next()
})



export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}