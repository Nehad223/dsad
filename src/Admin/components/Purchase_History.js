// src/Admin/Pages/PurchaseHistory.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";

const PurchaseHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("https://market-cwgu.onrender.com/finishedorders/");
        console.log(res.data);
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <div style={styles.page}>
      <h2 className="add_text mt-5">سجل المشتريات</h2>
      <div className="mt-5">

      {orders.map((order, index) => (
        <div className="mt-4" key={index} style={styles.card}>
          <p><strong>الاسم:</strong> {order.customer_info?.name || "غير متوفر"}</p>
          <p><strong>رقم الهاتف:</strong> {order.customer_info?.phone_number || "غير متوفر"}</p>
          <p><strong>العنوان:</strong> {order.customer_info?.address || "غير متوفر"}</p>
          <p><strong>تاريخ الطلب:</strong> {order["تاريخ الطلب:"] || "غير متوفر"}</p>
          <p><strong>تاريخ القبول:</strong> {order["تاريخ القبول:"] || "غير متوفر"}</p>

          <p><strong>العناصر:</strong> 
            {order["مشتريات العناصر :"]?.length > 0
              ? (
                <ul>
                  {order["مشتريات العناصر :"].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )
              : order["المشتريات :"]?.length > 0
              ? (
                <ul>
                  {order["المشتريات :"].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )
              : "لا يوجد"}
          </p>

          {order["مشتريات البكجات :"]?.length > 0 && (
            <p><strong>البكجات:</strong> 
              <ul>
                {order["مشتريات البكجات :"].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </p>
          )}

          {order["السعر الكلي:"] != null && (
            <p><strong>السعر الكلي:</strong> {order["السعر الكلي:"]} ل.س</p>
          )}

          {order["إجمالي النقاط:"] != null && (
            <p><strong>إجمالي النقاط:</strong> {order["إجمالي النقاط:"]}</p>
          )}
        </div>
      ))}
      </div>

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
