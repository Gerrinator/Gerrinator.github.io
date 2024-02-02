import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Gerard van Genderen
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Website of Gerard van Genderen, musician, programmer, and game design enthusiast. <br />
                        See below for my various works in games. <br />
                        Contact me at vangenderengerard@gmail.com or visit my <a href="urlhttps://www.linkedin.com/in/gerard-v/" className="text-blue-500">Linkedin page.</a>
                    </p>
                    <div className="flex justify-center">
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="./gerard.jpeg"
                    />
                </div>
            </div>
        </section>
    )
}