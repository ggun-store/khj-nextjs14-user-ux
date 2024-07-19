
import { IAccount } from "@/app/api/model/account.model";
import { LocalNumberOptions } from "@/app/common/config/localeString";
import { tradeDummy } from "@/app/common/dummy/account.dummy";
import { WhiteLink } from "@/app/component/link/whiteLink";
import Image from "next/image";

export default async function AccountList() {

  // const accList = await allAccount();
  const accList = tradeDummy;
  const accAI = tradeDummy[0];

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[85%]">
        <div className="mt-[40px]">
          <div>
            <h1 className="text-[30px] mb-5">나의 자산 현황<hr /></h1>
            <div className="bg-gradient-to-r content-center from-pebble-200 to-pebble-400 via-pebble-300 grid border grid-cols-2 text-center mb-5 text-[25px] rounded-lg min-h-[100px]">
              <div>현재 기준 자산 : {accAI.balance?.toLocaleString("ko", LocalNumberOptions)}</div>
              <div>총 예수금 잔액 : {accAI.balance?.toLocaleString("ko", LocalNumberOptions)}</div>
            </div>
          </div>
          <h1 className="text-[30px] mb-5">보유 계좌 목록 <hr /></h1>
          <h2 className="text-[25px] bold bg-pebble-200 text-white border-x-4 border-amber-400 pl-4">CMA</h2>
          {accList.map((v: IAccount, i: number) => (
            <div key={v.id} className="my-5">
              <div className="grid grid-flow-col border grid-cols-4 p-2 gap-2 text-center text-black mb-5 hover:shadow-lg hover:border rounded-lg">
                <Image unoptimized src='/imgs/chart.png' height={50} width={100} alt={'계좌번호'} className="rounded-r-lg" />
                <div className="text-lg content-center">{v.acno}</div>
                <div className="text-slate-400 text-left content-center">잔액 : {v.balance?.toLocaleString("ko", LocalNumberOptions)}</div>
                <div className="grid grid-cols-2">
                  <WhiteLink click={"/asset/account/charge"} >이체/충전</WhiteLink>
                  <WhiteLink click={`/asset/histories/${v.id}`} >조회</WhiteLink>
                </div>
              </div>
            </div>
          ))}
          <h2 className="text-[25px] bold bg-pebble-200 text-white border-x-4 border-amber-400 pl-4">AI 자동 매매 계좌</h2>

          <div key={accAI.id} className="my-5">
            <div className="grid grid-flow-col border grid-cols-4 p-2 gap-2 text-center text-black mb-5 hover:shadow-lg hover:border rounded-lg">
              <Image unoptimized src='/imgs/chart.png' height={50} width={100} alt={'계좌번호'} className="rounded-r-lg" />
              <div className="text-lg content-center">{accAI.acno}</div>
              <div className="text-slate-400 text-left content-center">잔액 : {accAI.balance?.toLocaleString("ko", LocalNumberOptions)}</div>
              <div className="grid grid-cols-2">
              <WhiteLink click={"/asset/account/charge"} >이체/충전</WhiteLink>
              <WhiteLink click={`/asset/histories/${accAI.id}`} >조회</WhiteLink>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};