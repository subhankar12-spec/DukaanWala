import React from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import { Link } from '@mui/material';
import './AdminHomeScreen.css';
import { Stack } from '@mui/material';
import AdminSideBar from '../../../components/admin/AdminSideBar';
import AdminPanel from '../../../components/admin/AdminPanel';
import AdminNav from '../../../components/admin/AdminNav';
const AdminHomeScreen = () => {
  return (
    <div>
      <AdminNav />
      <Stack direction="row">
        <AdminSideBar />

        {/* <AdminPanel /> */}
      </Stack>
    </div>
  );
};

export default AdminHomeScreen;
