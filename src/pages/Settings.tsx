import { Search, Bell, User, Lock, BellRing, Globe, Palette, HelpCircle, Shield, CreditCard } from 'lucide-react';
import { useState } from 'react';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    weekly: true,
  });

  const [privacy, setPrivacy] = useState({
    profile: 'public',
    activity: 'friends',
    location: false,
  });

  const settingSections = [
    {
      title: 'Account',
      icon: User,
      items: [
        { label: 'Profile Information', description: 'Update your personal details' },
        { label: 'Email Address', description: 'Change your email address' },
        { label: 'Phone Number', description: 'Update your contact number' },
      ],
    },
    {
      title: 'Security',
      icon: Lock,
      items: [
        { label: 'Password', description: 'Change your password' },
        { label: 'Two-Factor Authentication', description: 'Add an extra layer of security' },
        { label: 'Active Sessions', description: 'Manage your active sessions' },
      ],
    },
    {
      title: 'Notifications',
      icon: BellRing,
      items: [
        { label: 'Email Notifications', description: 'Receive updates via email', toggle: true, value: notifications.email },
        { label: 'Push Notifications', description: 'Get real-time alerts', toggle: true, value: notifications.push },
        { label: 'SMS Notifications', description: 'Receive text messages', toggle: true, value: notifications.sms },
        { label: 'Weekly Summary', description: 'Get weekly progress reports', toggle: true, value: notifications.weekly },
      ],
    },
    {
      title: 'Privacy',
      icon: Shield,
      items: [
        { label: 'Profile Visibility', description: 'Control who can see your profile' },
        { label: 'Activity Status', description: 'Show when you are active' },
        { label: 'Data Sharing', description: 'Manage data sharing preferences' },
      ],
    },
  ];

  const handleToggle = (section: string, item: string) => {
    if (section === 'Notifications') {
      setNotifications((prev) => ({
        ...prev,
        [item.toLowerCase().replace(' notifications', '').replace(' summary', '')]: !prev[item.toLowerCase().replace(' notifications', '').replace(' summary', '') as keyof typeof prev],
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-1">Manage your account and preferences</p>
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

      <div className="max-w-5xl mx-auto px-8 py-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-semibold">
              JD
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
              <p className="text-gray-600 mb-3">john.doe@example.com</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {settingSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <section.icon className="text-blue-600" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="p-6 hover:bg-gray-50 transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.label}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    {item.toggle ? (
                      <button
                        onClick={() => handleToggle(section.title, item.label)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          item.value ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            item.value ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    ) : (
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        Manage
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Palette className="text-blue-600" size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Appearance</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-3 gap-4">
                <button className="p-4 border-2 border-blue-600 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <div className="w-full h-20 bg-white rounded mb-3 shadow-sm"></div>
                  <p className="font-medium text-gray-900">Light</p>
                </button>
                <button className="p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-full h-20 bg-gray-900 rounded mb-3"></div>
                  <p className="font-medium text-gray-900">Dark</p>
                </button>
                <button className="p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-full h-20 bg-gradient-to-r from-white to-gray-900 rounded mb-3"></div>
                  <p className="font-medium text-gray-900">Auto</p>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Danger Zone</h3>
            <div className="space-y-3">
              <button className="w-full p-4 border-2 border-red-200 rounded-lg text-left hover:bg-red-50 transition-colors">
                <h4 className="font-semibold text-red-600 mb-1">Delete Account</h4>
                <p className="text-sm text-gray-600">Permanently delete your account and all data</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
