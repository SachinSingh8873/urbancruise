import React from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  ChevronDown,
} from "lucide-react";

function First() {
  return (
    <div className="w-full h-full">      {/* Background Image */}
<section
  className="relative min-h-screen bg-cover bg-center bg-no-repeat ]"
  style={{backgroundImage: "url('/images/hero-bg.jpg')"}}
>
        <div className="absolute inset-0 bg-black bg-opacity-0"></div>

        {/* Social Media Icons */}
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-20">
          <div className="flex flex-col space-y-2">
            <div className="bg-blue-600 p-2 rounded-r-lg">
              <Facebook className="w-5 h-5 text-white" />
            </div>
            <div className="bg-blue-400 p-2 rounded-r-lg">
              <Twitter className="w-5 h-5 text-white" />
            </div>
            <div className="bg-blue-700 p-2 rounded-r-lg">
              <Linkedin className="w-5 h-5 text-white" />
            </div>
            <div className="bg-red-600 p-2 rounded-r-lg">
              <Youtube className="w-5 h-5 text-white" />
            </div>
            <div className="bg-pink-600 p-2 rounded-r-lg">
              <Instagram className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-20">
          <div className="flex flex-col space-y-3">
            <button className="bg-green-500 hover:bg-green-600 rounded-full p-3">
              <MessageCircle className="w-6 h-6 text-white" />
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 rounded-full p-3">
              <Phone className="w-6 h-6 text-white" />
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 rounded-full p-3">
              <Mail className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-10 px-4 py-20">
  <div className="text-left mb-16 max-w-2xl">
    {/* Main Heading */}
    <h1
      className="text-4xl md:text-7xl font-bold text-yellow-400 mb-6 text-left"
      style={{
        textShadow:
          "3px 3px 6px rgba(0,0,0,0.7), -1px -1px 0px rgba(139,69,19,1), 1px -1px 0px rgba(139,69,19,1), -1px 1px 0px rgba(139,69,19,1), 1px 1px 0px rgba(139,69,19,1)",
      }}
    >
      Tempo Traveller Rental
      <br />
      in Delhi
    </h1>

    {/* Subheading */}
    <h2
      className="text-4xl font-bold text-green-400 mb-8 text-left"
      style={{
        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
      }}
    >
      Hire Tempo Travellers on Rent
    </h2>

    {/* Description */}
    <div className="text-white text-xl mb-4 text-left">
      <p className="mb-2">Experience our Premium, Royal & ROYAL VIP</p>
      <p className="mb-2">Class Tempo Travellers for a memorable Ride</p>
      <div className="bg-yellow-400 text-black px-6 py-2 inline-block font-bold text-lg">
        in Delhi, NOIDA, Gurugram
      </div>
    </div>
  </div>
</div>
</section>
  {/* Contact Form */}
{/* Contact Form */}
<div className="relative z-20 max-w-3xl mx-auto -translate-y-24">
  <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 p-0.5 rounded-xl shadow-lg">
    <div className="bg-[#8CD100] py-4 rounded-t-xl">
      <h2 className="text-center text-white text-2xl font-bold tracking-wide">
        GET A QUICK CALL
      </h2>
    </div>
    <form className="bg-white p-6 rounded-b-xl flex flex-col md:flex-row gap-4 items-center">
      <input
        type="text"
        placeholder="Name"
        className="flex-1 border border-gray-300 rounded-md h-12 px-4"
      />
      <div className="flex-1 flex items-center border border-gray-300 rounded-md h-12 overflow-hidden">
        <div className="flex items-center px-3 border-r border-gray-300 h-full bg-gray-100">
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
        <input
          type="tel"
          placeholder="Phone Number"
          className="flex-1 border-0 h-full px-3"
        />
      </div>
      <button
        type="submit"
        className="flex-shrink-0 bg-[#FFA500] hover:bg-[#FF8C00] text-white font-bold py-2 px-8 rounded-md h-12"
      >
        SUBMIT
      </button>
    </form>
  </div>
</div>


      
    </div>
  );
}

export default First;