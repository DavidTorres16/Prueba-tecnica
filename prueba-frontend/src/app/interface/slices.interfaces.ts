import { UserInterface } from "./general.interfaces"

export interface InitialState {
    value : number
}

export interface toggleTypeToSearch{
    isHotelSearch : boolean 
}

export interface ThemeInterface {
    theme: 'default' | 'dark'
}

export interface UserStatus{
    user?: UserInterface
    userPermissions:string
    status: string
}