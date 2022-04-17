import crypto from "crypto";
import { schedules } from "../model/ScheduleModel.js";

const controller = {

    getAll: (request, response) => {
        response.send(schedules);
    },
    getOne: (request, response) => {
        const id = request.params.id;
        const schedule = schedules.find((schedule) => schedule.id === id);
        if (schedule) {
          return response.send({ schedule });
        }
        response.status(404).send({ message: "schedule not exist" });
    },
    create: (request, response) => {
        const { name, birthDate, scheduleDate, scheduleTime } = request.body;
        const schedule = {id: crypto.randomUUID(), name, birthDate, scheduleDate, scheduleTime};
        schedules.push(schedule);
        response.send(schedule);
    },
    remove: (request, response) => {
        const id = request.params.id;
        let indexToRemove = schedules.findIndex(schedule => schedule.id === id);
        let existSchedule = indexToRemove != -1; 
        if(existSchedule){
          schedules.splice(indexToRemove, 1);
          return response.status(200).send({ message: "OK!" });
        }
        response.status(404).send({ message: "schedule not exist" });
    },
    update: (request, response) => {
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
    }
}

export { controller }