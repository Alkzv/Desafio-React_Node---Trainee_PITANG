import React, { useState } from "react";
import DatePicker from "react-datepicker"; 
import { useFormik } from 'formik';
import "react-datepicker/dist/react-datepicker.css"
import axios  from "../../services/Api";
import { showNotification } from "@mantine/notifications";

const RegisterSchedule = () => {

    const [selectedBirthDate, setselectedBirthDate] = useState(null);
    const [selectedScheduleDateTime, setselectedScheduleDateTime] = useState(null);
    const validate = values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        } else if (values.name.length < 2) {
          errors.name = 'Must be 2 characters or more';
        }
      
        if (!selectedBirthDate) {
          errors.birthDate = 'Required';
        }
        
        if (!selectedScheduleDateTime) {
            errors.schedule = 'Required';
          }
      
        return errors;
      };

        const formik = useFormik({
          initialValues: {
            name: "",
          },
          validate,
          onSubmit: async values => {
            const formData = {
                name: values.name,
                birthDate: selectedBirthDate.toISOString(),
                schedule:  selectedScheduleDateTime.toISOString()
              }
              try {
                const response = await axios.post("/schedule", formData);
                showNotification({
                  message: "Registrado com sucesso!",
                  title: "Successo",
                });
          
                console.log(response)
              }catch(error){
                showNotification({
                  message: ` Erro ao registrar! ERRO: ${error.response.data.message}`,
                  title: "Falhou",
                });
              } 
          },
        });

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          value={formik.values.name}
          id="name"
          className="form-field"
          type="text"
          placeholder="Nome"
          name="name"
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        <DatePicker 
          selected={selectedBirthDate} 
          onChange={date => setselectedBirthDate(date)}
          dateFormat="dd/MM/yyyy"
          className="form-field"
          id="birthDate"
          name="birthDate"
          placeholderText="Data de nascimento"
        />
        {formik.errors.birthDate? <div>{formik.errors.birthDate}</div> : null}
        <DatePicker 
          selected={selectedScheduleDateTime} 
          onChange={date => setselectedScheduleDateTime(date)}
          showTimeSelect
          dateFormat="dd/MM/yyyy HH:mm a"
          className="form-field"
          id="schedule"
          name="schedule"
          timeIntervals={60}
          placeholderText="Agendamento (Data e Hora (Fuso horário UTC (+3))"
        />
        {formik.errors.schedule? <div>{formik.errors.schedule}</div> : null}
        <button className="form-field" id="button" type="submit">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default RegisterSchedule