# Picture in Picture

## What's unique in this Project

- Picture in Picture is a vital feature for an user who can capture part or all of a screen for streaming, recording, or sharing from any of their desktop screens and browser tabs.
- This functionality provides user the abilty in which an user can pop a video out into small floating window that stays above all others, so that they can keep watching while doing other things.

<br/>

### Snapshots

- Choose what option to share the contents of your screens: Entire Screen, Window, or a Chrome (Browser) tab

<img src="assets/Screenshot 1.png" />
<img src="assets/Screenshot 2.png" />
<img src="assets/Screenshot 3.png" />

- The selected screen will start sharing the screen for the Picture-in-Picture project website

<img src="assets/Screenshot 4.png" />

- Click start button to start the feature. 
- As you can see, I have shared my Video song window:

<img src="assets/Screenshot 5.png" />
<img src="assets/Screenshot 6.png" />

### How does the Picture in Picture feature work?

- Let’s say our JavaScript has determined that the browser has picture-in-picture support enabled. 
- Let’s call requestPictureInPicture() on the video element when the button with #pipButton is clicked. 
- This method returns a promise that places the video in a mini window on the bottom-right side of the screen by default when resolved, although it can be moved around by the user.
- Resource:  <a href="https://css-tricks.com/an-introduction-to-the-picture-in-picture-web-api/"> Picture in Picture </a>

<br/>

- Screen Capture API and its getDisplayMedia() method is used in this project to capture part or all of a screen for streaming, recording, or sharing during a WebRTC conference session.
- Capturing screen contents as a live MediaStream is initiated by calling navigator.mediaDevices.getDisplayMedia(), which returns a promise that resolves to a stream containing the live screen contents.
- For the purposes of the Screen Capture API, a display surface is any content object that can be selected by the API for sharing purposes. Sharing surfaces include the contents of a browser tab, a complete window, all of the windows of an application combined into a single surface, and a monitor (or group of monitors combined together into one surface).
- Resource: <a href="https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture"> Screen capture API </a>
