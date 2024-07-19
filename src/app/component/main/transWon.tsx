'use client'

import { mainExchangeDummy } from "@/app/common/dummy/exchange.dummy";
import { WhiteBox } from "../style/whiteBox";
import { useEffect, useState } from "react";


export default async function TransWon() {

    const [nowWon, setNowWon] = useState<IExchange[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/exchange`);
                const data: IExchange[] = await res.json();
                setNowWon(data);
            } catch (error) {
                console.error("Failed to fetch exchange rates:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full h-full flex justify-center content-center">
            <div className="w-full h-[70%] text-center grid grid-cols-2 gap-5">
                {nowWon.map((v: IExchange, i: number) =>
                    <WhiteBox>
                        <div className="py-3 space-y-2">
                            <div className="">{v.cur_nm} {v.cur_unit}<hr /></div>
                            <div className="text-blue-500 text-lg">살때 {v.ttb}</div>
                            <div className="text-blue-500 text-lg">팔때 {v.tts}</div>
                        </div>
                    </WhiteBox>
                )}
            </div>
        </div>
    )

}