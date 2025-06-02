import React, { useState,useEffect } from 'react';
import Input from './Input';
import Btn_Add from './Btn_Add';
import Selector from './Selector';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate,useParams } from 'react-router-dom';
import Btns_Del_Add from './Btns_Del_Add';

const Category_Body = ({ edit = false, olditem = {} }) => {
  const parmas=useParams();
  const catgid=parmas.catgid;

  const doctorOrstudent=parmas.doctorOrstudent;
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [category_type, setType] = useState('') 

  const navigate=useNavigate();
  useEffect(() => {
    if (edit && olditem) {
      setCategory(olditem.category || '');
      setDescription(olditem.description || '');
      setType(olditem.category_type || 'اختر الفئة');
    }
  }, [edit, olditem]);
const handleSubmit = async () => {
  if (!category.trim() || !description.trim() || !category_type.trim()) {
    alert('يرجى إدخال اسم ووصف الكاتيغوري واختيار الفئة');
    return;
  }

  const newCategory = {
    name: category,
    description: description,
    category_type: category_type
  };

  try {
    if (edit && olditem?.id) {
   
      await axios.put(
        `https://market-cwgu.onrender.com/updatecategory/${olditem.id}/`,
        newCategory
      );
                toast.success("تمت العملية بنجاح");
      
    } else {
     
      await axios.post(
        "https://market-cwgu.onrender.com/newcategory/",
        newCategory
      );
               toast.success("تمت العملية بنجاح");
     
    }

    setCategory('');
    setDescription('');
    setType('اختر الفئة');

    setTimeout(() => {
      navigate('/admin/home');
    }, 1500);
  } catch (error) {
    console.error(error);
    toast.error("حدث خطأ أثناء الإرسال");
  }
};

  const handleDelete = async () => {
  if (!olditem.id) return;

  try {
    const response = await axios.delete(
      `https://market-cwgu.onrender.com/deletecategory/${olditem.id}/`
    );
    console.log('Deleted:', response.data);

    setDescription('');
    setCategory('');
    setType('اختر الفئة')
  } catch (error) {
    console.error('Error deleting item:', error);
  }
};

  return (
    <div className='Category_Body mt-5'>
            <ToastContainer rtl position="top-center" autoClose={3000} />
      <Input
        value={"اسم الكاتيغوري"}
        TwoWord={true}
        placeholder="ادخل الاسم"
        setValue={setCategory}
       val_in={category}

      />
      <Input
        value={"وصف"}
        placeholder="ادخل الوصف"
        setValue={setDescription}
        val_in={description}

      />
      <Selector value={category_type} setValue={setType} />
     {!edit?<Btn_Add onClick={handleSubmit} />:<Btns_Del_Add onClick={handleSubmit} deleteClick={handleDelete} />}
      
    </div>
  )
}

export default Category_Body
