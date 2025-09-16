import React from 'react';
import { Clock, Activity, Users } from 'lucide-react';

interface ScheduleCardProps {
  time: string;
  activity: string;
  description: string;
  ageGroup: string;
  isActive: boolean;
  icon: 'activity' | 'users' | 'clock';
}

export default function ScheduleCard({ time, activity, description, ageGroup, isActive, icon }: ScheduleCardProps) {
  const getIcon = () => {
    switch (icon) {
      case 'activity':
        return <Activity size={20} />;
      case 'users':
        return <Users size={20} />;
      default:
        return <Clock size={20} />;
    }
  };

  return (
    <div className={`rounded-lg p-4 border-l-4 transition-all duration-300 ${
      isActive 
        ? 'bg-blue-50 border-blue-500 shadow-md' 
        : 'bg-white border-gray-200 hover:bg-gray-50'
    }`}>
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-full ${
          isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
        }`}>
          {getIcon()}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-gray-800">{activity}</h3>
            <span className={`text-sm font-medium ${
              isActive ? 'text-blue-600' : 'text-gray-500'
            }`}>
              {time}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-2">{description}</p>
          <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
            {ageGroup}
          </span>
          {isActive && (
            <div className="mt-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Currently Active
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}