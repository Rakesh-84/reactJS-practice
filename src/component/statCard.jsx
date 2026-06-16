// 1. Defining the data contracts
type JobStatus = "pending" | "processing" | "completed" | "failed";

interface Job {
    id: string;
    title: string;
    status: JobStatus;
}

// 2. Our data array (the queue)
let jobQueue: Job[] = [
    { id: "job_101", title: "Generate Monthly Invoice", status: "completed" },
    { id: "job_102", title: "Sync Google Sheets Backend", status: "processing" },
    { id: "job_103", title: "Compile Build Assets", status: "pending" }
];

function StatCard(id:string): Job[] {
return jobQueue.filter(job => job.id === id);





}











export default StatCard;
