import React from 'react'

const CallbackForm = () => {
  return (
    <div>
      <h2>Student Contact Form</h2>
      <form action="mailto:pwdacait7@gmail.com" method="post" encType="text/plain">
         Student Name:<input type="text" name="sname"/>
         Student Subject:<input type="text" name="ssubject" />
         <input type="submit" value="Send"/>
      </form>
    </div>
  )
}

export default CallbackForm
