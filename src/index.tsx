import ReactDOM from 'react-dom';
import './index.scss';
import CalenderTable from 'components/calender-table';
import { dataArr } from 'helper';

ReactDOM.render(
  <CalenderTable eventsData={dataArr} />,
  document.getElementById('root'),
);
