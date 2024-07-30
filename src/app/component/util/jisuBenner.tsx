'use client'

import { KrxJisuDummy } from "@/app/common/dummy/krx.dummy";
import { useEffect, useState } from "react";

export default function JisuBenner() {
    const [nowJisu, setNowJisu] = useState<IKrx[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/krxJisu`);
                const data: IKrx[] = await res.json();
                setNowJisu(data);
                // console.log("exchange3 : ", data);
            } catch (error) {
                console.error("Failed to fetch exchange rates:", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="bg-pebble-100">
            <div className="text-white text-sm space-x-8 flex h-[20px] whitespace-nowrap animate-slider">
                {nowJisu.map((v: IKrx, i: number) =>
                    <div key={i} className="flex gap-2">
                        <div className="" key={i}>{v.IDX_NM}</div>
                        <div className="text-pebble-400">{v.CLSPRC_IDX}</div>
                        <div className={`${v.FLUC_RT.startsWith('-') ? 'text-sky-300' : 'text-rose-300'}`}>{v.FLUC_RT}</div>
                    </div>
                )}
            </div>
        </div>

    )
}