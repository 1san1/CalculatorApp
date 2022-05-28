let inputScreen = document.getElementById("input1");
function entryInput(val) {
  inputScreen.value += val;
}
function answer() {
  number1 = eval(inputScreen.value);
  if (Number.isInteger(number1)) {
    inputScreen.value = number1;
  } else {
    inputScreen.value = number1.toFixed(3);
  }
}
function reset() {
  inputScreen.value = "";
}
function deleted() {
  inputScreen.value = inputScreen.value.slice(0, -1);
}
function change(val1) {
  let u = ["one", "two", "three"];
  let l = 0;
  while (l < 3) {
    if (u[l] === val1) {
      document.getElementById(val1).style.background =
        "var(--theme1-key-tog-bg)";
      // console.log(val1);
      themeChangeUpd(val1);
    } else {
      document.getElementById(u[l]).style.background =
        "var(--theme1-togg-keypad-bg)";
    }
    l++;
  }
}

const themecollUpd = [
  "-mainBg",
  "-togg-keypad-bg",
  "-scr-bg",
  "-keys-bg",
  "-keys-shadow",
  "-key-tog-bg",
  "-key-shadow1",
  "-key-bg",
  "-key-shadow",
  "-text-b",
  "-text-white",
  "-text-header",
  "-text-eq",
];

function parser1(themeN, listTemp) {
  let newList = [];
  const len = listTemp.length;
  for (let i = 0; i < len; i++) {
    newList.push("--" + themeN + listTemp[i]);
  }
  return newList;
}

const themecoll1U = parser1("theme1", themecollUpd);
const themecoll2U = parser1("theme2", themecollUpd);
const themecoll3U = parser1("theme3", themecollUpd);

// not updated theme list collection

// const themecoll1 = [
//   "--theme1-mainBg",
//   "--theme1-togg-keypad-bg",
//   "--theme1-scr-bg",

//   "--theme1-keys-bg",
//   "--theme1-keys-shadow",
//   "--theme1-key-tog-bg",
//   "--theme1-key-shadow1",
//   "--theme1-key-bg",
//   "--theme1-key-shadow",

//   "--theme1-text-b",
//   "--theme1-text-white",
//   "--theme1-text-header",
//   "--theme1-text-eq",
// ];

// const themecoll2 = [
//   "--theme2-mainBg",
//   "--theme2-togg-keypad-bg",
//   "--theme2-scr-bg",
//   "--theme2-keys-bg",
//   "--theme2-keys-shadow",
//   "--theme2-key-tog-bg",
//   "--theme2-key-shadow1",
//   "--theme2-key-bg",
//   "--theme2-key-shadow",
//   "--theme2-text-b",
//   "--theme2-text-white",
//   "--theme2-text-header",
//   "--theme2-text-eq",
// ];

// const themecoll3 = [
//   "--theme3-mainBg",
//   "--theme3-togg-keypad-bg",
//   "--theme3-scr-bg",
//   "--theme3-keys-bg",
//   "--theme3-keys-shadow",
//   "--theme3-key-tog-bg",
//   "--theme3-key-shadow1",
//   "--theme3-key-bg",
//   "--theme3-key-shadow",
//   "--theme3-text-b",
//   "--theme3-text-white",
//   "--theme3-text-header",
//   "--theme3-text-eq",
// ];

const deflt = [
  "hsl(222, 26%, 31%)",
  "hsl(223, 31%, 20%)",
  "hsl(224, 36%, 15%)",
  "hsl(225, 21%, 49%)",
  "hsl(224, 28%, 35%)",
  "hsl(6, 63%, 50%)",
  "hsl(6, 70%, 34%)",
  "hsl(30, 25%, 89%)",
  "hsl(28, 16%, 65%)",
  "hsl(221, 14%, 31%)",
  "white",
  "white",
  "white",
];

function themeChangePro(list1, list2) {
  const len = list1.length;
  for (let i = 0; i < len; i++) {
    document.documentElement.style.setProperty(list1[i], `var(${list2[i]})`);
  }
}
function themeChangeProDefl(list1, list2) {
  const len = list1.length;
  for (let i = 0; i < len; i++) {
    document.documentElement.style.setProperty(list1[i], list2[i]);
  }
}

function themeChangeUpd(val) {
  switch (val) {
    case "two":
      themeChangePro(themecoll1U, themecoll2U);
      break;

    case "three":
      themeChangePro(themecoll1U, themecoll3U);
      break;
    default:
      themeChangeProDefl(themecoll1U, deflt);
  }
}
