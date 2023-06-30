import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex rounded-t-[20px] justify-between items-center px-8 py-3 text-white bg-[#24292F] hover:bg-[#16191c]">
      <Link href={"/"} className="text-white font-bold">Anonymous Baatein</Link>
      <Link href={"/addTopic"} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Add Topic</Link>
    </nav>
  );
}
