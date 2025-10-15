import { Search, Bell, Send, Paperclip, Smile, MoreVertical, Phone, Video } from 'lucide-react';
import { useState } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');

  const contacts = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Therapist',
      lastMessage: 'How are you feeling today?',
      time: '2m ago',
      unread: 2,
      online: true,
      avatar: 'SJ',
    },
    {
      name: 'Support Group',
      role: 'Community',
      lastMessage: 'Welcome to our weekly check-in!',
      time: '1h ago',
      unread: 5,
      online: true,
      avatar: 'SG',
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Psychiatrist',
      lastMessage: 'Your prescription is ready',
      time: '3h ago',
      unread: 0,
      online: false,
      avatar: 'MC',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Counselor',
      lastMessage: 'Great progress this week!',
      time: '1d ago',
      unread: 0,
      online: false,
      avatar: 'ER',
    },
  ];

  const messages = [
    {
      sender: 'Dr. Sarah Johnson',
      content: 'Hello! How are you feeling today?',
      time: '10:30 AM',
      isSent: false,
    },
    {
      sender: 'You',
      content: "Hi Dr. Johnson! I'm feeling much better, thank you.",
      time: '10:32 AM',
      isSent: true,
    },
    {
      sender: 'Dr. Sarah Johnson',
      content: "That's wonderful to hear! Have you been practicing the breathing exercises we discussed?",
      time: '10:33 AM',
      isSent: false,
    },
    {
      sender: 'You',
      content: 'Yes, I have been doing them every morning. They really help me start the day calmly.',
      time: '10:35 AM',
      isSent: true,
    },
    {
      sender: 'Dr. Sarah Johnson',
      content: "Excellent! Keep up the good work. Remember, consistency is key. Let's schedule our next session.",
      time: '10:36 AM',
      isSent: false,
    },
  ];

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Chat</h1>
            <p className="text-gray-600 mt-1">Connect with your support network</p>
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

      <div className="flex flex-1 overflow-hidden">
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${
                  index === 0 ? 'bg-blue-50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {contact.avatar}
                    </div>
                    {contact.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 truncate">{contact.name}</h3>
                      <span className="text-xs text-gray-500">{contact.time}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{contact.role}</p>
                    <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                  </div>
                  {contact.unread > 0 && (
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {contact.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col bg-gray-50">
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    SJ
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Dr. Sarah Johnson</h3>
                  <p className="text-sm text-green-600">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Phone size={20} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Video size={20} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreVertical size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isSent ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-md ${
                    msg.isSent
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-900 border border-gray-200'
                  } rounded-2xl px-4 py-3`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.isSent ? 'text-blue-200' : 'text-gray-500'
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Paperclip size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Smile size={20} className="text-gray-600" />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                <Send size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
