import { Search, Bell, BookOpen, Video, FileText, Award, Clock, Star } from 'lucide-react';

const Education = () => {
  const courses = [
    {
      title: 'Stress Management Fundamentals',
      instructor: 'Dr. Sarah Johnson',
      duration: '6 weeks',
      lessons: 24,
      level: 'Beginner',
      rating: 4.8,
      students: 2456,
      progress: 65,
      image: 'https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Mindfulness & Meditation',
      instructor: 'Dr. Michael Chen',
      duration: '4 weeks',
      lessons: 16,
      level: 'Intermediate',
      rating: 4.9,
      students: 3201,
      progress: 30,
      image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Building Emotional Resilience',
      instructor: 'Dr. Emily Rodriguez',
      duration: '8 weeks',
      lessons: 32,
      level: 'Advanced',
      rating: 4.7,
      students: 1879,
      progress: 0,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const resources = [
    {
      title: 'Understanding Anxiety Disorders',
      type: 'Article',
      duration: '15 min read',
      icon: FileText,
    },
    {
      title: 'Guided Meditation for Beginners',
      type: 'Video',
      duration: '20 min',
      icon: Video,
    },
    {
      title: 'Sleep Hygiene Best Practices',
      type: 'Guide',
      duration: '10 min read',
      icon: BookOpen,
    },
    {
      title: 'Cognitive Behavioral Therapy Basics',
      type: 'Course',
      duration: '2 hours',
      icon: Award,
    },
  ];

  const achievements = [
    { title: 'First Course Completed', date: '2 weeks ago', icon: '🎓' },
    { title: '30-Day Streak', date: '1 week ago', icon: '🔥' },
    { title: 'Master Learner', date: '3 days ago', icon: '⭐' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Education</h1>
            <p className="text-gray-600 mt-1">
              Expand your knowledge with expert-led courses and resources
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
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {course.level}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{course.instructor}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen size={14} />
                      <span>{course.lessons} lessons</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-medium text-gray-900">{course.rating}</span>
                    <span className="text-gray-500 text-sm">({course.students} students)</span>
                  </div>

                  {course.progress > 0 && (
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium text-gray-900">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {course.progress === 0 && (
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Start Course
                    </button>
                  )}

                  {course.progress > 0 && course.progress < 100 && (
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors mt-3">
                      Continue Learning
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Learning Resources</h2>
            <div className="space-y-3">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <resource.icon className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{resource.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="bg-gray-100 px-2 py-0.5 rounded">{resource.type}</span>
                      <span>{resource.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Achievements</h2>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="text-3xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">{achievement.title}</p>
                    <p className="text-gray-500 text-xs">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
