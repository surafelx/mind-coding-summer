import Image from "next/image";

export default function Home() {
  return (
    <>
      <div class="mt-[120px]"></div>
      <section class="h-full bg-white dark:bg-gray-900">
        <div class="px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12">
          <a
            href="/live"
            class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
              Now
            </span>{" "}
            <span class="text-sm font-medium">Live Class Happening Now</span>
            <svg
              class="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <h2 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
            👨🏾‍💻 Mind Coding Summer 👨🏾‍💻
          </h2>

          <p class="mb-4 text-lg font-normal text-gray-500 lg:text-lg sm:px-16 xl:px-48 dark:text-gray-400">
            Join our 10-week summer program to learn Python from scratch! With
            hands-on projects and personalized support, you'll gain the skills
            needed to become a proficient Python programmer.
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
              href="/classroom"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Go to Classroom
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
            <a
              href="/about"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <lord-icon
                src="https://cdn.lordicon.com/slgvubxs.json"
                trigger="hover"
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "5px",
                }}
              ></lord-icon>
              About
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
