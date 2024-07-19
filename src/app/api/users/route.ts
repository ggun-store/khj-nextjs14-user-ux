'use server'

import { IUser } from "../model/user.model";

export const existUser = async (username: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/exists-username?username=${username}`)
        const data = await response.json();
        console.log("existAdmin!!!" + JSON.stringify(data))
        return data
    } catch (error: any) {
        console.log("existAdmin EERR!!!", error)
        return error
    }
}

export const loginUser = async (admin: IUser) => {
    try {
        const response = await await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login?username=ggunAdmin0001&password=pO2(eO73)%@`)
        const data = await response.json();
        console.log("loginAdmin : " + JSON.stringify(data))
        return data
    } catch (error) {
        console.log("loginAdmin EERR!!! " + error)
        return error
    }
}