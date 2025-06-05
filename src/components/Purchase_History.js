// src/Admin/Pages/PurchaseHistory.jsx
import React, { useEffect, useState } from "react";

const PurchaseHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://market-cwgu.onrender.com/finishedorders/")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("فشل في جلب البيانات:", err));
  }, []);

  return (
    <div style={styles.page}>
      <h2 className="add_text mt-5">سجل المشتريات</h2>
      {orders.map((order, index) => (
        <div key={index} style={styles.card}>
          <p><strong>الاسم:</strong> {order.customer_info?.name}</p>
          <p><strong>رقم الهاتف:</strong> {order.customer_info?.phone_number}</p>
          <p><strong>العنوان:</strong> {order.customer_info?.address}</p>
          <p><strong>تاريخ الطلب:</strong> {order["تاريخ الطلب:"]}</p>
          <p><strong>تاريخ القبول:</strong> {order["تاريخ القبول:"]}</p>
          <p><strong>العناصر:</strong> 
            {order["مشتريات العناصر :"].length > 0
              ? (
                <ul>
                  {order["مشتريات العناصر :"].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : " لا يوجد"}
          </p>
          <p><strong>البكجات:</strong> 
            {order["مشتريات البكجات :"].length > 0
              ? (
                <ul>
                  {order["مشتريات البكجات :"].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : " لا يوجد"}
          </p>
          <p><strong>السعر الكلي:</strong> {order["السعر الكلي:"]} ل.س</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  page: {
    padding: "40px 20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    direction: "rtl",
  },
  title: {
    color: "#1C458D",
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "30px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    padding: "20px",
    marginBottom: "20px",
    lineHeight: "1.8",
    textAlign: "right",
  },
};

export default PurchaseHistory;
