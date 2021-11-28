import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login,Dashboard,DetailPenjualanStore } from '../../page';
import PenjualanStore from '../../Component/table/PenjualanStore/index'
import PenjualanOffice from '../../Component/table/PenjualanOffice';
import FormPenjualanOffice from '../../page/FormPenjualan';
import Pembelian from '../../page/pembelian';
import BarangMasuk from '../../page/penyimpaan/BarangMasuk';
import BarangKeluar from '../../page/penyimpaan/BarangKeluar';

// const PrivateRoute = ({ component: Component, ...rest }) => {
// 	const accessToken = localStorage.getItem("DMDSHBTOKEN");

// 	return (
// 		<Route
// 			{...rest}
// 			render={(props) =>
// 				accessToken ? <Component {...props} /> : <Redirect to='/' />
// 			}
// 		/>
// 	);
// };


function Routes() {
  return (
    // <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/penjualan-store' component={PenjualanStore}/>
        <Route exact path='/penjualan-office' component={PenjualanOffice}/>
        <Route exact path='/penyimpanan/barang-masuk' component={BarangMasuk}/>
        <Route exact path='/penyimpanan/barang-keluar' component={BarangKeluar}/>
        <Route exact path='/pembelian' component={Pembelian}/>
        <Route exact path='/penjualan-store/detail' component={FormPenjualanOffice}/>
      </Switch>
  );
}

export default Routes;
