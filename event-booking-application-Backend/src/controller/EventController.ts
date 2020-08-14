import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Event } from "../entity/Event";

export class EventController {

    private eventRepository = getRepository(Event);

    async all(request: Request, response: Response, next: NextFunction) {
        try {
           let eventList = await this.eventRepository.find();
           let resData = {
            _isScuuess:true,
            statusCode:200,
            message:"success",
            data:eventList
        } 
            return resData;
        } catch (error) {
            return error;
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
       try {
            let event = await this.eventRepository.findOne(request.params.id);
            let resData = {
             _isScuuess:true,
             statusCode:200,
             message:"success",
             data:event
         } 
             return resData;
         } catch (error) {
             return error;
         }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        try {
            this.eventRepository.save(request.body);
            let resData = {
             _isScuuess:true,
             statusCode:200,
             message:"success",
         } 
             return resData;
         } catch (error) {
             return error;
         }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        console.log("===============>",request.params.id)
        try {
            console.log("===============>",request.params.id)
            let eventToRemove = await this.eventRepository.findOne(request.params.id);
            console.log("===============>",eventToRemove)
            await this.eventRepository.remove(eventToRemove);
             return "Success";
        } catch (error) {
            return error;
        }
        
    }

}