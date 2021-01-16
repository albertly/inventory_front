import { render, screen } from '@testing-library/react';
import Chalk from 'chalk';

import App from './App';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe.skip("Async in JavaScript", () => {

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

  it("should run async callback", (done) => {
    console.log(Chalk.blue("Before async"));
 
    setTimeout(() => message(done), 0);
    console.log(Chalk.blue("After async"));
  })
})

describe("Promises", (done) => {

  const wait = () => new Promise((resolve, reject) => {
    const i = getRandomInt(4);
    if (i > 1) {
      reject("Just don't want it");
      return;
    }

    setTimeout( function() {
      resolve("Success!")  // Yay! Everything went well!
     }, 250);
      
  });

  it("Should create promise", (done)=>{
      wait()
        .then(r => {
          console.log(Chalk.green(r));
        })        
        .catch(e => {
          console.log(Chalk.red(e));
        })
        .finally(done);
  });
})
