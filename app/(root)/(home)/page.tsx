'use client'

import { useState } from 'react';
import CallList from '@/components/CallList';
import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(now);

  const [upcomingMeetingCount, setUpcomingMeetingCount] = useState(0);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-fit rounded p-2 text-base font-normal">
            Upcoming Meetings: {upcomingMeetingCount}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />

      <div>
        <h1 className='mt-8 mb-4 text-2xl font-bold'>
              Upcomings Meetings
        </h1>
        <CallList
          type="upcoming"
          onCountChange={(count) => setUpcomingMeetingCount(count)}
        />
      </div>
    </section>
  );
};

export default Home;
