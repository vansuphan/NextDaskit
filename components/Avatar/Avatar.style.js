import css from "styled-jsx/css";



const DEFAULT = {
    offlineColor: "#B1C2D9",
    onlineColor: "#00D97E",
    borderRadius: 6,
}

const defaultStyle = css`

    .avatar {

        position: relative;
        display: inline-block;

        .avatar-img, 
        img {
            position: relative;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
            border-color: transparent;
            border-radius: ${DEFAULT.borderRadius}px;

            &.rounded-circle {
                border-radius: 50%;
            }
        }   


        &:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${DEFAULT.offlineColor};
            border-radius: ${DEFAULT.borderRadius}px;
            z-index: 0;
            
        }

        &[class*="status-"] {
            &:before {
                content: "";
                position: absolute;
                width: 20%;
                height: 20%;
                bottom: 0;
                right: 0;
                border-radius: ${DEFAULT.borderRadius}px;
                background-image: url();
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                z-index: 2;
            }

            
        }

        &.status-default {
            &:before {
                background-color: transparent;
            }
        }
        &.status-offline {
            &:before {
                background-color: ${DEFAULT.offlineColor};
                border: 1px solid #ffffff;
                border-radius: 50%;
            }
            &:after {
                border-radius: 50%;
            }
        }
        &.status-online {
            &:before {
                background-color: ${DEFAULT.onlineColor};
                border: 1px solid #ffffff;
                border-radius: 50%;
            }
            &:after {
                border-radius: 50%;
            }
        }


        /* &.ratio-4-3 {
            height: ${DEFAULT.height / 4 * 3}px;
        } */

    }



`;

export {
    defaultStyle
}



