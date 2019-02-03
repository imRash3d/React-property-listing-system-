import React from "react";
const TopHeader = (props) => {
    return (    
       <div className="container">
           <div className="row">
               <div className="col-md-12">
                <div className="form-group">
                <input type="text" className="form-control" placeholder="search"/>
                </div>
               </div>
           </div>
       </div>
   );
}
 
export default TopHeader;