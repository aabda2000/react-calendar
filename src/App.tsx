
import React, { Component } from "react";

import "./App.css";

class Bulb extends React.Component<BulbProps> {
  constructor(props: any) {
    super(props);
  }
  render() {
    let lightClass = this.props.isOn ? "light-bulb on" : "light-bulb off";
    return <div className={lightClass}>{this.props.children}</div>;
  }
}

class Calendar extends React.Component<BulbProps> {
  events: Date[];
  days: number[];
  weekmask: number[];

  constructor(props: any) {
    super(props);

    this.events = [
      new Date("2023-11-08"),
      new Date("2023-11-10"),
      new Date("2023-11-10"),
      new Date("2023-11-6"),
    ];
    this.days = [4, 2, 1,1];
    this.weekmask = [0, 0, 0, 0, 0];
    this.processMask();
  }

  processMask() {
    for (var i = 0; i < this.events.length; i++) {
      var startdate = this.events[i];
      var daysdiff = this.days[i];
      var eventmask = Math.pow(2, daysdiff) - 1;
      eventmask <<= startdate.getDay();
      var eventweek = this.getWeek(this.events[i]);
      for (var j = 0; j < this.weekmask.length; j++) {
        if ((~this.weekmask[j] & eventmask) == eventmask) break;
      }
      this.weekmask[j] |= eventmask;
    }
  }
  render() {
    let lightClass = this.props.isOn;
    return (
      <div>
        {this.getMask().map((item: any, index: number) => (
          <Bulb isOn={item && lightClass}>
            <p>{days[index % 7]}</p>
          </Bulb>
        ))}
      </div>
    );
  }

  getMask() {
    let bit: number;
    let res = new Array();
    let mask: any;
    var k = 0;
    for (var i = 0; i < this.weekmask.length; i++) {
      mask = this.weekmask[i];

      for (var j = k; j < k + 7; j++) {
        bit = mask & 1;
        mask = mask >> 1;

        if (bit === 1) res[j] = true;
        if (bit === 0) res[j] = false;
      }
      k = k + 7;
    }

    return res;
  }
  Pad(num: number, size: number) {
    var s = "0000000" + num;
    return s.substr(s.length - size);
  }
  Dec2Bin(dec: number) {
    return dec >>> 0;
  }
  getWeek(d: any) {
    let dt: any;
    dt = new Date(d.getFullYear(), 0, 1);
    return Math.ceil(((d - dt) / 86400000 + dt.getDay() + 1) / 7);
  }
  getEvents() {
    return this.events;
  }
  getDays() {
    return this.days;
  }
}

let cal = new Calendar(false);
let events: Date[];
events = cal.getEvents();
let daysLong = cal.getDays();
interface IProps {
  //code related to your props goes here
  isOn: any;
  onSwitched: any;
}
interface BulbProps {
  isOn: any;
}
interface IState {
  switchOn: any;
}
class Switch extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
  }
  render() {
    var switchClass = this.props.isOn ? "cube-switch active" : "cube-switch";
    return (
      <div className={switchClass}>
        <span className="switch" onClick={this.props.onSwitched}>
          <span className="switch-state off">Off</span>
          <span className="switch-state on">On</span>
        </span>
      </div>
    );
  }
}
let days = [
  "Dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];
class App extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      switchOn: false,
    };

    this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  toggleSwitch() {
    this.setState({ switchOn: !this.state.switchOn });
  }

  render() {
    return (
      <>
        <Switch isOn={this.state.switchOn} onSwitched={this.toggleSwitch} />
        <p>This Week Event's dates:</p>
        <ul>
          {events.map((d, index) => (
            <li>
              {d.toISOString().substring(0, 10) + "(" + daysLong[index] +' days long'} )
            </li>
          ))}
        </ul>
        <div></div>
        <div>
          <Calendar isOn={this.state.switchOn} />
        </div>
      </>
    );
  }
}

export default App;
