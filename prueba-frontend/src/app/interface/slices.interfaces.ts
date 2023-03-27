import { dataInterface, UserInterface } from "./general.interfaces"


export interface InitialState {
    value : number
}

export interface toggleTypeToSearch{
    searchFilter: string
}

export interface ThemeInterface {
    theme: 'default' | 'dark'
}

export interface UserStatus{
    user?: UserInterface
    userPermissions:string
    status: string
}

export interface toggleActionType{
    actionType : string
}

export interface selectedItem{
    selected?: dataInterface
}