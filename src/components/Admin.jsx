import '../index.css'

export default function Admin() {
  return (
    <>
      <div className="header">
        <h1>Marigold Admin</h1>
      </div>
      <div className="admin_page">
        <div className="Navigation">
          <div className="options">
            <h4>Dashboard</h4>
            <h4>Products</h4>
            <h4>Orders</h4>
            <h4>Admins</h4>
          </div>
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
                <tr>
                  <td>John Doe</td>
                  <td>Block U</td>
                  <td>08123456789</td>
                  <td>3 Jollof Rice, 1 Egg, 1 Pepsi</td>
                  <td>1 January 1970</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
