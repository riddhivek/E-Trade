import React from 'react'
import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import SubscribePhoto from '../../Components/SubscribePhoto'
import Footer from '../../Components/Footer/Footer'
import pimage from '../../assets/blog/gallery-post/asset 3.jpeg'
import image from '../../assets/blog/standard-post/asset 3.png'
import uda from '../../assets/blog/standard-post/asset 4.png'
import shoes from '../../assets/blog/standard-post/asset 5.png'
import comment1 from '../../assets/blog/standard-post/asset 6.png'
import comment2 from '../../assets/blog/standard-post/asset 7.png'
import image1 from '../../assets/blog/standard-post/asset 8.png'
import image2 from '../../assets/blog/standard-post/asset 9.png'
import image3 from '../../assets/blog/standard-post/asset 10.png'
import image4 from '../../assets/blog/standard-post/asset 11.jpeg'
import image5 from '../../assets/blog/standard-post/asset 12.jpeg'
import image6 from '../../assets/blog/standard-post/asset 13.jpeg'
import shoes1 from '../../assets/blog/standard-post/asset 18.png'
import rimage2 from '../../assets/blog/standard-post/asset 3.png'
import shoes2 from '../../assets/blog/standard-post/asset 14.png'
import rimage1 from '../../assets/blog/standard-post/asset 15.png'
import shoes3 from '../../assets/blog/standard-post/asset 16.png'
import rimage3 from '../../assets/blog/standard-post/asset 17.png'
import { Link } from 'react-router-dom'

const Gallerypost = () => {
    return (
        <>
            <div>
                <section className='BLOG-DROPDOWN'>
                    <AllTopBar />
                </section>

                <section className='BLOG-NAVBAR sticky top-0 z-20 '>
                    <AllNavBar />
                </section>

                <section className='BLOG-NAV-BOTTOM'>
                    <NavBottom />
                </section>

                <div className="Standard-section mx-52 container">
                    <div className="Image flex justify-center mt-20 relative group">
                        <img className="rounded-md w-[1150px]" src={pimage}></img>
                        <div className="btns group absolute top-[50%] w-[100%] translate-y-2/4 z-20">
                                <a href="#" className="left-btn  absolute text-[#777777] px-5 py-4 left-32 bg-[#F7F6FB] rounded-md group-hover:left-20 -z-10 duration-300  after:absolute after:content[''] after:px-5 after:py-4 after:bg-[#F7F6FB] after:left-0 after:top-0 after:right-0 after:bottom-0 after:rounded-md after:hover:scale-110 after:-z-10 after:duration-300">
                                <i class="fa-solid fa-arrow-left-long"></i>
                                </a>
                                <a href="#" className="right-btn absolute right-32 text-gray-500 px-5 py-4 bg-[#F7F6FB] rounded-md group-hover:right-20 duration-300 after:absolute after:content[''] after:px-5 after:py-4 after:bg-[#F7F6FB] after:left-0 after:top-0 after:right-0 after:bottom-0 after:rounded-md after:hover:scale-110 after:-z-10 after:duration-300">
                                <i class="fa-solid fa-arrow-right-long"></i>
                                </a>
                            </div>
                    </div>

                    <div className="Main-section flex mx-14">
                        <div className="Left-section  mx-32 mt-12">
                            <div className="mt-8 border-b-2 border-gray-100">
                                <div className="text-4xl font-bold text-gray-800 leading-snug ">
                                    How to generate blog ideas are great for <br />
                                    businesses that sell both B2B and D2C.
                                </div>
                                <div className="main-section flex mt-8">
                                    <div className="image">
                                        <img className="h-12 w-12 rounded-full" src={image}></img>
                                    </div>
                                    <div className="image-content ml-4">
                                        <a
                                            href=""
                                            className="font-semibold hover:text-blue-600 duration-300"
                                        >
                                            Theresa Underwood
                                        </a>
                                        <ul className="flex text-gray-500 font-md text-sm mt-1 mb-14">
                                            <li className="">Mar 20, 2022 |</li>
                                            <li className="ml-2">300k views</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="Content-section text-gray-500 mt-10">
                                <p className="leading-7">
                                    Habitasse per feugiat aliquam luctus accumsan curae, suspendisse
                                    aliquam taciti eros neque, <br />
                                    aenean sit iaculis risus commodo ut sociosqu rhoncus potenti
                                    tristique placerat sit tempus, duis <br />
                                    erat feugiat cras sociosqu porta ut praesent, fermentum donec
                                    convallis tellus vulputate duis nibh <br />
                                    rhoncus phasellus dui massa nisl.
                                </p>
                                <p className="mt-8 leading-7">
                                    Whether you’re kicking off a new campaign or looking to revamp
                                    your strategy, the lessons you’ll <br />
                                    learn will be universal to all small business email marketing.
                                </p>
                                <p className="mt-8 leading-7">
                                    MailChimp is an email marketing service provider founded in
                                    2001. It has 9 million users that <br />
                                    collectively send over 15 billion emails through the service
                                    each month.
                                </p>
                                <p className="mt-8 leading-7">
                                    Email is a crucial channel in any marketing mix, and never has
                                    this been truer than for today’s <br />
                                    entrepreneur. Curious what to say? How to say it? How often to
                                    hit “send”? Each bite-sized lesson <br />
                                    delivers core concepts, guiding questions, and tactical how-to
                                    resources.
                                </p>
                                <p className="mt-8 leading-7">
                                    Whether you’re kicking off a new campaign or looking to revamp
                                    your strategy, the lessons you’ll <br />
                                    learn will be universal to all small business email marketing.
                                </p>
                            </div>

                            <div className="bg-[#f9f3f0] h-[270px] w-[720px] mt-12 rounded-lg border-l-4 border-red-200 p-10">
                                <p className="text-gray-500 leading-7">
                                    “Email is a crucial channel in any marketing mix, and never has
                                    this been truer than for <br />
                                    today’s entrepreneur. Curious what to say? How to say it? How
                                    often to hit “send”? <br />
                                    Each bite-sized lesson delivers core concepts, guiding
                                    questions, and tactical how-to <br />
                                    resources.”
                                </p>
                                <div className="main-section flex mt-8">
                                    <div className="image">
                                        <img className="h-12 w-12 rounded-full" src={image}></img>
                                    </div>
                                    <div className="image-content ml-4">
                                        <a
                                            href=""
                                            className="font-semibold hover:text-blue-600 duration-300"
                                        >
                                            Theresa Underwood
                                        </a>
                                        <ul className="flex text-gray-500 text-sm mt-1">
                                            <li className="">Feb 17, 2022 |</li>
                                            <li className="ml-2">300k Views</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="Uda-section mt-10">
                                <h1 className="text-3xl font-semibold text-gray-800">
                                    Habitasse per feugiat aliquam luctus accumsan curae
                                </h1>
                                <p className="text-gray-500 mt-10 leading-7">
                                    Email is a crucial channel in any marketing mix, and never has
                                    this been truer than for today’s <br />
                                    entrepreneur. Curious what to say? How to say it? How often to
                                    hit “send”? Each bite-sized lesson <br />
                                    delivers core concepts, guiding questions, and tactical how-to
                                    resources.
                                </p>

                                <div className="image-section flex mt-8">
                                    <img className="h-48 w-[350px] rounded-md mr-7" src={uda}></img>
                                    <img className="h-48 w-[350px] rounded-md" src={shoes}></img>
                                </div>

                                <p className="text-gray-500 leading-7 mt-8">
                                    December 03, 2020 - The Nike Air Zoom SuperRep 2 is designed for
                                    high-intensity interval training <br />
                                    (HIIT) in group classes or solo sessions. This second version
                                    comes with two updated features for a <br />
                                    better fit: a fully adjustable, burrito-style tongue and a
                                    roomier forefoot.
                                </p>
                                <p className="text-gray-500 leading-7 mt-8">
                                    The SuperRep 2 evolves an important facet of modern fitness —
                                    training as sport — and the idea <br />
                                    that it's deserving of footwear designed to support the
                                    performance needs specific to these <br />
                                    movements. That’s why the shoe keeps the tech from the original
                                    SuperRep, like the forefoot Zoom <br />
                                    Air units for pop on jumps, a reinforced rand to brace against
                                    lateral bounds and a flexible “burpee <br />
                                    break” for everyone’s favorite total-body punisher.
                                </p>
                                <p className="text-gray-500 leading-7 mt-8">
                                    The Nike Air Zoom SuperRep 2 releases December 10 in China,
                                    December 26 throughout EMEA and <br />
                                    January 4 globally.
                                </p>
                                <p className="text-gray-500 leading-7 mt-8">
                                    To download hi-res images, click here.
                                </p>
                            </div>

                            <div className="Comment-section mt-8">
                                <h1 className="text-2xl font-semibold text-gray-800">
                                    2 Comments
                                </h1>
                                <div className="1st-comment">
                                    <div className="main-section flex mt-10">
                                        <div className="image">
                                            <img
                                                className="h-16 w-16 rounded-full" src={comment1}></img>
                                        </div>
                                        <div className="image-content ml-4">
                                            <a href="" className=" text-xl hover:text-blue-600 duration-300">
                                                Cameron Williamson
                                            </a>
                                            <ul className="flex text-gray-400 text-md mt-1">
                                                <li className="">Nov 23, 2018 at 12:23 pm</li>
                                                <a href="#">
                                                    <li className="ml-5 list-disc marker:text-gray-400">
                                                        <span className="text-md text-blue-500 font-semibold">
                                                            Reply
                                                        </span>
                                                    </li>
                                                </a>
                                            </ul>
                                            <p className="text-gray-500 mt-3 leading-7">
                                                Duis hendrerit velit scelerisque felis tempus, id porta
                                                libero venenatis. Nulla facilisi. <br />
                                                Phasellus viverra magna commodo dui lacinia tempus. Donec
                                                malesuada nunc non dui <br />
                                                posuere, fringilla vestibulum urna mollis. Integer
                                                condimentum ac sapien quis maximus.{" "}
                                            </p>

                                            <div className="main-section flex mt-10">
                                                <div className="image">
                                                    <img
                                                        className="h-16 w-16 rounded-full"
                                                        src={comment1}
                                                    ></img>
                                                </div>
                                                <div className="image-content ml-4">
                                                    <a
                                                        href=""
                                                        className=" text-xl hover:text-blue-600 duration-300"
                                                    >
                                                        Annie Mario
                                                    </a>
                                                    <ul className="flex text-gray-400 text-md mt-1">
                                                        <li className="">Nov 23, 2018 at 12:23 pm</li>
                                                        <a href="#">
                                                            <li className="ml-5 list-disc marker:text-gray-400">
                                                                <span className="text-md text-blue-500 font-semibold">
                                                                    Reply
                                                                </span>
                                                            </li>
                                                        </a>
                                                    </ul>
                                                    <p className="text-gray-500 mt-3 leading-7">
                                                        Pellentesque habitant morbi tristique senectus et
                                                        netus et malesuada fames <br />
                                                        ac turpis egestas. Suspendisse lobortis cursus
                                                        lacinia. Vestibulum vitae leo id <br />
                                                        diam pellentesque ornare.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="2nd-commemt main-section flex mt-10">
                                    <div className="image">
                                        <img className="h-16 w-16 rounded-full" src={comment2}></img>
                                    </div>
                                    <div className="image-content ml-4">
                                        <a
                                            href=""
                                            className=" text-xl hover:text-blue-600 duration-300"
                                        >
                                            Thopmson Arnold
                                        </a>
                                        <ul className="flex text-gray-400 text-md mt-1">
                                            <li className="">Nov 23, 2018 at 12:23 pm</li>
                                            <a href="#">
                                                <li className="ml-5 list-disc marker:text-gray-400">
                                                    <span className="text-md text-blue-500 font-semibold">
                                                        Reply
                                                    </span>
                                                </li>
                                            </a>
                                        </ul>
                                        <p className="text-gray-500 mt-3 leading-7">
                                            Duis hendrerit velit scelerisque felis tempus, id porta
                                            libero venenatis. Nulla facilisi. <br />
                                            Phasellus viverra magna commodo dui lacinia tempus. Donec
                                            malesuada nunc non dui <br />
                                            posuere, fringilla vestibulum urna mollis. Integer
                                            condimentum ac sapien quis maximus.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="Leave-section mt-8">
                                <h1 className="text-2xl font-semibold">Leave a Reply</h1>
                                <p className="text-gray-500 mt-6">
                                    Your email address will not be published.
                                </p>

                                <div className="Form-section">
                                    <div className="relative mt-8">
                                        <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600  text-md ">
                                            Leave a Reply
                                        </label>
                                        <input
                                            class="w-[710px] h-40 border mt-2 rounded-lg  px-6 pb-20 text-gray-500 text-sm border-gray-300 focus:border-blue-600 ring-0 outline-none"
                                            type="text"
                                            placeholder="Your Comment"
                                        ></input>
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-6">
                                <div className="relative">
                                    <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-500  text-sm ">
                                        Name <span className="text-gray-500">*</span>
                                    </label>
                                    <input
                                        class="w-[342px] h-12 border mt-2 rounded-lg  px-6 text-gray-500 text-sm border-gray-300 focus:border-blue-600 outline-none ring-0"
                                        type="text"
                                        placeholder=""
                                    ></input>
                                </div>

                                <div className="relative ml-7">
                                    <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-500 text-sm">
                                        Email<span className="text-gray-500">*</span>
                                    </label>
                                    <input
                                        className="w-[342px] h-12 border mt-2 rounded-lg px-6 text-gray-500 text-sm border-gray-300 focus:border-blue-600 outline-none ring-0"
                                        type="text"
                                        placeholder=""
                                    ></input>
                                </div>
                            </div>
                            <Link to="/Gallerypost"
                                className="Button border px-12 py-4 mt-5 bg-blue-600 text-white font-semibold rounded-lg hover:scale-110 duration-300 cursor-pointer"
                                id="submit"
                                type="submit"
                            >
                                Send Message
                            </Link>
                        </div>

                        <div className="Right-section  mt-24">
                            <div className=" image-section border p-8  rounded-lg">
                                <div className="rounded-lg">
                                    <h1 className="text-lg font-semibold">Latest Posts</h1>
                                    <div className="main-section flex mt-8 border-b-2 border-gray-100">
                                        <div className="image overflow-hidden rounded-lg">
                                            <a href="#">
                                                {" "}
                                                <img
                                                    className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                                                    src={image1}
                                                ></img>
                                            </a>
                                        </div>
                                        <div className="image-content ml-4">
                                            <a
                                                href=""
                                                className="font-semibold hover:text-blue-600 duration-300"
                                            >
                                                Dubai’s FRAME Offers its <br />
                                                Take on the
                                            </a>
                                            <ul className="flex text-gray-500 text-sm mt-2 mb-6">
                                                <li className="">Mar 27, 2022 |</li>
                                                <li className="ml-2">300k views</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-lg  mt-5">
                                    <div className="main-section flex border-b-2 border-gray-100">
                                        <div className="image overflow-hidden rounded-lg">
                                            <a href="#">
                                                {" "}
                                                <img
                                                    className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                                                    src={image2}
                                                ></img>
                                            </a>
                                        </div>
                                        <div className="image-content ml-4">
                                            <a
                                                href=""
                                                className="font-semibold hover:text-blue-600 duration-300"
                                            >
                                                Apple presents App Best <br />
                                                of 2020 winners
                                            </a>
                                            <ul className="flex text-gray-500 text-sm mt-2 mb-6">
                                                <li className="">Mar 20, 2022 |</li>
                                                <li className="ml-2">300k views</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-lg  mt-5">
                                    <div className="main-section flex">
                                        <div className="image overflow-hidden rounded-lg">
                                            <a href="#">
                                                <img
                                                    className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                                                    src={image3}
                                                ></img>
                                            </a>
                                        </div>
                                        <div className="image-content ml-4">
                                            <a
                                                href=""
                                                className="font-semibold hover:text-blue-600 duration-300"
                                            >
                                                Gallaudet University <br />
                                                innovation in education
                                            </a>
                                            <ul className="flex text-gray-500 text-sm mt-2">
                                                <li className="">Mar 15, 2022 |</li>
                                                <li className="ml-2">300k views</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" product-section border p-8 mt-10 rounded-lg">
                                <div className="rounded-lg">
                                    <h1 className="text-lg font-semibold">
                                        Recent Viewed Products
                                    </h1>
                                    <div className="main-section flex mt-8 border-b-2 border-gray-100">
                                        <div className="image overflow-hidden rounded-lg">
                                            <a href="#">
                                                {" "}
                                                <img
                                                    className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                                                    src={image4}
                                                ></img>
                                            </a>
                                        </div>
                                        <div className="image-content ml-4">
                                            <a
                                                href=""
                                                className="font-semibold hover:text-blue-600 duration-300"
                                            >
                                                Men's Fashion Tshirt
                                            </a>
                                            <ul className="flex text-sm mt-2 mb-10">
                                                <li className="text-lg text-gray-300">
                                                    <del>$30</del>
                                                </li>
                                                <li className="ml-2 font-semibold text-lg">
                                                    <del>$20</del>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-lg mt-5">
                                    <div className="main-section flex border-b-2 border-gray-100">
                                        <div className="image overflow-hidden rounded-lg">
                                            <a href="#">
                                                <img
                                                    className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                                                    src={image5}
                                                ></img>
                                            </a>
                                        </div>
                                        <div className="image-content ml-4">
                                            <a
                                                href=""
                                                className="font-semibold hover:text-blue-600 duration-300"
                                            >
                                                Nike Shoes
                                            </a>
                                            <ul className="flex text-sm mt-2 mb-10">
                                                <li className="text-lg text-gray-300">
                                                    <del>$200</del>
                                                </li>
                                                <li className="ml-2 font-semibold text-lg">
                                                    <del>$150</del>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-lg mt-5">
                                    <div className="main-section flex ">
                                        <div className="image overflow-hidden rounded-lg">
                                            <a href="#">
                                                <img
                                                    className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                                                    src={image6}
                                                ></img>
                                            </a>
                                        </div>
                                        <div className="image-content ml-4">
                                            <a
                                                href=""
                                                className="font-semibold hover:text-blue-600 duration-300"
                                            >
                                                Addidas Shoes
                                            </a>
                                            <ul className="flex text-sm mt-2">
                                                <li className="text-lg text-gray-300">
                                                    <del>$300</del>
                                                </li>
                                                <li className="ml-2 font-semibold text-lg">
                                                    <del>$200</del>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="Search-section border rounded-lg mt-10 p-7">
                                <h1 className="text-lg text-gray-700 font-semibold mb-7">
                                    Search
                                </h1>
                                <form className="relative">
                                    <button className="absolute">
                                        <i class="fa-solid fa-magnifying-glass mt-4 ml-5 text-gray-400 border focus:border-blue-400 ring-0"></i>
                                    </button>
                                    <input
                                        className=" h-12 w-[320px] border rounded-lg pl-14 bg-gray-100"
                                        placeholder="Search"
                                        type="text"
                                    ></input>
                                </form>
                            </div>

                            <div className="Archieves-section border rounded-lg mt-10 p-7">
                                <h1 className="text-lg text-gray-700 font-semibold mb-5">
                                    Archives List
                                </h1>
                                <ul className="list-disc marker:text-gray-300 leading-8">
                                    <li className="ml-4 text-gray-500 hover:text-gray-800 duration-300 marker:hover:text-blue-600 marker:duration-300">
                                        <a href="#" className="">
                                            January 2020
                                        </a>
                                    </li>
                                    <li className="ml-4 text-gray-500 hover:text-gray-800 duration-300 marker:hover:text-blue-600 marker:duration-300">
                                        <a href="#">February 2020</a>
                                    </li>
                                    <li className="ml-4 text-gray-500 hover:text-gray-800 duration-300 marker:hover:text-blue-600 marker:duration-300">
                                        <a href="#">March 2020</a>
                                    </li>
                                    <li className="ml-4 text-gray-500 hover:text-gray-800 duration-300 marker:hover:text-blue-600 marker:duration-300">
                                        <a href="#">April 2020</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="relative mt-10 border rounded-lg p-7">
                                <h1 className="text-lg text-gray-700 font-semibold mb-5">
                                    Archives Dropdown
                                </h1>
                                <select
                                    className="w-[100%]  h-12 bg-white border mt-2 rounded-lg px-6  text-gray-500 text-sm focus:border-blue-500 ring-0 cursor-pointer"
                                    type="text"
                                >
                                    <option value="">Select Month</option>
                                    <option value="">England</option>
                                    <option value="">New Zealand</option>
                                    <option value="">Switerland</option>
                                    <option value="">United kindom (UK)</option>
                                    <option value="">United States (USA)</option>
                                </select>
                            </div>

                            <div className="Tags-section border rounded-lg p-7 mt-10">
                                <h1 className="mb-8 text-lg text-gray-700 font-semibold">Tags</h1>
                                <div className="flex">
                                    <a
                                        href="#"
                                        className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                                    >
                                        Design
                                    </a>
                                    <a
                                        href="#"
                                        className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                                    >
                                        HTML
                                    </a>
                                    <a
                                        href="#"
                                        className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                                    >
                                        Graphic
                                    </a>
                                </div>
                                <div className="flex mt-3">
                                    <a
                                        href="#"
                                        className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                                    >
                                        Development
                                    </a>
                                    <a
                                        href="#"
                                        className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                                    >
                                        UI/UX Design
                                    </a>
                                </div>
                                <div className="flex mt-3">
                                    <a
                                        href="#"
                                        className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300    px-4 py-2 rounded-full mr-3"
                                    >
                                        eCommerce
                                    </a>
                                    <a
                                        href="#"
                                        className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                                    >
                                        CSS
                                    </a>
                                    <a
                                        href="#"
                                        className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                                    >
                                        JS
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Hot-News-Section mt-20 mx-44 ">
                        <div className="Main-section">
                            <div className="News flex">
                                <div className="">
                                    <i class="fa-solid fa-bell border p-2 rounded-full h-8 w-8 bg-[#8c71db] text-white"></i>
                                </div>
                                <p className="text-[#8c71db] ml-2 font-semibold mt-1">Hot News</p>
                            </div>
                            <div className="flex justify-between">
                                <div className="">
                                    <h1 className="text-3xl font-semibold text-gray-800 mt-3">
                                        Related Blog
                                    </h1>
                                </div>
                                <div className=" flex">
                                    <button className="">
                                        <i class="fa-solid fa-arrow-left border p-4 text-gray-400 bg-gray-50 rounded-md"></i>
                                    </button>
                                    <button className="">
                                        <i class="fa-solid fa-arrow-right border p-4 text-gray-400 bg-gray-50 ml-3 rounded-md"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="Shoes-section my-16 flex">
                            <div className="1st-Shoes mr-7">
                                <img
                                    className="image rounded-lg cursor-pointer"
                                    src={shoes1}
                                ></img>
                                <div className=" mt-8">
                                    <a
                                        href="#"
                                        className="text-xl font-semibold text-gray-800 hover:text-blue-600 duration-300"
                                    >
                                        With an Irrelevent Twist, AMBHUSh
                                        <br />
                                        Highlights Converse's Outdoor Heritage
                                    </a>
                                    <div className="main-section flex mt-8">
                                        <div className="image">
                                            <img className="h-12 w-12 rounded-full" src={rimage2}></img>
                                        </div>
                                        <div className="image-content ml-4">
                                            <a
                                                href=""
                                                className="font-semibold hover:text-blue-600 duration-300"
                                            >
                                                Leslie Alexander
                                            </a>
                                            <ul className="flex text-gray-500 text-sm mt-1">
                                                <li className="">Feb 17, 2019 |</li>
                                                <li className="ml-2">300k views</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="2st-Shoes mr-7">
                                <img className="rounded-lg cursor-pointer" src={shoes2}></img>
                                <div className=" mt-8">
                                    <a
                                        href="#"
                                        className="text-xl font-semibold text-gray-800 hover:text-blue-600 duration-300"
                                    >
                                        UCLA Athletics Reaches Multi-Year
                                        <br />
                                        Agreement with NIKE, Inc. and Jordan
                                        <br />
                                        Brand
                                    </a>
                                    <div className="main-section flex mt-8">
                                        <div className="image">
                                            <img className="h-12 w-12 rounded-full" src={rimage1}></img>
                                        </div>
                                        <div className="image-content ml-4">
                                            <a
                                                href=""
                                                className="font-semibold hover:text-blue-600 duration-300"
                                            >
                                                Julian Vinn
                                            </a>
                                            <ul className="flex text-gray-500 text-sm mt-1">
                                                <li className="">Mar 28, 2020 |</li>
                                                <li className="ml-2">200k views</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="3st-Shoes">
                                <img className="rounded-lg cursor-pointer" src={shoes3}></img>
                                <div className=" mt-8">
                                    <a
                                        href="#"
                                        className="text-xl font-semibold text-gray-800 hover:text-blue-600 duration-300"
                                    >
                                        An oral history of the AIM away message by <br />
                                        the people who were there
                                    </a>
                                    <div className="main-section flex mt-8">
                                        <div className="image">
                                            <img className="h-12 w-12 rounded-full" src={rimage3}></img>
                                        </div>
                                        <div className="image-content ml-4">
                                            <a
                                                href=""
                                                className="font-semibold hover:text-blue-600 duration-300"
                                            >
                                                Ariana Grande
                                            </a>
                                            <ul className="flex text-gray-500 text-sm mt-1">
                                                <li className="">Apr 20, 2021 |</li>
                                                <li className="ml-2">500k views</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='BLOG-FOOTER'>
                <SubscribePhoto />
                <Footer />
            </section>
        </>
    )
}
export default Gallerypost
