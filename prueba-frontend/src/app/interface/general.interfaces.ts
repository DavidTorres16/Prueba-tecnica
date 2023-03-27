export interface hotelInterface{
    id:number,
    name:string,
    country:string,
    city:string,
    adress:string
}

export interface roomInterface{
    id:number,
    roomNumber: number,
    baseCost:number,
    taxes:number,
    roomType: string,
    hotelId:number,
    userId?:number
}

export interface reserveInterface{
    id:number,
    roomId:number,
    userId:number,
    scheduleId:Date
}

export interface dataInterface {
    data: hotelInterface | roomInterface;
}

export interface SingInData {
    name: string,
    email: string
}
