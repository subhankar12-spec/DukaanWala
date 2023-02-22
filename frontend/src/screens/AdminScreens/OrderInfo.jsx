import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import { DataGrid } from '@mui/x-data-grid';

const mockDataTeam = [
  {
    id: 1,
    name: 'Jon Snow',
    email: 'jonsnow@gmail.com',
    age: 35,
    phone: '(665)121-5454',
    access: 'admin',
  },
  {
    id: 2,
    name: 'Cersei Lannister',
    email: 'cerseilannister@gmail.com',
    age: 42,
    phone: '(421)314-2288',
    access: 'manager',
  },
  {
    id: 3,
    name: 'Jaime Lannister',
    email: 'jaimelannister@gmail.com',
    age: 45,
    phone: '(422)982-6739',
    access: 'user',
  },
  {
    id: 4,
    name: 'Anya Stark',
    email: 'anyastark@gmail.com',
    age: 16,
    phone: '(921)425-6742',
    access: 'admin',
  },
  {
    id: 5,
    name: 'Daenerys Targaryen',
    email: 'daenerystargaryen@gmail.com',
    age: 31,
    phone: '(421)445-1189',
    access: 'user',
  },
  {
    id: 6,
    name: 'Ever Melisandre',
    email: 'evermelisandre@gmail.com',
    age: 150,
    phone: '(232)545-6483',
    access: 'manager',
  },
  {
    id: 7,
    name: 'Ferrara Clifford',
    email: 'ferraraclifford@gmail.com',
    age: 44,
    phone: '(543)124-0123',
    access: 'user',
  },
  {
    id: 8,
    name: 'Rossini Frances',
    email: 'rossinifrances@gmail.com',
    age: 36,
    phone: '(222)444-5555',
    access: 'user',
  },
  {
    id: 9,
    name: 'Harvey Roxie',
    email: 'harveyroxie@gmail.com',
    age: 65,
    phone: '(444)555-6239',
    access: 'admin',
  },
];

const OrderInfo = () => {
  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
  ];
  return (
    <Box margin="20px">
      <Header title="All Orders" subtitle="See all orders below" />
      <Box
        m="40px 0 0 0"
        height="62vh"
        // sx={{
        //   '& .MuiDataGrid-root': {
        //     border: 'none',
        //   },
        //   '& .MuiDataGrid-cell': {
        //     borderBottom: 'none',
        //   },
        //   //   '& .name-column--cell': {
        //   //     color: colors.greenAccent[300],
        //   //   },
        //   '& .MuiDataGrid-columnHeaders': {
        //     // backgroundColor: colors.blueAccent[700],
        //     borderBottom: 'none',
        //   },
        //   //   '& .MuiDataGrid-virtualScroller': {
        //   //     backgroundColor: colors.primary[400],
        //   //   },
        //   '& .MuiDataGrid-footerContainer': {
        //     borderTop: 'none',
        //     // backgroundColor: colors.blueAccent[700],
        //   },
        //   //   '& .MuiCheckbox-root': {
        //   //     color: `${colors.greenAccent[200]} !important`,
        //   //   },
        // }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default OrderInfo;
