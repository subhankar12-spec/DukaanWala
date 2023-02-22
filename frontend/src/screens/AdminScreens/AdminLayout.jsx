import React from 'react';
import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AdminNav from '../../components/admin/AdminNav';
import AdminSideBar from '../../components/admin/AdminSideBar';

const AdminLayout = () => {
  return (
    <>
      <Stack direction="row">
        <AdminSideBar />
        <Box sx={{ width: '100%' }}>
          <AdminNav />
          <Outlet />
        </Box>
      </Stack>
    </>
  );
};

export default AdminLayout;
