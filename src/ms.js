export const ms = [
  {
    microservice: 'ms1',
    dataSources: ['ds1', 'ds2'],
    tables: [
      {
        dataSource: 'ds1',
        tablesList: ['t1', 't2'],
      },
      {
        dataSource: 'ds2',
        tablesList: ['t3', 't4'],
      },
    ],
    columns: [
      {
        dataSource: 'ds1',
        tablesName: 't1',
        cols: [
          {
            column: 'c1',
            permission: 'write',
          },
          {
            column: 'c2',
            permission: 'read',
          },
        ],
      },
      {
        dataSource: 'ds1',
        tablesName: 't2',
        cols: [
          {
            column: 'c12',
            permission: 'write',
          },
          {
            column: 'c22',
            permission: 'read',
          },
        ],
      },
      {
        dataSource: 'ds2',
        tablesName: 't1',
        cols: [
          {
            column: 'c1',
            permission: 'write',
          },
          {
            column: 'c2',
            permission: 'read',
          },
        ],
      },
      {
        dataSource: 'ds2',
        tablesName: 't2',
        cols: [
          {
            column: 'c12',
            permission: 'write',
          },
          {
            column: 'c22',
            permission: 'read',
          },
        ],
      },
    ],
  },
  {
    microservice: 'ms2',
    dataSources: ['ds3', 'ds4'],
    tables: [
      {
        dataSource: 'ds1',
        tablesList: ['t1', 't2'],
      },
      {
        dataSource: 'ds2',
        tablesList: ['t3', 't4'],
      },
    ],
    columns: [
      {
        dataSource: 'ds1',
        tablesName: 't1',
        cols: [
          {
            column: 'c1',
            permission: 'write',
          },
          {
            column: 'c2',
            permission: 'read',
          },
        ],
      },
      {
        dataSource: 'ds1',
        tablesName: 't2',
        cols: [
          {
            column: 'c12',
            permission: 'write',
          },
          {
            column: 'c22',
            permission: 'read',
          },
        ],
      },
      {
        dataSource: 'ds2',
        tablesName: 't1',
        cols: [
          {
            column: 'c1',
            permission: 'write',
          },
          {
            column: 'c2',
            permission: 'read',
          },
        ],
      },
      {
        dataSource: 'ds2',
        tablesName: 't2',
        cols: [
          {
            column: 'c12',
            permission: 'write',
          },
          {
            column: 'c22',
            permission: 'read',
          },
        ],
      },
    ],
  },
  {
    microservice: 'ms3',
    dataSources: ['ds5', 'ds6'],
    tables: [
      {
        dataSource: 'ds1',
        tablesList: ['t1', 't2'],
      },
      {
        dataSource: 'ds2',
        tablesList: ['t3', 't4'],
      },
    ],
    columns: [
      {
        dataSource: 'ds1',
        tablesName: 't1',
        cols: [
          {
            column: 'c1',
            permission: 'write',
          },
          {
            column: 'c2',
            permission: 'read',
          },
        ],
      },
      {
        dataSource: 'ds1',
        tablesName: 't2',
        cols: [
          {
            column: 'c12',
            permission: 'write',
          },
          {
            column: 'c22',
            permission: 'read',
          },
        ],
      },
      {
        dataSource: 'ds2',
        tablesName: 't1',
        cols: [
          {
            column: 'c1',
            permission: 'write',
          },
          {
            column: 'c2',
            permission: 'read',
          },
        ],
      },
      {
        dataSource: 'ds2',
        tablesName: 't2',
        cols: [
          {
            column: 'c12',
            permission: 'write',
          },
          {
            column: 'c22',
            permission: 'read',
          },
        ],
      },
    ],
  },
  {
    microservice: 'ms5',
    dataSources: ['ds7', 'ds8'],
    tables: [
      {
        dataSource: 'ds1',
        tablesList: ['t1', 't2'],
      },
      {
        dataSource: 'ds2',
        tablesList: ['t3', 't4'],
      },
    ],
    columns: [
      {
        dataSource: 'ds1',
        tablesName: 't1',
        cols: [
          {
            column: 'c1',
            permission: 'write',
          },
          {
            column: 'c2',
            permission: 'read',
          },
        ],
      },
      {
        dataSource: 'ds1',
        tablesName: 't2',
        cols: [
          {
            column: 'c12',
            permission: 'write',
          },
          {
            column: 'c22',
            permission: 'read',
          },
        ],
      },
      {
        dataSource: 'ds2',
        tablesName: 't1',
        cols: [
          {
            column: 'c1',
            permission: 'write',
          },
          {
            column: 'c2',
            permission: 'read',
          },
        ],
      },
      {
        dataSource: 'ds2',
        tablesName: 't2',
        cols: [
          {
            column: 'c12',
            permission: 'write',
          },
          {
            column: 'c22',
            permission: 'read',
          },
        ],
      },
    ],
  },
];
