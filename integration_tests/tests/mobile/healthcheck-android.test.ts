// import { expect } from "chai";
// import { App } from "../../src/mobile/app";

// const androidCapabilities = {
//   platformName: "Android",
//   "appium:automationName": "UiAutomator2",
//   "appium:deviceName": "emulator-5554",
//   "appium:appPackage": "com.remitee.app.qa", // "com.remitee.app.qa"
//   "appium:appActivity": "com.remitee.app.MainActivity", // "com.remitee.app.MainActivity"
//   "appium:locale": "US",
//   "appium:language": "en",
// };

// describe("Healthcheck Android Appium connection", function () {
//   let app: App;

//   before(async () => {
//     app = new App();
//     await app.init(androidCapabilities);
//   });

//   after(async () => {
//     await app.quit();
//   });

//   it("ingresa a la pantalla remiteros", async () => {
//     const remiteros = await app.findElement(
//       'android=new UiSelector().text("Remiteros")'
//     );
//     await remiteros.click();
//   });

//   it("checks battery level on Settings App", async () => {
//     const imageButton = await app.findElement("android.widget.ImageButton");
//     await imageButton.click();
//     const editText = await app.findElement(
//       "android=new UiSelector().className(android.widget.EditText)"
//     );
//     await editText.click();
//     await editText.setValue("bat");
//     const linearLayout = await app.findElement(
//       "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.LinearLayout[3]/android.widget.LinearLayout"
//     );
//     await linearLayout.click();
//     const progressBar = await app.findElement(
//       "android=new UiSelector().className(android.widget.ProgressBar)"
//     );
//     expect(await progressBar.isDisplayed()).to.be.true;
//   });
// });
