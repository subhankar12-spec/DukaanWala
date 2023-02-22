import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImportExportIcon from '@mui/icons-material/ImportExport';
// import PostAddIcon from '@mui/icons-material/PostAdd';
import AddIcon from '@mui/icons-material/Add';
import TreeItem from '@mui/lab/TreeItem';

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <Link to="/">
          <h2 className="brandname">Dukaanwala</h2>
        </Link>
        <hr />
        <Link to="/admin/dashboard">
          <p>Dashboard</p>
        </Link>

        <Link>
          <TreeView
          // defaultCollapseIcon={<ExpandMoreIcon />}
          // defaultExpandIcon={<ImportExportIcon />}
          >
            <TreeItem nodeId="1" label="Products">
              <Link to="/admin/products">
                <TreeItem nodeId="2" label="All" />
              </Link>

              <Link to="/admin/addproduct">
                <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
              </Link>
            </TreeItem>{' '}
          </TreeView>
        </Link>

        {/* <Link></Link> */}
        <Link to="/admin/orders">
          <p>Orders</p>
        </Link>
        <Link to="/admin/users">
          <p>Users</p>
        </Link>
        <Link to="/admin/reviews">
          <p>Reviews</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
