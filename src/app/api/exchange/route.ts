'use server'

import { NextRequest, NextResponse } from 'next/server';
import Today from "@/app/common/date/today";

//요청변수 (Requester Parameter)
//authkey	String(필수)	인증키	OpenAPI 신청시 발급된 인증키
//searchdate	String	검색요청날짜	ex) 2015-01-01, 20150101, (DEFAULT)현재일
//data	String(필수)	검색요청API타입	AP01 : 환율, AP02 : 대출금리, AP03 : 국제금리

//출력결과 (Response Element)

//AP03 : 국제금리
//RESULT	Integer	조회 결과	1 : 성공, 2 : DATA코드 오류, 3 : 인증코드 오류, 4 : 일일제한횟수 마감
//CUR_FUND	String	통화	금리 통화 정보
//SFLN_INTRC_NM	String	기간	금리 기간 정보
//INT_R	String	금리	금리 정보

// AP01 : 환율
// RESULT	Integer	조회 결과	1 : 성공, 2 : DATA코드 오류, 3 : 인증코드 오류, 4 : 일일제한횟수 마감
// CUR_UNIT	String	통화코드	
// CUR_NM	String	국가/통화명	
// TTB	String	전신환(송금)
// 받으실때	
// TTS	String	전신환(송금)
// 보내실때	
// DEAL_BAS_R	String	매매 기준율	
// BKPR	String	장부가격	
// YY_EFEE_R	String	년환가료율	
// TEN_DD_EFEE_R	String	10일환가료율	
// KFTC_DEAL_BAS_R	String	서울외국환중개
// 매매기준율	
// KFTC_BKPR	String	서울외국환중개
// 장부가격	

export async function GET(req: NextRequest) {
    const code = ['USD', 'CNH', 'EUR', 'JPY(100)'];
    const data: IExchange[] = [];
    console.log("findExchangeByCodeAPI URL!!!" + `${process.env.EXCHANGE_API_URL}?authkey=${process.env.EXCHANGE_API_KEY}&searchdate=${Today()}&data=AP01`)
    try {
        const response = await fetch(`${process.env.EXCHANGE_API_URL}?authkey=${process.env.EXCHANGE_API_KEY}&searchdate=${Today()}&data=AP01`);
       
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res: IExchange[] = await response.json();
        
        res.forEach((v: IExchange) => {
            if (code.includes(v.cur_unit)) {
                data.push(v);
            }
        }
    );

        console.log("findExchangeByCodeAPI data : ", data);

        if (data.length === 0) {
            return NextResponse.json({ error: "data NOT FOUND" }, { status: 404 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.log("findExchangeByCodeAPI err : " + error)
    }
}