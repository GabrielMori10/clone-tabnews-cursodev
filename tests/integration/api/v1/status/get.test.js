test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const respondeBody = await response.json();
  console.log(respondeBody);

  // Updated At
  const parsedUpdatedAt = new Date(respondeBody.updated_at).toISOString();
  expect(respondeBody.updated_at).toEqual(parsedUpdatedAt);

  // Max Connections
  expect(typeof respondeBody.max_connections).toBe("string");
  expect(+respondeBody.max_connections).not.toBeNaN();
  expect(+respondeBody.max_connections).toBeGreaterThan(0);

  // Opened Connections
  expect(typeof respondeBody.opened_connections).toBe("number");

  // Postgres Version
  expect(typeof respondeBody.version).toBe("string");
  expect(+respondeBody.version).not.toBeNaN();
});
