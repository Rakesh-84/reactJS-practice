import {z} from "zod";

export const projectSchema = z.object({
title : z.string().min(3),
status : z.enum(["planning","active"]),
memberID :z.array(z.string().uuid()).min(1),
notes: z.string().optional()


})

type createProjectInput = z.infer <typeof projectSchema >


export class createProjectDto {
title: string ;
status: "planning" | "active";
memberIDs: string[];
notes? :string[];

constructor (data: createProjectInput){

this.title= data.title;
 this.status= data.status;
  this.memberIds= data.memberIds ;
  this.notes= data.notes;








}





}