'use client'

import { useState } from "react";
import StockInfo from "@/app/component/stock/stockInfo";
import { TabButton } from "@/app/component/button/tabButton";
import StockLog from "@/app/component/stock/stockLog";
import ChatRoom from "../../chatting/page";
import StockChat from "../../stockchat/[id]/page";
import StockAnnual from "../../stockAnnual/page";
import Link from "next/link";

function Stock({params}:{params:{id:number}}) {
    const [btn, setBtn] = useState(1);

    function handleInfo(btn: any) {
        console.log("handelCharts : ", btn)
        const enums: any = {
            1: <StockInfo />,
            2: <StockLog />,
            3: <StockAnnual/>,
            5: <ChatRoom />,
            6: <StockChat params={1} />,
            7: <div ><Link href="/stock/stockchat/1">종목 토론방을 만들긴 함</Link></div>,
        };
        return <div>{enums[btn]}</div>;
    };

    return (
        <div className="w-full h-full">
            <div className="w-full flex justify-center">
                <div className="flex-col w-[85%] items-center flex mb-3">
                    <div className="w-full h-[300px] bg-cover bg-benner_img bg-center bg-fixed"></div>
                    <div className="w-[85%] shadow-lg rounded-lg ">
                        <div className="h-[50px] grid grid-cols-5">
                            <TabButton click={() => setBtn(1)} select={btn == 1} >종합</TabButton>
                            <TabButton click={() => setBtn(2)} select={btn == 2} >시세</TabButton>
                            <TabButton click={() => setBtn(3)} select={btn == 3} >재무정보</TabButton>
                            {/* <TabButton click={() => setBtn(4)} select={btn == 4} >관련뉴스</TabButton> */}
                            <TabButton click={() => setBtn(5)} select={btn == 5} >종목챗방</TabButton>
                            <TabButton click={() => setBtn(6)} select={btn == 6} >종목토론</TabButton>
                        </div>
                        <div className="p-5 border border-t-0" >{handleInfo(btn)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Stock;