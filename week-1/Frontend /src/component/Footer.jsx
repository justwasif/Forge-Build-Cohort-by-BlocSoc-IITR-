import React from "react";

function Footer() {
  return (
    <footer className="bg-red-700 text-white py-6 px-4">
      
      <div className="max-w-4xl mx-auto text-center space-y-3">

        <h1 className="text-xl font-semibold">
          This is just footer nothing more (plz connect me on LinkedIn)
        </h1>

        <p className="text-sm text-red-100">
          I wanted to add isActive so all accounts change to yellow
        </p>

        <ul className="flex justify-center gap-6 mt-4">

          <li>
            <a 
              href="https://github.com/justwasif"
              className="hover:text-yellow-300 active:text-yellow-400 transition"
            >
              GitHub
            </a>
          </li>

          <li>
            <a 
              href="https://www.linkedin.com/in/mohammed-wasif-ansari-1b439538b/"
              className="hover:text-yellow-300 active:text-yellow-400 transition"
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a 
              href="https://x.com/slaysid6"
              className="hover:text-yellow-300 active:text-yellow-400 transition"
            >
              X
            </a>
          </li>

          <li>
            <a 
              href="https://www.instagram.com/slaysid6/"
              className="hover:text-yellow-300 active:text-yellow-400 transition"
            >
              Instagram
            </a>
          </li>

        </ul>

      </div>

    </footer>
  );
}

export default Footer;
