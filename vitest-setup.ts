// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';

vi.mock('uuid', () => ({
  v4: () => 'abc123',
}));
