import React, { useState } from 'react';
import { Menu, Search, Bell, User, Home, Compass, PlaySquare, Clock, ThumbsUp, ChevronDown } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=500&q=80",
      title: "Building a Modern Web Application",
      channel: "Tech Tutorials",
      views: "120K views",
      timestamp: "2 days ago",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&q=80"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
      title: "Complete JavaScript Course 2024",
      channel: "Code Masters",
      views: "89K views",
      timestamp: "5 days ago",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=50&h=50&q=80"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&q=80",
      title: "Learn React in 1 Hour",
      channel: "React Pros",
      views: "250K views",
      timestamp: "1 week ago",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50&h=50&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-[#0f0f0f] border-b border-gray-800">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-800 rounded-full"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center ml-4">
              <PlaySquare className="h-6 w-6 text-red-600" />
              <span className="ml-1 text-xl font-semibold">YouTube</span>
            </div>
          </div>
          
          <div className="flex-grow max-w-2xl mx-4">
            <div className="flex">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 bg-[#121212] border border-gray-700 rounded-l-full focus:outline-none focus:border-blue-500"
                />
              </div>
              <button className="px-6 bg-[#222222] border border-l-0 border-gray-700 rounded-r-full hover:bg-[#313131]">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex pt-14">
        {/* Sidebar */}
        <aside className={`fixed left-0 z-40 h-full bg-[#0f0f0f] transition-all duration-300 ${
          isMenuOpen ? 'w-60' : 'w-20'
        }`}>
          <div className="p-2 overflow-y-auto h-full">
            <div className="space-y-1">
              <button className="flex items-center w-full p-2 rounded-lg hover:bg-gray-800">
                <Home className="h-6 w-6" />
                {isMenuOpen && <span className="ml-4">Home</span>}
              </button>
              <button className="flex items-center w-full p-2 rounded-lg hover:bg-gray-800">
                <Compass className="h-6 w-6" />
                {isMenuOpen && <span className="ml-4">Explore</span>}
              </button>
              <button className="flex items-center w-full p-2 rounded-lg hover:bg-gray-800">
                <Clock className="h-6 w-6" />
                {isMenuOpen && <span className="ml-4">History</span>}
              </button>
              <button className="flex items-center w-full p-2 rounded-lg hover:bg-gray-800">
                <ThumbsUp className="h-6 w-6" />
                {isMenuOpen && <span className="ml-4">Liked Videos</span>}
              </button>
              {isMenuOpen && (
                <button className="flex items-center w-full p-2 rounded-lg hover:bg-gray-800">
                  <ChevronDown className="h-6 w-6" />
                  <span className="ml-4">Show More</span>
                </button>
              )}
            </div>
          </div>
        </aside>

        {/* Video Grid */}
        <main className={`flex-1 p-6 ${isMenuOpen ? 'ml-60' : 'ml-20'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map((video) => (
              <div key={video.id} className="cursor-pointer">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-black px-2 py-1 text-xs rounded">
                    10:30
                  </div>
                </div>
                <div className="mt-3 flex">
                  <img
                    src={video.avatar}
                    alt={video.channel}
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h3 className="font-medium line-clamp-2">{video.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{video.channel}</p>
                    <p className="text-gray-400 text-sm">
                      {video.views} • {video.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;