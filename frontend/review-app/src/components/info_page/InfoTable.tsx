import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function InfoTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
            <TableRow>
            <TableCell variant="head">Name</TableCell>
                <TableCell>Qanba Obsidian 2</TableCell>
            </TableRow>
            <TableRow>
            <TableCell variant="head">Manufacturer</TableCell>
                <TableCell>Qanba</TableCell>
            </TableRow>
            <TableRow>
            <TableCell variant="head">Supported Systems</TableCell>
                <TableCell>PS4, PS5, PC</TableCell>
            </TableRow>
            <TableRow>
            <TableCell variant="head">Number of Buttons</TableCell>
                <TableCell>8</TableCell>
            </TableRow>
            <TableRow>
            <TableCell variant="head">Number of Analog Sticks</TableCell>
                <TableCell>1</TableCell>
            </TableRow>
            </TableBody>
      </Table>
    </TableContainer>
  );
}

export default InfoTable;