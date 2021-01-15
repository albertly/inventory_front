import { render, screen } from '@testing-library/react';
import Chalk from 'chalk';

import App from './App';

test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Async in JavaScript", () => {

  const message = function(done) {  
    console.log(Chalk.red("This is a message."));
    if (done) {
      done();
    }
  }

  const f = function(cb) {
    cb();
  }

  it("should run function", ()=>{
    message();
  })

  it("should run callback", ()=>{
   f(message);
   console.log("After callback");
  })

  it.only("should run async callback", (done) => {
    console.log(Chalk.blue("Before async"));
 
    setTimeout(() => message(done), 0);
    console.log(Chalk.blue("After async"));
  })
})
