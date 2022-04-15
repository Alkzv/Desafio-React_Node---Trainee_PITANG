import express from "express";
import crypto from "crypto";

const app = express();

const schedules = [
  {
    id: crypto.randomUUID(),
    name: "Lucas Alkimim Chaves",
    birthDate: "2000-12-12",
    scheduleDate: "2020-12-12",
    scheduleTime: "00:10:00"
  },
];

app.use(express.json());

app.get("/api/schedule", (request, response) => {
  response.send(schedules);
});

app.get("/api/schedule/:id", (request, response) => {
  const id = request.params.id;
  const schedule = schedules.find((schedule) => schedule.id === id);
  if (schedule) {
    return response.send({ schedule });
  }
  response.status(404).send({ message: "schedule not exist" });
});

app.post("/api/schedule", (request, response) => {
  const { name, birthDate, scheduleDate, scheduleTime } = request.body;
  const schedule = {id: crypto.randomUUID(), name, birthDate, scheduleDate, scheduleTime};
  schedules.push(schedule);
  response.send(schedule);
});

app.put("/api/schedule/:id", (request, response) => {
  const id = request.params.id;
  const schedule = { 
    id: id,
    name : request.body["name"],
    birthDate : request.body["birthDate"], 
    scheduleDate : request.body["scheduleDate"], 
    scheduleTime : request.body["scheduleTime"]
  };

  let indexToChange = schedules.findIndex(schedule => schedule.id === id);
  let existSchedule = indexToChange != -1; 
  if(existSchedule){
    schedules[indexToChange] = schedule;
    return response.status(200).send(schedules);
  }
  response.status(404).send({ message: "schedule not exist" });

});

app.delete("/api/schedule/:id", (request, response) => {
  const id = request.params.id;
  let indexToRemove = schedules.findIndex(schedule => schedule.id === id);
  let existSchedule = indexToRemove != -1; 
  if(existSchedule){
    schedules.splice(indexToRemove, 1);
    return response.status(200).send({ message: "OK!" });
  }
  response.status(404).send({ message: "schedule not exist" });

});

app.listen(3000, () => {
  console.log("Server Running on PORT 3000");
});