"use client";

import { useState, useEffect } from "react";
import { 
  FileText, 
  Search, 
  ShieldCheck, 
  Clock, 
  User, 
  Terminal,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { AuditLogEntry } from "@/lib/audit";

export default function AdminAuditLogsPage() {
  const [logs, setLogs] = useState<AuditLogEntry[]>([]);
  const [search, setSearch] = useState("");
  const [expandedLogId, setExpandedLogId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/audit-logs")
      .then((res) => res.json())
      .then((data) => {
        if (data.logs) setLogs(data.logs);
      })
      .catch(console.error);
  }, []);

  const filtered = logs.filter((l) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      l.entity.toLowerCase().includes(q) ||
      l.details.toLowerCase().includes(q) ||
      l.userName.toLowerCase().includes(q) ||
      l.action.toLowerCase().includes(q)
    );
  });

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <div className="inline-flex items-center gap-2 self-start bg-primary-100 text-primary-900 px-3 py-1 rounded-full text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Immutable Integrity Trail</span>
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
            System Audit Log & Compliance Ledger
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            Every administrative mutation, approval, clinical status change, and login event is permanently recorded with full state diffs.
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-zinc-400 absolute start-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search audit trail..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2.5 ps-9 rounded-xl border border-zinc-300 text-xs focus:outline-none focus:border-accent-gold bg-surface-cream"
          />
        </div>
      </div>

      {/* Audit Log Table */}
      <div className="bg-surface-card rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-start text-xs sm:text-sm">
            <thead className="bg-surface-muted/60 border-b border-zinc-200 text-charcoal font-bold">
              <tr>
                <th className="p-4 text-start">Timestamp</th>
                <th className="p-4 text-start">Action</th>
                <th className="p-4 text-start">Entity</th>
                <th className="p-4 text-start">Acting Administrator</th>
                <th className="p-4 text-start">Details</th>
                <th className="p-4 text-end">Diff</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 font-mono text-xs">
              {filtered.map((log) => {
                const isExpanded = expandedLogId === log.id;
                return (
                  <tr key={log.id} className="hover:bg-surface-cream/50">
                    <td className="p-4 text-zinc-500 whitespace-nowrap">
                      {new Date(log.timestamp).toLocaleString()}
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded font-bold text-[11px] ${
                        log.action === "APPROVE"
                          ? "bg-green-100 text-status-green"
                          : log.action === "CREATE"
                          ? "bg-blue-100 text-blue-800"
                          : log.action === "REJECT"
                          ? "bg-red-100 text-alert-red"
                          : "bg-amber-100 text-amber-800"
                      }`}>
                        {log.action}
                      </span>
                    </td>
                    <td className="p-4 font-bold text-primary-900">
                      {log.entity}
                    </td>
                    <td className="p-4 font-sans text-charcoal">
                      <span className="font-semibold block">{log.userName}</span>
                      <span className="text-[11px] text-zinc-400">{log.userRole}</span>
                    </td>
                    <td className="p-4 font-sans text-charcoal max-w-xs">
                      {log.details}
                    </td>
                    <td className="p-4 text-end">
                      {(log.oldData || log.newData) ? (
                        <button
                          onClick={() => setExpandedLogId(isExpanded ? null : log.id)}
                          className="inline-flex items-center gap-1 text-[11px] text-primary-900 font-bold hover:text-accent-gold-dark"
                        >
                          <span>{isExpanded ? "Hide Diff" : "View Diff"}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      ) : (
                        <span className="text-zinc-400 text-[11px]">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Expanded Diff Viewer Modal/Drawer */}
      {expandedLogId && (
        <div className="bg-primary-900 text-surface-cream rounded-2xl p-6 font-mono text-xs flex flex-col gap-3 shadow-xl">
          <div className="flex items-center justify-between border-b border-primary-700 pb-2">
            <span className="font-bold text-accent-gold">JSON State Diff Inspection (ID: {expandedLogId})</span>
            <button onClick={() => setExpandedLogId(null)} className="text-zinc-400 hover:text-white">✕</button>
          </div>
          <pre className="bg-primary-800 p-4 rounded-xl overflow-x-auto text-[11px] text-green-300">
            {JSON.stringify(
              logs.find((l) => l.id === expandedLogId),
              null,
              2
            )}
          </pre>
        </div>
      )}
    </div>
  );
}
