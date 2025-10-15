import { useState } from 'react';
import { LayoutDashboard, GraduationCap, MessageCircle, Settings, Calendar, FileText, LogOut, User } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Education from './pages/Education';
import Chat from './pages/Chat';
import SettingsPage from './pages/Settings';
import CalendarPage from './pages/Calendar';
import Blog from './pages/Blog';

type Page = 'dashboard' | 'education' | 'chat' | 'settings' | 'calendar' | 'blog';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('blog');

  const menuItems = [
    { id: 'dashboard' as Page, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'calendar' as Page, label: 'Calendar', icon: Calendar },
    { id: 'education' as Page, label: 'Education', icon: GraduationCap },
    { id: 'blog' as Page, label: 'Blog', icon: FileText },
    { id: 'chat' as Page, label: 'Chat', icon: MessageCircle },
    { id: 'settings' as Page, label: 'Settings', icon: Settings },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'education':
        return <Education />;
      case 'chat':
        return <Chat />;
      case 'settings':
        return <SettingsPage />;
      case 'calendar':
        return <CalendarPage />;
      case 'blog':
        return <Blog />;
      default:
        return <Blog />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-blue-600">Blogger</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="mb-6">
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-3 px-3">General</p>
            <div className="space-y-1">
              {menuItems.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-3 px-3">Tools</p>
            <div className="space-y-1">
              {menuItems.slice(4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Log out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
