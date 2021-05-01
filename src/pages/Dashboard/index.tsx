import React, { useState } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
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
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
