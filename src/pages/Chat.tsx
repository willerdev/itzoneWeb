import React from 'react';
import { MessageSquare } from 'lucide-react';

const chats = [
  {
    id: 1,
    user: 'John Doe',
    lastMessage: 'Is this still available?',
    time: '2m ago',
    unread: 2,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
  },
  {
    id: 2,
    user: 'Jane Smith',
    lastMessage: "Great, I'll take it!",
    time: '1h ago',
    unread: 0,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
  },
  {
    id: 3,
    user: 'Mike Johnson',
    lastMessage: 'Can you do $450?',
    time: '2h ago',
    unread: 1,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
  },
];

const Chat = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>
      
      {chats.length > 0 ? (
        <div className="space-y-4">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={chat.avatar}
                  alt={chat.user}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-gray-800">{chat.user}</h3>
                    <span className="text-sm text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{chat.lastMessage}</p>
                </div>
                {chat.unread > 0 && (
                  <span className="bg-[#1c6dd6] text-white text-xs px-2 py-1 rounded-full">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No messages yet</h3>
          <p className="text-gray-500">Start a conversation about an item you're interested in!</p>
        </div>
      )}
    </div>
  );
};

export default Chat;