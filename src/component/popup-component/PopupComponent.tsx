import { useState, useEffect, ReactNode, CSSProperties, ReactElement } from "react";

interface PopupComponentInterface {
    children: ReactNode;
    triggerOnDelay: boolean;
    delay: number;
    triggerOnScroll: boolean;
    scrollTriggerDistance: number;
    overlayStyles: CSSProperties;
    popupWrapperStyles: CSSProperties;
    popupContentStyles: CSSProperties;
    zIndex: number;
    closeIcon: ReactNode | ReactElement | string; 
    closeIconStyles: CSSProperties;
    cookieName: string;
    cookieExpirationDays: number;
}

const PopupComponent = (props:PopupComponentInterface) => {

    const [getActiveState, setActiveState] = useState(false);

    const handleScrollEvent = () => { 
        if(window.scrollY > props.scrollTriggerDistance) {
            setActiveState(true);
        }
    }

    const handleCookie = () => {
        const CurrentDate = new Date();
        CurrentDate.setTime(CurrentDate.getTime() + (props.cookieExpirationDays * 24 * 60 * 60 * 1000));
        const Expiration = "expires=" + CurrentDate.toUTCString();
        document.cookie = props.cookieName + "=" + true + ";" + Expiration + ";path=/";
    }

    function getCookie(name:string) {
        var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)')); 
        return match ? true : false;
    }

    useEffect(() => {

        if(getActiveState) {
            handleCookie();
        }
      
        if(props.triggerOnDelay && getCookie(props.cookieName) !== true) {
            setTimeout(() => {
                setActiveState(true);
            }, props.delay);
        }
        if(props.triggerOnScroll && getCookie(props.cookieName) !== true) {
            if(typeof window !== undefined || typeof window !== null) {
                window.addEventListener("scroll", handleScrollEvent);
            }
        }

        return () => {
            if(window !== undefined || window !== null) {
                window.removeEventListener("scroll", handleScrollEvent);
            }
        }
    }, [setActiveState, getActiveState, props.delay, props.triggerOnDelay]);

    return (
        <div className={getActiveState ? "popup-container active" : "popup-container"} style={{zIndex: props.zIndex}}>
            <div className="popup-wrapper" style={props.popupWrapperStyles}>
                <div className="close-container"><span className="close-icon" style={props.closeIconStyles} onClick={() => setActiveState(false)}>{props.closeIcon}</span></div>
                <div className="popup-content" style={props.popupContentStyles}>
                    {props.children}
                </div>
            </div>
            <div className="overlay" style={props.overlayStyles} onClick={() => setActiveState(false)}></div>
        </div>
    );
}

export default PopupComponent;