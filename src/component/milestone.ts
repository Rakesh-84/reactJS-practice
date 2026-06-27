import {z} from "zod";

export const milestoneSchema = z.object({
    title: z.string().transform((val) => val.trim()).pipe(z.string().min(2, {message: "title must be at least 2 characters long"})),
    deadlineDate: z.string().transform((val) => new Date(val)).refine(date => new Date(), {
        message: "date will be used in future"}
    ),
    assignedTo:z.string().uuid()
});

type CreateMilestoneInput = z.infer<typeof milestoneSchema>;

export class CreateMilestoneDto {
    title: string;
    deadlineDate: Date;
    assignedTo?: string;

constructor(data: CreateMilestoneInput) {
    this.title = data.title;
    this.deadlineDate = data.deadlineDate;
    this.assignedTo = data.assignedTo;



}
}