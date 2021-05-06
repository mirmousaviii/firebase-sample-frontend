import React, {useState} from 'react';
import DefaultLayout from '../../layouts/default-layout';
import 'firebase/firestore';
import {db, firebaseConfig} from '../../utils/firebase';
import Typography from '@material-ui/core/Typography';
import OrdersTable from '../../components/orders-table';

function OrderPage() {
  const [orders, setOrders] = useState([]);

  React.useEffect(() => {
    loadOrders();
  }, []);

  let orderConverter = {
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      if (Object.keys(data).length && snapshot.id.trim()) {
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
        <OrdersTable ordersData={orders} />
      </DefaultLayout>
  );
}

export default OrderPage;
