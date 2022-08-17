import React from 'react';
import { Grid, Box, Container, CssBaseline } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { CustomerData } from '../Constant';
const Customerpage = () => {
  return (
    <>
      <CssBaseline />
      <h3 style={{ marginTop: '3%', marginLeft: '2%' }} className='main-customer-title'>Customer</h3>
      <Container maxWidth="100%" style={{ padding: '20px', marginTop: "2%" }}>
        <Box sx={{ bgcolor: '#ffffff', height: '100vh' }} >
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <input className='customer-search' type="text" placeholder='Search here...' ></input>
            <img src='/icons/filter.svg' alt='no icon' style={{ marginTop: '30px' }}></img>
            <img src='/icons/threedots.svg' alt='no icon' style={{ marginTop: '30px' }}></img>
          </Grid>
          <TableContainer style={{ marginTop: "20px" }} component={Paper} maxWidth="100%">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead style={{ backgroundColor: '#e2e2ea' }}>
                <TableRow   >
                  <TableCell align='center'><div className='customer-row'>ID</div></TableCell>
                  <TableCell align="center"><div className='customer-row'>Name</div></TableCell>
                  <TableCell align="center"><div className='customer-row'>Join&nbsp;Date</div></TableCell>
                  <TableCell align="center"><div className='customer-row'>Total&nbsp;Visit</div></TableCell>
                  <TableCell align="center"><div className='customer-row'>Purchased&nbsp;Item</div></TableCell>
                  <TableCell align="center"><div className='customer-row'>Total&nbsp;Spend</div></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {CustomerData.map((row) => (
                  <TableRow
                    key={row.name}

                  >
                    <TableCell style={{ border: 'none' }} aling="center"> {row.id} </TableCell>
                    <TableCell style={{ border: 'none' }} align="center">{row.name}</TableCell>
                    <TableCell style={{ border: 'none' }} align="center">{row.join}</TableCell>
                    <TableCell style={{ border: 'none' }} align="center">{row.visit}</TableCell>
                    <TableCell style={{ border: 'none' }} className='table-item' align="center">{row.item}<div className='row-detail'>{row.detail}</div></TableCell>
                    <TableCell style={{ border: 'none' }} align="center">{row.spend}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </Box>
      </Container>
    </>
  );
}

export default Customerpage;
