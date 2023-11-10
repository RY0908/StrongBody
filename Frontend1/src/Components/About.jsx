import React from "react";

function About() {
  return (
    <div className="md:px-32 lg:bg-backroundAbout bg-black bg-cover bg-center px-6 py-28 flex flex-col items-center text-center md:text-left md:items-start  gap-16">
      <div className="flex flex-col gap-4">
        <div className="text-secondary-color text-3xl font-Poppins font-medium ">
          WELCOME TO THE
        </div>
        <div className="text-4xl font-Poppins font-medium tracking-wider">
          Our Fitness House
        </div>
        <div className="max-w-lg font-extralight tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rem
          dolorum quasi optio excepturi ut adipisci obcaecati fugit sequi sunt.
          Adipisci delectus iusto dolor quas, voluptas tempore. Facere,
          repudiandae quos Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Asperiores, rem quos illo praesentium ab, eius, sequi
          perspiciatis consectetur quas blanditiis ea unde quasi tempora
          voluptates. Ea nam non excepturi voluptas.
        </div>
      </div>
      <div className="flex flex-col gap-4 max-w-sm">
        <div className="flex gap-6 ">
          <div>
            <h1 className="text-secondary-color font-Rubik text-3xl font-semibold">
              300K+
            </h1>
            <p className="font-light">Working hours</p>
          </div>
          <div>
            <h1 className="text-secondary-color font-Rubik text-3xl font-semibold">
              150+
            </h1>
            <p className="font-light">Succes programs</p>
          </div>
        </div>
        <span className="border-[1px] h-full border-secondary-color"></span>
        <div className="flex gap-6 ">
          <div>
            <h1 className="text-secondary-color font-Rubik text-3xl font-semibold">
              190K+
            </h1>
            <p className="font-light">Happy clients</p>
          </div>
          <div>
            <h1 className="text-secondary-color font-Rubik text-3xl font-semibold">
              800+
            </h1>
            <p className="font-light">Perfect Body</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
