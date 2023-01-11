

export interface Ipass {
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate: null | number;
    children: null | Ichild[];
}

export interface Ichild {
    name: string;
    age: number;
}

export interface Iproduct {
    pName : string,
    pDetails : string,
    pStatus : string,
    id : string
}