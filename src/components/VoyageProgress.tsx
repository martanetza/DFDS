import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import Pin from './Pin';
import calculateVoyageProgress from './calculateVoyageProgress';

interface Props {
  portOfLoading: string;
  portOfDischarge: string;
  departureTime: string | Date;
  arrivalTime: string | Date;
}

const VoyageProgress: React.FC<Props> = ({
  portOfLoading,
  portOfDischarge,
  departureTime,
  arrivalTime,
}) => {
  const [activeDots, setActiveDots] = useState(0);

  useEffect(() => {
    const currentTravelTimeOnAscale = calculateVoyageProgress(
      departureTime,
      arrivalTime
    );
    setActiveDots(
      currentTravelTimeOnAscale < 1
        ? 1
        : currentTravelTimeOnAscale > 14
        ? 14
        : currentTravelTimeOnAscale
    );
  }, []);

  return (
    <div
      className={css`
        width: fit-content;
        display: flex;
        align-items: center;
        margin: 100px auto;
      `}
    >
      {(() => {
        const dots = [];
        for (let i = 1; i <= 14; i += 1) {
          dots.push(
            <div
              className={css`
                width: ${i === 1 || i === 14 ? '40px' : '20px'};
                height: ${i === 1 || i === 14 ? '40px' : '20px'};
                border-radius: 50%;
                background-color: ${i <= activeDots ? '#345370' : '#83a2c0'};
                margin: 10px;
                display: flex;
                position: relative;
                justify-content: center;
              `}
              key={i}
              data-testid={`dot-${i}`}
            >
              {i === 1 ? (
                <p
                  className={css`
                    margin-top: 60px;
                  `}
                  data-testid="port-of-loading"
                >
                  {portOfLoading}
                </p>
              ) : i === 14 ? (
                <p
                  className={css`
                    margin-top: 60px;
                  `}
                  data-testid="port-of-discharge"
                >
                  {portOfDischarge}
                </p>
              ) : (
                ''
              )}
              {i === activeDots ? (
                <div
                  data-testid="pin"
                  className={css`
                    margin-top: -80px;
                    position: absolute;
                  `}
                >
                  <Pin />
                </div>
              ) : (
                ''
              )}
            </div>
          );
        }
        return dots;
      })()}
    </div>
  );
};

export default VoyageProgress;
