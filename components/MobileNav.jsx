"use client";

import { usePathname } from "next/navigation"
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const links = [
  {
    name: "home",
    path: "/",
    // icon: <CiMenuFries className="text-[32px] text-accent" />
  },
  // {
  //   name: "services",
  //   path: "/services",
  // },
  {
    name: "resume",
    path: "/resume",
    // icon: <CiMenuFries className="text-[32px] text-accent" />
  },
  {
    name: "work",
    path: "/work",
    // icon: <CiMenuFries className="text-[32px] text-accent" />
  },
  {
    name: "contact",
    path: "/contact",
    // icon: <CiMenuFries className="text-[32px] text-accent" />
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Tabs className="w-full bg-primary mt-10 ">
      <TabsList  className="w-full  m-0 p-4 border-t bg-primary rounded-none bg-transparent rounded-0  border-gray-700 ">
        {links.map((link, index) => {
          return(
            <TabsTrigger  key={index} className="bg-primary  flex-grow w-full rounded-none">
              <Link
              href={link.path}
              className={`${
                link.path === pathname &&
                "text-accent-hover border-b-2 border-accent-hover "
                } text-xl text-white capitalize transition-all `}
                >
              {link.name}
            </Link>
            </TabsTrigger>
          ) 
        })}
        </TabsList>
    </Tabs>
  );
};

export default MobileNav;

// links.map((link, index) => {
//   return (
//     <Link
//       href={link.path}
//       key={index}
//       className={`${
//         link.path === pathname &&
//         "text-accent border-b-2 border-accent"
//       } text-xl capitalize hover:text-accent transition-all`}
//     >
//       {link.name}
//     </Link>
//   );
// })}