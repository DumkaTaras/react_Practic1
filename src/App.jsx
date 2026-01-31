import "./App.css";
import UpcomingEvents from "./events/upcoming-events.json";
import { GetEvents } from "./getEvents/getEvents";
import styled from "styled-components";

const Main_Container = styled.div`
  background-color: #559bc9ae;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  border: 3.5px #15436250 solid;
`;

const Title = styled(Main_Container)`
  font-size: 28px;
  padding:10px
`;
function App() {
  return (
    <>
      <Title>24th Core Worlds Coalition Conference</Title>
      <br />
      <Main_Container className="mainContent">
        {UpcomingEvents.map((el, value) => (
          <GetEvents
            key={value}
            name={el.name}
            location={el.location}
            speaker={el.speaker}
            type={el.type}
            time={el.time.start}
            timeEnd={el.time.end}
          />
        ))}
      </Main_Container>
    </>
  );
}

export default App;
