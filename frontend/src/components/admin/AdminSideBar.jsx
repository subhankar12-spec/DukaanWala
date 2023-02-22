import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from 'react-pro-sidebar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Typography, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

function AdminSideBar() {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <div>
      <Sidebar style={{ height: '100vh' }}>
        <Menu>
          <Box sx={{ p: 3, display: 'flex' }}>
            {!collapsed && <Typography variant="h2">Dukaanwala</Typography>}
            <IconButton
              onClick={() => {
                collapseSidebar();
              }}
            >
              <MenuOutlinedIcon />
            </IconButton>
          </Box>

          {/* <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: 'center' }}
          ></MenuItem> */}
          <Link
            to="/dashboard/home"
            style={{
              color: 'inherit',
              textDecoration: 'inherit',
              // margin: 'inherit',
            }}
          >
            <MenuItem icon={<HomeOutlinedIcon />}>Dashboard</MenuItem>
          </Link>
          <SubMenu label="Products" icon={<PeopleOutlinedIcon />}>
            <Link
              to="/dashboard/addproduct"
              style={{
                color: 'inherit',
                textDecoration: 'inherit',
                // margin: 'inherit',
              }}
            >
              <MenuItem
                style={{
                  marginLeft: '20px',
                }}
              >
                Add Product
              </MenuItem>
            </Link>
            <Link
              to="/dashboard/allproducts"
              style={{
                color: 'inherit',
                textDecoration: 'inherit',
                // margin: 'inherit',
              }}
            >
              <MenuItem
                style={{
                  marginLeft: '20px',
                }}
              >
                See Products
              </MenuItem>
            </Link>
          </SubMenu>
          <Link
            to="/dashboard/orders"
            style={{
              color: 'inherit',
              textDecoration: 'inherit',
              // margin: 'inherit',
            }}
          >
            <MenuItem icon={<ContactsOutlinedIcon />}>Orders</MenuItem>
          </Link>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Users</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>Reviews</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>FAQ</MenuItem>
        </Menu>
      </Sidebar>
      {/* <main>
        <h1 style={{ color: 'white', marginLeft: '5rem' }}>
          React-Pro-Sidebar
        </h1>
      </main> */}
    </div>
  );
}

export default AdminSideBar;
