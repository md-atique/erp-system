import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  // Mock data for demonstration
  const totalProducts = 150;
  const totalOrders = 500;
  
  const recentOrders = [
    { id: 'ORD123', customerName: 'John Doe', orderDate: '2024-03-10', status: 'Shipped', total: 250 },
    { id: 'ORD124', customerName: 'Jane Smith', orderDate: '2024-03-09', status: 'Pending', total: 150 },
    { id: 'ORD125', customerName: 'Alice Johnson', orderDate: '2024-03-08', status: 'Delivered', total: 300 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="pt-2 text-2xl items-center text-gray-700 font-bold">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Products</h2>
              <p className="text-gray-600">Total Number of Products: <span className='text-gray-700 font-bold'>{totalProducts}</span></p>
            </div>
            <Link to="/products" className="text-blue-500 pb-12 hover:underline">
              <FontAwesomeIcon icon={faBox} className="text-xl" />
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Orders</h2>
              <p className="text-gray-600">Total Number of Orders:  <span className='text-gray-700 font-bold'>{totalOrders}</span></p>
            </div>
            <Link to="/orders" className="text-blue-500 pb-10 hover:underline">
              <FontAwesomeIcon icon={faClipboardList} className="text-xl" />
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Order ID</th>
                  <th className="py-2">Customer Name</th>
                  <th className="py-2">Order Date</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order.id} className="border-b">
                    <td className="py-2">{order.id}</td>
                    <td className="py-2">{order.customerName}</td>
                    <td className="py-2">{order.orderDate}</td>
                    <td className="py-2">
                      <span className={`inline-block px-2 py-1 rounded-lg ${
                        order.status === 'Delivered' ? 'bg-green-500 text-white' :
                        order.status === 'Pending' ? 'bg-yellow-500 text-white' :
                        'bg-blue-500 text-white'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-2">${order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;




