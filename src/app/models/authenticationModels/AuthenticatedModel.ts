export interface AuthenticatedModel{
    userFirstName:string;
    userLastName:string;
    userEmail:string;
    token:string;
    expiration:Date;
}