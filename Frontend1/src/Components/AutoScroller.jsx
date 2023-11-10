import React from "react";

function AutoScroller() {
  return (
    <>
      <div className=" flex justify-center items-center bg-gradient-to-t from-black to-main-color w-full ">
        <div className="overflow-hidden mask-style lg:w-1/2 md:w-3/4 w-4/5  ">
          <ul className="flex justify-center items-center  gap-8 py-8 scroll w-fit ">
            <li className="bg-zinc-800 rounded-lg p-4 flex gap-4  ">
              <svg
                className=" aspect-square lg:w-8 w-6  text-secondary-color dark:text-secondary-color"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                />
              </svg>
              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-bold text-secondary-color ">
                  14Days
                </h1>
                <h4 className="text-xs font-light">Gurrantte</h4>
              </div>
            </li>
            <li className="bg-zinc-800 rounded-lg p-4 flex gap-4  ">
              <svg
                className=" aspect-square lg:w-8 w-6  text-secondary-color dark:text-secondary-color"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-bold text-secondary-color ">
                  24/7
                </h1>
                <h4 className="text-xs font-light">GymAccess</h4>
              </div>
            </li>
            <li className="bg-zinc-800 rounded-lg p-4 flex gap-4  ">
              <svg
                className=" aspect-square lg:w-8 w-6  text-secondary-color dark:text-secondary-color"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-bold text-secondary-color ">
                  Anytime
                </h1>
                <h4 className="text-xs font-light">Cancellation</h4>
              </div>
            </li>
            <li className="bg-zinc-800 rounded-lg p-4 flex gap-4  ">
              <svg
                className=" aspect-square lg:w-8 w-6  text-secondary-color dark:text-secondary-color"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 5h1v12a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h14ZM10 4h2m-2 3h2m-8 3h8m-8 3h8m-8 3h8M4 4h3v3H4V4Z"
                />
              </svg>
              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-bold text-secondary-color ">
                  Free
                </h1>
                <h4 className="text-xs font-light">Programs</h4>
              </div>
            </li>{" "}
            <li className="bg-zinc-800 rounded-lg p-4 flex gap-4  ">
              <svg
                className=" aspect-square lg:w-8 w-6  text-secondary-color dark:text-secondary-color"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                />
              </svg>
              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-bold text-secondary-color ">
                  14Days
                </h1>
                <h4 className="text-xs font-light">Gurrantte</h4>
              </div>
            </li>
            <li className="bg-zinc-800 rounded-lg p-4 flex gap-4  ">
              <svg
                className=" aspect-square lg:w-8 w-6  text-secondary-color dark:text-secondary-color"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-bold text-secondary-color ">
                  24/7
                </h1>
                <h4 className="text-xs font-light">GymAccess</h4>
              </div>
            </li>
            <li className="bg-zinc-800 rounded-lg p-4 flex gap-4  ">
              <svg
                className=" aspect-square lg:w-8 w-6  text-secondary-color dark:text-secondary-color"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-bold text-secondary-color ">
                  Anytime
                </h1>
                <h4 className="text-xs font-light">Cancellation</h4>
              </div>
            </li>
            <li className="bg-zinc-800 rounded-lg p-4 flex gap-4  ">
              <svg
                className=" aspect-square lg:w-8 w-6  text-secondary-color dark:text-secondary-color"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 5h1v12a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h14ZM10 4h2m-2 3h2m-8 3h8m-8 3h8m-8 3h8M4 4h3v3H4V4Z"
                />
              </svg>
              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-bold text-secondary-color ">
                  Free
                </h1>
                <h4 className="text-xs font-light">Programs</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AutoScroller;
