'use client'

import React from 'react';
import { useState } from 'react';
import styles from './components.module.css'

export default function Navbar() {
    // state to manage the visibility of the mobile menu
    const [mobileMenuVisible, setMobileMenuVisible] = useState(true);

    // function to toggle the mobile menu visibility
    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    }
  return (
    <>
        <div className={`${styles.wrapper} bg-green-400 fixed top-0 left-0 w-[225px] h-[100%] py-[40px]`}>
            {/* top menu */}
            <div className={`${styles.sidebar} bg-green-400 fixed top-0 left-0 w-[225px] h-[100%] py-[40px]`}>
                {/* profile image & text */}
                {/* menu items */}
            </div>
        <div className={`${styles.icons}`}>
            <img src="/vercel.svg" alt="logo" />
            <h3>Vercel</h3>
            <p>Designer</p>
        </div>
        </div>
    </>
  )
}
