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
