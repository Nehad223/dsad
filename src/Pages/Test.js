
import mobile from '../Assests/mobile.png';
import "../style/All.css";

const Test = () => {
  return (
         <div className="container Conformation_Page">
      <div className="row justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <img src={mobile} alt="Phone" className="image" />
        </div>
        <div className="col-12 text-center Card_Tag">
          <h1 className="Card_Title">Dental.kit أهلا بك في</h1>
          <p className="Card_Par">
            Lorem ipsum is simply dummy text of the printing <br />
            and typesetting industry. Lorem ipsum has been <br />
            the industry’s standard dummy text ever since
          </p>
          <button className="Card_Button" >
            متابعة
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default Test;

