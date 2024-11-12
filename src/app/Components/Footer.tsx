// components/Footer.js
import Image from 'next/image';
import Logo from "@/app/Assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#043873] text-white py-12 h-[400px]">
      <div className="w-[1400px] mx-auto px-[32px] flex justify-between items-start">
        {/* Logo and Description */}
        <div className="flex flex-col w-[300px] ml-10 mt-11">
          <Image src={Logo} alt="Company Logo" width={150} height={40} />
          <p className="text-lg mt-6">
            Whitepace was created for the new ways we live and work. We make a better workspace around the world.
          </p>
        </div>

        {/* Product Section */}
        <div className="w-[200px]">
          <h3 className="font-semibold text-xl mb-4 mt-11">Product</h3>
          <ul className="space-y-2">
            <li className="text-lg hover:text-yellow-500">Overview</li>
            <li className="text-lg hover:text-yellow-500">Pricing</li>
            <li className="text-lg hover:text-yellow-500">Customer Stories</li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="w-[200px]">
          <h3 className="font-semibold text-xl mb-4 mt-11">Resources</h3>
          <ul className="space-y-2">
            <li className="text-lg hover:text-yellow-500">Blogs</li>
            <li className="text-lg hover:text-yellow-500">Guides & tutorials</li>
            <li className="text-lg hover:text-yellow-500">Help centre</li>
          </ul>
        </div>
        <div className="w-[200px]">
          <h3 className="font-semibold text-xl mb-4 mt-11">Company</h3>
          <ul className="space-y-2">
            <li className="text-lg hover:text-yellow-500">About Us</li>
            <li className="text-lg hover:text-yellow-500">Careers</li>
            <li className="text-lg hover:text-yellow-500">Media kit</li>
          </ul>
        </div>
        
      </div>
      {/* Copyright Section */}
    <div className="w-full text-center mt-28 border-t border-white pt-4">
      <p className="text-sm text-gray-300">&copy; 2021 Whitepace LLC.</p>
    </div>
    </footer>
  );
};

export default Footer;
