/*
 * @Descripttion:
 * @version:
 * @Author: pyq
 * @Date: 2024-12-05 21:38:54
 * @LastEditors: pyq
 * @LastEditTime: 2024-12-12 12:26:38
 */
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();
  if (!userId && isProtectedRoute(req)) {
    return auth().redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
    "/((?!_next|.*\\..*).*)",
  ],
};
