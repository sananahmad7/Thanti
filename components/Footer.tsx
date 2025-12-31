import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#181816] text-[#8C8681] border-t border-[#4A3B32]/50 font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
          {/* COLUMN 1: BRAND */}
          <div className="md:col-span-1 space-y-6">
            <Link href="/" className="flex flex-col group w-fit">
              <h1 className="text-2xl font-serif tracking-widest text-[#FF9F2E] uppercase group-hover:opacity-80 transition-opacity">
                Thanti
              </h1>
              <span className="text-xs tracking-[0.2em] text-[#8C8681] opacity-70">
                Snacking Bar
              </span>
            </Link>
            <p className="text-sm font-light leading-relaxed opacity-80 max-w-xs">
              A hidden nook in Lakeside. <br />
              Built for slow drinks, low voices, <br />
              and honest food.
            </p>
          </div>

          {/* COLUMN 2: LINKS */}
          <div className="space-y-6">
            <h4 className="text-[#E0E0E0] font-serif text-lg tracking-wide">
              Explore
            </h4>
            <ul className="space-y-4 text-sm tracking-widest uppercase opacity-80">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#FF9F2E] transition-colors"
                >
                  The Space
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-[#FF9F2E] transition-colors"
                >
                  The Fare
                </Link>
              </li>
              <li>
                <Link
                  href="/happenings"
                  className="hover:text-[#FF9F2E] transition-colors"
                >
                  Happenings
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: VISIT */}
          <div className="space-y-6">
            <h4 className="text-[#E0E0E0] font-serif text-lg tracking-wide">
              Visit Us
            </h4>
            <ul className="space-y-4 text-sm font-light opacity-80">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#FF9F2E] mt-1 shrink-0" />
                <span>
                  Lakeside, Pokhara <br />
                  Street No. 16, Kaski
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#FF9F2E] shrink-0" />
                <span className="hover:text-[#E0E0E0] cursor-pointer transition-colors">
                  +977 980-0000000
                </span>
              </li>
              <li className="pt-2">
                <span className="block text-[#FF9F2E] text-xs uppercase tracking-widest mb-1">
                  Open Daily
                </span>
                <span>3:00 PM — Late</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: SOCIAL */}
          <div className="space-y-6">
            <h4 className="text-[#E0E0E0] font-serif text-lg tracking-wide">
              Connect
            </h4>
            <div className="flex gap-4">
              <SocialIcon icon={<FaFacebookF />} href="#" />
              <SocialIcon icon={<FaInstagram />} href="#" />
            </div>
            <p className="text-xs opacity-60 font-light pt-2">
              Join our Facebook group for <br /> daily specials and updates.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#4A3B32]/30 bg-[#141412]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs opacity-40">
          <p>&copy; {currentYear} Thanti Snacking Bar.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="/admin"
              className="hover:text-[#FF9F2E] transition-colors"
            >
              Staff Login
            </Link>
            <span>Made in Pokhara</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper for Social Icons
const SocialIcon = ({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 border border-[#4A3B32] rounded-full flex items-center justify-center text-[#8C8681] hover:border-[#FF9F2E] hover:text-[#FF9F2E] transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;
