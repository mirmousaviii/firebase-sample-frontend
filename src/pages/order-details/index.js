import React, {useState} from 'react';
import DefaultLayout from '../../layouts/default-layout';
import 'firebase/firestore';
import {db, firebaseConfig} from '../../utils/firebase';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, TextField,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MuiButton from '@material-ui/core/Button';
import {styled} from '@material-ui/core/styles';
import {spacing} from '@material-ui/system';

const Button = styled(MuiButton)(spacing);

function OrderDetailPage({match}) {
  const [order, setOrder] = useState({});
  const [title, setTitle] = useState('');
  const [bookingDate, setBookingDate] = useState('');

  React.useEffect(() => {
    loadOrderDetails();
  }, []);

  const loadOrderDetails = () => {
    db.collection('orders')
      .doc(match.params.id)
      .get()
      .then((doc) => {
        const data = doc.data();
        setOrder(data);
        setTitle(data?.title);
        const formattedDate = new Date(data?.bookingDate)
            .toISOString()
            .slice(0, 19);
        setBookingDate(formattedDate);
      }).catch((error) => {
      // console.log(error);
      alert(error.message);
    });
  };

  const updateOrder = () => {
    db.collection('orders')
      .doc(match.params.id).set(
        {
          title,
          bookingDate: new Date(bookingDate).getTime(),
        },
    ).then(() => {
      alert('Order Updated.');
    }).catch((error) => {
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
                <TableCell>
                  <TextField
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Booking Date</TableCell>
                <TableCell>
                  <TextField
                      type="datetime-local"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                  />
                </TableCell>
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
        <br/>
        <Button variant="contained"
                color="primary"
                size="large"
                mt={2}
                onClick={updateOrder}
        >
          Update order
        </Button>
      </DefaultLayout>
  );
}

export default OrderDetailPage;
