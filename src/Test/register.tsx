export const onChangFunc = (element: React.FormEvent<HTMLInputElement>) =>
 element;
export const register: any = (item: any) => ({
 onChange: () => jest.fn(),
 onBlur: () => jest.fn(),
 ref: () =>
  jest.mock('react', () => {
   const originReact = jest.requireActual('react');
   return {
    ...originReact,
    useRef: jest.fn(),
   };
  }),
 ...item,
});
