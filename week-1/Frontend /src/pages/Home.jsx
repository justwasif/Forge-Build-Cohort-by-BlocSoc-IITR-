import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center px-6">

      <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-3xl">

        <h1 className="text-3xl font-bold text-pink-700 mb-4">
          About Me
        </h1>

        <p className="text-gray-700 leading-relaxed text-lg">
          I am Mohammed Wasif Ansari from Jabalpur (MP), currently studying at IIT Roorkee.
          I enjoy reading manga and manhwa, and I also like a bit of gaming and anime.
          Recently, I started exploring blockchain technology and the EVM.  
          I even read the Bitcoin whitepaper and now I want to understand it completely.
        </p>

      </div>

    </div>
  );
}

export default Home;
