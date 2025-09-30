import { Component } from "react";
import Counter from "./Counter";

class OldCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      //   if we want to create another state than than we can create here not write again this.state
      count2: 0,
    };
  }
  render() {
    //here we can excess our props in this way
    const { counterName } = this.props;
    console.log(counterName);
    return (
      <>
        <h1>{counterName}</h1>
        <h1 className="bg-amber-500">Hello Classes Components</h1>
        <div className="container flex flex-col items-center justify-center gap-2 [&_button]:p-3">
          <h1>{this.state.count}</h1>
          <div className="button flex gap-3">
            <button
              onClick={() => {
                // here we are not writing count2 state but react can write count state automaticalliy in this object
                return this.setState({ count: this.state.count + 1 });
              }}
              className="rounded-[5px] border bg-blue-400"
            >
              +
            </button>
            <button
              onClick={() => {
                return this.setState({ count: this.state.count - 1 });
              }}
              className="rounded-[5px] border bg-blue-400"
            >
              -
            </button>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center gap-2 [&_button]:p-3">
          <h1>{this.state.count2}</h1>
          <div className="button flex gap-3">
            <button
              onClick={() => {
                return this.setState({ count2: this.state.count2 + 1 });
              }}
              className="rounded-[5px] border bg-blue-400"
            >
              +
            </button>
            <button
              onClick={() => {
                return this.setState({ count2: this.state.count2 - 1 });
              }}
              className="rounded-[5px] border bg-blue-400"
            >
              -
            </button>
          </div>
        </div>

        <hr className="my-6" />
        <Counter counterName="New Counter:" />
      </>
    );
  }
}

export default OldCounter;
