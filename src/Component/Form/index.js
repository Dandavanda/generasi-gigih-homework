import React from 'react';

const Form = () => {
  return (
    <form>
        <div id="title">
          <label htmlFor="desc">Title</label> <br/>
          <input type="text" name="title"/>
        </div>
        <div id="desc">
          <label htmlFor="desc">Description</label> <br/>
          <input type="text" name="desc"/>
        </div>

        <button id="submit">Submit</button>
      </form>
  ) 
}

export default Form;