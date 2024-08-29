export const customComparator = (a: any, b: any) => {

    const [dayA, monthA, yearA] = a.date.split('.');
    const [dayB, monthB, yearB] = b.date.split('.');
  
    if (yearA !== yearB) {
      return yearA - yearB;
    }
    if (monthA !== monthB) {
      return monthA - monthB;
    }
  

    if (dayA !== dayB) {
      return dayA - dayB;
    }
  
    const [startHourA] = a.hour.split('-');
    const [startHourB] = b.hour.split('-');
  
    return startHourA.localeCompare(startHourB);
  };