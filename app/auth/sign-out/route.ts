import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type NextRequest, NextResponse, } from 'next/server'

export const dynamic = 'force-dynamic'

// export async function POST(request: Request) {
//   const requestUrl = new URL(request.url)
//   const supabase = createRouteHandlerClient({ cookies })

//   await supabase.auth.signOut()

//   return NextResponse.redirect(`${requestUrl.origin}/login`, {
//     // a 301 status is required to redirect from a POST to a GET route
//     status: 301,
//   })
// }

export async function POST(req: NextRequest) {
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    await supabase.auth.signOut()
  }

  return NextResponse.redirect(new URL('/', req.url), {
    status: 302,
  })
}
