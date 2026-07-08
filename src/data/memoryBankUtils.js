export function buildSavePointPayload({
  selectedModule,
  doctrine = [],
  backupIndex = [],
  status = "Owner-gated export only. No secrets stored in the frontend.",
}) {
  return {
    savePoint: new Date().toISOString(),
    selectedModule,
    status,
    doctrine,
    backupIndex,
  };
}
