/* eslint-disable no-unused-vars */
import { useState } from 'react'
import '../index.css'
import order_data from "../orders.json"

export default function Admin() {
  const [contacts, setContacts] = useState(order_data);




  return (
    <>
      <div className="header">
        <h1>Marrigold Admin</h1>
      </div>
      <div className="admin_page">
        <div className="Navigation">
          {/* <div className="options">
            <h4>Dashboard</h4>
            <h4>Products</h4>
            <h4>Orders</h4>
            <h4>Admins</h4>
          </div> */}
        </div>
        <div className="main_panel">
          <h1>Orders</h1>
          <div className="app-container">

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Order</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  // eslint-disable-next-line react/jsx-key
                  <tr>
                    <td>{contact.name}</td>
                    <td>{contact.location}</td>
                    <td>{contact.number}</td>
                    <td>{contact.order}</td>
                    <td>{contact.date}</td>
                  </tr>
                ))}

              </tbody>
            </table>


          </div>
        </div>
      </div>
    </>
  )
}
