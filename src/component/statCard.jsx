// 1. Defining the data contracts
const jobQueue = [
    { id: "job_101", title: "Generate Monthly Invoice", status: "completed" },
    { id: "job_102", title: "Sync Google Sheets Backend", status: "processing" },
    { id: "job_103", title: "Compile Build Assets", status: "pending" }
];

function StatCard(id) {
    return jobQueue.filter(job => job.id === id);





}











export default StatCard;
