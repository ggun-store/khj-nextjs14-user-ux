'use client'

import { mainExchangeDummy } from "@/app/common/dummy/exchange.dummy";
import { WhiteBox } from "../style/whiteBox";
import { useEffect, useState } from "react";


export default function TransWon() {

    const [nowWon, setNowWon] = useState<IKisSection[]>([]);
    const [accessToken, setAccessToken] = useState<string | null>(null); 

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch(`/api/exchange`);
    //             const data: [] = await res.json();
    //             setNowWon(data);
    //             // console.log("exchange : ", data);
    //         } catch (error) {
    //             console.error("Failed to fetch exchange rates:", error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    const kisAuthkey = async (): Promise<string | null> => {
        try {
            const response = await fetch(`/api/kis/kisAuth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({})
            });
    
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
    
            const data: { access_token: string } = await response.json(); 
            console.log("KIS authkey : ", data); 
            return data.access_token;

        } catch (error) {
            console.log("KIS authkey err: ", error);
            return null; 
        }
    }

    const kisSection = async (token:string) => {
        try {
            console.log("KIS section : page in!"); 
            const response = await fetch(`/api/kis/kisSection`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({})
            })
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
    
            const data: IKisAuth = await response.json();
            console.log("KIS section : ", data); 
            return data.access_token; 
        } catch (error) {
            console.log("KIS section err : " + error);
            return null;
        }
    }
    const fetchAccessToken = async () => {
        try{
            if(accessToken==null|| accessToken == undefined){
                const token = await kisAuthkey();
                console.log("KIS kisAuthkey Data: ", token);
                setAccessToken(token); 
            }
        } catch (error) {
            console.log("KIS ERROR: ", error);
        }
    }

    useEffect(() => {
        fetchAccessToken()
        .then(()=>{
            // const fetchData = async () => {
            //     try {
            if(accessToken){
                const sectionData = kisSection(accessToken); 
                console.log("KIS Section Data: ", sectionData);
            }
            //     } catch (error) {
            //         console.log("KIS ERROR: ", error);
            //     }
            // }
        })
        .catch((error)=>{
            console.log("fail!!",error)
        })
        
        // fetchData();
    }, []);


    return (
        <div className="w-full h-full flex justify-center content-center">
            <div className="w-full h-[70%] text-center grid grid-cols-2 gap-5">
                {nowWon.map((v: IKisSection, i: number) =>
                    <WhiteBox key={i}>
                        <div>
                            {v.ACML_TR_PBMN}ddd
                        </div>
                        {/* <div className="py-3 space-y-2">
                            <div className="">{v.cur_nm} {v.cur_unit}<hr /></div>
                            <div className="text-blue-500 text-lg">살때 {v.ttb}</div>
                            <div className="text-blue-500 text-lg">팔때 {v.tts}</div>
                        </div> */}
                    </WhiteBox>
                )}
            </div>
        </div>
    )

}