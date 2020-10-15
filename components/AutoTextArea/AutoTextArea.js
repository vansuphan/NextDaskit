import React from "react";
class AutoTextArea extends React.Component{
    constructor(props){
        super(props);
        this.textAreaRef = React.createRef();
        this.state = {
            status:false,
            text: this.props.text ? this.props.text : "",
            textAreaHeight:"30px",
            parentHeight: "auto"
        }
        this.onChange =(e)=> {
            console.log("onchange", this.textAreaRef.current.scrollHeight+"px");
            this.setState(()=>({...this.state,
                text:this.textAreaRef.current.value,
                status:!this.state.status,
                parentHeight: this.textAreaRef.current.scrollHeight+"px",
                textAreaHeight: "auto"
            }));
            console.log("textAreaRef value", this.textAreaRef.current.value);
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevState.status !== this.state.status){
            this.setState(()=>({...this.state,
                textAreaHeight: this.textAreaRef.current.scrollHeight+"px"
            }));
        }
    }
    render(){
        return(
        <div className="parentAutoTextArea">
            {this.props.label ? <label>{this.props.label}</label> : <></>}
			<textarea
                name ={this.props.name || "autoTextArea"}
                className="textAreaStyle"
                ref={this.textAreaRef}
                onChange={this.onChange}
                value={this.state.text}
                placeholder={this.props.placeholder ? this.props.placeholder :"Try typing something..."}
			/>
            <style jsx>{`
                .parentAutoTextArea{
                    min-height: ${this.state.parentHeight};
                    width: 100%;
                }
                .textAreaStyle{
                    width: 100%;
                    height: ${this.state.textAreaHeight};
                    display:block;
                    min-height: 100%;
                    max-height:${this.props.maxHeight ? this.props.maxHeight+"px" : "300px"};
                    padding: .5rem .75rem;
                    font-size: ${this.props.fontSize ? this.props.fontSize + "px" : ".9375rem"};
                    font-weight: 400;
                    color: ${this.props.color ? this.props.color : "#12263f"};
                    background-color: ${this.props.backgroundColor ? this.props.backgroundColor : "#fff"};
                    background-clip: padding-box;
                    border: 1px solid #d2ddec;
                    border-radius: ${this.props.borderRadius ? this.props.borderRadius+"px" : ".375rem"} ;
                    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                    outline: none;
                    &:focus{
                        border: ${this.props.borderFocusStyle ? this.props.borderFocusStyle : "1px solid #2c7be5"};
                    }
                }
            `}
            </style>
		</div>
        )
    }
}
export default AutoTextArea;