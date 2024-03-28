import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-ol md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Anthony
                        <br className="hidden lg:inline-block" />I enjoy creating and building.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        With proficiencies in React, JS, Python, SQL and knowledge in frameworks such as Node.js and Express.js, I'm looking forward to applying these skillsets in the real world. I am passionate about solving complex problems, improving processes, and collaborating within a team to achieve goals. I believe that with my combination of software engineering and project management, I could be a wealth of value to your company.
                    </p>
                    <div className="flex justify-center">
                        <a href="contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Let's collaborate
                        </a>
                        <a href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover: bg-gray-700 hover:text-white rounded text-lg">
                            View My Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded"
                    alt="hero"
                    src="./B051F7F3-812D-444D-9315-7997DB982C0B_1_105_c.jpeg"
                    />
                </div>
            </div>
        </section>
    );
}