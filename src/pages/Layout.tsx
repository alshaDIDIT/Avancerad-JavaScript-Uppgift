import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const Layout = () => {
  return (
    <div className="layout">
        <header>
            <Navbar />
        </header>
        <section>
            <main>
                <Outlet />
            </main>
        </section>
        <footer></footer>
    </div>
  )
}
