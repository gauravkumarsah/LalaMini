import React from 'react';
import { ms } from './ms';
import './ms.css';

const microservices = ms.map((item) => {
  return (
    <div key={item} className={'row'}>
      <div className={'colMs'}>{item.microservice}</div>
      <div className={'colDs'}>
        {item.dataSources.map((dataSource) => (
          <div key={dataSource}>{dataSource}</div>
        ))}
      </div>
      <div className={'colTb'}>
        {item.tables.map((table) => (
          <div className={'colDt'} key={table}>
            {table.tablesList.map((tb) => (
              <div key={tb}>{tb}</div>
            ))}
          </div>
        ))}
      </div>
      <div className={'colPm'}>
        {item.columns.map((col) => (
          <div key={col} className={'colP'}>
            <div key={col}>
              {col.cols.map((tb) => (
                <div key={tb}>{`${tb.column} : ${tb.permission}`}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

function App() {
  return (
    <div className="App">
      <div>{microservices}</div>
    </div>
  );
}

export default App;
