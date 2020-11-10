import { RouterContext } from 'https://deno.land/x/oak@v6.3.1/mod.ts';
import {ClassWodsResource,classWod} from "../models/class-wod.ts"

type RContext = RouterContext;


export class classWodControll{
  static async getAll(ctx: RContext) {
    const classWods = await ClassWodsResource.findAll();
    ctx.response.body = { classWods: classWods };
  }

  static async getClassWodById(ctx: RContext){
    const id = ctx.params.classWodId!
    const classWodById = await ClassWodsResource.getClassWodById(id);
    ctx.response.body = {classWodById: classWodById};
  }

  static async create(ctx:RContext){
    const body = ctx.request.body();
    const value = await body.value;

    const newClassWod = new classWod(value.id,value.hour, value.limitUsers, value.userIds);
    const id = await ClassWodsResource.create(newClassWod);
    ctx.response.body = {id: id};
  }

  static async update(ctx:RContext){
    const id = ctx.params.classWodId!
    const body = ctx.request.body();
    const value = await body.value;
    const newClassWod = new classWod(value.id,value.hour, value.limitUsers, value.userIds);
    await ClassWodsResource.update(newClassWod,id);
    ctx.response.body = {
        message: 'Updated class!',
        classWodId:id,
        newClassWod
    }
  }

  static async delete(ctx:RContext){
    const id = ctx.params.classWodId!
    await ClassWodsResource.delete(id);
    ctx.response.body = {message: "class was deleted"};
  }
}
 