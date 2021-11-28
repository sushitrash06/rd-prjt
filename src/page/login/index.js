import { Checkbox, FormControlLabel, FormGroup, Typography, InputAdornment, IconButton } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import logo from '../../assets/logo.png'
import Gap from '../../Component/gap';
import {Input} from '../../Component/main'
import Button from '../../Component/button'
import { useHistory } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function Login(props) {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const history = useHistory();
    const loginForm =(
        <Formik
            initialValues={{}}
            enableReinitialize={true}
            validate={(values)=>{
                const errors ={};
                if(!values.username){
                    errors.user = 'Silahkan Masukan Username';
                }
                if(!values.password){
                    errors.password = 'Silahkan Masukan Kata Sandi'
                }
                return errors
            }}
            onSubmit = {async(values,{setSubmitting})=>{
                // history.push('/dashboard')
                const user ={
                    user:values.username
                }
                console.log("login")
                localStorage.setItem("rdprjt")
                setSubmitting(false);
            }}
        >{({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid,
            dirty,
        })=>(
            <div style={{
                width:"100%",
                margin:"0"
            }}
            align="center"
            >
               <img alt="logo" src={logo} style={{width:"30%",marginTop:"10%"}}/>
               <Gap height="55px"/>
               <div
                style={{
                    width:"500px",
                    height:"400px",
                    background:"#FFF"
                }}
               >
                   <Gap height="20px"/>
                   <Typography style={{
                       fontSize:"30px",
                       fontWeight:"bold",
                       color:"#717171"
                   }}>MASUK</Typography>
                   <Gap height="15px"/>
                   <div align="left"
                    style={{
                        margin:"25px"
                    }}
                   >
                    <Typography
                    style={{
                        fontSize:"20px",
                        fontWeight:"bold",
                        color:"#717171"
                    }}
                    >Username</Typography>
                    <Gap height="10px"/>
                    <Input
                            value ={values.username}
                            onChange = {handleChange('username')}
                            // label="Masukan "
                            // inputProps={{ className: classes.input }}
                            style={{
                            width: '100%',
                            borderRadius: '4px',
                            height:"100%"
                            //   background: '#4C4E5B',
                            }}
                    />
                    <Typography
                    style={{
                        fontSize:"20px",
                        fontWeight:"bold",
                        color:"#717171"
                    }}
                    >Password</Typography>
                    <Gap height="10px"/>
                    <Input
                            value ={values.password}
                            onChange = {handleChange('password')}
                            // label="Masukan "
                            // inputProps={{ className: classes.input }}
                            style={{
                            width: '100%',
                            borderRadius: '4px',
                            //   background: '#4C4E5B',
                            }}
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                    >
                                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                    />
                    <Gap height="10px"/>
                    <div style={{
                        display:"flex",
                        position:"relative"
                    }}>
                    <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Ingat Saya" />
                    </FormGroup>
                    <span
                        style={{
                            position:"absolute",
                            right:"0",
                            marginTop:"10px"
                        }}
                    >Lupa Password ?</span>
                    </div>
                    <Button
                        onClick={()=>{
                            localStorage.setItem("rdprjt",true)
                            history.push('/dashboard')
                            window.location.reload();
                        }}
                        label="Masuk"
                        style={{
                            width: '100%',
                            // margin:"1px",
                            background: "rgb(81 94 193)",
                            // height: '40px',
                            color: 'white',
                            fontSize:"20px",
                            textTransform: 'capitalize',
                            // padding:"1em"
                          }}
                    />
                   </div>
               </div>
            </div>
        )}

        </Formik>
    )
    return (
        <>
        <div className="background-login">
            {/* {loginForm} */}
            <div className="overlay-img">
            </div>
            <div className="login-form">
                    {loginForm}
            </div>
        </div>
        </>
    );
}

export default Login;