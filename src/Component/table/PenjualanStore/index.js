import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Button from '../../button'
import Input from '../../input'
import { IconButton, InputAdornment, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SearchIcon from '@mui/icons-material/Search'
import { Link, useHistory } from 'react-router-dom';
import rows from '../dummyData.json'
import DetailPenjualanStore from '../../../page/DetailPenjualanStore/Index';



export default function PenjualanStore() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'TanggalTransaksi',
      headerName: 'Tanggal Transaksi',
      width: 250,
      editable: true,
    },
    {
      field: 'IDTransaksi',
      headerName: 'ID Transaksi',
      width: 200,
      editable: true,
    },
    {
      field: 'IDStore',
      headerName: 'ID Store',
      // type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: 'LokasiStore',
      headerName: 'Lokasi Store',
      // description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 200,
    },
    {
      field: 'Kualitas',
      headerName: 'Kualitas',
      // description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 160,
    },
    {
      field: 'Total',
      headerName: 'Total',
      // description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 160,
    },
    {
      field: 'Action',
      headerName: 'Action',
      // description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
      renderCell: () => {
          return (
              <>
                  <Button
                      style={{
                          //    background: "rgb(81 94 193)",
                          color: 'black',
                          textTransform: 'capitalize',
                          marginRight:"15px"
                      }}
                      label="Detail"
                      startIcon={<RemoveRedEyeOutlinedIcon/>}
                      onClick={()=>{
                          setOpenDetail(true)
                      }}
             />
              </>
          );
        }
        
    },
  ];
  const [openDetail,setOpenDetail] = React.useState(false)
  return (
    <div style={{marginTop:"50px"}} align="left">
        <div style={{
            margin:"25px",
            marginTop:"55px",
            display:"flex",
        }}>
            <h1>Penjualan Store</h1>
            <div
             style={{
                 position:"absolute",
                 right:0,
                 display:"flex"
             }}
            >
            <Button
                style={{
                    background: "#E14C4C",
                    color: 'white',
                    textTransform: 'capitalize',
                    marginRight:"15px",
                    width:"100%",
                    padding:"1em",
                    borderRadius:"14px"
                }}
                label="Hapus"
                startIcon={<DeleteIcon/>}
           />
           <Button
                style={{
                    background: "#828EED",
                    color: 'white',
                    textTransform: 'capitalize',
                    marginRight:"15px",
                    width:"100%",
                    padding:"1em",
                    borderRadius:"14px"
                }}
                label="Upload"
                startIcon={<CloudUploadIcon/>}
           />
            </div>
        </div>
         <div style={{ height: 700, width: '100%' }}>
            <div>
                <Input
                    style={{
                    borderRadius: '4px',
                    marginBottom:"15px"
                    }}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            >
                            <SearchIcon/>
                            </IconButton>
                        </InputAdornment>
                        ),
                    }}
            /></div>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
            />
            <DetailPenjualanStore
              open={openDetail}
              onClose={()=>{
                setOpenDetail(false)
              }}
            />
    </div>
    </div>
  );
}
