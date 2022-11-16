import React, {useState} from 'react';
import Modal from "../Modal/Modal";

const Player = () => {
  const [showModal,setShowModal] = useState(false);


  return (
    <div>
      <div className="card-group">
        <div className="col-sm-4">
          <div className="mt-5">
         <div className="card" style={{width: "18rem"}}>
           <img src="https://cdn.vox-cdn.com/thumbor/8euwZ9X8Mp64tTAbF3AxZdb_NG4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22657276/1322729766.jpg" className="card-img-top"/>
             <div className="card-body">
               <h5 className="card-title mb-3 mt-3">Leonel Messi</h5>
               <button className= "btn btn-primary" onClick={() => setShowModal(true)}>Click here!</button>
             </div>
           </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="mt-5">
            <div className="card" style={{width: "18rem"}}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjX626EzPvoHnprdlvI_3-bG6tvo_y0Ln6A&usqp=CAU " className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title mb-3 mt-3">Paulo Dybala</h5>
                <button className="btn btn-primary" >Click here!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} title='LM10' button={<button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>}>
        <div className="modal-body">
          GOAT
        </div>
      </Modal>
    </div>
  );

};

export default Player;