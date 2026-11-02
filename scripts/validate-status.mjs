import { readFile } from "node:fs/promises";

const file = new URL("../src/data/status.json", import.meta.url);
const registry = JSON.parse(await readFile(file, "utf8"));
const allowed = new Set([
  "implemented", "tested", "integrated", "prototype",
  "designed", "planned", "blocked", "not-verified", "verified",
]);
const errors = [];

if (registry.schemaVersion !== 1) errors.push("schemaVersion must be 1");
if (!/^\d{4}-\d{2}-\d{2}$/.test(registry.lastReviewed ?? "")) {
  errors.push("lastReviewed must use YYYY-MM-DD");
}
if (!Array.isArray(registry.entries)) errors.push("entries must be an array");

const ids = new Set();
for (const [index, entry] of (registry.entries ?? []).entries()) {
  const prefix = `entries[${index}]`;
  if (!entry.id || ids.has(entry.id)) errors.push(`${prefix}.id must be present and unique`);
  ids.add(entry.id);
  if (!entry.name?.trim()) errors.push(`${prefix}.name is required`);
  if (!allowed.has(entry.status)) errors.push(`${prefix}.status is not an allowed value`);
  if (!entry.scope?.trim()) errors.push(`${prefix}.scope is required`);
  if (!entry.limitations?.trim()) errors.push(`${prefix}.limitations is required`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.verifiedOn ?? "")) {
    errors.push(`${prefix}.verifiedOn must use YYYY-MM-DD`);
  }
  if (!Array.isArray(entry.evidence)) errors.push(`${prefix}.evidence must be an array`);
  for (const url of entry.evidence ?? []) {
    try {
      const parsed = new URL(url);
      if (parsed.protocol !== "https:") errors.push(`${prefix}.evidence URLs must use HTTPS`);
    } catch {
      errors.push(`${prefix}.evidence contains an invalid URL`);
    }
  }
  if (entry.status === "verified" && !entry.verificationCriteria?.trim()) {
    errors.push(`${prefix}.verificationCriteria is required for verified status`);
  }
  if (entry.status !== "not-verified" && (entry.evidence?.length ?? 0) === 0) {
    errors.push(`${prefix} requires evidence for status ${entry.status}`);
  }
}

if (errors.length) {
  console.error("Status registry validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Validated ${registry.entries.length} Aurora status records.`);
}
