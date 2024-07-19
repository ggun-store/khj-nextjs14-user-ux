'use server'

export const kisAuthKeyAPI = async () => {
    try {
        // console.log("kisAuthKeyAPI!!! 접속완 : ", `${process.env.KIS_DEV_API_URL}/oauth2/tokenP`)
        const response = await fetch(`${process.env.KIS_DEV_API_URL}/oauth2/tokenP`
            , {
                method: 'POST',
                headers: {},
                body: JSON.stringify({
                    grant_type: 'client_credentials',
                    appkey: process.env.KIS_DEV_API_KEY,
                    appsecret: process.env.KIS_DEV_API_SECERET,
                })
            }
        );
        const data = await response.json();
        // console.log("kisAuthKeyAPI!!!" + JSON.stringify(data))
    } catch (error) {
        console.log("kisAuthKeyAPI err : " + error)
    }
}



export const kisTradeAPI = async () => {
    const code = '005930'
    try {
        const authkey = await kisAuthKeyAPI().then((res:any)=> {return res.access_token});
        console.log("kisAuthKeyAPI authkey!!!" + JSON.stringify(authkey));
        console.log("kisTradeAPI!!!" + `${process.env.KIS_DEV_API_URL}/uapi/domestic-stock/v1/quotations/inquire-asking-price-exp-ccn
                ?FID_COND_MRKT_DIV_CODE='J'&FID_INPUT_ISCD=${code}`);

        const response = await fetch(`${process.env.KIS_DEV_API_URL}/uapi/domestic-stock/v1/quotations/inquire-asking-price-exp-ccn
                ?FID_COND_MRKT_DIV_CODE='J'&FID_INPUT_ISCD=${code}`
            , {
                method: 'GET',
                // headers: {
                //     authorization: authkey.access_token,
                //     appkey: process.env.KIS_DEV_API_KEY,
                //     appsecret: process.env.KIS_DEV_API_SECERET,
                //     tr_id: '1',
                // },
                body: '',
                // JSON.stringify({
                    // FID_COND_MRKT_DIV_CODE : 'J',
                    // FID_INPUT_ISCD : '005930',
                // }),
                
            });
        const data = await response.json();
        console.log("kisTradeAPI!!!" + JSON.stringify(data))
        return data

    } catch (error) {
        console.log("kisTradeAPI err : " + error)
    }
}

