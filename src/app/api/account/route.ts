'use server'

import { IAccount } from "../model/account.model";

export const allAccount = async () => {
    const id = 1;
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/account/list?id=${id}`)
        const data = await response.json();
        console.log("allAccount!!!"+ JSON.stringify(data))
        return data
    } catch (error) {
        console.log("allAccount err : " + error
        )
    }
}

export const findAccountById = async () => {
    const id = 1;
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/account/detail?id=${id}`)
        const data = await response.json();
        console.log("findAccountById!!!"+ JSON.stringify(data))
        return data
    } catch (error) {
        console.log("findAccountById err : " + error
        )
    }
}

export const accountHistories = async () => {
    const id = 1;
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/account//acc-histories/list?id=${id}`)
        const data = await response.json();
        console.log("findAccountById!!!"+ JSON.stringify(data))
        return data
    } catch (error) {
        console.log("findAccountById err : " + error
        )
    }
}

export const deposit = async (accinfo: IAccount) => {
    // console.log("deposit : " + JSON.stringify(article))
    // const id = 1;
    const { id, balance, acType, bank} = accinfo || {}
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/account/deposit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 1,
                balance: balance,
                acType: "입금",
                bank: bank,
            })
        })
        const data = await response.json();
        console.log("deposit : " + JSON.stringify(data))
        return data
    } catch (error) {
        console.log("deposit EERR!!!" + error)
        return error
    }
}


export const withdraw = async (accinfo: IAccount) => {
    // console.log("deposit : " + JSON.stringify(article))
    // const id = 1;
    const { id, balance, acType, bank} = accinfo || {}
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/account/withdraw`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 1,
                balance: balance,
                acType: "출금",
                bank: bank,
            })
        })
        const data = await response.json();
        console.log("withdraw : " + JSON.stringify(data))
        return data
    } catch (error) {
        console.log("withdraw EERR!!!" + error)
        return error
    }
}
