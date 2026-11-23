import { describe, it, expect } from "vitest";
import { getMedicalCases, getVolunteers, getDonations, getComplaints } from "@/lib/mock-data";

describe("Universal Tracking & Registry Resolution", () => {
  it("should find and resolve medical cases by reference number", () => {
    const medicalCases = getMedicalCases();
    expect(medicalCases.length).toBeGreaterThan(0);

    const firstCase = medicalCases[0];
    expect(firstCase.caseReferenceNumber).toMatch(/^ZCF-MED-/);
    expect(firstCase.hasInformedConsent).toBe(true);
    expect(firstCase.patientInitials).toBeDefined();
  });

  it("should maintain volunteer applications with valid tracking codes", () => {
    const volunteers = getVolunteers();
    expect(volunteers.length).toBeGreaterThan(0);

    const firstVol = volunteers[0];
    expect(firstVol.applicationNumber).toMatch(/^ZCF-VOL-|^V-2026-/);
    expect(firstVol.fullName).toBeDefined();
    expect(["PENDING", "APPROVED", "INTERVIEW_SCHEDULED", "REJECTED"]).toContain(firstVol.status);
  });

  it("should track verifiable donations with unique digital receipt numbers", () => {
    const donations = getDonations();
    expect(donations.length).toBeGreaterThan(0);

    const firstDon = donations[0];
    expect(firstDon.receiptNumber).toMatch(/^ZCF-REC-|^ZCF-2026-/);
    expect(firstDon.amount).toBeGreaterThan(0);
    expect(firstDon.status).toBe("COMPLETED");
  });

  it("should support confidential grievance tracking references", () => {
    const complaints = getComplaints();
    expect(complaints.length).toBeGreaterThan(0);

    const firstCmp = complaints[0];
    expect(firstCmp.trackingReference).toMatch(/^ZCF-CMP-/);
    expect(firstCmp.isConfidential).toBe(true);
  });
});
