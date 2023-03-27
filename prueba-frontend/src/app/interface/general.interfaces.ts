export interface hotelInterface{
    id:number,
    name:string,
    country:string,
    city:string,
    adress:string,
    img?:string
}

export interface roomInterface{
    id:number,
    roomNumber: number,
    baseCost:number,
    taxes:number,
    roomType: string,
    hotelId:number,
    userId?:number,
    img?:string
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

<<<<<<< HEAD
export interface UserInterface {
    id:string
    name:string
    lastName:string
    birthDate:Date
    gender:string
    docType:string
    emai:string
    phoneNumber:string
}
=======
export interface SingInData {
    name: string,
    email: string
}
>>>>>>> 4b81411363e2580373a2c5620563144ecf728a2b
