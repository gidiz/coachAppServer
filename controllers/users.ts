import { RouterContext } from 'https://deno.land/x/oak@v6.3.1/mod.ts';

import {UserResource, user} from "../models/user.ts"


type RContext = RouterContext;

export class usersControll{
    static async getAll(ctx: RContext) {
        const users = await UserResource.findAll();
        ctx.response.body = { users: users };
    }

    static async getUser(ctx: RContext){
        const id = ctx.params.userId!;
        const user = await UserResource.getUser(id);
        ctx.response.body = {user: user};
    }

    static async addUser(ctx: RContext){
        const  value  = ctx.request.body();
        const  text  = await value.value;

        const newUser = new user(text.fullName,text.phone,text.mail);

        const id = UserResource.create(newUser);
        ctx.response.body = {insertedUser: id};

    }

    static async deleteUser(ctx: RContext){
       const id = ctx.params.userId!;
       await UserResource.deleteUser(id);
       ctx.response.body = {message: "user was deleted"};
    }

    static async updateUser(ctx: RContext){
        const id = ctx.params.userId!;
        const  value  = ctx.request.body();
        const  text  = await value.value;
        const newUser = new user(text.fullName,text.phone,text.mail);
        await UserResource.updateUser(id,newUser);
        ctx.response.body = {
            message: 'Updated user!',
            userId:id,
            newUser
        }
    }
}
