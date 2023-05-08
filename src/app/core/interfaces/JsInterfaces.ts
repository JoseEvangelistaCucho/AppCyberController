export interface UserRequest {
    user: string;
    password : string;
}

export interface ControllerDate{
    cpu : number,
    amount : number,
    initial : string,
    finish : Date,
    state : string 
}
