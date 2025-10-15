import { Search, Bell, TrendingUp, TrendingDown, Activity, Heart, Brain, Moon } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Mental Health Score',
      value: '85',
      change: '+5%',
      trend: 'up',
      icon: Brain,
      color: 'blue',
    },
    {
      title: 'Stress Level',
      value: 'Low',
      change: '-12%',
      trend: 'down',
      icon: Activity,
      color: 'green',
    },
    {
      title: 'Mood Rating',
      value: '8.5',
      change: '+2.3',
      trend: 'up',
      icon: Heart,
      color: 'pink',
    },
    {
      title: 'Sleep Quality',
      value: '7.8',
      change: '+0.5',
      trend: 'up',
      icon: Moon,
      color: 'purple',
    },
  ];

  const recentActivities = [
    { title: 'Meditation Session', time: '2 hours ago', type: 'completed' },
    { title: 'Mood Check-in', time: '5 hours ago', type: 'completed' },
    { title: 'Exercise: Morning Walk', time: '1 day ago', type: 'completed' },
    { title: 'Journal Entry', time: '2 days ago', type: 'completed' },
  ];

  const upcomingTasks = [
    { title: 'Evening Meditation', time: 'Today, 7:00 PM' },
    { title: 'Therapy Session', time: 'Tomorrow, 3:00 PM' },
    { title: 'Mindfulness Practice', time: 'Wed, 9:00 AM' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's your mental health overview</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-full bg-${stat.color}-100 flex items-center justify-center`}>
                  <stat.icon className={`text-${stat.color}-600`} size={24} />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  {stat.change}
                </div>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Weekly Progress</h2>
            <div className="space-y-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                <div key={day} className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-600 w-12">{day}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-end px-3"
                      style={{ width: `${Math.random() * 40 + 60}%` }}
                    >
                      <span className="text-white text-xs font-medium">
                        {Math.floor(Math.random() * 40 + 60)}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activities</h2>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{activity.title}</p>
                      <p className="text-gray-500 text-xs">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming</h2>
              <div className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{task.title}</p>
                      <p className="text-gray-500 text-xs">{task.time}</p>
                    </div>
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

export default Dashboard;
