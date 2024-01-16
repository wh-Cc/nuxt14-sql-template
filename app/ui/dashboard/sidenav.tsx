import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">next 官网 demo</a>
        </div>
        <div className="flex-none">
          <Link
            href="/"
          >
            <button className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button> </Link>
        </div>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <ul className="menu px-4 py-0">
          <NavLinks />
        </ul>
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}
        <button className="btn btn-primary">Sign Out</button>
      </div>
    </div>
  );
}
