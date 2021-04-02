function random(limit) {
  return Math.floor(Math.random() * limit);
}

// TODO: Create a better, more precise function that takes into account leap years and month day variations
function stringlifyDate(date: any) {
  const MS_PER_MINUTE = 1000 * 60;
  const MS_PER_HOUR = MS_PER_MINUTE * 60;
  const MS_PER_DAY = MS_PER_HOUR * 24;
  const MS_PER_MONTH = MS_PER_DAY * 30;
  const MS_PER_YEAR = MS_PER_DAY * 365;
  let metric: string;
  let unit: number;
  const now: any = new Date();
  if (Math.floor((now - date) / MS_PER_YEAR) >= 1) {
    unit = Math.floor((now - date) / MS_PER_YEAR);
    metric = unit === 1 ? 'año' : 'años';
  } else if (Math.floor((now - date) / MS_PER_MONTH) >= 1) {
    unit = Math.floor((now - date) / MS_PER_MONTH);
    metric = unit === 1 ? 'mes' : 'meses';
  } else if (Math.floor((now - date) / MS_PER_DAY) >= 1) {
    unit = Math.floor((now - date) / MS_PER_DAY);
    metric = unit === 1 ? 'día' : 'días';
  } else if (Math.floor((now - date) / MS_PER_HOUR) >= 1) {
    unit = Math.floor((now - date) / MS_PER_HOUR);
    metric = unit === 1 ? 'hora' : 'horas';
  } else {
    unit = Math.floor((now - date) / MS_PER_MINUTE);
    metric = unit === 1 ? 'minuto' : 'minutos';
  }
  return `Hace ${unit} ${metric}`;
}
export { random, stringlifyDate };
