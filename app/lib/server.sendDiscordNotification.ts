import webhook from "webhook-discord";

export async function sendNotification(
  username: string | undefined,
  message: string,
  type: "success" | "info"
) {
  let webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  const Hook = new webhook.Webhook(webhookUrl!);
  if (!username) return null;
  if (type === "success") {
    Hook.success(username, message);
  } else if (type === "info") {
    Hook.info(username, message);
  }
}
