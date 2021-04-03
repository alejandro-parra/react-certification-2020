import * as fns from './fns';

describe('Stringlify Date', () => {
  it('prints singular units when value is 1', () => {
    const ONE_DAY = 1000 * 60 * 60 * 25; // adding 25 hours to ensure a day has passed
    const today = new Date();
    const yesterday = new Date(today - ONE_DAY);
    const result = fns.stringlifyDate(yesterday);
    expect(result).toBe('Hace 1 día');
  });

  it('prints plural units when value is not 1', () => {
    const today = new Date();
    const result = fns.stringlifyDate(today);
    expect(result).toBe('Hace 0 minutos');
  });

  it('recognizes years correctly', () => {
    const ONE_YEAR = 1000 * 60 * 60 * 24 * 365;
    const today = new Date();
    const twoYearsAgo = new Date(today - 2 * ONE_YEAR);
    const result = fns.stringlifyDate(twoYearsAgo);
    expect(result).toBe('Hace 2 años');
  });

  it('recognizes months correctly', () => {
    const ONE_MONTH = 1000 * 60 * 60 * 24 * 30; // estimation for a month
    const today = new Date();
    const twoMonthsAgo = new Date(today - 2 * ONE_MONTH);
    const result = fns.stringlifyDate(twoMonthsAgo);
    expect(result).toBe('Hace 2 meses');
  });

  it('recognizes hours correctly', () => {
    const ONE_HOUR = 1000 * 60 * 60;
    const today = new Date();
    const twoHoursAgo = new Date(today - 2 * ONE_HOUR);
    const result = fns.stringlifyDate(twoHoursAgo);
    expect(result).toBe('Hace 2 horas');
  });
});
