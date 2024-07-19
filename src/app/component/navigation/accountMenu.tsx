'use client'

import Link from "next/link";
import { AcountMenus, AiMenus } from "@/app/common/enums/main.menus";
import { useState } from "react";
import { tradeDummy } from "@/app/common/dummy/account.dummy";

function AccountMenu() {

    const [isOpen, setIsOpen] = useState(true);
    // const mypath = usePathname()

    const accAI = tradeDummy[0];

    return (
        <nav>
            <ul className="w-full h-[50px] grid grid-cols-7 border-b-2 border-pebble-200 bg-pebble-100">
                <Link href="/asset/list"><li className="bg-pebble-300 h-full w-full text-right justify-center content-center px-3">나의 자산</li></Link>
                <li className="overflow-hidden justify-right flex h-full">
                    <div className="bg-pebble-300 origin-bottom -rotate-45 -translate-y-6 ring-[33px] ring-offset-0 ring-pebble-300 h-[30px] w-[150px]"></div>
                </li>
                <Link href="/asset/asset" className="hover:text-lg text-white h-full w-full content-center text-center">
                    <li className="">보유주식 조회</li></Link>
                <Link href="/asset/histories/1" className="hover:text-lg text-white h-full w-full content-center text-center">
                    <li className="">거래내역 조회</li></Link>
                <Link href="/asset/IPO" className="hover:text-lg text-white h-full w-full content-center text-center">
                    <li className="">IPO 달력</li></Link>

                    <li className="group/item hover:text-lg text-white h-full w-full content-center text-center">
                    <Link className={`flex justify-center`} href="/asset/histories/2">CMA</Link>

                    <div className="relative top-0 group/edit hidden group-hover/item:block h-[1px] ">
                        <div className="h-auto bg-pebble-100 rounded-b-lg ">
                
                                <ul className="text-center py-2 items-center justify-center shadow-sm ">
                                    {AcountMenus.map((hover2: IMenu, i: number) => (
                                        <li key={hover2.id} className="pb-1"><Link className="text-white hover:text-pebble-300 w-full py-2 " href={hover2.href}>{hover2.title}</Link></li>
                                    ))}
                                </ul>
                        </div>
                    </div>
                </li>

                <li className="group/item hover:text-lg text-white h-full w-full content-center text-center">
                    <Link className={`flex justify-center`} href="/asset/histories/1">AI</Link>

                    <div className="relative top-0 group/edit hidden group-hover/item:block h-[1px] ">
                        <div className="h-auto bg-pebble-100 rounded-b-lg ">
                
                                <ul className="text-center py-2 items-center justify-center shadow-sm ">
                                    {AiMenus.map((hover2: IMenu, i: number) => (
                                        <li key={hover2.id} className="pb-1"><Link className="text-white hover:text-pebble-300 w-full py-2 " href={hover2.href}>{hover2.title}</Link></li>
                                    ))}
                                </ul>
                        </div>
                    </div>
                </li>
            </ul>

        </nav>
    )
}
export default AccountMenu;