import { ObjectId } from 'https://deno.land/x/mongo@v0.12.1/mod.ts';
import getDatabase from '../helpers/db.ts';

export class schedualeTrainingDate{
   
    public id: string;
    public date: Date;
    public classWodIds: Array<string>;

    constructor(id: string,date: Date,classWodIds: Array<string>){
        this.id = id;       
        this.date = date;
        this.classWodIds = classWodIds;
    }
    
}


export class SchedualeTrainingDateResource{
    static async findAll(){
        const schedualeTrainingDates : schedualeTrainingDate[] = await getDatabase().collection<schedualeTrainingDate>("schedualeTrainingDates").find();
        return schedualeTrainingDates.map((schedualeTrainingDate: schedualeTrainingDate) => ({
            ...schedualeTrainingDate
        }))
    }

    static async getSchedualeTrainingDateById(id: string){
        let schedualeTrainingDateById  = await getDatabase().collection<schedualeTrainingDate>("schedualeTrainingDates").find({ _id: ObjectId(id) });
        return schedualeTrainingDateById;
    }

    static async create(schedualeTrainingDateNew: schedualeTrainingDate){
        const id = await getDatabase().collection<schedualeTrainingDate>('schedualeTrainingDates').insertOne(schedualeTrainingDateNew);
        return { id: id.$oid }; // { $oid: "abc" }
    }

    static async update(schedualeTrainingDateNew: schedualeTrainingDate, id: string){
        await getDatabase().collection<schedualeTrainingDate>('users').updateOne({ _id: ObjectId(id) },{$set: schedualeTrainingDateNew});        
    }

    static async delete(id: string){
        await getDatabase().collection<schedualeTrainingDate>('users').deleteOne({ _id: ObjectId(id) });     
    }
}