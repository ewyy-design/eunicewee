import React from "react"

import ProfilePic from "../assets/profile-pic.png"

const About = () => {
  return (
    <div>
      <section id="about" className="bg-bittersweet ">
        <div>Photocollage</div>
      </section>
      <section className="bg-prussianblue mt-0 pt-20 about-me">
        <div className="grid gap-14 container desktop:grid-cols-2 laptop:grid-cols-2 tablet:grid-cols-1">
          <div>
            <h1 className="text-5xl pl-10">
              <em>About</em> Me
            </h1>
            <p className="pl-10 pt-5">
              Hello! My name is Eunice and I am an aspiring engineer with a passion in frontend design. My interest started in web development when I took up a module in university to create a movie booking system - and the stories follow. <br />
            </p>
            <p className="pl-10 pt-5">At work, I deal with data and have the idea to combine my interest in good user experience with data. Committed to continuous learning, I hope that I will become a better data engineer at the intersection of data and design.</p>
          </div>
          <div className="flex justify-center items-center pt-16">
            <img src={ProfilePic} alt="profile-pic" className="profile-pic" />
          </div>
        </div>
      </section>
    </div>

    // <section className="photocollage py-5 lg:px-36 lg:pt-6">
    //   <div className="">
    //     <div className="-m-1 flex flex-wrap md:-m-2">
    //       <div className="flex w-1/4 flex-wrap">
    //         <div className="w-full p-1 md:p-2">
    //           <img
    //             alt="gallery"
    //             className="block h-full w-full rounded-lg object-cover object-center"
    //             src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
    //           />
    //         </div>
    //         <div className="w-full p-1 md:p-2">
    //           <img
    //             alt="gallery"
    //             className="block h-full w-full rounded-lg object-cover object-center"
    //             src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
    //           />
    //         </div>
    //       </div>
    //       <div className="flex w-1/4 flex-wrap">
    //         <div className="w-full p-1 md:p-2">
    //           <img
    //             alt="gallery"
    //             className="block h-full w-full rounded-lg object-cover object-center"
    //             src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
    //           />
    //         </div>
    //         <div className="w-full p-1 md:p-2">
    //           <img
    //             alt="gallery"
    //             className="block h-full w-full rounded-lg object-cover object-center"
    //             src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
    //           />
    //         </div>
    //         <div className="w-full p-1 md:p-2">
    //           <img
    //             alt="gallery"
    //             className="block h-full w-full rounded-lg object-cover object-center"
    //             src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
    //           />
    //         </div>
    //       </div>
    //       <div className="flex w-1/2 flex-wrap">
    //         <div className="w-full p-1 md:p-2">
    //           <img
    //             alt="gallery"
    //             className="block h-full w-full rounded-lg object-cover object-center"
    //             src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
    //           />
    //         </div>
    //         <div className="w-full p-1 md:p-2">
    //           <img
    //             alt="gallery"
    //             className="block h-full w-full rounded-lg object-cover object-center"
    //             src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
    //           />
    //         </div>
    //         <div className="w-full p-1 md:p-2">
    //           <img
    //             alt="gallery"
    //             className="block h-full w-full rounded-lg object-cover object-center"
    //             src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    // <section className="about" id="about">
    //   <div className="container">
    //     <p class="about, title">
    //       <em>About Me</em>
    //     </p>
    //   </div>
    // </section>
  )
}

export default About
