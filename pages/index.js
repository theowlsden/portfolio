import Head from 'next/head'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import Landing from '../components/Landing'
import Project_section from '../components/Project_section'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className=" bg-green-500 
      md:w-24 md:flex md:py-8 md:justify-center md:items-end md:min-h-screen 
      fixed py-4 w-full
      ">
         <ul id="links" className="hidden md:block" >
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>projects</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>contact</a>
          </Link>
        </li>
      </ul>
      
      <Menu as="div" className="md:hidden">

        <Menu.Button className="mx-4">
          <svg viewBox="0 0 100 80" width="24" height="24">
            <rect width="80" height="16" rx="8"></rect>
            <rect y="30" width="60" height="16" rx="8"></rect>
            <rect y="60" width="80" height="16" rx="8"></rect>
          </svg>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-12 w-9/12 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col">
              <Menu.Item className="">
                {({ active }) => (
                  <Link href="/">
                    <a  className="w-full px-2 py-2 text-sm">home</a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/">
                    <a  className="w-full px-2 py-2 text-sm">about</a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/">
                    <a  className="w-full px-2 py-2 text-sm">projects</a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/">
                    <a  className="w-full px-2 py-2 text-sm">contact</a>
                  </Link>
                )}
              </Menu.Item>
              
          </Menu.Items>
        </Transition>
      </Menu>
      </nav>

      <main className="md:ml-24">
        {/*  className="md:py-4 md:px-12 md:ml-24 py-16 px-8" */}
      <Landing/>
      <Project_section/>
      </main>

     
    </div>
  )

}
