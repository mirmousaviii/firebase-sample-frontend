import {
  Table,
  TableBody,
  TableCell, TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import React from 'react';

function OrdersTable({ordersData}) {
  return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Booking Date</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Customer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Link to={`orders/${item.id}`}>
                      {item.title}
                    </Link>
                  </TableCell>
                  <TableCell>{item.bookingDate}</TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell>{item.customer}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default OrdersTable;