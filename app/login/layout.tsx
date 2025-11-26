/**
 * 
 * @author Måns Bäckström
 * 
 * @file layout.tsx
 * 
 */

import '../globals.css'

/**
 * 
 * @param param0 
 * @returns HTML
 */
export default function LoginLayout({children,}: { children: React.ReactNode}) {
    return (
    <html lang="en">
        <body className='bg-black min-h-screen flex justify-center items-center flex-col p-12'>
            <div className='bg-white flex-1 w-1/4 flex justify-start items-center flex-col'>
                {/* Layout UI */}
                {/* Place children where you want to render a page or nested layout */}
                <main className='bg-gray-500 flex-1 w-full flex justify-center items-center flex-row'>{children}</main>
            </div>
        </body>
    </html>
    )
}
