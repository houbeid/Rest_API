import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsString()
    nickname : string;
    @IsString()
    username : string;  
    @IsString()
    firstName: string;
    @IsString()
    lastName : string;
    @IsString()
    pictureLink: string;

};