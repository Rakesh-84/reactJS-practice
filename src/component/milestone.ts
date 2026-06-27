import {z} from "zod";

export const milestoneSchema = z.object({
    title: z.string().transform((val) => val.trim()).pipe(z.string().min(2)),
    deadlineDate: z.string().transform((val) => new Date(val)).refine(date => new Date(date), {
        message: "date will be used in future"}
    ),
    assignedTo:z.string().uuid().optional()
});

type createMilestoneInput = z.infer<typeof milestoneSchema>;

export class createMilestoneDto {
    title: string;
    deadlineDate: Date;
    assignedTo?: string;

constructor(data: createMilestoneInput) {
    this.title = data.title;
    this.deadlineDate = data.deadlineDate;
    this.assignedTo = data.assignedTo;



}
}