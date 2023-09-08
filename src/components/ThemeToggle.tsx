//  create a theme toggle button
import { useEffect, useState } from 'react'
import { IoSunny, IoMoon } from 'react-icons/io5/index.js'

const themes = ['light', 'dark']

const ThemeToggle = () => {
   const [isMounted, setIsMounted] = useState(false)
   const [theme, setTheme] = useState(() => {
      if (import.meta.env.SSR) {
         return undefined
      }
      if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
         return localStorage.getItem('theme')
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
         return 'dark'
      }
      return 'light'
   })

   const toggleTheme = () => {
      const t = theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', t)
      setTheme(t)
   }

   useEffect(() => {
      const root = document.documentElement
      if (theme === 'light') {
         root.classList.remove('dark')
      } else {
         root.classList.add('dark')
      }
   }, [theme])

   useEffect(() => {
      setIsMounted(true)
   }, [])

   return isMounted ? (
      <div className="inline-flex items-center p-[1px] rounded-3xl">
         <button
            className="flex items-center justify-center w-10 h-10 p-2 rounded-3xl focus:outline-none"
            onClick={toggleTheme}
         >
            {theme === 'light' ? (
               <IoMoon className="w-5 h-5 text-zinc-900 dark:text-zinc-300" />
            ) : (
               <IoSunny className="w-5 h-5 text-zinc-900 dark:text-zinc-300" />
            )}
         </button>
      </div>
   ) : (
      <div />
   )
}

export default ThemeToggle
