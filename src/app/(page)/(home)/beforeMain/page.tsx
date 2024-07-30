'use client'

import FirstMenu from "@/app/component/navigation/fristMenu";
import { Search } from "@/app/component/search/search";
import { Suspense, useState } from "react";
import AdBox from "@/app/component/main/adBox";
import { WhiteBox } from "@/app/component/style/whiteBox";
import TransJisu from "@/app/component/main/transJisu";
import TransWon from "@/app/component/main/transWon";
import NasdaqBarChart from "@/app/component/chart/nasdaqBarChart";
import Introduce from "@/app/component/main/introduce";

export default function BeforeHome() {

  const [btn, setBtn] = useState(1)

  function handleCharts(btn: any) {
    console.log("handelCharts : ", btn)
    const enums: any = {
      1: <NasdaqBarChart />,
      2: <TransWon />,
      3: <TransJisu />,
    };
    return <div>{enums[btn]}</div>;
  }

  // const handleOnKeyup =(e:React.KeyboardEvent<HTMLInputElement>) =>{
  const handleOnKeyup =(e:any) =>{
    // e.key = 'enter' ?
    console.log(e);
  }


  return (
    <main className="w-full h-full flex justify-center">
      <div className="w-[90%] mt-2">


        <div className="grid grid-cols-7 h-[350px] gap-3">
          <div className="col-span-3 w-full h-full">
            <div className="w-full h-[85%]"><AdBox /></div>
            <div className="w-full h-[15%] content-center">
              {/* <Search keyup={handleOnKeyup} text="search"/> */}
              </div>
          </div>

          <div className="flex-col h-full w-full ">
            <button className="h-1/3 w-full truncate" onClick={() => setBtn(1)}><WhiteBox style="h-full text-center content-center bg-white" ><span>나스닥<br />주가지수</span></WhiteBox></button>
            <button className="h-1/3 w-full truncate" onClick={() => setBtn(2)}><WhiteBox style="h-full text-center content-center bg-white" ><span>오늘의<br />환율</span></WhiteBox></button>
            <button className="h-1/3 w-full truncate" onClick={() => setBtn(3)}><WhiteBox style="h-full text-center content-center bg-white" >주요 <br />지수</WhiteBox></button>
          </div>

          <div className="col-span-3 h-full w-full" >
            <WhiteBox style="w-full h-full content-center"><Suspense>{handleCharts(btn)}</Suspense></WhiteBox>
            </div>
        </div>

        <div className="w-full h-[70px] my-[30px] "><FirstMenu /></div>
        <div className="my-5">
          <Introduce />
        </div>
      </div>
    </main>
  );
}
