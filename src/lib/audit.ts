export interface AuditLogEntry {
  id: string;
  userId: string;
  userName: string;
  userRole: string;
  action: "CREATE" | "UPDATE" | "DELETE" | "APPROVE" | "REJECT" | "STATUS_CHANGE";
  entity: string;
  entityId: string;
  details: string;
  oldData?: Record<string, unknown> | null;
  newData?: Record<string, unknown> | null;
  timestamp: string;
  ipAddress?: string;
}

// In-memory persistent array for the running server instance
const auditLogsStorage: AuditLogEntry[] = [
  {
    id: "audit-001",
    userId: "usr-super-admin",
    userName: "Zulaid Chaudhary (Founder)",
    userRole: "SUPER_ADMIN",
    action: "CREATE",
    entity: "SystemSetting",
    entityId: "LEGAL_STATUS",
    details: "Configured initial foundation legal status to 'Registration in progress'",
    oldData: null,
    newData: { status: "Registration in progress" },
    timestamp: "2026-11-20T10:15:00Z",
    ipAddress: "127.0.0.1",
  },
  {
    id: "audit-002",
    userId: "usr-medical-coord",
    userName: "Dr. Medical Coordinator",
    userRole: "MEDICAL_COORDINATOR",
    action: "STATUS_CHANGE",
    entity: "MedicalCase",
    entityId: "ZCF-MED-2026-0028",
    details: "Verified clinical necessity for pediatric cardiac patient; informed consent archived",
    oldData: { status: "PENDING_VETTING" },
    newData: { status: "APPROVED", hasInformedConsent: true },
    timestamp: "2026-11-21T14:30:00Z",
    ipAddress: "127.0.0.1",
  },
];

export async function logAuditAction(entry: Omit<AuditLogEntry, "id" | "timestamp">): Promise<AuditLogEntry> {
  const newEntry: AuditLogEntry = {
    ...entry,
    id: `audit-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`,
    timestamp: new Date().toISOString(),
  };

  auditLogsStorage.unshift(newEntry);
  return newEntry;
}

export async function getAuditLogs(): Promise<AuditLogEntry[]> {
  return [...auditLogsStorage];
}
