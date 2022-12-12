import React from 'react';
import { render, screen, within } from '@testing-library/react';
import VoyageProgress from './VoyageProgress';

beforeAll(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-12-11T15:00:00.822Z'));
});

it('renders port names', () => {
  const { getByTestId } = render(
    <VoyageProgress
      portOfLoading="Copenhagen"
      portOfDischarge="Oslo"
      departureTime="2022-12-11T10:00:00.822Z"
      arrivalTime="2022-12-11T20:00:00.822Z"
    />
  );
  const portOfLoading = within(screen.getByTestId('port-of-loading')).getByText(
    'Copenhagen'
  );
  const portOfDischarge = within(
    screen.getByTestId('port-of-discharge')
  ).getByText('Oslo');
  expect(portOfLoading).toBeInTheDocument();
  expect(portOfDischarge).toBeInTheDocument();
});

it('renders correct pin position', () => {
  const { getAllByTestId, getByTestId } = render(
    <VoyageProgress
      portOfLoading="Copenhagen"
      portOfDischarge="Oslo"
      departureTime="2022-12-11T10:00:00.822Z"
      arrivalTime="2022-12-11T20:00:00.822Z"
    />
  );
  const position = getByTestId('dot-7');
  const pin = within(position).getAllByTestId('pin');
  expect(pin.length).toBe(1);
});

it('renders correct colors for active dots', () => {
  const { getAllByTestId, getByTestId } = render(
    <VoyageProgress
      portOfLoading="Copenhagen"
      portOfDischarge="Oslo"
      departureTime="2022-12-11T10:00:00.822Z"
      arrivalTime="2022-12-11T20:00:00.822Z"
    />
  );

  for (let i = 1; i <= 7; i += 1) {
    expect(getByTestId(`dot-${i}`)).toHaveStyle(`background-color: #345370`);
  }
  for (let i = 8; i <= 14; i += 1) {
    expect(getByTestId(`dot-${i}`)).toHaveStyle(`background-color: #83a2c0`);
  }
});

afterAll(() => {
  jest.useRealTimers();
});
