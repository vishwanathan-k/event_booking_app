import {UserController} from "../controller/UserController";

export const UserRoutes = [{
    method: "get",
    route: "/api/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/api/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/api/users",
    controller: UserController,
    action: "save"
},
{
    method: "post",
    route: "/api/userLoginRoute",
    controller: UserController,
    action: "login"
}];