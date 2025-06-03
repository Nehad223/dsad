import React, { useState, useEffect } from 'react';
import Input from './Input';
import Image_Input from './Image_Input';
import Price_input from './Price_input';
import Btn_Add from './Btn_Add';
import axios from 'axios';
import Selector_Cat from './Selector_Cat';
import Btns_Del_Add from './Btns_Del_Add';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Package_Body = (props) => {
  const navigate = useNavigate();
  const { edit = false, olditem = {}, money = false } = props;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState(null);
  const [catg, setCatg] = useState('اختر الكاتيغوري');

  useEffect(() => {
    if (edit && olditem && Object.keys(olditem).length > 0) {
      setName(olditem.name || '');
      setDescription(olditem.description || '');
      setPrice(olditem.price || '');
      setCatg(olditem.category || 'اختر الكاتيغوري');
    }
  }, [edit, olditem]);



 const sendPackage = async () => {
if (!edit) {
  if (!name.trim() || !description.trim() || !price.trim() || !img.trim()) {
    alert('يرجى إدخال اسم ووصف الكاتيغوري واختيار الفئة');
    return;
  }
}

  const formData = new FormData();

  if (name !== olditem.name) formData.append('name', name);
  if (description !== olditem.description) formData.append('description', description);
  if (price !== olditem.price) formData.append('price', price);
  if (img) formData.append('photo', img); // الصورة دائماً لو تم تعديلها

  const url = edit
    ? `https://market-cwgu.onrender.com/editpackage/${olditem.id}/`
    : 'https://market-cwgu.onrender.com/newpackage/';
  const method = edit ? 'patch' : 'post';

  try {
    await axios({
      method,
      url,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    toast.success("تمت العملية بنجاح", {
      onClose: () => navigate('/admin/home'),
      autoClose: 1500,
    });
  } catch (error) {
    console.error(error);
    toast.error("حدث خطأ أثناء الإرسال");
  }
};

const senMoney = async () => {
if (!edit) {
  if (!name.trim() || !description.trim() || !price.trim() || !img.trim() || !catg.trim()) {
    alert('يرجى إدخال اسم ووصف الكاتيغوري واختيار الفئة');
    return;
  }
}

  const formData = new FormData();

  if (name !== olditem.name) formData.append('name', name);
  if (description !== olditem.description) formData.append('description', description);
  if (price !== olditem.price) formData.append('price', price);
  if (catg !== olditem.category) formData.append('category', catg);
  if (img) formData.append('photo', img);

  const url = edit
    ? `https://market-cwgu.onrender.com/edititem/${olditem.id}/`
    : 'https://market-cwgu.onrender.com/newitem/';
  const method = edit ? 'patch' : 'post';

  try {
    await axios({
      method,
      url,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    toast.success("تمت العملية بنجاح", {
      onClose: () => navigate('/admin/home'),
      autoClose: 1500,
    });
  } catch (error) {
    console.error(error);
    toast.error("حدث خطأ أثناء الإرسال");
  }
};


  const handleSubmit = async () => {


    if (money) {
      await senMoney();
    } else {
      await sendPackage();
    }

    if (!edit) {
      setName('');
      setDescription('');
      setPrice('');
      setImg(null);
      setCatg('اختر الكاتيغوري');
    }
  };

  const handleDelete = async () => {
    if (!olditem.id) return;

    const url = money
      ? `https://market-cwgu.onrender.com/deleteitem/${olditem.id}/`
      : `https://market-cwgu.onrender.com/deletepackage/${olditem.id}/`;

    try {
      await axios.delete(url);

      // تفريغ الحقول بعد الحذف
      setName('');
      setDescription('');
      setPrice('');
      setImg(null);
      setCatg('اختر الكاتيغوري');
      toast.success("تمت العملية بنجاح", {
  onClose: () => navigate('/admin/home'),
  autoClose: 1500,
});

    } catch (error) {
      console.error('Error deleting item:', error);
      toast.error("حدث خطأ أثناء الحذف");
    }
  };

  return (
    <div className='mt-1'>
      <ToastContainer rtl position="top-center" autoClose={3000} />

      <Input
        value="الاسم"
        val_in={name}
        placeholder="ادخل الاسم"
        setValue={setName}
      />
      <Input
        value="وصف"
        placeholder="ادخل الوصف"
        setValue={setDescription}
        val_in={description}
      />
      {money ? (
        <Selector_Cat value={catg} setValue={setCatg} />
      ) : (
        <div></div>
      )}
      <Price_input
        value="السعر"
        placeholder="ادخل السعر"
        setValue={setPrice}
        val_in={price}
      />
      <Image_Input
        value="الصورة"
        placeholder="ادخل الصورة"
        setValue={setImg}
        val_in={img}
        oldImage={edit && olditem.photo}
      />
      {!edit ? (
        <Btn_Add onClick={handleSubmit} />
      ) : (
        <Btns_Del_Add onClick={handleSubmit} deleteClick={handleDelete} />
      )}
    </div>
  );
};

export default Package_Body;
