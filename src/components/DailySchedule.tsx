import React from 'react';
import ScheduleCard from './ScheduleCard';

export default function DailySchedule() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  
  const schedule = [
    {
      time: "7:30 - 8:30 AM",
      activity: "Morning Arrival & Free Play",
      description: "Children arrive and engage in self-directed play activities",
      ageGroup: "All Ages",
      isActive: currentHour >= 7 && currentHour < 9,
      icon: "users" as const
    },
    {
      time: "8:30 - 9:00 AM",
      activity: "Morning Circle Time",
      description: "Group songs, weather discussion, and daily planning",
      ageGroup: "2+ Years",
      isActive: currentHour >= 8 && currentHour < 9,
      icon: "activity" as const
    },
    {
      time: "9:00 - 10:00 AM",
      activity: "Learning Centers",
      description: "Structured learning activities in different subject areas",
      ageGroup: "All Ages",
      isActive: currentHour >= 9 && currentHour < 10,
      icon: "activity" as const
    },
    {
      time: "10:00 - 10:30 AM",
      activity: "Snack Time & Story",
      description: "Healthy snacks followed by interactive storytelling",
      ageGroup: "All Ages",
      isActive: currentHour >= 10 && currentHour < 11,
      icon: "users" as const
    },
    {
      time: "10:30 - 11:30 AM",
      activity: "Outdoor Play",
      description: "Fresh air activities and physical development",
      ageGroup: "All Ages",
      isActive: currentHour >= 10 && currentHour < 12,
      icon: "activity" as const
    },
    {
      time: "11:30 AM - 12:30 PM",
      activity: "Lunch Time",
      description: "Nutritious meals and social dining experience",
      ageGroup: "All Ages",
      isActive: currentHour >= 11 && currentHour < 13,
      icon: "users" as const
    },
    {
      time: "12:30 - 2:30 PM",
      activity: "Quiet Time & Naps",
      description: "Rest period for younger children, quiet activities for older ones",
      ageGroup: "Under 4 Years",
      isActive: currentHour >= 12 && currentHour < 15,
      icon: "clock" as const
    },
    {
      time: "2:30 - 3:30 PM",
      activity: "Art & Creative Time",
      description: "Hands-on creative projects and artistic expression",
      ageGroup: "All Ages",
      isActive: currentHour >= 14 && currentHour < 16,
      icon: "activity" as const
    },
    {
      time: "3:30 - 4:00 PM",
      activity: "Afternoon Snack",
      description: "Light snacks and hydration break",
      ageGroup: "All Ages",
      isActive: currentHour >= 15 && currentHour < 16,
      icon: "users" as const
    },
    {
      time: "4:00 - 6:00 PM",
      activity: "Free Play & Pickup",
      description: "Open play time as children are picked up by parents",
      ageGroup: "All Ages",
      isActive: currentHour >= 16 && currentHour < 18,
      icon: "users" as const
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Daily Schedule
          </h2>
          <p className="text-xl text-gray-600">
            A structured day filled with learning, play, and growth opportunities
          </p>
        </div>
        
        <div className="space-y-4">
          {schedule.map((item, index) => (
            <ScheduleCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}