import { useState } from 'react';
import { v4 } from 'uuid';
import style from './calender-table.module.scss';
import { columns, secondRow, setActive } from '../../helper';

const CalenderTable = ({ eventsData }: any) => {
  let newData: any = [];
  eventsData.forEach(({ dayOfWeek, actionTime, name }: any, index: number) => {
    console.log(dayOfWeek, actionTime, name);
    const time = actionTime.split(':');
    const currentArrIndex = +time[0] * 2 + (+time[1] <= 30 ? -1 : 0);
    console.log(newData[currentArrIndex]);
    if (newData[currentArrIndex] === undefined) {
      newData[currentArrIndex] = {
        '0': [
          currentArrIndex % 2
            ? { value: `${Math.floor(currentArrIndex / 2)}:30` }
            : { value: `${Math.floor(currentArrIndex / 2)}:00` },
        ],
      };
    }
    if (newData[currentArrIndex] !== undefined) {
      if (!newData[currentArrIndex][`${dayOfWeek}`]) {
        newData[currentArrIndex][`${dayOfWeek}`] = [];
        console.log(newData[currentArrIndex][`${dayOfWeek}`]);
      }
    }
    if (newData[currentArrIndex][`${dayOfWeek}`]) {
      newData[currentArrIndex][`${dayOfWeek}`].push({
        value: name,
        isActive: false,
      });
    }
  });
  console.log(newData);
  for (let x = 0; x <= 47; x++) {
    if (newData[x] === undefined) {
      newData[x] = {
        '0': [
          x % 2
            ? { value: `${Math.floor(x / 2)}:30` }
            : { value: `${Math.floor(x / 2)}:00` },
        ],
      };
    }
  }
  const [rows, setRows] = useState(newData);

  return (
    <>
      {rows.length >= 1 && (
        <div className={style.tableContainer}>
          <table className={style.table} aria-label="customized table">
            <thead>
              <tr
                className={style.headings}
                style={{
                  gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
                }}
              >
                {columns.map((column, index) => (
                  <th className={style.heading} key={v4()}>
                    <span className={style.headingTitle}>{column.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row: any, rowIndex: number) => (
                <tr
                  style={{
                    gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
                  }}
                >
                  {columns.map((column: any, colIndex) => (
                    <td>
                      <div>
                        {row[column.key]?.map((el: any, elIndex: number) => (
                          <span
                            style={{
                              backgroundColor:
                                colIndex === 0
                                  ? 'transparent'
                                  : rows[rowIndex][colIndex][elIndex].isActive
                                  ? '#FFA700'
                                  : '#4B9F5B',
                              fontSize: secondRow(column, el) ? '1px' : '',
                              visibility: secondRow(column, el)
                                ? 'hidden'
                                : 'visible',
                            }}
                            onClick={() => {
                              setActive(
                                rowIndex,
                                colIndex,
                                elIndex,
                                setRows,
                                rows,
                              );
                            }}
                          >
                            {el.value}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default CalenderTable;
