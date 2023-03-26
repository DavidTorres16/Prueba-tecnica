import { hotelInterface, roomInterface } from "@app/interface/general.interfaces";

export function isHotel(obj: any): obj is hotelInterface {
    return (
        typeof obj.id === 'number' &&
        typeof obj.name === 'string' &&
        typeof obj.country === 'string' &&
        typeof obj.city === 'string' &&
        typeof obj.adress === 'string'
    );
}

export function isRoom(obj: any): obj is roomInterface {
    return (
        typeof obj.id === 'number' &&
        typeof obj.roomNumber === 'number' &&
        typeof obj.baseCost === 'number' &&
        typeof obj.taxes === 'number' &&
        typeof obj.roomType === 'string' &&
        typeof obj.hotelId === 'number' &&
        typeof obj.userId === 'number'   
    );
}



