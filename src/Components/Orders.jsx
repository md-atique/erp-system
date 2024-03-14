import React from 'react';

export default function Orders() {
    const orders = [
        { id: 'ORD123', customerName: 'John Doe', orderDate: '2024-03-10', status: 'Shipped', total: 250 },
        { id: 'ORD124', customerName: 'Jane Smith', orderDate: '2024-03-09', status: 'Pending', total: 150 },
        { id: 'ORD125', customerName: 'Alice Johnson', orderDate: '2024-03-08', status: 'Delivered', total: 300 },
        // Add more demo orders as needed
    ];

    return (
        <div className='m-4'>

            <div className="container mx-auto p-4">
                <h1 className='pt-2 text-2xl items-center text-gray-700 font-bold'>Orders</h1>
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Date</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td className="py-4 px-6">{order.id}</td>
                                    <td className="py-4 px-6">{order.customerName}</td>
                                    <td className="py-4 px-6">{order.orderDate}</td>
                                    <td className="py-4 px-6">
                                        <span className={`inline-block px-2 py-1 rounded-lg ${
                                            order.status === 'Delivered' ? 'bg-green-500 text-white' :
                                            order.status === 'Pending' ? 'bg-yellow-500 text-white' :
                                            'bg-blue-500 text-white'
                                        }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">${order.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}




