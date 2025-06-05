import React, { useState, useEffect, useRef } from "react";
import Input from "./Input";
import Image_Input from "./Image_Input";
import Price_input from "./Price_input";
import Btn_Add from "./Btn_Add";
import axios from "axios";
import Selector_Cat from "./Selector_Cat";
import Btns_Del_Add from "./Btns_Del_Add";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Package_Body = ({ edit = false, olditem = {}, money = false }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    catg: "اختر الكاتيغوري",
  });
  const [img, setImg] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submittingRef = useRef(false);

  const startSubmitting = () => {
    submittingRef.current = true;
    setIsSubmitting(true);
  };
  const endSubmitting = () => {
    submittingRef.current = false;
    setIsSubmitting(false);
  };

  useEffect(() => {
    if (edit && olditem && Object.keys(olditem).length) {
      setForm({
        name: olditem.name || "",
        description: olditem.description || "",
        price: olditem.price || "",
        catg: olditem.category || "اختر الكاتيغوري",
      });
    }
  }, [edit, olditem]);


  const validate = () => {
    const { name, description, price } = form;
    if (!name.trim()  || !price || (!edit && !img)) {
      toast.error("يرجى تعبئة جميع الحقول أولاً");
      return false;
    }
    return true;
  };

  const buildFormData = () => {
    const data = new FormData();
    if (form.name !== olditem.name) data.append("name", form.name);
    if (form.description !== olditem.description)
      data.append("description", form.description);
      const numericPrice = Number(form.price);
  if (numericPrice !== Number(olditem.price)) {
    data.append("price", numericPrice);
  }

    if (money && form.catg !== olditem.category) data.append("category", form.catg);
    if (img) data.append("photo", img);
    return data;
  };

  const handleSubmit = async () => {
    if (submittingRef.current) return; 
    if (!validate()) return;

    startSubmitting();

    const formData = buildFormData();

    const url = money
      ? edit
        ? `https://market-cwgu.onrender.com/edititem/${olditem.id}/`
        : "https://market-cwgu.onrender.com/newitem/"
      : edit
      ? `https://market-cwgu.onrender.com/editpackage/${olditem.id}/`
      : "https://market-cwgu.onrender.com/newpackage/";

    const method = edit ? "patch" : "post";

    try {
      await axios({
        method,
        url,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("تمت العملية بنجاح", {
        onClose: () => navigate(-1),
        autoClose: 1500,
      });

      if (!edit) resetForm();
    } catch (err) {
      console.error(err);
      toast.error("حدث خطأ أثناء الإرسال");
    } finally {
      endSubmitting();
    }
  };


  const handleDelete = async () => {
    if (submittingRef.current || !olditem.id) return;

    startSubmitting();
    const url = money
      ? `https://market-cwgu.onrender.com/deleteitem/${olditem.id}/`
      : `https://market-cwgu.onrender.com/deletepackage/${olditem.id}/`;
    try {
      await axios.delete(url);
      toast.success("تم الحذف بنجاح", {
        onClose: () => navigate(-1),
        autoClose: 1500,
      });
      resetForm();
    } catch (err) {
      console.error(err);
      toast.error("حدث خطأ أثناء الحذف");
    } finally {
      endSubmitting();
    }
  };


  const resetForm = () => {
    setForm({ name: "", description: "", price: "", catg: "اختر الكاتيغوري" });
    setImg(null);
  };
  return (
    <div className="mt-5">
      <ToastContainer rtl position="top-center" autoClose={3000} />

      <Input
        value="الاسم"
        placeholder="ادخل الاسم"
        val_in={form.name}
        setValue={(v) => setForm({ ...form, name: v })}
      />
      <Input
        value="وصف"
        placeholder="ادخل الوصف"
        val_in={form.description}
        setValue={(v) => setForm({ ...form, description: v })}
      />
      {money && (
        <Selector_Cat value={form.catg} setValue={(v) => setForm({ ...form, catg: v })} />
      )}
      <Price_input
        value="السعر"
        placeholder="ادخل السعر"
        val_in={form.price}
        setValue={(v) => setForm({ ...form, price: v })}
      />
      <Image_Input
        value="الصورة"
        placeholder="ادخل الصورة"
        val_in={img}
        setValue={setImg}
        oldImage={edit && olditem.photo}
      />

      {!edit ? (
        <Btn_Add onClick={handleSubmit} disabled={isSubmitting} />
      ) : (
        <Btns_Del_Add
          onClick={handleSubmit}
          deleteClick={handleDelete}
          disabled={isSubmitting}
        />
      )}
    </div>
  );
};

export default Package_Body;