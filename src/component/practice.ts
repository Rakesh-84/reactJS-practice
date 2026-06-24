import {z } from "zod";

export const createClientSchema = z.object ({
name: z.string().min (2),
email: z.string().email("valid email"),
website:z.string().url("valid url"),
plan:z.enum(["free","basic","premium"])



})

type CreateClientSchema = z.infer<typeof createClientSchema>

export class createClientDto={
name:string,
email:string,
website:string,
plan:"free" | "basic" | "premium"

}
constructor (input :createClientInput){
this.name= input.name;
this.email= input.email;
this.website= input.website;
this.plan= input.plan;


}