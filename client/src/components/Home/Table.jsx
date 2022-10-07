import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 180 },
  { field: 'lastName', headerName: 'Last name', width: 180 },
  { field: 'projects', headerName: 'projects', width: 180 },
  { field: 'tasks', headerName: 'tasks', width: 180 },
  { field: 'this week', headerName: 'this week', width: 180 },
  
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon',projects:'name',tasks:5,'this week':3 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei',projects:'name',tasks:5,'this week':3 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime',projects:'name',tasks:5,'this week':3 },
  { id: 4, lastName: 'Stark', firstName: 'Arya',projects:'name',tasks:5,'this week':3 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',projects:'name',tasks:5,'this week':3 },
  { id: 6, lastName: 'Melisandre', firstName: null,projects:'name',tasks:5,'this week':3 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara',projects:'name',tasks:5,'this week':3 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini',projects:'name',tasks:5,'this week':3 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey',projects:'name',tasks:5,'this week':3 },
];

export default function Table() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
