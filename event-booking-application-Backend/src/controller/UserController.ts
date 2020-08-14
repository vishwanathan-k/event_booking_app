import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
var jwt = require('jsonwebtoken');

export class UserController {

    private userRepository = getRepository(User);

    async login(request: Request, response: Response, next: NextFunction) {
        try {
            let users = await this.userRepository.findOne({email:request.body.email});
            const token = jwt.sign({ foo: users }, 'eventBookingApp');
            if(users){
                const password = jwt.verify(users.password, 'eventBookingApp');
                if(password.foo === request.body.password){
                    let resData = {
                        _isScuuess:true,
                        statusCode:200,
                        message:"success",
                        data:token
                    }
                    return resData
                }else{
                    let resData = {
                        _isScuuess:true,
                        statusCode:403,
                        message:"Password does not exist.",
                        data:{}
                    }
                    return resData
                }                
        }else{
            let resData = {
                _isScuuess:true,
                statusCode:204,
                message:"User does not exist.",
                data:{}
            }
            return resData
        } 
        } catch (error) {
            return error;
        }
    }


    async all(request: Request, response: Response, next: NextFunction) {
        try {
            let users = await this.userRepository.find();
            let resData = {
                _isScuuess:true,
                statusCode:200,
                message:"success",
                data:users
            } 
            return resData
        } catch (error) {
            return error;
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        try {
            this.userRepository.findOne(request.params.id);
            let resData = {
                _isScuuess:true,
                statusCode:200,
                message:"success",
            } 
            return resData
        } catch (error) {
            return error;
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {

        try {
            let user = this.userRepository.save(request.body);
            let resData = {
                _isScuuess:true,
                statusCode:200,
                message:"success",
                data:user
            } 
            return resData
        } catch (error) {
            return error;
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        try {
            let userToRemove = await this.userRepository.findOne(request.params.id);
            await this.userRepository.remove(userToRemove);
            return "Success";
        } catch (error) {
            return error;
        }
        
    }

}