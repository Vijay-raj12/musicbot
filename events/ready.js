module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("-help | HD MUSIC", {
    type: "LISTENING",
    status:"dnd"
  });
};
