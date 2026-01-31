import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { HiCalendarDateRange } from "react-icons/hi2"
import { LuClock5 } from "react-icons/lu";
import "./get_events.css";

const PostContainer = styled.div`
  background-color: #c9bf55;
  padding: 0 auto;
  marging: 0 auto;
  border: 2px #595209 solid;
  cursor: pointer;

  &:hover{
  background-color: #ddcd21e7;
  scale:1.01;
  }
`;

const Paragraph = styled.p`
  font-size: 14px;
  color: black;
  display: flex;
  justify-content:start;
  text-aling:start;
  aling-items:center;
  margin-bottom:-6px
`;

  const Calc_Seans_Time = ({startHour,startMin,endHour,endMin}) =>{
        if(endMin<startMin){
      endMin += 60;
      endHour+=-1;
      if(endHour<startHour) {
        endHour+=24;
      }
    }
    let result_Min = endMin - startMin;
    let result_Hour = endHour - startHour;
    if(result_Min === 0){
      result_Min = '00';
    }

    return(
      <div>
        <Paragraph><LuClock5 style={{color:'#226135'}}/>{result_Hour}:{result_Min}</Paragraph>
      </div>
    );
  }
export const GetEvents = ({ name, location, speaker, time, timeEnd }) => {
  let startHour, startminutes, endHour, endMinutes;

  function GetTime() {
    let timearray = time.split("");
    let end_timearray = timeEnd.split("");
    let counter = 0;
    for (let i = 0; i < timearray.length; i++) {
      if (timearray[i] !== "T" || end_timearray[i]!== "T") {
        counter++;
      } else {
        counter++;
        break;
      }
    }

    let timeSession = timearray.slice(counter, timearray.length);
    let End_Session = end_timearray.slice(counter,end_timearray.length);
    console.log(timeSession,End_Session);

    counter = 0;
    startHour = "";
    endHour = "";
    let sliceMinutes_Counter = 0;
    for (let i = 0; i < timeSession.length; i++) {
      if (timeSession[i] == ":") {
        counter--;
        break;
      }
      startHour += timeSession[counter];
      endHour+=End_Session[counter]
      counter++;
      sliceMinutes_Counter++;
    }
    timeSession = timeSession.slice(sliceMinutes_Counter + 1, timeSession.length);
    End_Session = End_Session.slice(sliceMinutes_Counter + 1, End_Session.length);

    startHour = Number(startHour);
    endHour = Number(endHour);
    console.log("Початок сеансу о", startHour, "годині", timeSession,   'кінець -', endHour);

    startminutes = "";
    endMinutes = "";
    counter = 0;
    for (let i = 0; i < timeSession.length; i++) {
      if (timeSession[i] == ":") {
        counter--;
        break;
      }
      startminutes += timeSession[counter];
      endMinutes += End_Session[counter]
      counter++;
    }
    startminutes = Number(startminutes);
    endMinutes = Number(endMinutes);
    console.log("O", startminutes, "хвилин", '-----', endMinutes);
  }
  GetTime();


  return (
    <PostContainer className="container">
      <div className="post">
        <h1>{name}</h1>

        <Paragraph className="location">
          <FaLocationDot style={{ color: "orange" }} />
          {location}
        </Paragraph>
        <Paragraph className="speaker">
          <IoMdPerson style={{ color: "#5599C9" }} /> 
          {speaker}
        </Paragraph>
        <Paragraph className="time_Session"><HiCalendarDateRange
         style={{color:'#7d2d1d'}}/>
         {time}</Paragraph>

        <Calc_Seans_Time 
        startHour={startHour}
        startMin={startminutes}
        endHour={endHour}
        endMin={endMinutes}/>

      </div>
    </PostContainer>
  );
};
