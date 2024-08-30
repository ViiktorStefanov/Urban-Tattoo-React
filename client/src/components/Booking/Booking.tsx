import React, { FormEvent, useEffect, useState } from 'react';
import styles from './Booking.module.scss';
import Calendar from 'react-calendar';
import './Calendar.scss';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import notification from '../../services/notification';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Reservation, ReservationData } from '../../types/Reservation';
import { getAllUserReservations, userUpdateReservations } from '../../services/authService';
import { addUserReservation, setIsFailed, setIsLoading, setIsSucessful } from '../../store/authSlice';

const Booking: React.FC = () => {
  const [values, setValues] = useState<ReservationData>({
    date: '',
    hour: '',
  });
  const [model, setModel] = useState(false);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [hours, setHours] = useState<boolean | string>(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const user = useSelector((state: RootState) => state.auth.user)!;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
        notification.warning('Only registered users can book an appointment', 5000);
    };
}, [user]);

useEffect(() => {
  getAllUserReservations()
      .then(res => {
          const mergedData = res.reduce((result: Reservation[], current: Reservation) => {
              const existingItem = result.find((item: Reservation) => item.date === current.date);

              if (existingItem) {
                  // If the date already exists, append the hour to the existing date
                  existingItem.hour += `, ${current.hour}`;
              } else {
                  result.push({ date: current.date, hour: current.hour });
              }

              return result;
          }, []);
          setReservations(mergedData);
      })
      .catch((e) => {
          if (e.status !== 404) {
              return notification.error(e.message, 3000);
          } else {
              return navigate('*');
          }
      });
}, []);

const onChange = async (e:React.ChangeEvent<HTMLInputElement>) => {
  setValues(state => ({ ...state, [e.target.name]: e.target.value }));
};

const updateUserReservations = async (data: ReservationData) => {
  try {
    setIsSubmit(true);
    dispatch(setIsLoading());
    const result = await userUpdateReservations(user._id, data, user);
    dispatch(addUserReservation(result));
    notification.update('Reservation confirmed');
    navigate(`/profile/${user._id}`);
} catch (e: any) {
    dispatch(setIsFailed());
    return notification.error(e.message, 3000);
} finally {
    setIsSubmit(false);
    dispatch(setIsSucessful());
}
}

const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!values.hour || !values.date) {
      return notification.warning('Please, choose a date and select an hour', 5000);
  }

  await updateUserReservations(values);

  setModel(false);
};

const onClickDay = async (value: Date) => {
  if (user) {
      setModel(true);
      const datePicked = value.toLocaleDateString().split('/');
      const reservationDate = `${datePicked[1]}.${datePicked[0]}.${datePicked[2]}`;

      const matchDate = reservations.find(reservation => reservation.date === reservationDate);

      if (matchDate) {
          setHours(matchDate.hour);
      } else {
          setHours(false)
      }

      setValues(state => ({ ...state, date: reservationDate }));
  }
};

const tileClassName = ({ date }: { date: Date }) => {
  const day = date.toLocaleDateString().split('/');
  const formatDay = `${day[1]}.${day[0]}.${day[2]}`;

  const today = new Date();
  const formattedToday = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;

  const parseDate = (dateString: string) => {
      const [day, month, year] = dateString.split('.').map(Number);
      return new Date(year, month - 1, day);
  };



  let isNotAvailable = false;

  reservations.forEach(reservation => {
      if (reservation.date === formatDay) {
          if (reservation.hour === '14:00-17:00, 10:00-13:00' || reservation.hour === '10:00-13:00, 14:00-17:00') {
              isNotAvailable = true;
          }
      }
  });

  //disabled past dates
  if (parseDate(formatDay) <= parseDate(formattedToday)) {
      return 'react-calendar__month-view__days__day--neighboringMonth' // Disable dates before today
  }

  if (isNotAvailable) {
      return 'react-calendar__month-view__days__day--notAvailable'
  }
};

const tileDisabled = ({ date }: { date: Date } ) => {
  const today = new Date();
  const formattedToday = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;

  const parseDate = (dateString: string) => {
      const [day, month, year] = dateString.split('.').map(Number);
      return new Date(year, month - 1, day);
  };

  const day = date.toLocaleDateString().split('/');
  const formatDay = `${day[1]}.${day[0]}.${day[2]}`;

  let isNotAvailable = false;

  reservations.forEach((reservation) => {
      if (reservation.date === formatDay) {
          if (
              reservation.hour === '14:00-17:00, 10:00-13:00' ||
              reservation.hour === '10:00-13:00, 14:00-17:00'
          ) {
              isNotAvailable = true;
          }
      }
  });

  //disabled past dates
  if (parseDate(formatDay) <= parseDate(formattedToday)) {
      return true; // Disable dates before today
  }

  return isNotAvailable;
};

  return (
    <section id="bookingPage" className={styles.bookingPage}>
    <Calendar
        nextLabel={<FaArrowRight style={{ fontSize: '25px' }} />}
        prevLabel={<FaArrowLeft style={{ fontSize: '25px' }} />}
        prev2Label={null}
        next2Label={null}
        minDetail={'month'}
        maxDetail={'month'}
        onClickDay={onClickDay}
        tileDisabled={tileDisabled}
        tileClassName={tileClassName}
    />
    <form className={styles.model} onSubmit={onSubmit} method='POST'>
        {model ?
            <>
                <p className={styles['hours-message']}>Choose a preferred time:</p>
                <div className={styles['hours-wrapper']}>
                    {hours !== '10:00-13:00' ? <div className={styles['hours-first-radio-wrapper']} >
                        <input
                            className={styles['hours-first-radio']}
                            type="radio"
                            id="hour"
                            name="hour"
                            value="10:00 - 13:00"
                            onChange={onChange}
                        />
                        <label htmlFor="hour">
                            10:00 - 13:00
                        </label>
                    </div> : null}
                    {hours !== '14:00-17:00' ? <div className={styles['hours-second-radio-wrapper']} >
                        <input
                            className={styles['hours-second-radio']}
                            type="radio"
                            id="hour2"
                            name="hour"
                            value="14:00 - 17:00"
                            onChange={onChange}
                        />
                        <label htmlFor="hour2">
                            14:00 - 17:00
                        </label>
                    </div> : null}
                </div>
            </>
            : null}
        {model ?
            <button
                className={styles.button}
                disabled={isSubmit ? true : false}
                type="submit">{isSubmit ? 'Loading...' : 'Confirm'}
            </button>
            : null}
    </form>
</section>
  )
}

export default Booking
