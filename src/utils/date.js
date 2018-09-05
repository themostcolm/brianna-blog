const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function prettifyDate({ date }) {
  const month = months[date.getMonth()];
  const numberDate = date.getDate().toString();
  const abbr = d => {
    if (d.slice(-1) === '1') return 'st';
    else if (d.slice(-1) === '2') return 'nd';
    else if (d.slice(-1) === '3') return 'rd';
    return 'th';
  };
  const day = `${numberDate}${abbr(numberDate)}`;
  const year = date.getFullYear();
  const hours = d => {
    const h = d.getUTCHours();
    const finalH = h > 12 ? h - 12 : h;
    const a = h > 12 ? 'pm' : 'am';
    return { hour: finalH, abbr: a };
  };
  const hourObject = hours(date);
  const minutes = d => {
    const min = d.getUTCMinutes().toString();
    return min.length < 2 ? `0${min}` : min;
  };
  const time = `${hourObject.hour}:${minutes(date)}${hourObject.abbr}`;
  const final = `${month} ${day}, ${year} at ${time}`;
  return final;
}
