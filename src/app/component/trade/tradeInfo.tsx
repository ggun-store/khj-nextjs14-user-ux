import { stockInfoDummy } from "@/app/common/dummy/stock.dummy";
import { OneBox } from "../stock/oneBox";


export default function TradeInfo() {

    return (
        <div className="w-full h-full">
            <div className="w-full flex justify-center items-center h-full">
                <div className="w-full gap-3">
                    {stockInfoDummy.map((v:any,i:number)=>
                    i <7 ?
                    <div key={v.id} className="h-[40px]">
                        <OneBox title={v.title} data={v.data} fontColor={`${v.title.endsWith('가') == true ? 'text-pebble-500' : 'text-pebble-300'}`} />
                    </div>
                    : <div></div>
                    )}
                </div>
            </div>
        </div>
    )
};
