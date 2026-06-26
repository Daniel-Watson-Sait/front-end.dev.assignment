/** 
 * Names: Daniel Watson, Echo Salonga, Daniel Tollis
 * Date: June 26, 2026
 * Description:
 * - This component renders a nav bar section for all pages.
 * 
 * Inputs:
 * - No props needed.
 * 
 * Processing:
 * - Displays static header.
 * - TailWind CSS used for styling.
 * 
 * Outputs:
 * - Returns header component at the top of every page.
*/

import React from 'react'

// Nav Bar Component //
const NavBar = () => {
  return (
    <header className='bg-gray-200 border-b border-gray-400 px-6 py-4'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <h1 className='text-lg font-bold text-gray-900'>Student Portal</h1>
      </div>
    </header>
  )
}

export default NavBar
