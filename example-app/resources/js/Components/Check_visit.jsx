import React, { useState, useEffect } from 'react';
export default function Check_visit(){
    // const [dateInfo, setDateInfo] = useState({
    //     dayOfWeek: '',
    //     dayOfMonth: ''
    // });
    
    // useEffect(() => {
    // const date = new Date();
    // const daysOfWeek = [
    //     'یکشنبه',
    //     'دوشنبه',
    //     'سه‌شنبه',
    //     'چهارشنبه',
    //     'پنج‌شنبه',
    //     'جمعه',
    //     'شنبه'
    // ];

    // const dayOfWeek = daysOfWeek[date.getDay()];
    // const dayOfMonth = date.getDate();
    // setDateInfo({
    //     dayOfWeek,
    //     dayOfMonth
    // });
    // }, []);
    
    // return (
    // <div className='fixed-bottom fixed-rigth'>
    //     <p>روز هفته: {dateInfo.dayOfWeek}</p>
    //     <p>روز ماه: {dateInfo.dayOfMonth}</p>
    // </div>
    // );
    const [weekDays, setWeekDays] = useState([]);

    useEffect(() => {
      const daysOfWeek = [
        'یکشنبه',
        'دوشنبه',
        'سه‌شنبه',
        'چهارشنبه',
        'پنج‌شنبه',
        'جمعه',
        'شنبه'
      ];
  
      const today = new Date();
      const currentDayIndex = today.getDay();
  
      // ترتیب روزها را به گونه‌ای تنظیم کنید که روز فعلی در آخرین ستون قرار گیرد
      const adjustedDays = [
        ...daysOfWeek.slice(currentDayIndex + 1),
        ...daysOfWeek.slice(0, currentDayIndex + 1)
      ];
  
      setWeekDays(adjustedDays);
    }, []);
  
    return (
      <div>
        <h1>روزهای هفته</h1>
        <table border="1">
          <thead>
            <tr>
              {weekDays.map((day, index) => (
                <th key={index}>{day}</th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
    );
}
