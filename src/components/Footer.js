import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import StarsCircle from "./starCircle";
import EuropeMap from "./youropeMap";
export default function Footer() {
  const iconClasses =
    "w-[22.1686px] h-[22.1686px] flex items-center justify-center bg-[#F1FF66] rounded-full";

  const svgClasses = "w-[12px] h-[12px] text-[#242424]";

  return (
    <footer className="bg-[#242424] text-white px-4 md:px-12 py-20 md:py-28">
      {/* Brand */}
      <h2 className="text-xl font-medium mb-12">APURA CLOUD</h2>

      <div className="flex md:flex-row md:justify-between md:items-center">
        {/* Footer links */}
        <div className="grid gap-12 md:grid-cols-3 mb-20">
          {/* Products */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">Products</h3>
            <ul className="flex flex-col gap-2 text-sm opacity-80">
              <li>Features</li>
              <li>Pricing</li>
              <li>Updates</li>
            </ul>
          </div>

          {/* Roadmap */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">Roadmap</h3>
            <ul className="flex flex-col gap-2 text-sm opacity-80">
              <li>Stage 1</li>
              <li>Stage 2</li>
              <li>Stage 3</li>
              <li>Stage 4</li>
              <li>Stage 5</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <ul className="flex flex-col gap-2 text-sm opacity-80">
              <li>Help us on our journey</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="relative w-[520px] h-[420px]">
          <EuropeMap className="w-full h-full opacity-[0.9]" />
          <StarsCircle />
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col gap-6">
        {/* Social icons */}
        <div className="flex gap-3">
          <a href="#" aria-label="Facebook">
            <div className={iconClasses}>
              <FaFacebookF className={svgClasses} />
            </div>
          </a>

          <a href="#" aria-label="Instagram">
            <div className={iconClasses}>
              <FaInstagram className={svgClasses} />
            </div>
          </a>

          <a href="#" aria-label="Twitter">
            <div className={iconClasses}>
              <FaTwitter className={svgClasses} />
            </div>
          </a>

          <a href="#" aria-label="YouTube">
            <div className={iconClasses}>
              <FaYoutube className={svgClasses} />
            </div>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm opacity-70">
          © 2025 Apura Cloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
