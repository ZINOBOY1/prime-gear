import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req: Request) {
  const cookieStore = await cookies(); // Await the promise
  const customerId = cookieStore.get("customerId");

  if (!customerId) {
    return NextResponse.redirect(new URL("/login-customer", req.url));
  }

  return NextResponse.next();
}
