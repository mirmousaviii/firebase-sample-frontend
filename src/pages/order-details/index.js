import React, {useState} from 'react';
import DefaultLayout from '../../layouts/default-layout';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {db, firebaseConfig} from '../../utils/firebase';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

function OrderDetailPage({match}) {
  const [order, setOrder] = useState({});

  React.useEffect(() => {
    loadOrderDetails();
  }, []);

  const loadOrderDetails = () => {
    db.collection('orders')
      .doc(match.params.id)
      .get()
      .then((doc) => {
        setOrder(doc.data());
      }).catch((error) => {
      // console.log(error);
      alert(error.message);
    });

  };

  return (
      <DefaultLayout>
        <Typography variant="h6">
          Order Details:
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>{order?.title}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Booking Date</TableCell>
                <TableCell>{order?.bookingDate}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Address</TableCell>
                <TableCell>
                  {order?.address?.street} <br/>
                  {order?.address?.city} {order?.Address?.zip} <br/>
                  {order?.address?.country}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell>
                  {order?.customer?.name} <br/>
                  {order?.customer?.email} <br/>
                  {order?.customer?.phone}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DefaultLayout>
  );
}

export default OrderDetailPage;
