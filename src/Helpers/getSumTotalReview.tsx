const getTotalReview = (totalData: number[], review?: any) => {
 let count: number = 0;

 const totalRate = totalData.reduce((sum, item, index) => {
  let copyItem: any = item;
  return sum + copyItem[1];
 }, 0);

 Object.entries(totalData).forEach(([key, value]) => {
  let copyValue: any = value;
  count = count + copyValue[0].length * copyValue[1];
 });

 return {
  average: count / totalRate && (count / totalRate).toFixed(1),
  totalRate,
 };
};

export default getTotalReview;
