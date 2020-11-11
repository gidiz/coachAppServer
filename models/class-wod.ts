import { ObjectId } from 'https://deno.land/x/mongo@v0.12.1/mod.ts';
import getDatabase from '../helpers/db.ts';


export class classWod {
    // #region Properties (4)
    
    public id: number;   
    public date: Date;
    public fromHour: number;
    public toHour: number;
    public limitUsers: number;
    public userIds: Array<string>;

    // #endregion Properties (4)

    // #region Constructors (1)

    constructor(id: number, date: Date, fromHour: number, toHour: number,
    limitUsers: number,
    userIds: Array<string>) {
        this.id = id;
        this.date = date;
        this.fromHour = fromHour;
        this.toHour = toHour;
        this.limitUsers = limitUsers;
        this.userIds = userIds;
    }
    

    // #endregion Constructors (1)
}


export class ClassWodsResource{
    static async findAll(){
        const classWods : classWod[] = await getDatabase().collection<classWod>("classWods").find();
        return classWods.map((classWod: classWod) => ({
            ...classWod
        }))
    }

    static async getClassWodById(id: string){
        let classWodById  = await getDatabase().collection<classWod>("classWods").find({ _id: ObjectId(id) });
        return classWodById;
    }

    static async create(classWodNew: classWod){
        const id = await getDatabase().collection<classWod>('classWods').insertOne(classWodNew);
        return { id: id.$oid }; // { $oid: "abc" }
    }

    static async update(classWodUpdate: classWod, id: string){
        await getDatabase().collection<classWod>('users').updateOne({ _id: ObjectId(id) },{$set: classWodUpdate});        
    }

    static async delete(id: string){
        await getDatabase().collection<classWod>('users').deleteOne({ _id: ObjectId(id) });     
    }
}
