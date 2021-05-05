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

  let orderConverter = {
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      if (Object.keys(data).length) {
        const bookingDate = new Date(data?.bookingDate);
        let formattedBookingDate;
        if (bookingDate.toString() !== 'Invalid Date') {
          formattedBookingDate = bookingDate.getDate() + '.' +
              bookingDate.getDate() + '.' +
              bookingDate.getFullYear();
        }

        return {
          id: snapshot.id,
          title: data?.title || '[NO TITLE]',
          bookingDate: formattedBookingDate || '-',
          address: data?.address?.street || '-',
          customer: data?.customer?.name || '-',
        };
      }
    },
  };

  const loadOrders = () => {
    db.collection('orders')
      .withConverter(orderConverter)
      .get()
      .then((querySnapshot) => {
        let ordersLoaded = [];
        querySnapshot.forEach((doc) => {
          if (doc.data()) {
            ordersLoaded.push(doc.data());
          }
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
              {orders.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Link to={item.id}>
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
      </DefaultLayout>
  );
}

export default OrderPage;
