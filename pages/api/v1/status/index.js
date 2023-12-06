import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const maxConnections = await database.query("SHOW max_connections;");
  const openedConnections = await database.query(
    "SELECT * FROM pg_stat_activity;",
  );
  const version = await database.query("SHOW server_version;");

  response.status(200).json({
    updated_at: updatedAt,
    max_connections: maxConnections.rows[0].max_connections,
    opened_connections: openedConnections.rows.length,
    version: version.rows[0].server_version,
  });
}

export default status;
