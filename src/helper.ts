import { Dispatch, SetStateAction } from 'react';

export const secondRow = (column: any, el: any) => {
  return column.key === 0 && el.value.includes('30');
};
export const setActive = (
  rowIndex: number,
  colIndex: number,
  elIndex: number,
  setRows: Dispatch<SetStateAction<any>>,
  rows: any,
) => {
  let row = rows;
  row[rowIndex][colIndex][elIndex].isActive =
    !row[rowIndex][colIndex][elIndex].isActive;
  console.log(rows[rowIndex][colIndex][elIndex].isActive);
  setRows([...row]);
};
export const columns = [
  { key: 0, name: 'Time' },
  { key: 1, name: 'Monday' },
  { key: 2, name: 'Tuesday' },
  { key: 3, name: 'Wednesday' },
  { key: 4, name: 'Thursday' },
  { key: 5, name: 'Friday' },
  { key: 6, name: 'Saturday' },
  { key: 7, name: 'Sunday' },
];

export const dataArr = [
  {
    dayOfWeek: 2,
    actionTime: '14:50',
    name: 'title1',
  },
  {
    dayOfWeek: 5,
    actionTime: '15:31',
    name: 'title2',
  },
  {
    dayOfWeek: 1,
    actionTime: '16:32',
    name: 'title3',
  },
  {
    dayOfWeek: 2,
    actionTime: '16:33',
    name: 'title4',
  },
  {
    dayOfWeek: 2,
    actionTime: '16:33',
    name: 'title4',
  },
  {
    dayOfWeek: 2,
    actionTime: '16:33',
    name: 'title4',
  },
  {
    dayOfWeek: 2,
    actionTime: '16:33',
    name: 'title4',
  },
  {
    dayOfWeek: 7,
    actionTime: '18:34',
    name: 'title5',
  },
  {
    dayOfWeek: 3,
    actionTime: '19:35',
    name: 'title6',
  },
  {
    dayOfWeek: 4,
    actionTime: '20:35',
    name: 'title6',
  },
];
