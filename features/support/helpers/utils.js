const sharp = require("sharp");

module.exports.screenShotError = (driver, error, context) => {
  return driver.takeScreenshot().then((screenShot) => {
    // Convert base64 screenshot to a buffer
    const screenShotBuffer = Buffer.from(screenShot, "base64");

    // Resize the screenshot
    return sharp(screenShotBuffer)
      .resize(1890, 900, { fit: "cover", position: "top" })
      .toBuffer()
      .then((resizedBuffer) => {
        // Attach the resized screenshot to the report
        context.attach(resizedBuffer, "image/png");
        // Re-throw the error to mark the step as failed
        throw error;
      })
      .catch((resizeError) => {
        console.error("\nFailed to resize screenshot:\n", resizeError);
        throw error; // Re-throw original error if resizing fails
      });
  });
};
