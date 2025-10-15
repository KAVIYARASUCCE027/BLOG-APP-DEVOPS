import { Search, Bell, ChevronLeft, ChevronRight, Plus, Clock, Video, MapPin } from 'lucide-react';
import { useState } from 'react';

const CalendarPage = () => {
  const [currentDate] = useState(new Date(2025, 9, 15));

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const events = [
    {
      id: 1,
      title: 'Morning Meditation',
      time: '8:00 AM - 8:30 AM',
      type: 'meditation',
      color: 'blue',
      date: 15,
    },
    {
      id: 2,
      title: 'Therapy Session with Dr. Johnson',
      time: '2:00 PM - 3:00 PM',
      type: 'therapy',
      color: 'green',
      date: 15,
      location: 'Online',
      icon: Video,
    },
    {
      id: 3,
      title: 'Support Group Meeting',
      time: '6:00 PM - 7:00 PM',
      type: 'meeting',
      color: 'purple',
      date: 15,
      location: 'Community Center',
      icon: MapPin,
    },
    {
      id: 4,
      title: 'Evening Mindfulness',
      time: '8:00 PM - 8:30 PM',
      type: 'meditation',
      color: 'blue',
      date: 15,
    },
  ];

  const upcomingEvents = [
    {
      title: 'Psychiatrist Appointment',
      date: 'Oct 17, 2025',
      time: '10:00 AM',
      type: 'appointment',
      color: 'red',
    },
    {
      title: 'Yoga Class',
      date: 'Oct 18, 2025',
      time: '7:00 AM',
      type: 'activity',
      color: 'green',
    },
    {
      title: 'Weekly Check-in',
      date: 'Oct 20, 2025',
      time: '3:00 PM',
      type: 'meeting',
      color: 'purple',
    },
  ];

  const renderCalendarDays = () => {
    const days = [];
    const totalCells = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;

    for (let i = 0; i < totalCells; i++) {
      const dayNumber = i - firstDayOfMonth + 1;
      const isCurrentMonth = dayNumber > 0 && dayNumber <= daysInMonth;
      const isToday = dayNumber === currentDate.getDate();
      const hasEvents = events.some((event) => event.date === dayNumber);

      days.push(
        <div
          key={i}
          className={`aspect-square p-2 border border-gray-100 ${
            isCurrentMonth ? 'bg-white' : 'bg-gray-50'
          } ${isToday ? 'bg-blue-50 border-blue-200' : ''} hover:bg-gray-50 transition-colors cursor-pointer`}
        >
          {isCurrentMonth && (
            <>
              <div
                className={`text-sm font-medium ${
                  isToday ? 'text-blue-600' : 'text-gray-900'
                } mb-1`}
              >
                {dayNumber}
              </div>
              {hasEvents && (
                <div className="flex gap-1">
                  {events
                    .filter((event) => event.date === dayNumber)
                    .slice(0, 3)
                    .map((event) => (
                      <div
                        key={event.id}
                        className={`w-1.5 h-1.5 rounded-full bg-${event.color}-500`}
                      ></div>
                    ))}
                </div>
              )}
            </>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
            <p className="text-gray-600 mt-1">Manage your appointments and activities</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Search size={20} className="text-gray-600" />
            </button>
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              JD
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                  </h2>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <ChevronLeft size={20} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <ChevronRight size={20} className="text-gray-600" />
                    </button>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  <Plus size={20} />
                  Add Event
                </button>
              </div>

              <div className="grid grid-cols-7 gap-0 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-0 border border-gray-200 rounded-lg overflow-hidden">
                {renderCalendarDays()}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Today's Schedule - {currentDate.toLocaleDateString('default', { month: 'short', day: 'numeric' })}
              </h3>
              <div className="space-y-3">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-gray-100"
                  >
                    <div className={`w-1 h-full bg-${event.color}-500 rounded-full`}></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{event.time}</span>
                        </div>
                        {event.location && event.icon && (
                          <div className="flex items-center gap-1">
                            <event.icon size={14} />
                            <span>{event.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <button className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      Join
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-gray-100"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 bg-${event.color}-500 rounded-full mt-2`}></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                        <p className="text-sm text-gray-600">{event.date}</p>
                        <p className="text-sm text-gray-500">{event.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Quick Add</h3>
              <p className="text-blue-100 mb-4 text-sm">Schedule a new event quickly</p>
              <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Create Event
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Event Types</h3>
              <div className="space-y-2">
                {[
                  { label: 'Therapy', color: 'green', count: 12 },
                  { label: 'Meditation', color: 'blue', count: 24 },
                  { label: 'Support Group', color: 'purple', count: 8 },
                  { label: 'Exercise', color: 'red', count: 16 },
                ].map((type, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 bg-${type.color}-500 rounded-full`}></div>
                      <span className="font-medium text-gray-900">{type.label}</span>
                    </div>
                    <span className="text-sm text-gray-500">{type.count} events</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
