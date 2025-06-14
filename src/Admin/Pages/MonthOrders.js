import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MonthOrders = () => {
  const params = useParams();
  const { month, year } = useParams();
  const [orders, setOrders] = useState([]);
        useEffect(() => {
          document.documentElement.style.setProperty("--main", "white");
      
      
        }, []);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("https://market-cwgu.onrender.com/finishedorders/");
        const filtered = res.data.filter(order => {
          const date = order["تاريخ الطلب:"];
          if (date) {
            const [year, month] = date.split(" ")[0].split("-");
          const formattedMonthYear = `${parseInt(month)}/${year}`;
            return formattedMonthYear;
          }
          return false;
        });

        setOrders(filtered);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, [month,year]);

  return (
    <div style={styles.page}>
      <h2 className="add_text mt-5">الطلبات لشهر {month}/{year}</h2>

      {orders.length === 0 ? (
        <p>لا يوجد طلبات في هذا الشهر</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} style={styles.card}>
            <p><strong>الاسم:</strong> {order.customer_info?.name || "غير متوفر"}</p>
            <p><strong>رقم الهاتف:</strong> {order.customer_info?.phone_number || "غير متوفر"}</p>
            <p><strong>العنوان:</strong> {order.customer_info?.address || "غير متوفر"}</p>
            <p><strong>تاريخ الطلب:</strong> {order["تاريخ الطلب:"] || "غير متوفر"}</p>

            {order["مشتريات العناصر :"]?.length > 0 && (
              <>
                <strong>العناصر:</strong>
                <ul>{order["مشتريات العناصر :"].map((item, i) => <li key={i}>{item}</li>)}</ul>
              </>
            )}

            {order["المشتريات :"]?.length > 0 && (
              <>
                <strong>العناصر:</strong>
                <ul>{order["المشتريات :"].map((item, i) => <li key={i}>{item}</li>)}</ul>
              </>
            )}

            {order["مشتريات البكجات :"]?.length > 0 && (
              <>
                <strong>البكجات:</strong>
                <ul>{order["مشتريات البكجات :"].map((item, i) => <li key={i}>{item}</li>)}</ul>
              </>
            )}

            {order["السعر الكلي:"] != null && (
              <p><strong>السعر الكلي:</strong> {order["السعر الكلي:"]} ل.س</p>
            )}

            {order["إجمالي النقاط:"] != null && (
              <p><strong>إجمالي النقاط:</strong> {order["إجمالي النقاط:"]}</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  page: {
    padding: "40px 20px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    direction: "rtl",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 0 8px rgba(0,0,0,0.1)",
    padding: "20px",
    marginBottom: "20px",
    lineHeight: "1.7",
  },
};

export default MonthOrders;

