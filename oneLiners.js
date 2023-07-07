// Copy to clipboard / AKA Clipboard API
// const copyToClipboard = (text) =>
//   navigator.clipboard?.writeText && navigator.clipboard.writeText(text);

// copyToClipboard("Hello copy to clipboard");

// Unique Elements

const getUnique = (arr) => [...new Set(arr)];
const arr = [1, 2, 2, 4, 5, 6, 6, 7, 7, 5, 5, 5, 8];
console.log(getUnique(arr));

// Detect Dark Mode

// const isDarkMode = () =>
//   window.matchMedia &&
//   window.matchMedia("(prefers-color-scheme: dark)").matches;

// console.log(isDarkMode());

// Scroll to top

const scrollToTop = (element) =>
  element.scrollIntoView({ behaviour: "smooth", block: "start" });

// Generate Random Color

const randomColorGenerator = `#${Math.floor(Math.random() * (256 * 256 * 256))
  .toString(16)
  .padStart(6, 0)}`;
console.log(randomColorGenerator);

// Web Share API
if (navigator.share) {
  navigator
    .share({
      title: "Web Share API Demo",
      url: "https://www.linkedin.com/in/samsulalomlaskar/",
    })
    .then(() => {
      console.log("Thanks for sharing");
    })
    .catch(console.error);
} else {
  console.log("Failed to share");
}

// Vibration API
if (navigator.vibrate) {
}
navigator.vibrate(500);

// Media Capture API
navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    //use the video element
  });

// Web animations API

let element = document.getElementById("circle");
let animation = element.animate([{ opacity: 0 }, { opacity: 1 }], {
  duration: 300,
  easing: "linear",
});

// Detect Device
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|Blackberry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";
console.log(detectDeviceType());

// Get the parameters from the URL

const url = new URL(window.location.href);
const paramValue = url.searchParams.get("paramName");
console.log(paramValue);

// Deep copy

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

// wait function

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const asyncFunc = async () => {
  await wait(300);
  console.log("Async");
};

asyncFunc();
