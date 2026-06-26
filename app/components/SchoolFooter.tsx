/** 
 * Names: Daniel Watson, Echo Salonga, Daniel Tollis
 * Date: June 26, 2026
 * Description:
 * - This component renders a footer section for all pages.
 * 
 * Inputs:
 * - No props needed.
 * 
 * Processing:
 * - Displays static footer containing general info.
 * - Tailwind CSS used for styling.
 * 
 * Outputs:
 * - Returns a footer at the bottom of every page.
*/

import React from 'react'

// Footer Component //
const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-200 border-t border-gray-400 px-6 py-4'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <h1 className='text-lg font-bold text-gray-900'>New Generation High School</h1>
        </div>
      </footer>
    </div>
  )
}

export default Footer
