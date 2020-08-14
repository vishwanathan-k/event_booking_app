import {BookingController} from "../controller/BookingController";

export const BookingRoutes = [{
    method: "get",
    route: "/api/booking",
    controller: BookingController,
    action: "all"
}, {
    method: "get",
    route: "/api/booking/:id",
    controller: BookingController,
    action: "one"
}, {
    method: "post",
    route: "/api/booking",
    controller: BookingController,
    action: "save"
}, {
    method: "delete",
    route: "/api/booking/:id",
    controller: BookingController,
    action: "remove"
}];