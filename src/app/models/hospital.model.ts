
interface _HospitalUser {
    _id: string;
    nombre: string;
    img: string;

}

export class Hospital {

    constructor(
        public _id: string,
        public nombre?: string,
        public img?: string,
        public usuario?: _HospitalUser,
    ){}

}