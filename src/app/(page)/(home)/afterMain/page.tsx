
import Introduce from "@/app/component/main/introduce";
import AdBox from "@/app/component/main/adBox";
import MiniNotice from "@/app/component/main/miniNotice";
import { Search } from "@/app/component/search/search";
import Image from "next/image";
import Link from "next/link";
import { WhiteBox } from "@/app/component/style/whiteBox";
import { tradeDummy } from "@/app/common/dummy/account.dummy";
import { IAccount } from "@/app/api/model/account.model";

export default function AfterHome() {

    const accList = tradeDummy;

    const highestIdPerAcno = Object.values(accList.reduce((acc: Record<string, IAccount>, account: IAccount) => {
        if (!acc[account.acno] || acc[account.acno].id < account.id) {
          acc[account.acno] = account;
        }
        return acc;
      }, {}));
    
    return (
        <main className="w-full h-full flex justify-center ">
            <div className="w-[90%] mt-2">
                <div className="space-y-3">
                    <div className="w-full h-full "><Search text="Search" /></div>
                    <div className="w-full h-[500px]"><AdBox /></div>
                </div>

                <div className="">
                <p className="text-[50px] blod border-b-2 border-pebble-3">나의 자산 현황</p>
                <div className="flex gap-3 scroll-auto w-full h-full bg-pink-300 snap-x">
                {highestIdPerAcno.map((v:IAccount, i:number)=>
                    <WhiteBox style="bg-pebble-400 snap-start w-[300px]">
                        <div>
                            <div>{v.acno}</div>
                            <div>{v.balance}</div>           
                        </div>
                    </WhiteBox>
                )}
                </div>
                </div>

                <div className="grid grid-cols-5 p-5">
                    <div className="col-span-2"><MiniNotice /></div>
                    <div className=""></div>
                    <div className="col-span-2 border relative top-0">
                        <div className=""> <Image src={"/imgs/character1.jpg"} fill sizes="100%" alt={"character1"}></Image></div>
                        <div className="sticky top-0 z-5 w-full h-full text-center content-center text-[50px] truncate"><Link href={"/articles/character"} className="">나의 투자 성향은?</Link></div>
                    </div>
                </div>
                <div className="my-5">
                    <Introduce />
                </div>
            </div>
        </main>
    )
}
