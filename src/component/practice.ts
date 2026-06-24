import {z} from "zod";

export const projectSchema = z.object({
title : z.string.min(3),
status : z.string.min(3),
memberID :z.number.uuid(),
notes: z.string.optional()


})

type createProjectInput = z.infer <typeof projectSchema >


export class createProjectDto ={
title: string;
status: string;
memberID: string;
notes? :string;

constructor (data: createProjectInput){

this.title= data.title;
 this.status= data.status;
  this.memberIDn= data.memberID ;
  this.notes= data.notes;








}





}