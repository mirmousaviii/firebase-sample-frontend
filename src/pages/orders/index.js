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

function OrderPage() {
  const [orders, setOrders] = useState([]);

  React.useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    db.collection('orders')
      .get()
      .then((querySnapshot) => {
        let ordersLoaded = [];
        querySnapshot.forEach((doc) => {
          ordersLoaded.push(doc.data());
        });
        setOrders(ordersLoaded);
      }).catch((error) => {
      // console.log(error);
      alert(error.message);
    });

  };

  return (
      <DefaultLayout>
        <Typography variant="h6">
          Order list:
        </Typography>
        <TableContainer>
          <Table aria-label="Orders table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Booking Date</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Customer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((item) => (
                  <TableRow key={item?.id}>
                    <TableCell><Link
                        to={'orders'}>{item.title}</Link></TableCell>
                    <TableCell>{item?.bookingDate}</TableCell>
                    <TableCell>{item?.address?.street}</TableCell>
                    <TableCell>{item?.customer?.name}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DefaultLayout>
  );
}

export default OrderPage;
