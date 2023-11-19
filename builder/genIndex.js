const fs = require("fs");
const path = require("path");

const genIndex = function (markup) {
  let html = fs.readFileSync(path.join(__dirname, "../src/template.html"), {
    encoding: "utf-8",
  });

  let readTime = "",
    readVar = "";

  if (markup.length) {
    readTime = (markup.split(" ").length / 200) * 60;
    readVar = `<style>:root{
      --readTime: ${Math.round(readTime) + 15}s;
    }</style>`;
  }

  html = html
    .replace("{{^READ_TIME}}", readVar)
    .replace("{{^SCROLL_MSG}}", markup)
    .replace(
      "{{^HBD_MSG}}",
      process.env.HBD_MSG || "To my dearest Pratibha(sweety),



As you turn 19 today, my heart overflows with emotions that words can barely express. You have blossomed into an extraordinary individual, radiating warmth, kindness, and an infectious zest for life.



From the moment our paths intertwined, you have brought a kaleidoscope of colors into my world, painting my days with laughter, joy, and a l■■■ that defies definition. Your presence is like a soothing balm, calming my anxieties and igniting a flame of passion within me.



Though I've yet to utter the words "I love you," the depth of my feelings resonates in every beat of my heart, every stolen glance, and every unspoken thought. You are the sun that guides me through the darkest nights, the moon that illuminates my dreams, and the very air that I breathe.

Today, I extend my heartfelt gratitude to your mother, the woman who nurtured and raised you into the remarkable person you are today. Her love, care, and sacrifices have shaped your character, instilling in you the values that make you so special.Please thank her on my behalf.

As you embark on this new chapter of your life, I pledge to be your unwavering support, your confidant, and your cheerleader. Together, let us explore the world's wonders, conquer our fears, and chase our dreams with unwavering determination.

To celebrate this momentous occasion, I will distribute chocolate among the children, spreading sweetness and joy in your honor. May their smiles reflect the happiness you bring into my life.

My Honey, you are the embodiment of beauty, grace, and strength. Your existence means the world to me for now, and I cherish every moment we share. As you pursue your dreams with unwavering focus, know that I will always be your rock, your partner in crime, and the one who l■■■□ you more than words can say.

Happy 19th birthday, my l■■■. May this year be filled with laughter, l■■■, and the realization of your wildest dreams.



With all my heart,

The void only you saw"
    )
    .replace("{{^NAME}}", process.env.NAME)
    .replace("{{^NICKNAME}}", process.env.NICKNAME || process.env.NAME);

  fs.writeFileSync(path.join(__dirname, "../src/index.html"), html, {
    encoding: "utf-8",
  });
  console.log("Index Generated");
};

module.exports = genIndex;
