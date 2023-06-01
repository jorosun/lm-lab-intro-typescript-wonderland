import { enterTheRabbitHole } from "./src/chapter_1/chapter_1_rabbit_hole";
import { clear, print, askQuestion } from "./src/ui/console";

export function haveAdventures(): void {
  clear(false);
  print("--------------------------");
  print("| Welcome to Wonderland! |");
  print("--------------------------");

  // askQuestion(`What's your name? `, failImmediately); // 👉 FIXME ❌
  askQuestion(`What's your name? `, storeName);
}

function startAdventure(name: string): void {
  /*
  if (name && name.length > 0) {
    if (checkEntryCodeIsBiggerThanThree(numberBiggerThanThree)) {
      return enterTheRabbitHole(name);
    } else {
      print("***************************************");
      print(`Hi ${name}. Sadly, the entry code failed! ☹`);
      return endAdventure();
    }
    return enterTheRabbitHole(name);  
  } else {
    print(`I don't know who you are!`);
    return endAdventure();
  }
  */

  if (name === undefined) {
    print(`I don't know who you are!`);
    return endAdventure();
  } else {
    return enterTheRabbitHole(name);
  }
}

function failImmediately() {
  clear(false);
  return endAdventure();
}

function storeName(nameString: string) {
  if (!nameString) {
    failImmediately;
  } else {
    startAdventure(nameString);
  }
}
// const numberBiggerThanThree: any = "11"; // 👉 FIXME ❌

/* 👉 FIXME ❌
function checkEntryCodeIsBiggerThanThree(code: any) {
  return code > "3"; // 👉 FIXME ❌
}
*/

export function endAdventure(): void {
  print("***************************************");
  print("You did not make it through Wonderland. 😭");
  askQuestion("Press ENTER to restart! ", haveAdventures);
}

haveAdventures();
