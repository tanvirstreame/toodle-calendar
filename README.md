# Toodle Calendar

## Table of Contents

* [Installation](#installation)
* [Example](#example)


## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install toodle-calendar
    $ yarn add toodle-calendar


## Example

Here is a simple example of toodle-calendar 

```jsx
import Calendar from "toodle-calendar";

const App = () => {
  const handleOnChange = (value) => {
    console.log(value);
  }
  return (
    <Calendar 
      handleOnChange={handleOnChange} 
      inputBoxClassName="add-your-custom-css"
    />
  );
}

export default App;

```
