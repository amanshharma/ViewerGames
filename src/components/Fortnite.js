import React, { Component } from "react";
import { connect } from 'react-redux'

import { increment, decrement, showToggle, setUID } from '../actions/actions'

import cover from '../images/cover.png';
import live from '../assets/live.svg';
import twitch from '../assets/twitch.svg';
import user from '../assets/user.svg';
import userEntered from '../assets/user-entered.svg';

class Fortnite extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  // This function is used to set the Fortnite id entered by the user to 'usernameField' variable of the state
  handleChange(event) {
    const { setFortniteId } = this.props;
    //This function dispatches setUID action with the value passed
    setFortniteId(event.target.value);
  }

  //This function is used to render the button based on the availabilty of id and whether user has joined 
  renderButton() {
    const { onDecrement, onIncrement, joined, fortNiteId } = this.props;

    if (fortNiteId === '') {
      return <input className="PrimaryButton" type="button" name="join" value="JOIN"></input>
    } else if (joined) {
      return <input className="SecondaryButton" type="button" name="join" value="LEAVE" onClick={onDecrement}></input>
    }
    return <input className="PrimaryButton" type="button" name="join" value="JOIN" onClick={onIncrement}></input>
  }

  //This function is to render the Slot text if user has joined
  renderSlotsText() {
    const { joined, fortNiteId } = this.props;

    if (joined && fortNiteId !== '') {
      return <span>Once the viewer game starts you will be notified if you are selected</span>
    } else {
      return <span>Please enter your Fortnite Id</span>
    }
  }

  renderShowToggle() {
    const { expanded, onShowToggle } = this.props;

    if (expanded) {
      return <div  > <span className="ToggleText" onClick={onShowToggle}> SHOW LESS </span> </div>
    }
    return <div  > <span className="ToggleText" onClick={onShowToggle}> SHOW MORE </span> </div>
  }

  render() {
    const { count, expanded, fortNiteId } = this.props;

    return (
      <div className="app">

        <div className="bg"></div>

        <div className="wrapperClass">

          <div className="r1">

            <div className="r1c1">
              <img src={cover} alt="Cover Pic"/>
            </div>

            <div className="r1c2">

              <div className="r1c2r1">
                <img src={twitch} alt="Twitch svg"/>
              </div>

              <div className="r1c2r2">
                <div className="EntryText">
                  InVerum
                </div>
                <img src={live} alt="Live svg"/>
                <div className="LiveText">
                  Live Now
                </div>
              </div>


              <div className="r1c2r3">
                <div className="PlainText">
                  Going to be playing some 4P Fortnite with viewers from 4-8PM. I will add you as a friend and message you on Twitch if you get selected, so make sure you add your ID when joining!
                  <span className={expanded ? "DotsHide" : "DotsShow"}>...</span>
                </div>
                <div className={expanded ? "SecondTextShow" : "SecondText"} >
                  Negotium sufficere posse recensentur in NASDAQ vadit ventre sursum. Perit! Non est amplium extra me existant. Non, manifeste tu scis nesciunt qui loquebantur, sic fiat mihi fila vobis ego sum nolite ingredi in periculo Skyler. Sum in periculo! Ut sagittis metus aperit ostium, et arbitraris me et habet? Non ego sum illequi pulsat!
                </div>
                {this.renderShowToggle()}
              </div>


              <div className="r1c2r4">
                <img src={user} className="image" alt="User svg"/>&nbsp;&nbsp; 3 SLOTS
                <div className="EntryText">
                  {count} Entered
                </div>
              </div>

              <div className="r1c2r4-mobile">
                <img src={user} className="image" alt="User svg"/> 
                <div className="EntryText">
                  &nbsp; 3 SLOTS
                </div>
                <img src={userEntered} className="image" alt="User svg"/>
                <div className="EntryText">
                  &nbsp; {count} Entered
                </div>
              </div>

            </div>

          </div >

          <div className="r2">

            <div className="r2c1">
              <input className="TextInput" type="text" placeholder="Fortnite ID" value={fortNiteId} onChange={this.handleChange}></input>
            </div>

            <div className="r2c2">
              {this.renderButton()}
            </div>

          </div>

          <div className="r3">
            {this.renderSlotsText()}
          </div>

          <div className="r4">
          <img src={twitch} alt="Twitch svg"/>
          <div>&nbsp;&nbsp;View Twitch Stream</div>
            
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    joined: state.joined,
    expanded: state.expanded,
    fortNiteId: state.usernameField,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (userid) => {
      dispatch(increment(userid))
    },
    onDecrement: (userid) => {
      dispatch(decrement(userid))
    },
    onShowToggle: () => {
      dispatch(showToggle())
    },
    setFortniteId: (value) => {
      dispatch(setUID(value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fortnite)