import { RouterContext } from 'https://deno.land/x/oak@v6.3.1/mod.ts';
import { SchedualeTrainingDateResource,schedualeTrainingDate } from "../models/scheduale-training-date.ts"

type RContext = RouterContext;


export class schedualeTrainingDateControll{
  static async getAll(ctx: RContext) {
    const schedualeTrainingDates = await SchedualeTrainingDateResource.findAll();
    ctx.response.body = { schedualeTrainingDates: schedualeTrainingDates };
  }

  static async getSchedualeTrainingDateById(ctx: RContext){
    const id = ctx.params.schedualeTrainingDateId!
    const schedualeTrainingDateById = await SchedualeTrainingDateResource.getSchedualeTrainingDateById(id);
    ctx.response.body = {schedualeTrainingDateById: schedualeTrainingDateById};
  }

  static async create(ctx:RContext){
    const body = ctx.request.body();
    const value = await body.value;

    const newschedualeTrainingDate = new schedualeTrainingDate("", value.date, value.classWodIds);
    const id = await SchedualeTrainingDateResource.create(newschedualeTrainingDate);
    ctx.response.body = {id: id};
  }

  static async update(ctx:RContext){
    const id = ctx.params.schedualeTrainingDateId!
    const body = ctx.request.body();
    const value = await body.value;
    const newschedualeTrainingDate = new schedualeTrainingDate("", value.date, value.classWodIds);
    await SchedualeTrainingDateResource.update(newschedualeTrainingDate,id);
    ctx.response.body = {
        message: 'Updated class!',
        schedualeTrainingDateId:id,
        newschedualeTrainingDate
    }
  }

  static async delete(ctx:RContext){
    const id = ctx.params.schedualeTrainingDateId!
    await SchedualeTrainingDateResource.delete(id);
    ctx.response.body = {message: "class was deleted"};
  }
}
 