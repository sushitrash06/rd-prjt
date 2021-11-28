import {
    Checkbox,
    Dialog,
    DialogContent,
    FormControlLabel,
    FormGroup,
    TableFooter,
    Typography,
  } from "@mui/material";
  import { Formik } from "formik";
  import React, { useEffect, useState } from "react";
  import logo from "../../assets/logo.png";
  import Gap from "../../Component/gap";
  import { Input } from "../../Component/main";
  import Button from "../../Component/button";
  import { useHistory } from "react-router-dom";
  import { styled } from "@mui/material/styles";
  import Table from "@mui/material/Table";
  import TableBody from "@mui/material/TableBody";
  import TableCell, { tableCellClasses } from "@mui/material/TableCell";
  import TableContainer from "@mui/material/TableContainer";
  import TableHead from "@mui/material/TableHead";
  import TableRow from "@mui/material/TableRow";
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#828282",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  
  function FormPenjualanOffice(props) {
    const history = useHistory();
    const loginForm = (
      <Formik
        initialValues={{}}
        enableReinitialize={true}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.user = "Silahkan Masukan Username";
          }
          if (!values.password) {
            errors.password = "Silahkan Masukan Kata Sandi";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          // history.push('/dashboard')
          const user = {
            user: values.username,
          };
          console.log("login");
          localStorage.setItem("rdprjt");
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
          dirty,
        }) => (
          <Dialog
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="form-dialog-title"
            maxWidth="lg"
          >
            <DialogContent
              style={{
                width: "100%",
              }}
            >
              <div>
                <div
                  style={{
                    width:"600px",
                    background: "#FFF",
                  }}
                >
                  <h2>Penjualan Store Detail</h2>
                  <div
                    align="left"
                    style={{
                      margin: "25px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                      Lokasi Office
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.kodeTransaksi}
                      onChange={handleChange("kodeTransaksi")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      style={{
                        width: "100%",
                        borderRadius: "4px",
                        height: "100%",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                      Article
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.kodeStore}
                      onChange={handleChange("kodeStore")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      style={{
                        width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                      Tipe
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.lokasiStore}
                      onChange={handleChange("lokasiStore")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      style={{
                        width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Gap height={25} />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                      Kategori
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.lokasiStore}
                      onChange={handleChange("lokasiStore")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      style={{
                        width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Gap height={25} />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                      Nama Barang
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.lokasiStore}
                      onChange={handleChange("lokasiStore")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      style={{
                        width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Gap height={25} />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                     Kuantitas
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.lokasiStore}
                      onChange={handleChange("lokasiStore")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      style={{
                        width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Gap height={25} />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                      Ukuran
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.lokasiStore}
                      onChange={handleChange("lokasiStore")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      style={{
                        width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Gap height={25} />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                     Foto Barang
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.lokasiStore}
                      onChange={handleChange("lokasiStore")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      style={{
                        width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Gap height={25} />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                      Metode Pembayaran
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.diskon}
                      onChange={handleChange("diskon")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      style={{
                        width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                      Harga Satuan Barang
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.metodePembayaran}
                      onChange={handleChange("metodePembayaran")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      style={{
                        width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                     Ongkos Kirim
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.ekspedisi}
                      onChange={handleChange("ekspedisi")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      style={{
                        width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />{" "}
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                      Pajak dan Biaya Lainnya
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.ongkir}
                      onChange={handleChange("ongkir")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      style={{
                        width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#717171",
                      }}
                    >
                     Harga Total
                    </Typography>
                    <Gap height="10px" />
                   <Input
                      value={values.total}
                      onChange={handleChange("total")}
                      // label="Masukan "
                      // inputProps={{ className: classes.input }}
                      style={{
                        width: "100%",
                        borderRadius: "4px",
                        //   background: '#4C4E5B',
                      }}
                    />
                    <Gap height={35} />
                    <Button
                      onClick={() => {
                        props.onClose();
                      }}
                      label="Submit"
                      style={{
                        width: "100%",
                        padding: "0.5em",
                        background: "rgb(81 94 193)",
                        borderRadius: "15px",
                        color: "white",
                        fontSize: "20px",
                        textTransform: "capitalize",
                        marginBottom: "25px",
                        // padding:"1em"
                      }}
                    />
                  </div>
                </div>
              </div>
            </DialogContent>
           </Dialog>
        )}
      </Formik>
    );
    return (
      <>
        <div>{loginForm}</div>
      </>
    );
  }
  
  export default FormPenjualanOffice;
  