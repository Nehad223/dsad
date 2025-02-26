import React from 'react';
import './All.css';
import { Link } from 'react-router-dom';

const Conformation_Page = () => {
  return (
    <div className="container Conformation_Page">
      <div className="row justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <div className="card">
            <div className="cutout"></div>
          </div>
        </div>
        <div className="col-12 text-center Card_Tag">
          <h1 className="Card_Title">Dental.kit أهلا بك في</h1>
          <p className="Card_Par">
            Lorem ipsum is simply dummy text of the printing <br />
            and typesetting industry. Lorem ipsum has been <br />
            the industry’s standard dummy text ever since
          </p> 
          <Link to="/dsad/home"><button className="Card_Button">متابعة</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Conformation_Page;
