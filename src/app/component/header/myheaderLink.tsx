'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation'
import { AcountMenus, AiMenus, BoardMenus, HeaderMenus, MyHeaderMenus } from "@/app/common/enums/main.menus";
import MiniProfile from "../myprofile/miniProfile";


export default function MyHeaderLink() {

    const [showProfile, setShowProfile] = useState(false);
    const pathName = usePathname();


    return (
        <ul className="grid grid-cols-9 justify-center gap-5 h-full w-full">
            {MyHeaderMenus.map((hover: IMenu, i: number) => (
                <li key={hover.id} className="group/item ">
                    <Link className={`flex hover:border-t-2 hover:border-pebble-500 h-full w-full text-center justify-center items-center ${pathName == hover.href ? 'border-pebble-500 border-t-2' : ''}`}
                        href={hover.href}>{hover.title}</Link>
                    <div className="h-[5px]"></div>
                    <div className="relative top-0 group/edit hidden group-hover/item:block h-[1px]">
                        <div className="h-full rounded-lg ">

                            {hover.title == "Finance" ?
                                <ul className="text-center py-2 items-center justify-center border rounded-lg shadow-sm bg-white">
                                    <li><Link className="hover:text-pebble-500 w-full my-3" href="/asset/list">보유주식</Link></li>
                                    <li><Link className="hover:text-pebble-500 w-full my-3" href="/asset/list">거래내역</Link></li>
                                    <li className="border border-1 border-pebble-200 my-3"></li>
                                    <li className="bold border-dashed border-b-2 border-amber-200 mb-1">CMA</li>
                                    <li>
                                        {AcountMenus.map((hover2: IMenu, i: number) => (
                                            <div key={hover2.id} className="pb-1"><Link className="hover:text-pebble-500 w-full" href={hover2.href}>{hover2.title}</Link></div>
                                        ))}
                                    </li>
                                    <li className="border border-1 border-pebble-200 my-3"></li>
                                    <li className="bold border-dashed border-b-2 border-amber-200 mb-1">AI</li>
                                    <li>
                                        {AiMenus.map((hover2: IMenu, i: number) => (
                                            <div key={hover2.id} className="pb-1"><Link className="hover:text-pebble-500 w-full py-2 " href={hover2.href}>{hover2.title}</Link></div>
                                        ))}
                                    </li>
                                </ul>
                                : <div></div>}

                            {hover.title == "고객센터" ?
                                <ul className="text-center py-2 items-center justify-center border rounded-lg shadow-sm bg-white">
                                    {BoardMenus.map((hover2: IMenu, i: number) => (
                                        <li key={hover2.id} className="pb-1"><Link className="hover:text-pebble-500 w-full py-2 " href={hover2.href}>{hover2.title}</Link></li>
                                    ))}
                                </ul>
                                : <div></div>}

                        </div>
                    </div>
                </li>
            ))}
             <li className="group/item "><MiniProfile /></li>
        </ul>
    );
};