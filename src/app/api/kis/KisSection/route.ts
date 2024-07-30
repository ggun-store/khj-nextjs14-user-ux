'use server'
import Today from "@/app/common/date/today";
import Yesterday from "@/app/common/date/yesterday";
import { NextRequest, NextResponse } from "next/server";

// Element	한글명	Type	Required	Length	Description
// rt_cd	성공 실패 여부	String	Y	1	0 : 성공
// 0 이외의 값 : 실패
// msg_cd	응답코드	String	Y	8	응답코드
// msg1	응답메세지	String	Y	80	응답메세지
// output1	응답상세	Object	Y	1	응답상세 1
// -BSTP_NMIX_PRDY_VRSS	업종 지수 전일 대비	String	Y	14	업종 지수 전일 대비
// -PRDY_VRSS_SIGN	전일 대비 부호	String	Y	1	전일 대비 부호
// -BSTP_NMIX_PRDY_CTRT	업종 지수 전일 대비율	String	Y	11	업종 지수 전일 대비율
// -PRDY_NMIX	전일 지수	String	Y	14	전일 지수
// -ACML_VOL	누적 거래량	String	Y	18	누적 거래량
// -ACML_TR_PBMN	누적 거래 대금	String	Y	18	누적 거래 대금
// -HTS_KOR_ISNM	HTS 한글 종목명	String	Y	40	HTS 한글 종목명
// -BSTP_NMIX_PRPR	업종 지수 현재가	String	Y	10	업종 지수 현재가
// -BSTP_CLS_CODE	업종 구분 코드	String	Y	9	업종 구분 코드
// -PRDY_VOL	전일 거래량	String	Y	18	전일 거래량
// -BSTP_NMIX_OPRC	업종 지수 시가	String	Y	14	업종 지수 시가
// -BSTP_NMIX_HGPR	업종 지수 최고가	String	Y	14	업종 지수 최고가
// -BSTP_NMIX_LWPR	업종 지수 최저가	String	Y	14	업종 지수 최저가
// -FUTS_PRDY_OPRC	업종 전일 시가	String	Y	14	업종 전일 시가
// -FUTS_PRDY_HGPR	업종 전일 최고가	String	Y	14	업종 전일 최고가
// -FUTS_PRDY_LWPR	업종 전일 최저가	String	Y	14	업종 전일 최저가
// output2	조회 기간별 시세 (배열)	Array	Y	1	조회 기간별 시세 (배열)
// -STCK_BSOP_DATE	영업 일자	String	Y	8	영업 일자
// -BSTP_NMIX_PRPR	업종 지수 현재가	String	Y	10	업종 지수 현재가
// -BSTP_NMIX_OPRC	업종 지수 시가	String	Y	10	업종 지수 시가
// -BSTP_NMIX_HGPR	업종 지수 최고가	String	Y	10	업종 지수 최고가
// -BSTP_NMIX_LWPR	업종 지수 최저가	String	Y	10	업종 지수 최저가
// -ACML_VOL	누적 거래량	String	Y	18	누적 거래량
// -ACML_TR_PBMN	누적 거래 대금	String	Y	18	누적 거래 대금
// -MOD_YN	변경 여부	String	Y	1	변경 여부

export async function POST(req: NextRequest) {

    const query = new URLSearchParams({
        FID_COND_MRKT_DIV_CODE: 'U',
        FID_INPUT_ISCD: '0002', 
        FID_INPUT_DATE_1: '20240701', 
        FID_INPUT_DATE_2: '20240729', 
        FID_PERIOD_DIV_CODE: 'D' 
    });

    const authToken = req.headers.get('Authorization');
    const url = `${process.env.KIS_DEV_API_BASE_URL}${process.env.KIS_DEV_API_SECTION}${query}`
    console.log("KIS Section!!! ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

    try {
        const response = await fetch(url
            , {
                method: 'POST',
                headers: {
                },
                body: JSON.stringify({
                    grant_type: 'client_credentials',
                    authorization: authToken,
                    appkey: process.env.KIS_DEV_API_KEY,
                    appsecret: process.env.KIS_DEV_API_SECERET,
                    tr_id: 'FHKUP03500100',
                })
            }
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res: IKisSection = await response.json();

        console.log("KIS Section data : ", res);

        if (res.length === 0) {
            return NextResponse.json({ error: "data NOT FOUND" }, { status: 404 });
        }

        return NextResponse.json(res);
    } catch (error) {
        console.log("KIS Section err : " + error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}