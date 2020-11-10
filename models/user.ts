import { Database, ObjectId } from 'https://deno.land/x/mongo@v0.12.1/mod.ts';

import getDatabase from '../helpers/db.ts';


export class user {
    // #region Properties (3)

    public fullName: string;
    public mail: string;
    public phone: string;

    // #endregion Properties (3)

    // #region Constructors (1)

    constructor(fullName: string,
    phone: string,
    mail: string,) {
       this.fullName = fullName;
        this.phone = phone;
        this.mail = mail; 
    }

    

    // #endregion Constructors (1)
}

export class UserResource{
    static async findAll(){
        const users: user[] = await  getDatabase().collection<user>("users").find();
        return users.map((user: user) => ({
            ...user
        }))
    }

    static async getUser(id: string){
        const user = await  getDatabase().collection<user>("users").find({ _id: ObjectId(id) });
        return user;
    }

    static async create(user: user){
        const id = await getDatabase().collection<user>('users').insertOne(user);
        return { id: id.$oid }; // { $oid: "abc" }
    }

    static async deleteUser(id: string){
        await getDatabase().collection<user>('users').deleteOne({ _id: ObjectId(id) });
    }

    static async updateUser(id: string, user: user){
        await getDatabase().collection<user>('users').updateOne({ _id: ObjectId(id) },{$set: user});
    }
}
