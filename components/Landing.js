import React from 'react'
import styles from '../styles/Landing.module.css'

export default function Landing() {
    return (
        <div className={`min-h-screen flex flex-col justify-center items-center ${styles.background}`}>
            <div className="md:w-1/2 px-8">
                <h1 className="text-white text-5xl my-2">The_Owlsden</h1>
                <h3 className="text-white text-2xl">aka Shaquil Maria</h3>
                <h2 className="text-white text-3xl md:text-4xl">frontend developer &#38; artist</h2>
            </div>
           
        </div>
    )
}
