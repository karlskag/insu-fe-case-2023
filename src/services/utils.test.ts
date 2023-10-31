import { Language } from 'translations/types';

import Utils from './utils';

describe('utils', () => {
  describe('datetimeToDate', () => {
    test('should return correct date string', () => {
      const result = Utils.datetimeToDate('2023-02-06T15:29:20.239642');
      expect(result).toBe('2023-02-06');
    });

    test('should throw error when string sent in is not a date', () => {
      expect(() => Utils.datetimeToDate('hello world')).toThrow();
    });
  });

  describe('addThousandSeparator', () => {
    test('should return empty string when input is undefined', () => {
      const result = Utils.addThousandSeparator(undefined);
      expect(result).toBe('');
    });

    test('should return correctly thousand separated string when string', () => {
      const result = Utils.addThousandSeparator('10000000');
      expect(result).toBe('10 000 000');
    });
    test('should return correctly thousand separated string when number', () => {
      const result = Utils.addThousandSeparator(10000000);
      expect(result).toBe('10 000 000');
    });
  });

  describe('getLocalTime', () => {
    test('should throw invalid date error when not a date string', () => {
      expect(() => Utils.getLocalTime('hello world')).toThrowError(
        'hello world is not a valid date string',
      );
    });

    test('should return correct local time value for date number', () => {
      const result = Utils.getLocalTime(1680505226802);

      expect(result instanceof Date).toBeTruthy();
      expect(result.getTime()).toBe(1680505226802);
    });

    test('should return correct local time value for date string', () => {
      const result = Utils.getLocalTime('2023-04-03');

      expect(result instanceof Date).toBeTruthy();
      expect(result.getTime()).toBe(1680480000000);
    });
  });
});
