import './productList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (productId) => {
    setData(data.filter((item) => item.id !== productId));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 150,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
