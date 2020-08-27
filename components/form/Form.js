import Cleave from "cleave.js/react";
import { validateEmail } from "../plugins/utils";
import { TweenMax } from "gsap";
import { isMobile } from "react-device-detect";
import _ from "lodash";

function hasNumber(str) {
  return /[0-9]/.test(str);
}

function hasLetter(str) {
  return /[a-zA-Z]/.test(str);
}

function hasNumberAndLetter(str) {
  return hasNumber(str) && hasLetter(str);
}

class ValidationType {
  static get NOT_EMPTY() {
    return "NOT_EMPTY";
  }
  static get MIN_LENGTH() {
    return "MIN_LENGTH";
  }
  static get EMAIL() {
    return "EMAIL";
  }
  static get ID_NO() {
    return "ID_NO";
  }
  static get PHONE() {
    return "PHONE";
  }
  static get LETTERS_AND_DIGITS() {
    return "LETTERS_AND_DIGITS";
  }
  static get DATE() {
    return "DATE";
  }
  static get DATE_TIME() {
    return "DATE_TIME";
  }
  static get TIME() {
    return "TIME";
  }
}

class Input extends React.Component {
  static NOT_EMPTY = "NotEmpty";
  static MIN_LENGTH = "MinLength";
  static EMAIL = "Email";
  static ID_NO = "Idno";
  static PHONE = "Phone";
  static LETTERS_AND_DIGITS = "LettersAndDigits";

  curValidateType;
  curMinLength;
  curMaxLength;
  curErrMessage;

  constructor(props) {
    super(props);

    this.curValidateType = Input.NOT_EMPTY;
    this.curMinLength = 1;
    this.curMaxLength = 0;
    this.curErrMessage = "";
    this.inputRef = React.createRef();
    this.state = { error: false, errMessage: "" };
  }

  get value() {
    return this.inputRef.current.value;
  }

  set value(val) {
    this.inputRef.current.value = val;
  }

  keypress() {
    if (document.getElementById("phone").value.length > "9") {
      var stringVal = document.getElementById("phone").value;
      //console.log(document.getElementById("phone").value);
      //console.log(stringVal)
      document.getElementById("phone").value = stringVal.substring(0, 10);
      //console.log(document.getElementById("phone").value)
    }
    return false;
  }

  validate({
    type = Input.NOT_EMPTY,
    minLength = 1,
    maxLength = 0,
    errMessage = "",
    shouldFocus = true,
  }) {
    this.curValidateType = type;
    this.curMinLength = minLength;
    this.curMaxLength = maxLength;
    this.curErrMessage = errMessage;

    if (type == Input.NOT_EMPTY) {
      if (
        !this.value ||
        this.value.length == 0 ||
        (maxLength > 0 && this.value.length > maxLength)
      ) {
        if (shouldFocus) this.focus();
        this.showError(errMessage);
        return false;
      } else {
        this.hideError();
      }
      return true;
    }

    if (type == Input.MIN_LENGTH) {
      if (
        !this.value ||
        this.value.length < minLength ||
        (maxLength > 0 && this.value.length > maxLength)
      ) {
        if (shouldFocus) this.focus();
        this.showError(errMessage);
        return false;
      } else {
        this.hideError();
      }
      return true;
    }

    if (type == Input.EMAIL) {
      if (
        !this.value ||
        !validateEmail(this.value) ||
        (maxLength > 0 && this.value.length > maxLength)
      ) {
        if (shouldFocus) this.focus();
        this.showError(errMessage);
        return false;
      } else {
        this.hideError();
      }
      return true;
    }

    if (type == Input.ID_NO) {
      // console.log(this.value, this.value.length)
      if (
        !this.value ||
        this.value.length < minLength ||
        (maxLength > 0 && this.value.length > maxLength)
      ) {
        if (shouldFocus) this.focus();
        this.showError(errMessage);
        return false;
      } else {
        this.hideError();
      }
      return true;
    }

    if (type == Input.PHONE) {
      console.log(this.value.length);
      if (
        !this.value ||
        this.value.charAt(0) != "0" ||
        this.value.length < minLength ||
        (maxLength > 0 && this.value.length > maxLength)
      ) {
        if (shouldFocus) this.focus();
        this.showError(errMessage);
        return false;
      } else {
        this.hideError();
      }

      return true;
    }

    if (
      type == Input.LETTERS_AND_DIGITS ||
      this.value.length < minLength ||
      (maxLength > 0 && this.value.length > maxLength)
    ) {
      // console.log(this.value, this.value.length)
      if (!this.value || !hasNumber(this.value) || !hasLetter(this.value)) {
        if (shouldFocus) this.focus();
        this.showError(errMessage);
        return false;
      } else {
        this.hideError();
      }
      return true;
    }

    return true;
  }

  focus() {
    this.inputRef.current.focus();
  }

  showError(message) {
    this.setState({ error: true, errMessage: message });
  }

  hideError() {
    this.setState({ error: false, errMessage: "" });
  }

  render() {
    return (
      <div className="item">
        <label>{this.props.label}</label>
        <div className={`ctPu ${this.state.error ? "error" : ""}`}>
          <input
            className={this.props.classIp}
            id={this.props.idIp}
            onKeyUp={(e) => this.keypress(this.curValidateType)}
            maxLength={this.props.lengthIp}
            type={this.props.tyleIp}
            placeholder={this.props.placeIP}
            ref={this.inputRef}
            value={this.props.value}
            onChange={(e) =>
              this.validate({
                type: this.curValidateType,
                minLength: this.curMinLength,
                maxLength: this.curMaxLength,
                errMessage: this.curErrMessage,
                shouldFocus: false,
              })
            }
          ></input>
          <span>{this.state.errMessage}</span>
        </div>
      </div>
    );
  }
}

class InputCode extends Input {
  constructor(props) {
    super(props);

    this.state = { shouldShowAlert: false, isOk: false };
    this.hintBtn = React.createRef();
    this.inputRef = React.createRef();
    this.openHint = this.openHint.bind(this);
    this.closeHint = this.closeHint.bind(this);
  }

  openHint() {
    // e.preventDefault();
    // console.log(hintBtn.current.classList)
    var element = this.hintBtn.current;

    if (isMobile) {
      TweenMax.set(element.nextSibling, { y: 10, autoAlpha: 0 });
      TweenMax.to(element.nextSibling, 0.5, { y: 0, autoAlpha: 1 });
    } else {
      TweenMax.set(element.nextSibling, { x: -10, autoAlpha: 0 });
      TweenMax.to(element.nextSibling, 0.5, { x: 0, autoAlpha: 1 });
    }
  }

  closeHint() {
    // e.preventDefault();
    // console.log(hintBtn.current.classList)
    var element = this.hintBtn.current;
    TweenMax.to(element.nextSibling, 0.5, { x: -10, autoAlpha: 0 });
  }

  inputChangeHandler(e) {
    if (this.inputRef.current.value.length == 12) {
      this.setState({
        isOk: true,
        shouldShowAlert: true,
      });
    } else {
      if (this.inputRef.current.value.length == 0) {
        this.setState({
          isOk: false,
          shouldShowAlert: false,
        });
      } else {
        this.setState({
          isOk: false,
          shouldShowAlert: true,
        });
      }
    }
  }

  render = () => (
    <>
      <label className="center">Mã số dự thưởng</label>
      <div className={`codePuWrap ${this.state.error ? "error" : ""}`}>
        <input
          type="text"
          placeholder="_ _ _ _ _ _ _ _ _ _ _ _"
          ref={this.inputRef}
          onChange={this.inputChangeHandler.bind(this)}
        ></input>
        <span>{this.state.errMessage}</span>

        {/* {this.state.shouldShowAlert ?
                    <div className="ok" style={{ color: this.state.isOk ? "green" : "red" }}>{this.state.isOk ? "OK" : "Not OK"}</div> : ""
                } */}

        <div className="hint">
          <span
            onMouseEnter={this.openHint}
            onMouseLeave={this.closeHint}
            ref={this.hintBtn}
          ></span>
          <div className="imgHint">
            <img src="/images/ticket.jpg"></img>
          </div>
        </div>
      </div>
    </>
  );
}

class InputDate extends React.Component {
  constructor(props) {
    super(props);

    this.inputElement = null;
    this.inputRef = React.createRef();
    this.state = { error: false, errMessage: "" };
  }

  get value() {
    return this.inputElement.value;
  }

  set value(val) {
    this.inputElement.value = val;
  }
  validate({ type = "NotEmpty", errMessage = "" }) {
    if (!this.value && this.value.length == 0) {
      this.focus();
      this.showError(errMessage);
      return false;
    } else {
      this.hideError();
    }

    return true;
  }

  focus() {
    this.inputElement.focus();
  }

  showError(message) {
    this.setState({ error: true, errMessage: message });
  }

  hideError() {
    this.setState({ error: false, errMessage: "" });
  }

  render() {
    return (
      <div className="item">
        <label>{this.props.label}</label>
        <div className={`ctPu ${this.state.error ? "error" : ""}`}>
          {/* <input type={this.props.tyleIp} placeholder={this.props.placeIP} ref={this.inputRef} value={this.props.value} ></input> */}
          <Cleave
            placeholder={this.props.placeIP}
            options={{ date: true, datePattern: ["d", "m", "Y"] }}
            htmlRef={(ref) => (this.inputElement = ref)}
          />
          <span>{this.state.errMessage}</span>
        </div>
      </div>
    );
  }
}

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      error: false,
      errMessage: "",
      classList: [],
    };

    // console.log(this.options)

    this.ref = React.createRef();
  }

  get value() {
    // console.log(this.ref, this.ref.selectedIndex, this.ref[this.ref.selectedIndex], this.ref[this.ref.selectedIndex].value)
    // return this.ref[this.ref.selectedIndex].value
    // console.log(this.ref.selectedIndex)
    this.setState((state) => (state.selectedIndex = this.ref.selectedIndex));
    return this.props.options[this.ref.selectedIndex];
  }

  set value(val) {
    // this.ref.value = val
    var selectedIndex;
    this.props.options.map((value, index) => {
      if (value == val) {
        selectedIndex = index;
      }
    });
    if (selectedIndex) {
      this.ref.selectedIndex = selectedIndex;
      this.setState((state) => (state.selectedIndex = selectedIndex));
    }
  }

  componentDidMount() {
    // console.log(this.value)
    if (this.props.onChange) {
      this.props.onChange(this.value);
    }
  }

  addClass(className) {
    console.log(className);
    var classes = this.state.classList || [];

    if (!classes.includes(className)) {
      classes.push(className);
      this.setState({
        classList: classes,
      });
    }
  }

  showError(message) {
    console.log(message);
    this.setState({
      error: true,
      errMessage: message,
    });
  }

  hideError() {
    this.setState({
      error: false,
      errMessage: "",
    });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  // console.log(props)
  // console.log(isArrayEqual(this.props, props))
  // if (!isArrayEqual(this.props.options, props.options)) {
  //     console.log("should render again")
  //     this.setState((state) => state.options = props.options)
  //     return true
  // } else {
  //     return false
  // }

  // this.setState((state) => state.options = props.options)

  // console.log(this.props.options.length, nextProps.options.length)
  // if (this.props.options != nextProps.options) return true

  // return false
  // }

  render() {
    return (
      <>
        <style jsx>{`
          .ctPu {
            padding-right: 0;
            &:after {
              content: "";
              display: block;
              width: 0;
              height: 0;
              border-top: 10px solid #787878;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              position: absolute;
              top: 50%;
              right: 10px;
              transform: skew(8deg) translate(0, -50%);
            }
          }
        `}</style>

        <div className="item">
          <label>{this.props.label}</label>
          <div className={`ctPu ${this.state.error ? "error" : ""}`}>
            <select
              className={this.state.classList.join(" ")}
              ref={(ref) => (this.ref = ref)}
              onChange={() => {
                console.log(this.value);
                //this.addClassFirst(this.value)
                if (this.value.id != -1) {
                  this.addClass("hasVl");
                }
                if (this.props.onChange) this.props.onChange(this.value);
              }}
            >
              {/* {this.props.firstOption ? <option  value="" >{ this.props.firstOption }</option> : ''} */}

              {(this.props.options || []).map((value, index) => (
                <option key={index} value={value.name || value}>
                  {value.name || value || ""}
                </option>
              ))}
              {/* <option value="9999" name="dailykhac">Đại lý khác</option> */}
            </select>
            <span>{this.state.errMessage}</span>
          </div>
        </div>
      </>
    );
  }
}

class Switcher extends React.Component {
  constructor(props) {
    super(props);

    this.options = props.options || [];
    this.state = { index: 0, value: this.options[0] };
  }

  get value() {
    return this.state.value;
  }

  set value(val) {
    this.setState((state) => (state.value = val));
  }

  select(index) {
    this.setState({ index: index, value: this.options[index] });
    if (index == 0) {
      TweenMax.to(document.getElementById("nonBike"), 0.5, {
        y: 0,
        height: "auto",
        autoAlpha: 1,
      });
    } else {
      TweenMax.to(document.getElementById("nonBike"), 0.5, {
        y: 0,
        height: 0,
        autoAlpha: 0,
      });
    }
    console.log(index);
  }

  render = () => (
    <div className="linkQues">
      {this.options.map((value, index) => (
        <a
          className={index == this.state.index ? "active" : ""}
          onClick={() => this.select(index)}
          key={index}
        >
          <span>{value.name || value}</span>
        </a>
      ))}
    </div>
  );
}

export { ValidationType, Input, InputCode, InputDate, Select, Switcher };
