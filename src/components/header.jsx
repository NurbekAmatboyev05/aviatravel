import React from 'react'
import rasm1 from '../assets/logo_orange-BGoDxPvq.png'
function header() {
  return (
    <nav class="bg-amber-50 p-4">
    <div class="container mx-auto flex justify-between items-center indent-px ">
        <img className='bg-amber-50 w-40 h-30' src={rasm1} alt="" />
        <button id="menu-btn" class="text-white md:hidden focus:outline-none">
            ☰
        </button>
        <ul id="menu" class="hidden md:flex space-x-6 text-orange-500 p-4">
            <li><a href="#" class="hover:text-gray-300">Asosiy</a></li>
            <li><a href="#" class="hover:text-gray-300">Biz haqimizda</a></li>
            <li><a href="#" class="hover:text-gray-300">Turlar</a></li>
            <li><a href="#" class="hover:text-gray-300">Mexmonxonalar</a></li>
            <li><a href="#" class="hover:text-gray-300">Aviachiptalar</a></li>
            <li><a href="#" class="hover:text-gray-300">Aloqa</a></li>
        </ul>
    </div>
</nav>
  )
}

export default header