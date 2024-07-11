"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [selectedSubLesson, setSelectedSubLesson] = useState(null);

  const lessons = [
    {
      lessonTitle: "01 Getting Started",
      subLessons: [
        {
          number: 0,
          title: "Overview of Python",
          complete: false,
        },
        {
          number: 1,
          title: "Environment",
          complete: false,
        },
        {
          number: 2,
          title: "Basic Syntax",
          complete: false,
        },
        {
          number: 3,
          title: "Project",
          complete: false,
        },
      ],
      locked: false,
    },
    {
      lessonTitle: "02 Control Flow",
      locked: true,
    },
    {
      lessonTitle: "03 Functions",
      locked: true,
    },
    {
      lessonTitle: "04 Data",
      locked: true,
    },
    {
      lessonTitle: "05 Files",
      locked: true,
    },
    {
      lessonTitle: "06 Object-Oriented",
      locked: true,
    },
    {
      lessonTitle: "07 Libraries",
      locked: true,
    },
    {
      lessonTitle: "08 Web",
      locked: true,
    },
    {
      lessonTitle: "09 Advanced",
      locked: true,
    },
    {
      lessonTitle: "10 Final",
      locked: true,
    },
  ];

  return (
    <>
      <div className="mt-[100px]">
        <button
          data-drawer-target="sidebar-multi-level-sidebar"
          data-drawer-toggle="sidebar-multi-level-sidebar"
          aria-controls="sidebar-multi-level-sidebar"
          type="button"
          class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="sidebar-multi-level-sidebar"
          class="fixed   left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-1 font-medium">
              {lessons.map((lesson) => (
                <>
                  <li>
                    <a
                      href="#"
                      class="border-b border-gray-200 dark:border-gray-700 text-sm flex items-center p-2 text-gray-900 dark:text-white "
                    >
                      {!lesson.locked ? (
                        <lord-icon
                          src="https://cdn.lordicon.com/slgvubxs.json"
                          trigger="hover"
                          style={{ width: "20px", height: "20px" }}
                        ></lord-icon>
                      ) : (
                        <svg
                          class="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      )}

                      <span class="ms-3">{lesson.lessonTitle}</span>
                    </a>
                  </li>

                  {lesson.subLessons?.map(({ title, complete }, index) => (
                    <li key={index}>
                      <a
                        onClick={() =>
                          setSelectedLesson({
                            title: title,
                          })
                        }
                        href="#"
                        className={
                          selectedLesson?.title == title
                            ? `ml-2 text-sm flex bg-[#4EA270]  items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`
                            : `ml-2 text-sm flex  items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`
                        }
                      >
                        {complete ? (
                          <lord-icon
                            src="https://cdn.lordicon.com/guqkthkk.json"
                            trigger="hover"
                            style={{ width: "20px", height: "20px" }}
                          ></lord-icon>
                        ) : (
                          <lord-icon
                            src="https://cdn.lordicon.com/hepmevyc.json"
                            trigger="hover"
                            style={{ width: "20px", height: "20px" }}
                          ></lord-icon>
                        )}
                        <span
                          className={
                            selectedLesson?.title == title
                              ? "ms-3 text-white"
                              : "ms-3"
                          }
                        >
                          {title}
                        </span>
                      </a>
                    </li>
                  ))}
                </>
              ))}
            </ul>
          </div>
        </aside>

        <div class="p-4 sm:ml-64">
          {!selectedLesson ? (
            <section class="h-full bg-white dark:bg-gray-900">
              <div class="px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12">
                <h2 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
                  👨🏾‍💻 Mind Coding Summer 👨🏾‍💻
                </h2>

                <p class="mb-4 text-lg font-normal text-gray-500 lg:text-lg sm:px-16 xl:px-48 dark:text-gray-400">
                  Join our 10-week summer program to learn Python from scratch!
                  With hands-on projects and personalized support, you will gain
                  the skills needed to become a proficient Python programmer.
                </p>
                <div className="flex justify-center pb-4">
                  <iframe
                    className="rounded-lg mb-4"
                    width="800"
                    height="450"
                    src="https://www.youtube.com/embed/live_stream?channel=UCkpoCJVxTgbP4psnN_CEjGQ"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>

                <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                  <a
                    onClick={() => setSelectedLesson(lessons[0].subLessons[0])}
                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  >
                    Get Started
                    <svg
                      className="ml-2 -mr-1 w-5 h-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          ) : (
            <>
              <div class="w-full flex justify-center">
                <div class="lg:py-8 w-full text-center">
                  <h3 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
                    {selectedLesson?.title}
                  </h3>

                  <p class="mb-4 text-lg font-normal text-gray-500 lg:text-lg dark:text-gray-400">
                    Hello
                  </p>
                  <div className="flex justify-center pb-4">
                    <iframe
                      className="rounded-lg mb-4"
                      width="800"
                      height="450"
                      src="https://www.youtube.com/embed/live_stream?channel=UCkpoCJVxTgbP4psnN_CEjGQ"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                {selectedLesson.number > 0 && (
                  <a
                    onClick={() =>
                      setSelectedLesson(
                        lessons[0].subLessons[selectedLesson.number - 1]
                      )
                    }
                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  >
                    <svg
                      className="mr-2 -m;-1 w-5 h-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      transform="rotate(-180)"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Previous Lesson
                  </a>
                )}

                <a
                  onClick={() => {
                    lessons[0].subLessons[
                      selectedLesson.number
                    ].complete = true;
                    console.log(
                      selectedLesson,
                      lessons[0].subLessons[selectedLesson.number].complete
                    );
                  }}
                  class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/guqkthkk.json"
                    trigger="hover"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px",
                    }}
                  ></lord-icon>
                  Mark as Complete
                </a>

                {selectedLesson.number !==
                  lessons[0].subLessons?.length - 1 && (
                  <a
                    onClick={() =>
                      setSelectedLesson(
                        lessons[0].subLessons[selectedLesson.number + 1]
                      )
                    }
                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  >
                    Next Lesson
                    <svg
                      className="ml-2 -mr-1 w-5 h-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
