'use client'

import { StockRankingDummy } from "@/app/common/dummy/stock.dummy";
import MiniChart from "@/app/component/chart/miniChart";
import { WhiteBox } from "@/app/component/style/whiteBox";
import Image from "next/image";
import Link from "next/link";

export default function stockMain() {


    function handleLogo(id:number) {
        const enums: any = {
            1: '/stockLogo/samsung.jpg',
            2: '/stockLogo/lg.jpg',
            3: '/stockLogo/sk.jpg',
            4: '/stockLogo/db.jpg',
            5: '/stockLogo/nepes.jpg',
            6: '/stockLogo/foosung.jpg',
            7: '/stockLogo/wonik.jpg',
            8: '/stockLogo/lsElec.jpg',
            9: '/stockLogo/sk.jpg',
            10: '/stockLogo/motrex.jpg',
            11: '/stockLogo/ssg.jpg',
            12: '/stockLogo/protec.jpg',
        };
        return enums[id];
    };

    return (
        <div className="w-full h-full justify-center flex">
            <div className="w-[80%]">
                <div>실시간 랭킹 TOP 10</div>
                <div className="grid grid-cols-8 text-center items-center bg-pebble-100 text-white h-[40px] bold text-lg rounded-lg">
                    <div>rank</div>
                    <div className="col-span-3">종목</div>
                    <div>현재가</div>
                    <div>거래량</div>
                    <div>시총</div>
                </div>
                {StockRankingDummy.map((v:any, i:number) =>
                    <WhiteBox key={v.id} style="my-3">
                        <Link href={`/stock/stockDetail/${v.id}`}
                            className="grid grid-cols-7 text-center items-center" >
                            <div className="row-span-2 ">{v.id}</div>
                            <div className="row-span-2 flex items-center justify-center">
                                <Image src={handleLogo(v.id)} width={50} height={30} alt={"search"} className="rounded-lg"/>
                            </div>
                            <div className="row-span-2 "><MiniChart/></div>
                            <span className="row-span-2 ">{v.stock}</span>
                            <span>{v.now}</span>
                            <span>{v.volume}</span>
                            <span>{v.total}</span>

                            {/* <div className="text-slate-400">{i.stock}</div> */}
                            <div className="text-slate-400">{v.now}</div>
                            <div className="text-slate-400">{v.volume}</div>
                            <div className="text-slate-400">fff</div>

                        </Link>
                    </WhiteBox>
                )}
            </div>
        </div>
    )
}