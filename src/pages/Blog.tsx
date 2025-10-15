import { Search, Bell, ChevronRight, Clock, Filter } from 'lucide-react';

const Blog = () => {
  const categories = [
    { name: 'Sleep', articles: 25, image: '🌙' },
    { name: 'Stress', articles: 18, image: '😰' },
    { name: 'Mindfulness', articles: 28, image: '🧘' },
  ];

  const articles = [
    {
      id: 1,
      title: '5 Simple Keys to Helping Your Partner',
      category: 'Relationships',
      readTime: '8 mins read',
      excerpt: 'Your relationship partner needs to feel understood. Being a better listener is the sec...',
      author: 'Dr. Ben Affleck',
      authorRole: 'Psychologist',
      image: 'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      title: 'Why We Feel Post-Pandemic Burnout and Exhaustion',
      category: 'Burnout',
      readTime: '12 mins read',
      excerpt: 'De-Stre. Take a walk. Look up at trees. Soak in the silence. The bandwidth is broa...',
      author: 'Dr. Nick Willard',
      authorRole: 'Psychologist',
      image: 'https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      title: 'Is Emotion Regulation the Key to Addiction Prevention?',
      category: 'Emotions',
      readTime: '10 mins read',
      excerpt: 'Your relationship partner needs to feel understood. Being a better listener is the sec...',
      author: 'Dr. Enoch Legend',
      authorRole: 'Psychologist',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      title: "When You're Exhausted, Try These 3 Uplifting Thoughts",
      category: 'Stress',
      readTime: '7 mins read',
      excerpt: 'How to change your perspective on yourself and your problems.',
      author: 'Dr. Trent Peters',
      authorRole: 'Therapist',
      image: 'https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      title: 'Edible Flowers That Are Good for the Body and Brain',
      category: 'Health',
      readTime: '6 mins read',
      excerpt: 'Edible flowers taste great, look beautiful on your plate, and are packed with nutrients.',
      author: 'Dr. Sam Cooper',
      authorRole: 'Nutritionist',
      image: 'https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 6,
      title: 'Exercise More by Making It Easier—Yes, Easier',
      category: 'Health',
      readTime: '9 mins read',
      excerpt: 'Have you tried to create a program of regular exercise with success? Maybe you are suf...',
      author: 'Dr. Kelly Adams',
      authorRole: 'Fitness Coach',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
            <p className="text-gray-600 mt-1">
              Here is the information about your activity and mental condition. How to relieve stress? How to be positive? You will find everything here!
            </p>
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
        {/* Top Categories */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-gray-900">Top categories</h2>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">10</span>
            </div>
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
              See all
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {category.image}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{category.name}</h3>
                    <p className="text-gray-500 text-sm">{category.articles} articles</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Articles */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-gray-900">Articles</h2>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">300+</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                Sort by
                <ChevronRight size={16} className="rotate-90" />
              </button>
              <button className="p-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                <Filter size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {article.author.split(' ')[1][0]}{article.author.split(' ')[2][0]}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{article.author}</p>
                      <p className="text-gray-500 text-xs">{article.authorRole}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronRight size={20} className="rotate-180 text-gray-600" />
            </button>
            <button className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors font-medium">
              1
            </button>
            <button className="w-10 h-10 rounded-lg bg-blue-600 text-white font-medium">
              2
            </button>
            <button className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors font-medium">
              3
            </button>
            <span className="px-2 text-gray-500">...</span>
            <button className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors font-medium">
              80
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
