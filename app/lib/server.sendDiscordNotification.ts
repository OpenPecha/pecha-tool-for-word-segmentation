import webhook from "webhook-discord";

// Define a map to store the timestamps of the last calls for each user
const userLastCallTimestamps = new Map();

export async function sendNotification(
  username: string | undefined,
  message: string,
  type: "success" | "info"
) {
  let webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  const Hook = new webhook.Webhook(webhookUrl);

  if (!username) return null;

  if (type === "success") {
    Hook.success(username, message);
  }

  // Check if the user's last call timestamp exists
  if (userLastCallTimestamps.has(username)) {
    // Get the timestamp of the last call
    const lastCallTimestamp = userLastCallTimestamps.get(username);

    // Calculate the time elapsed since the last call
    const currentTime = Date.now();
    const timeElapsed = currentTime - lastCallTimestamp;

    // Check if the user has made more than 2 calls in the last second
    if (timeElapsed < 1000 && userLastCallTimestamps.get(username) >= 3) {
      return "Rate limit exceeded. Please try again later.";
    }
  }

  // Record the current timestamp for the user's call
  userLastCallTimestamps.set(username, Date.now());

  if (type === "info") {
    Hook.info(username, message);
  }

  return "Notification sent successfully.";
}
