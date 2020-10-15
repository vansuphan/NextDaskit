import React from "react";
class Avatar2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasStatus: this.props.hasStatus ? this.props.hasStatus : false,
            status: this.props.online ? this.props.online : null,
            size: this.props.size ? this.props.size : null,
            srcImg: this.props.srcImg ? this.props.srcImg : "../images/avatar.jpg",
            shape: this.props.shape ? this.props.shape : "rounded-circle",
            ratio: this.props.ratio ? this.props.ratio : false,
            initials: this.props.initials ? this.props.initials : false,
            typeGroup: this.props.typeGroup ? this.props.typeGroup : false,
        }
    }
    
    render(){
        return(
            <>
                {
                    this.props.typeGroup === true? 
                        <div className={"avatar-group"}>
                            {this.props.children}
                            
                            <style jsx-global>{`
                                .avatar-group {
                                    display: inline-flex;
                                    .avatar{
                                        border: 0.1rem solid white;
                                    }
                                    .avatar-lg{
                                        border: 0.2rem solid white;
                                    }
                                    .avatar-xs{
                                        border: 0.08rem solid white;
                                    }
                                }
                                .avatar-group .avatar:hover {
                                    -webkit-mask-image: none;
                                    mask-image: none;
                                    z-index: 1;
                                }
                                .avatar-group .avatar:not(:last-child) {
                                    -webkit-mask-size: 100% 100%;
                                    mask-size: 100% 100%;
                                }
                                .avatar-group .avatar-lg+.avatar-lg {
                                    margin-left: -1rem;
                                }
                                .avatar-group .avatar+.avatar {
                                    margin-left: -.75rem;
                                }
                                .avatar-group .avatar-xs+.avatar-xs {
                                    margin-left: -.40625rem;
                                }
                            `}</style>
                        </div>
                    : 
                        <div className={
                            `avatar ${this.state.hasStatus === true ? (this.state.status === true ? "avatar-online" : "avatar-offline") : ""} ${this.state.size ? "avatar-"+this.state.size : ""} ${this.state.ratio === true ? "avatar-4by3" : ""}`
                        }>
                            {
                                this.state.initials === true ? 
                                    <span className={`avatar-title ${this.state.shape ? this.state.shape : ""}`}>
                                        {this.props.initialsName ? this.props.initialsName : "DM" }
                                    </span> 
                                    : <img src={this.state.srcImg} alt="" className={`avatar-img ${this.state.shape ? this.state.shape : ""}`}/>
                            }
                            <style jsx>{`
                                .avatar{
                                    position: relative;
                                    display: inline-block;
                                    width: 3rem;
                                    height: 3rem;
                                    font-size: 1rem;
                                }    
                                .avatar-xxl {
                                    width: 5.125rem;
                                    height: 5.125rem;
                                    font-size: 1.70833rem;
                                    &::before{
                                        border: 4px solid white !important;
                                    }
                                }
                                .avatar-xl {
                                    width: 5.125rem;
                                    height: 5.125rem;
                                    font-size: 1.70833rem;
                                    &::before{
                                        border: 3px solid white !important;
                                    }
                                }
                                .avatar-lg {
                                    width: 4rem;
                                    height: 4rem;
                                    font-size: 1.33333rem;
                                }
                                .avatar-sm {
                                    width: 2.5rem;
                                    height: 2.5rem;
                                    font-size: .83333rem;
                                }
                                .avatar-xs {
                                    width: 1.625rem;
                                    height: 1.625rem;
                                    font-size: .54167rem;
                                    &::before{
                                        border: 1px solid white !important;
                                    }
                                }
                                .avatar-img {
                                    width: 100%;
                                    height: 100%;
                                    -o-object-fit: cover;
                                    object-fit: cover;
                                }
                                .avatar-offline::before, .avatar-online::before {
                                    content: '';
                                    position: absolute;
                                    bottom: 0%;
                                    right: 5%;
                                    width: 20%;
                                    height: 20%;
                                    border-radius: 50%;
                                    border: 2px solid white;
                                }
                                .avatar-online::before {
                                    background-color: #00d97e;
                                }
                                .avatar-offline::before {
                                    background-color: #b1c2d9;
                                }
                                .rounded-circle {
                                    border-radius: 50%!important;
                                }
                                .rounded {
                                    border-radius: .375rem!important;
                                }
                                .avatar.avatar-4by3 {
                                    width: 4rem;
                                }
                                .avatar-xxl.avatar-4by3 {
                                    width: 10.66667rem;
                                }
                                .avatar-xl.avatar-4by3 {
                                    width: 6.83333rem;
                                }
                                .avatar-lg.avatar-4by3 {
                                    width: 5.33333rem;
                                }
                                .avatar-title {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    width: 100%;
                                    height: 100%;
                                    line-height: 0;
                                    background-color: #b1c2d9;
                                    color: #fff;
                                }
                               
                                @media (min-width: 768px){
                                    .avatar-xxl {
                                        width: 8rem;
                                        height: 8rem;
                                        font-size: 2.66667rem;
                                    }
                                }
                                @media (min-width: 768px){
                                    .avatar-xxl {
                                        width: 8rem;
                                        height: 8rem;
                                        font-size: 2.66667rem;
                                    }
                                }
                            `}</style>
                        </div>
                }
            </>
        )
    }
}
export default Avatar2;