import Logo from "../assets/Logo.jpg";
import {
  Home,
  Twitter,
  PlaySquare,
  Notebook,
} from "lucide-react";

const menuItems = [
  { label: "Home", icon: Home },
  { label: "Twitter", icon: Twitter },
  { label: "Youtube", icon: PlaySquare },
  { label: "Notes", icon: Notebook },
];

function Sidebar() {
  return (
    <div 
      className="flex flex-col h-screen w-20 sm:w-64 transition-all duration-300 ease-in-out border-r border-slate-800"
      style={{ backgroundColor: "#14284F" }} 
    >
      

      <div className="flex items-center gap-3 p-4 mb-6 overflow-hidden">
        <img 
          src={Logo} 
          alt="Second Brain Logo" 
          className="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-[#4B8AC8]" 
        />
        <span 
          className="font-bold text-xl whitespace-nowrap transition-opacity duration-300 delay-100 hidden sm:block"
          style={{ color: "#BCE6F4" }} 
        >
          Second Brain
        </span>
      </div>


      <nav className="flex flex-col gap-2 px-2">
        {menuItems.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="group flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-200 hover:translate-x-1 hover:text-xl"
            style={{ color: "#BCE6F4" }} 
          >

            <div className="absolute inset-0 rounded-xl bg-[#1B4F8F] opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10 mx-2 sm:mx-0"></div>

            <Icon 
              size={24} 
              className="shrink-0 group-hover:text-white transition-colors"
            />
            <span 
              className="font-medium whitespace-nowrap hidden sm:block group-hover:text-white transition-colors"
            >
              {label}
            </span>
          </div>
        ))}
      </nav>
      
      
      <div className="mt-auto p-4 border-t border-[#1B4F8F]/30">
        <div className="w-8 h-8 rounded-full bg-[#4B8AC8]/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#BCE6F4]"></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;