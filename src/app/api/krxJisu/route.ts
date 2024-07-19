'use server'
import Yesterday from "@/app/common/date/yesterday";
import { NextRequest, NextResponse } from "next/server";

// 번호	항목명	출력명	Data Type
// 1	기준일자	BAS_DD	string()
// 2	계열구분	IDX_CLSS	string()
// 3	지수명	IDX_NM	string()
// 4	종가	CLSPRC_IDX	string()
// 5	대비	CMPPREVDD_IDX	string()
// 6	등락률	FLUC_RT	string()
// 7	시가	OPNPRC_IDX	string()
// 8	고가	HGPRC_IDX	string()
// 9	저가	LWPRC_IDX	string()
// 10	거래량	ACC_TRDVOL	string()
// 11	거래대금	ACC_TRDVAL	string()
// 12	상장시가총액	MKTCAP	string()

export async function GET(req: NextRequest) {
    const code = ['USD', 'CNH', 'EUR', 'JPY(100)'];
    const data: IExchange[] = [];
    // console.log("KRX JISU!!!" + `${process.env.KRX_DEV_API_URL}?AUTH_KEY=${process.env.KRX_DEV_API_KEY}&basDd=${Yesterday()}`)
    try {
        const response = await fetch(`${process.env.KRX_DEV_API_URL}?AUTH_KEY=${process.env.KRX_DEV_API_KEY}&basDd=${Yesterday()}`);
       
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res: IKrx[] = await response.json();
        
        // console.log("KRX JISU : ", res);

        if (res.length === 0) {
            return NextResponse.json({ error: "data NOT FOUND" }, { status: 404 });
        }

        return NextResponse.json(res);
    } catch (error) {
        console.log("KRX JISU err : " + error)
    }
}