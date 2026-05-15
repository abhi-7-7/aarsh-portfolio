// "use client";

// import Link from "next/link";
// import { personal, navLinks } from "@/lib/data";
// import { useState } from "react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const mobileMenuId = "mobile-navigation";

//   return (
//     <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
//       <nav className="content-width flex items-center justify-between h-16" aria-label="Primary navigation">
//         {/* Name / Logo */}
//         <Link
//           href="/"
//           className="text-sm font-semibold tracking-tight text-gray-900 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm"
//         >
//           {personal.name}
//         </Link>

//         {/* Desktop links */}
//         <ul className="hidden sm:flex items-center gap-7">
//           {navLinks.map((link) => (
//             <li key={link.href}>
//               <a
//                 href={link.href}
//                 className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm"
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//           <li>
//             <a
//               href={personal.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm"
//             >
//               GitHub ↗
//             </a>
//           </li>
//         </ul>

//         {/* Mobile hamburger */}
//         <button
//           type="button"
//           className="sm:hidden text-gray-500 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//           aria-expanded={menuOpen}
//           aria-controls={mobileMenuId}
//         >
//           <svg
//             className="w-5 h-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={1.5}
//           >
//             {menuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
//             )}
//           </svg>
//         </button>
//       </nav>

//       {/* Mobile menu */}
//       {menuOpen && (
//         <div id={mobileMenuId} className="sm:hidden border-t border-gray-100 bg-white">
//           <ul className="content-width py-4 flex flex-col gap-4">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <a
//                   href={link.href}
//                   onClick={() => setMenuOpen(false)}
//                   className="text-sm text-gray-700 hover:text-gray-900 transition-colors block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm"
//                 >
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//             <li>
//               <a
//                 href={personal.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-sm text-gray-700 hover:text-gray-900 transition-colors block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm"
//               >
//                 GitHub ↗
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import { personal, navLinks } from "@/lib/data";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuId = "mobile-navigation";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="content-width flex items-center justify-between h-16" aria-label="Primary navigation">
        {/* Name / Logo */}
        <Link
          href="/"
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm"
          aria-label={`${personal.name} – home`}
        >
          <div className="flex items-center gap-2">
            <Image
              src="/images/aarsh_ai_logo.svg"
              alt={personal.name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-18 md:h-20 w-auto mt-6 *:sm:h-20 enabled:hover:animate-pulse ease-linear"
            />
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm"
            >
              GitHub ↗
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="sm:hidden text-gray-500 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls={mobileMenuId}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div id={mobileMenuId} className="sm:hidden border-t border-gray-100 bg-white">
          <ul className="content-width py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-gray-700 hover:text-gray-900 transition-colors block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm"
              >
                GitHub ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
