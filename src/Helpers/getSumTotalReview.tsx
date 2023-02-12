const getTotalReview = (totalData: number[]) => {
 return totalData.reduce((sum, item, index) => {
  let copyItem: any = item;
  return sum + copyItem[1];
 }, 0);
};

export default getTotalReview;
