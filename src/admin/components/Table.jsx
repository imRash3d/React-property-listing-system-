import React from 'react';
const Table = props => {
    console.log(props)
  return (
    <table className="table table-striped">
      <thead>
       <tr>
       <th>Img</th>
        <th>Id</th>
        <th>Name</th>
        <th>Listing </th>
       </tr>
      </thead>
      <tbody>
          {props.places.map(item=><tr key={item.id} >
          <td><img src={item.bg_img} alt={item.name}/></td>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.listing_count}</td>
          </tr>)}
      
      </tbody>
    </table>
  );
};

export default Table;
