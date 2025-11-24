/**
 * 
 * @author Måns Bäckström
 * 
 * @file layout.tsx
 * 
 */

import './globals.css'

/**
 * 
 * @param param0 
 * @returns HTML
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black min-h-screen flex justify-center items-center'>
        <div className='bg-white min-h-screen w-1/2 flex justify-start items-center flex-col'>
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <header className='bg-gray-700 h-16 flex w-full justify-start items-center flex-row'>
            <div className='flex-1 px-8 text-left'><h1>Manage</h1></div>
            <div className='flex-1 px-8 text-left'><h1>Section 2</h1></div>
            <div className='flex-1 px-8 text-right'><h1>Section 3</h1></div>
          </header>
          <main className='bg-gray-500 flex-1 w-full flex justify-center items-center flex-row'>{children}</main>
        </div>
      </body>
    </html>
  )
}
