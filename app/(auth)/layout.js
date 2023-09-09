import Image from "next/image";
export default function AuthLayout({ children }) {
  return (
    <div className="bg-blue-500 h-screen overflow-hidden flex items-center justify-center">
      <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
        <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
          <Image src="/LogoMcte.png" alt="MCTEKK" width="300" height="40" />
        </div>
        {children}
      </div>
    </div>
  );
}
