import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { create } from 'domain';

// This middleware will run for all requests to the Next.js app
// and will protect the specified routes using Clerk authentication.
// The `isProtectedRoute` function checks if the request path matches any of the protected routes
// defined in the array passed to `createRouteMatcher`.
// If the request path matches a protected route, it will call `auth.protect()` to
// ensure that the user is authenticated before allowing access to the route.

const isProtectedRoute = createRouteMatcher(["/generate-program","/profile"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});

export const config = { 
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};