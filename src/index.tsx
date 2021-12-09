import ReactDOM from 'react-dom';
import './index.scss';
import CalenderTable from 'components/calender-table';

const dataArr = [
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
    name: 'title488',
  },
  {
    dayOfWeek: 7,
    actionTime: '18:34',
    name: 'title5',
  },
  {
    dayOfWeek: 7,
    actionTime: '18:34',
    name: 'title5',
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

ReactDOM.render(
  <CalenderTable eventsData={dataArr} />,
  document.getElementById('root'),
);
