import React, { useState, useEffect } from 'react';
import Input from './Input';
import Btn_Add from './Btn_Add';
import Selector from './Selector';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Btns_Del_Add from './Btns_Del_Add';

const Category_Body = ({ edit = false, olditem = {} }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [category_type, setType] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (edit && olditem) {
      setCategory(olditem.name || '');
      setDescription(olditem.description || '');
      setType(olditem.category_type || 'اختر الفئة');
    }
  }, [edit, olditem]);

  const handleSubmit = async () => {
      if (isSubmitting) return; 
  setIsSubmitting(true);
if (!edit) {
  if (!category.trim()  || !category_type.trim()) {
    alert('يرجى إدخال اسم ووصف الكاتيغوري واختيار الفئة');
    return;
  }
}


    const updatedFields = {};
    if (category !== olditem.name) updatedFields.name = category;
    if (description !== olditem.description) updatedFields.description = description;
    if (category_type !== olditem.category_type) updatedFields.category_type = category_type;

    if (edit && Object.keys(updatedFields).length === 0) {
      toast.info("لم يتم تعديل أي شيء");
      return;
    }

    try {
      if (edit && olditem?.id) {
        await axios.patch(
          `https://market-cwgu.onrender.com/editcategory/${olditem.id}/`,
          updatedFields
        );
        toast.success("تم التعديل بنجاح");
      } else {
        const newCategory = {
          name: category,
          description: description,
          category_type: category_type
        };

        await axios.post(
          "https://market-cwgu.onrender.com/newcategory/",
          newCategory
        );
        toast.success("تمت الإضافة بنجاح");
      }

      setCategory('');
      setDescription('');
      setType('اختر الفئة');

      setTimeout(() => {
        navigate(-1);
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error("حدث خطأ أثناء الإرسال");
    }
  };

  const handleDelete = async () => {
    if (!olditem.id) return;

    try {
      await axios.delete(
        `https://market-cwgu.onrender.com/deletecategory/${olditem.id}/`
      );
      toast.success("تم الحذف بنجاح");

      setCategory('');
      setDescription('');
      setType('اختر الفئة');
    } catch (error) {
      console.error('Error deleting item:', error);
      toast.error("فشل الحذف");
    }
     finally {
    setIsSubmitting(false); 
  }
  };

  return (
    <div className='Category_Body mt-5'>
      <ToastContainer rtl position="top-center" autoClose={3000} />
      <Input
        value="اسم الكاتيغوري"
        TwoWord={true}
        placeholder="ادخل الاسم"
        setValue={setCategory}
        val_in={category}
      />
      <Input
        value="وصف"
        placeholder="ادخل الوصف"
        setValue={setDescription}
        val_in={description}
      />
      <Selector value={category_type} setValue={setType} />
      {!edit
        ? <Btn_Add onClick={handleSubmit} disabled={isSubmitting} />
        : <Btns_Del_Add onClick={handleSubmit} deleteClick={handleDelete} />}
    </div>
  );
};

export default Category_Body;
