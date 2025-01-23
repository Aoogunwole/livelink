import StreamVideoProvider from '@/provider/StreamClientProvider'
import { Metadata } from 'next'
import React, { ReactNode } from 'react'



export const metadata: Metadata = {
  title: 'Livelink',
  description: 'Video Web Applcation',
  icons: {
    icon: '/icon/logo.svg'
  }
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
        <StreamVideoProvider >
            {children}
        </StreamVideoProvider>
    </main>
  )
}

export default RootLayout