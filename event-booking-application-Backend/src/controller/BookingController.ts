import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Booking} from "../entity/Booking";

export class BookingController {

    private bookingRepository = getRepository(Booking);

    async all(request: Request, response: Response, next: NextFunction) {
        try {
            let bookingList = await this.bookingRepository.find();
            let resData = {
                _isScuuess:true,
                statusCode:200,
                message:"success",
                data:bookingList
            } 
            return resData;
        } catch (error) {
            return error;
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        try {
           let bookingData = await this.bookingRepository.findOne(request.params.id);
            let resData = {
                _isScuuess:true,
                statusCode:200,
                message:"success",
                data:bookingData
            } 
            return resData;
        } catch (error) {
            return error;;
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        try {
            this.bookingRepository.save(request.body);
             let resData = {
                 _isScuuess:true,
                 statusCode:200,
                 message:"success",
             } 
             return resData;
         } catch (error) {
             return error;;
         }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        try {
            let bookingToRemove = await this.bookingRepository.findOne(request.params.id);
            await this.bookingRepository.remove(bookingToRemove);
            return "Success"
        } catch (error) {
            return error;
        }      
    }
}