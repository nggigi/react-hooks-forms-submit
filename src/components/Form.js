import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  
  function handleSubmit(event) {
    event.preventDefault();
    const listOfSubmissions = submittedData.map((data, index) => {
      return (
        <div key={index}>
          {data.firstName} {data.lastName}
        </div>
      );
    });
    const formData = { firstName: firstName, lastName: lastName };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
  }
    props.sendFormDataSomewhere(formData);
  }
  const [errors, setErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    // first name is required
    if (firstName.length > 0) {
      const formData = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["First name is required!"]);
    }
  }
export default Form;
