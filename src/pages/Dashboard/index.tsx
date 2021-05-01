import React, { useCallback, useState } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointmnet,
  Calendar,
} from './styles';
import logoImg from '../../assets/logo.png';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Salon" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem Vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horários Agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://octodex.github.com/images/stormtroopocat.png"
                alt="avatar"
              />
              <strong>Murillo Romeu</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>
            <Appointmnet>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://octodex.github.com/images/stormtroopocat.png"
                  alt="avatar"
                />
                <strong>Murillo Romeu</strong>
              </div>
            </Appointmnet>
            <Appointmnet>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://octodex.github.com/images/stormtroopocat.png"
                  alt="avatar"
                />
                <strong>Murillo Romeu</strong>
              </div>
            </Appointmnet>
            <Appointmnet>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://octodex.github.com/images/stormtroopocat.png"
                  alt="avatar"
                />
                <strong>Murillo Romeu</strong>
              </div>
            </Appointmnet>
          </Section>

          <Section>
            <strong>Tarde</strong>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            selectedDays={selectedDate}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
