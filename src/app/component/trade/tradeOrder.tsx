'use client'
import { useState } from "react";
import { TabButton } from "../button/tabButton";
import { GrayButton, MoveButton } from "../button/moveButton";

export default function TradeOrder({ordDvsnCd}:{ordDvsnCd:number}) {
    const [btn, setBtn] = useState(1);
    const [volume, setVolume] = useState(1);
    const [price, setPrice] = useState(0);

    function handleInfo(btn: number) {
        const enums: any = {
            1: "현금 매수",
            2: "현금 매도",
        };
        return enums[btn];
    };

    function handleCount(value: number) {
        value == 1 ? setVolume(volume + 1) : setVolume(volume - 1);
    }

    return (
        <div className="w-full h-full ">
                <div className="h-[50px] grid grid-cols-2">
                    <TabButton click={() => setBtn(1)} select={btn == 1} >매수</TabButton>
                    <TabButton click={() => setBtn(2)} select={btn == 2} >매도</TabButton>
                </div>
                <div className="border border-t-0 p-5 content-center space-y-3" >
                    <div className="flex justify-center gap-4">
                        <label className="flex content-center" id="input1"><input type="radio" name="select" className="w-5" value={1} />지정가</label>
                        <label className="flex content-center" id="input2"><input type="radio" name="select" className="w-5" value={0} onClick={(e:any)=>setPrice(ordDvsnCd)}/>현재가</label>
                    </div>
                    <div className="gap-4 space-y-3">
                        <label className=" content-center gap-3">
                        지정가
                            <input type="text" className="w-auto" value={price} onChange={(e: any) => setPrice(Number(e.target.value))}/></label>
                        <div className="flex">
                            <GrayButton style="min-w-[30px] w-[1%]" click={() => handleCount(1)} >+</GrayButton>
                            <label className="flex content-center gap-3 w-auto"><input type="number" className="" value={volume} onChange={(e: any) => setVolume(Number(e.target.value))} /></label>
                            <GrayButton style="min-w-[30px] w-[1%]" click={() => handleCount(0)} >-</GrayButton>
                        </div>
                    </div>
                    <div className="text-pebble-500 text-xl bold h-[20%] bg-pebble-400 grid grid-cols-2 space-y-3 ">
                        <div className=" border">주문금액</div>
                        <div className="text-right">{price * volume}원</div>
                    </div>
                    <div className="flex justify-center w-full h-[70px]">
                    <MoveButton style="w-[70%]">{handleInfo(btn)}</MoveButton>
                    </div>
                </div>
        </div>
    )
};