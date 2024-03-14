import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DemoOrders from './Data/DemoOrders'; // Importing the demo orders data

const localizer = momentLocalizer(moment);

const OrderCalendar = () => {
  const events = DemoOrders.map(order => ({
    id: order.id,
    title: `Order #${order.id}`,
    start: new Date(order.deliveryDate),
    end: new Date(order.deliveryDate),
  }));

  return (
    <div className="container mx-auto p-4 m-2">
      <h1 className="pt-2 text-2xl items-center text-gray-700 font-bold">Orders Calendar</h1>
      <div className="bg-white p-4 rounded-lg shadow overflow-hidden">
        <div className="w-full md:w-3/4 mx-auto">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            eventPropGetter={() => ({
              className: 'bg-blue-500 rounded-full px-2 py-1 text-white',
            })}
            components={{
              event: EventComponent,
            }}
          />
        </div>
      </div>
    </div>
  );
};

const EventComponent = ({ event }) => (
  <div className="flex items-center">
    <div className="h-4 w-4 bg-blue-500 rounded-full mr-2"></div>
    <span>{event.title}</span>
  </div>
);

export default OrderCalendar;




// import React from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import DemoOrders from './Data/DemoOrders'; // Importing the demo orders data

// const localizer = momentLocalizer(moment);

// const OrderCalendar = () => {
//   const events = DemoOrders.map(order => ({
//     id: order.id,
//     title: `Order #${order.id}`,
//     start: new Date(order.deliveryDate),
//     end: new Date(order.deliveryDate),
//   }));

//   return (
//     <div className="container mx-auto p-4 m-2">
//       <h1 className="pt-2 text-2xl items-center text-gray-700 font-bold">Orders Calendar</h1>
//       <div className="bg-white p-4 rounded-lg shadow">
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 500 }}
//           eventPropGetter={() => ({
//             className: 'bg-blue-500 rounded-full px-2 py-1 text-white',
//           })}
//           components={{
//             event: EventComponent,
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// const EventComponent = ({ event }) => (
//   <div className="flex items-center">
//     <div className="h-4 w-4 bg-blue-500 rounded-full mr-2"></div>
//     <span>{event.title}</span>
//   </div>
// );

// export default OrderCalendar;
