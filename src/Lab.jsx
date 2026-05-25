import projects from "./Data/data";


function Lab() {
  const totalRevenue = projects.reduce((Acc, projects) => Acc + projects.revenue || 0, 0)
  
  const categorywiseSles =projects.reduce((acc,project) => acc.add(project.category), new Set())

  return (
    <div>
      <h2>Revenue by Category</h2>
      <p key={totalRevenue}>{totalRevenue}</p>
      <h3>categorywise sales</h3>
      {[...categorywiseSles].map((category) => (
        <p key={category}>{category}</p>
      ))}





    </div>
  );
}
export default Lab;
