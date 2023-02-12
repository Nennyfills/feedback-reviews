const ratesData: any = {
 five: ['☆☆☆☆☆', 0],
 four: ['☆☆☆☆', 0],
 three: ['☆☆☆', 0],
 two: ['☆☆', 0],
 one: ['☆', 0],
};

export const getOptions = (value: any) => ({
 backgroundColor: '#ace3f6',
 title: 'Ratings and reviews',
 responsive: true,
 chartArea: { width: '50%' },
 colors: ['#ff9933'],
 hAxis: {
  title: `${value} Rating${value > 1 ? 's' : ''}`,
  ticks: [],
  minValue: 5,
  gridlines: { color: '#eee', borderRadius: '13em' },
  textPosition: 'in',
  baselineColor: '#ff9933',
 },
 vAxis: {
  title: 'Checkout.com',
  ticks: [3, 5, 7],
  gridlines: {
   color: 'none',
  },
 },
});

export default ratesData;
