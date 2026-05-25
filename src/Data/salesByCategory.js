import projects from "./data";

export function groupRevenueByCategory(data = projects) {
  return data.reduce((acc, item) => {
    const cat = item.category || "Uncategorized";
    const rev = Number(item.revenue) || 0;
    if (!acc[cat]) acc[cat] = { totalRevenue: 0, items: [] };
    acc[cat].totalRevenue += rev;
    acc[cat].items.push(item);
    return acc;
  }, {});
}

export const revenueByCategory = groupRevenueByCategory();

export default revenueByCategory;
