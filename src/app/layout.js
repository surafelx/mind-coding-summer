"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useCallback, useEffect, useState } from "react";
import Toast from "./toast";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("register");
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  const handleUserEvent = useCallback((event) => setIsModalOpen(true), []);

  const handleModalType = useCallback((event) => setModalType("login"), []);

  const pathname = usePathname();

  const navItems = [
    {
      href: "/",
      label: "Welcome",
      icon: "https://cdn.lordicon.com/ctlnzcle.json",
    },
    {
      href: "/live",
      label: "Live",
      icon: "https://cdn.lordicon.com/jccaxoxb.json",
    },
    {
      href: "/classroom",
      label: "Classroom",
      icon: "https://cdn.lordicon.com/zneicxkd.json",
    },
    {
      href: "/calendar",
      label: "Calendar",
      icon: "https://cdn.lordicon.com/nxsxggbs.json",
    },
    {
      href: "/about",
      label: "About",
      icon: "https://cdn.lordicon.com/slgvubxs.json",
    },
    {
      href: "/resources",
      label: "Resources",
      icon: "https://cdn.lordicon.com/xjronrda.json",
    },
    {
      href: "/account",
      label: "Account",
      icon: "https://cdn.lordicon.com/gyevrheg.json",
    },
  ];

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </button>
                <a href="https://summer.mind.et" className="flex ms-2 md:me-24">
                  <Image
                    src="/logo.png"
                    width={100}
                    height={40}
                    alt="Mind Coding Summer"
                  />
                </a>
              </div>
              <div className="flex items-center">
                <div className="flex items-center ms-3">
                  <button
                    onClick={() => setIsLanguageModalOpen(true)}
                    type="button"
                    className="flex text-sm rounded-full  dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>

                    <dotlottie-player
                      src="https://lottie.host/42391bb7-98ce-48f4-a763-e2d2bc26729f/540cr9PRkk.json"
                      background="transparent"
                      speed="1"
                      style={{
                        width: "40px",
                        height: "40px",
                        marginRight: "10px",
                      }}
                    ></dotlottie-player>
                  </button>

                  <div>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      type="button"
                      className="flex text-sm rounded-full  dark:focus:ring-gray-600"
                      aria-expanded="false"
                      data-dropdown-toggle="dropdown-user"
                    >
                      <span className="sr-only">Open user menu</span>
                      <lord-icon
                        src="https://cdn.lordicon.com/gyevrheg.json"
                        trigger="hover"
                        style={{ width: "40px", height: "40px" }}
                      ></lord-icon>
                    </button>
                  </div>
                  <div
                    className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="dropdown-user"
                  >
                    <div className="px-4 py-3" role="none">
                      <p
                        className="text-sm text-gray-900 dark:text-white"
                        role="none"
                      >
                        Neil Sims
                      </p>
                      <p
                        className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                        role="none"
                      >
                        neil.sims@flowbite.com
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center justify-center text-gray-500 dark:text-gray-400">
              {navItems.map((item) => (
                <li key={item.href} className="me-2">
                  <a
                    href={item.href}
                    className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg ${
                      pathname === item.href
                        ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                        : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    } group`}
                  >
                    <lord-icon
                      src={item.icon}
                      trigger="hover"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "5px",
                      }}
                    ></lord-icon>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <main>{children}</main>
        <Toast />
        <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
        <Script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        ></Script>{" "}
        {isModalOpen && (
          <div
            id="small-modal"
            tabindex="-1"
            class="overflow-scroll fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-[60%] flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full"
          >
            <div class="relative w-full max-w-md max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    {modalType == "register" ? "Create an account" : "Login"}
                  </h1>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    type="button"
                    class="text-gray-400 bg-transparent  hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="small-modal"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <div class="p-4 md:p-5 space-y-4">
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    {modalType == "register" && (
                      <div>
                        <label
                          for="confirm-password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Confirm password
                        </label>
                        <input
                          type="confirm-password"
                          name="confirm-password"
                          id="confirm-password"
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      {modalType == "login" ? "Create an account" : "Login"}
                    </button>
                    {modalType == "register" ? (
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account?{" "}
                        <a
                          onClick={() => setModalType("login")}
                          className="pointer font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Login here
                        </a>
                      </p>
                    ) : (
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don&apos;t have an account?{" "}
                        <a
                          onClick={() => setModalType("register")}
                          className="pointer font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Register
                        </a>
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
        {isLanguageModalOpen && (
          <div
            id="small-modal"
            tabindex="-1"
            class="overflow-hidden fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-[60%] flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full"
          >
            <div class="relative w-full max-w-md max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Select Language
                  </h1>
                  <button
                    onClick={() => setIsLanguageModalOpen(false)}
                    type="button"
                    class="text-gray-400 bg-transparent  hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="small-modal"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <div class="p-4 md:p-5 space-y-4">
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    English
                  </button>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    አማረኛ
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
