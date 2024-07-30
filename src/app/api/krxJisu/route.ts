'use server'
import Today from "@/app/common/date/today";
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
    async function fetchData(date: string): Promise<IKrx[]> {
        const response = await fetch(`${process.env.KRX_DEV_API_URL}?AUTH_KEY=${process.env.KRX_DEV_API_KEY}&basDd=${date}`);
        // console.log("KRX JISU!!!" + `${process.env.KRX_DEV_API_URL}?AUTH_KEY=${process.env.KRX_DEV_API_KEY}&basDd=${date}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res: IKrxResponse = await response.json();
        return res.OutBlock_1;
    }

    try {
        let date = new Date(); 
        let res = await fetchData(Today());
        let attempts = 0;

        while (res.length === 0 && attempts < 7) {
            date = new Date(); 
            date.setDate(date.getDate() - (attempts + 1)); 
            const formattedDate = Yesterday(date); 
            res = await fetchData(formattedDate);
            attempts++;
            // console.log("Retrying with date: ", formattedDate);
        }

        // console.log("KRX JISU : ", res);

        if (res.length === 0) {
            return NextResponse.json({ error: "No data found for both today and yesterday" }, { status: 404 });
        }

        return NextResponse.json(res);
    } catch (error) {
        console.log("KRX JISU err : " + error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}