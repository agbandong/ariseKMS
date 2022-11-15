import React, { Children, useState } from 'react';
import useRoute from '@/Hooks/useRoute';

interface Props {
  children?: React.ReactNode
}

export default function Sidebar ({children}:Props) {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", resources: "Chart_fill" },
    { title: "Inbox", resources: "Chat" },
    { title: "Accounts", resources: "User", gap: true },
    { title: "Schedule ", resources: "Calendar" },
    { title: "Search", resources: "Search" },
    { title: "Analytics", resources: "Chart" },
    { title: "Files ", resources: "Folder", gap: true },
    { title: "Setting", resources: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-purple-600 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="/logo192.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Arise KMS
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`/assets/${Menu.resources}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-screen flex-1">
        {children}
      </div>
    </div>
  );
};