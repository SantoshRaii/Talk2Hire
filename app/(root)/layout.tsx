import { isAuthenticated, signOut } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import LogoutButton from '@/components/ui/logoutButton'

const RootLayout = async ({children}: {children: ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
    const handleSignOut = async () => {
    await signOut;       // server action call
    redirect("/sign-in");
  };
  if(!isUserAuthenticated) redirect('/sign-in');
  return (
    <div className='root-layout'>
      {/* <nav>
        <Link href="/" className="flex items-center gap-2" />
        <Image src="/logo.svg" alt="Logo" width={38} height={32}/>
        <h2 className="text-primary-100">Talk2Hire</h2>
        <Button variant="outline">Sign-Out</Button>
      </nav> */}

      <nav className="flex items-center justify-between px-4 md:px-8 py-3 w-full">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className="text-primary-100">Talk2Hire</h2>
        </Link>
        <LogoutButton/>
      </nav>


      {children}
    </div>
  )
}

export default RootLayout
