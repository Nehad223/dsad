import React, { useState,useEffect } from 'react';
import Input from './Input';
import Btn_Add from './Btn_Add';
import Selector from './Selector';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate,useParams } from 'react-router-dom';
import Btns_Del_Add from './Btns_Del_Add';

const Category_Body = () => {
  const parmas=useParams();
  const catgid=parmas.catgid;
  const doctorOrstudent=parmas.doctorOrstudent;
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [category_type, setType] = useState('') 

  const navigate=useNavigate();
  useEffect(() => {


        
        axios.get(`https://market-cwgu.onrender.com/category/${catgid}/${doctorOrstudent}`)
            .then((response) => {
                console.log(response.data);
        
            })
            .catch((error) => {
                console.error("Error fetching data:", error);

            })
    }, []);
  const handleSubmit =async () => {
    if (!category.trim() || !description.trim() || !category_type.trim()) {
      alert('يرجى إدخال اسم ووصف الكاتيغوري واختيار الفئة')
      return
    }

    const newCategory = {
      name: category,
      description: description,
      category_type: category_type
    }
  

    try{
      await axios.post("https://market-cwgu.onrender.com/newcategory/",newCategory);
     toast.success("تم ارسال الطلب بنجاح");
                   setTimeout(() => {
        navigate('/admin/add');
      }, 1500);
    }
    catch(error){console.log(error)}
    setCategory('')
    setDescription('')
    setType('اختر الفئة')
  }

  return (
    <div className='Category_Body mt-5'>
            <ToastContainer rtl position="top-center" autoClose={3000} />
      <Input
        value={"اسم الكاتيغوري"}
        TwoWord={true}
        placeholder="ادخل الاسم"
        setValue={setCategory}
      />
      <Input
        value={"وصف"}
        placeholder="ادخل الوصف"
        setValue={setDescription}
      />
      <Selector value={category_type} setValue={setType} />
     <Btns_Del_Add/>
    </div>
  )
}

export default Category_Body
