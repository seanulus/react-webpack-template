import React from 'react';

function NewTicketForm() {
  return(
    <div>
      <style jsx>{`
      form {
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 30%;
        margin: 10px auto;
      }
      input {
        margin-bottom: 10px;
        border-radius: 5px;
        height: 30px;
        background-color: black;
        opacity: 0.5;
      }
      textarea {
        height: 10vw;
        background-color: black;
        opacity: 0.5;
      }
      button {
        width: 50%;
        margin: 10px auto;
        background-color: #5788d1;
      }
      `}</style>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
