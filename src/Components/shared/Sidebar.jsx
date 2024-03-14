import React, { useState } from 'react';
import classNames from "classnames";
import { FcPositiveDynamic } from "react-icons/fc";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classNames('bg-neutral-900 text-white', { 'w-16': !isOpen, 'w-64': isOpen })}>
            <div className='flex items-center gap-2 px-2 py-4 mr-9'>
                <div onClick={toggleSidebar} className="cursor-pointer">
                    {isOpen ? (
                        <IoMdClose fontSize={24} />
                    ) : (
                        <IoMdMenu fontSize={24} />
                    )}
                </div>
                {isOpen && (
                    <>
                        <FcPositiveDynamic fontSize={24} />
                        <span className='text-lg'>E-Mart</span>
                    </>
                )}
            </div>
            {isOpen && (
                <>
                    <div className='py-2 flex flex-1 flex-col gap-0.5 pt-2 border-t border-neutral-700'>
                        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                            <SidebarLink key={item.key} item={item} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

function SidebarLink({ item }) {
    const { pathname } = useLocation();
    return (
        <Link
            to={item.path}
            className={classNames(
                pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400',
                linkClasses
            )}
        >
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    );
}



// import React from 'react'
// import classNames from "classnames"
// import { FcPositiveDynamic } from "react-icons/fc";
// import { Link, useLocation } from 'react-router-dom'
// import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation';

// const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

// export default function Sidebar() {
//   return (
//     <div className='bg-neutral-900 flex flex-col text-white'>
//         <div className='flex items-center gap-2 px-2 py-4 mr-9'>
//             <FcPositiveDynamic fontSize={24}/>
//             <span className='text-white  text-lg'>E-Mart</span>
//         </div>
//         <div className='py-2 flex flex-1 flex-col gap-0.5 pt-2 border-t border-neutral-700'>
//             {DASHBOARD_SIDEBAR_LINKS.map((item) => (
//                 <SidebarLink key={item.key} item={item}/>
//             ))}
//         </div>
//         <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
//             {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
//                 <SidebarLink key={item.key} item={item}/>
//             ))}
            
//         </div>
//     </div>
//   )
// }

// function SidebarLink({ item }) {
//     const { pathname } = useLocation()
//     return(
//         <Link to={item.path} 
//             className={classNames (
//                 pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400',
//                 linkClasses
//                 )}
//             >
//             <span className='text-xl'>{item.icon}</span>
//             {item.label}
//         </Link>
//     )
// }
