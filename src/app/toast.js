"use client";
import { useEffect, useState, useRef } from "react";

export default function Toast() {
  const isHidden = false;
  const cardRef = useRef(null);
  const [openTerminal, setOpenTerminal] = useState(false);

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setOpenTerminal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        class="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16  m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        data-state="closed"
      >
        <lord-icon
          onClick={() => {
            setOpenTerminal(!openTerminal);
          }}
          src="https://cdn.lordicon.com/pqrtuvvq.json"
          trigger="hover"
          style={{ width: "45px", height: "45px" }}
        ></lord-icon>
      </button>
      {openTerminal && (
        <div
          ref={cardRef}
          // style="box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);"
          class="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px]"
        >
          <div class="flex flex-col space-y-1.5 pb-6">
            <iframe
              src="https://trinket.io/embed/python/8397e68661?toggleCode=true&start=result&runMode=console"
              width="100%"
              height="570"
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
