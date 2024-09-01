# React Popup Component Simple

React popup wrapper component with popup config and trigger type options. 

## How it works

- The component works as a wrapper which allows custom popups. This compoenent also allows the use of custom cookie names & trigger types (Delay or On scroll).

## How to use

### Install

Installation: `npm install react-popup-component-simple`

### Usage

Import the package into your app:

`import { PopupComponent } from "react-popup-component-simple";`

#### Component Example:
```
    <PopupComponent 
        triggerOnDelay={false}
        triggerOnScroll={true}
        scrollTriggerDistance={400}
        delay={3000}
        zIndex={100}
        overlayStyles={{backgroundColor: "#131313", opacity: "0.8"}}
        popupWrapperStyles={{backgroundColor: "white", width: "60%", height: "500px"}}
        popupContentStyles={{padding: "1rem"}}
        closeIcon={<Image alt="" src={CloseIcon} height={24} width={24}></Image>}
        closeIconStyles={{padding: "1rem"}}
        cookieName={"custompopup"}
        cookieExpirationDays={1}
    >
        <h2>Example Popup Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, leo vel sodales auctor, lorem leo vehicula magna, nec tincidunt leo nunc vel diam. Aenean aliquet eleifend volutpat.</p> 
        <button>Click Here!</button>
    </PopupComponent>   
```
### Component Options:

    -  `triggerOnDelay={false}`
        On delay popup trigger type.

    -  `delay={3000}`
        Delay trigger time.

    -   `triggerOnScroll={true}` 
        On scroll popup trigger type.

    -  `scrollTriggerDistance={400}`
        Scroll trigger distance.

    -  `zIndex={100}`
        Z-index for modal.

    -  `overlayStyles={{backgroundColor: "#131313", opacity: "0.8"}}`
        Overlay styles.

    - `popupWrapperStyles={{backgroundColor: "white", width: "60%", height: "500px"}}`
        Popup wrapper styles.

    -  `popupContentStyles={{padding: "1rem"}}`
       Popup content styles

    -  `closeIcon={<Image alt="" src={CloseIcon} height={24} width={24}></Image>}`
        Close icon (Accepts strings, React elements and HTML).

    -  `closeIconStyles={{padding: "1rem"}}`
        Close icon styles.          

    -  `cookieName={"custompopup"}`
        Cookie name. 

    -  `cookieExpirationDays={1}`
        Days untill cookie expires.

 ## Example

![Popup example](https://raw.githubusercontent.com/RickyGoacher/react-popup-component-simple/main/assets/images/popup-example.png)
