import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import itemDetails from '../../utils/itemDetails';

function InfoTable(props: itemDetails) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
            <TableRow>
            <TableCell variant="head">Name</TableCell>
                <TableCell>{`${props.itemName}`}</TableCell>
            </TableRow>
            <TableRow>
            <TableCell variant="head">Brand</TableCell>
                <TableCell>{`${props.itemBrand}`}</TableCell>
            </TableRow>
            <TableRow>
            <TableCell variant="head">Supported Systems</TableCell>
                <TableCell>{`${props.compatibleSystems}`}</TableCell>
            </TableRow>
            <TableRow>
            <TableCell variant="head">Number of Buttons</TableCell>
                <TableCell>{`${props.itemButtons}`}</TableCell>
            </TableRow>
            <TableRow>
            <TableCell variant="head">Number of Analog Sticks</TableCell>
                <TableCell>{`${props.itemAnalog}`}</TableCell>
            </TableRow>
            <TableRow>
            <TableCell variant="head">Price in AED</TableCell>
                <TableCell>{`${props.itemPrice}`}</TableCell>
            </TableRow>
            </TableBody>
      </Table>
    </TableContainer>
  );
}

export default InfoTable;