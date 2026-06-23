import {z} from "zod";

export const CreateTenantSchema = z.object({

name: z.string().min(2,"agency name must be at least 2 character"),
ownerEmail: z.string().email("invalid email structure"),
plan: z.enum (["free", "basic","premium"])

});

export type CreateTenantInput = z. infer<typeof CreateTenantSchema>
export class CreateTenantDto implements CreateTenantInput {
    name! : string;
    ownerEmail! : string;
    plan: "free" | "basic" |"premium"
    
}

static fromRaw (raw:unknown): CreateTenantDTO{

    const validated = CreateTenantSchema.parse(raw);
    const dto = new CreateTenantDto()
    dto.name = validated.name;
    dto.ownerEmail = validated.ownerEmail;
    dto.plan = validated.plan;

    return dto
}

const badPayload ={
name:"A",
ownerEmail:"not-an-email",
plan:"premium"



}

try{
    const dto = CreateTenantDto.fromRaw(badPayload);
} catch (error) {
    console.error("Error creating tenant:", error);
}