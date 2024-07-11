import Image from "next/image";

export default function Home() {
  return (
    <>
      <div class="mt-[120px]"></div>
      <section class="h-full bg-white dark:bg-gray-900">
        <div class="px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12">
          <h2 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
            About Mind
          </h2>

          <p class="mb-4 text-lg font-normal text-gray-500 lg:text-lg sm:px-16 xl:px-48 dark:text-gray-400">
            Watch the video below to learn who we are.
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
          <section class="bg-white dark:bg-gray-900">
            <div class="max-w-screen-xl px-4 py-4 mx-auto text-center lg:py-8 lg:px-6">
              <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                <div class="flex flex-col items-center justify-center">
                  <dt class="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
                  <dd class="font-light text-gray-500 dark:text-gray-400">
                    developers
                  </dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                  <dt class="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
                  <dd class="font-light text-gray-500 dark:text-gray-400">
                    contributors
                  </dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                  <dt class="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
                  <dd class="font-light text-gray-500 dark:text-gray-400">
                    organizations
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
