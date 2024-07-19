'use client'

import { kisAuthKeyAPI, kisTradeAPI } from "@/app/api/kisTrade/route";
import BarChart from "@/app/component/chart/barChart";
import QuoteLChart from "@/app/component/chart/quoteLChart";
import QuoteRChart from "@/app/component/chart/quoteRChart";
import StockInfo from "@/app/component/stock/stockInfo";
import { WhiteBox } from "@/app/component/style/whiteBox";
import TradeInfo from "@/app/component/trade/tradeInfo";
import TradeOrder from "@/app/component/trade/tradeOrder";
import { useState } from "react";

export const kisTradeDummy = [
    { quote: 21, price: 9910 },
    { quote: 400, price: 9900 },
    { quote: 302, price: 9890 },
    { quote: 1305, price: 9880 },
    { quote: 9, price: 9870 },
    { quote: 2000, price: 9860 },
]

export default async function tradePage() {

    const [list, setList] = useState([]);

    const kisTrade = async () => { await kisTradeAPI().then((res: any) => setList(res)) }
    // const kisTrade = await kisTradeAPI();

    const color = "text-blue-400"
    const now = 9800

    return (
        <div className="w-full h-full flex justify-center content-center">
            <div className="w-[80%] space-y-5">
                <div className="w-full">
                    <WhiteBox>
                        <div>
                            <div className="h-[200px] bg-benner_img corver"><BarChart/></div>
                    <StockInfo />
                        </div>
                    </WhiteBox></div>

                <div className="grid grid-cols-3">
                    <div className="grid grid-cols-6 col-span-2">
                        <div className=" col-span-2">
                            {kisTradeDummy.map((v: any, i: number) =>
                                <div key={i+v.quote+1} className="border border-b-1 h-[50px] flex w-full">
                                    <div className="w-full">
                                        <QuoteRChart quote={v.quote} />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className=" col-span-2">
                            {kisTradeDummy.map((v: any, i: number) =>
                                <div key={i+v.quote} className="border border-b-1 text-center h-[50px] flex w-full">
                                    <div className={` w-2/3 text-xl ${color}`}>{v.price}</div>
                                    <div className=" w-1/3 text-slate-400">-5.01%</div>
                                </div>
                            )}
                        </div>


                        <div className="border col-span-2">매도호가<TradeInfo /></div>

                        <div className="border col-span-2">매수호가</div>
                        <div className=" col-span-2">
                            {kisTradeDummy.map((v: any, i: number) =>
                                <div key={i+v.quote+2} className="border text-center items-center h-[50px] flex w-full">
                                    <div className={` w-2/3 text-xl ${color}`}>{v.price}</div>
                                    <div className=" w-1/3 text-slate-400">-5.01%</div>
                                </div>
                            )}
                        </div>
                        <div className=" col-span-2">
                            {kisTradeDummy.map((v: any, i: number) =>
                                <div key={i+v.quote} className="border border-b-1 h-[50px] flex w-full">
                                    <div className="w-full">
                                        <QuoteLChart quote={v.quote} />
                                    </div>
                                </div>
                            )}
                        </div>


                <div className="bg-pebble-100 text-white col-span-2 text-center">매도잔량 총합</div>
                <div className="bg-pebble-100 text-white col-span-2 text-center">잔량 총합</div>
                <div className="bg-pebble-100 text-white col-span-2 text-center">매수잔량 총합</div>
                    </div>
                    <div className=" w-full h-full">
                        <button onClick={()=>kisTrade()}>흑흑 시바 허락해조</button>
                        <TradeOrder ordDvsnCd={9990}/></div>
                </div>
            </div>
        </div>
    )
}