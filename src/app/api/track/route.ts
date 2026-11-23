import { NextRequest, NextResponse } from "next/server";
import {
  getMedicalCases,
  getVolunteers,
  getMemberships,
  getAnimalRescues,
  getDonations,
  getComplaints,
} from "@/lib/mock-data";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const ref = searchParams.get("ref")?.trim().toUpperCase();

  if (!ref) {
    return NextResponse.json(
      { error: "Reference number is required" },
      { status: 400 }
    );
  }

  // Check Neon Postgres DB First
  try {
    // 0.1 Check DB Medical Cases
    const dbMed = await prisma.medicalCase.findUnique({
      where: { caseReferenceNumber: ref },
    });
    if (dbMed) {
      return NextResponse.json({
        success: true,
        found: true,
        type: "MEDICAL_ASSISTANCE",
        title: "Medical & Surgical Assistance Inquiry",
        reference: dbMed.caseReferenceNumber,
        status: dbMed.status,
        date: dbMed.createdAt.toISOString(),
        city: dbMed.city,
        summary: dbMed.diagnosisSummary,
        milestones: [
          { label: "Inquiry Received & Logged", status: "COMPLETED" },
          {
            label: "Physician Advisory Review",
            status: ["APPROVED", "IN_TREATMENT", "COMPLETED"].includes(dbMed.status)
              ? "COMPLETED"
              : "ACTIVE",
          },
          {
            label: "Clinical Sponsorship & Hospital Booking",
            status: ["IN_TREATMENT", "COMPLETED"].includes(dbMed.status)
              ? "COMPLETED"
              : dbMed.status === "APPROVED"
              ? "ACTIVE"
              : "PENDING",
          },
          {
            label: "Post-Treatment Rehabilitation",
            status: dbMed.status === "COMPLETED" ? "COMPLETED" : "PENDING",
          },
        ],
      });
    }

    // 0.2 Check DB Volunteer Applications
    const dbVol = await prisma.volunteerApplication.findUnique({
      where: { applicationNumber: ref },
    });
    if (dbVol) {
      return NextResponse.json({
        success: true,
        found: true,
        type: "VOLUNTEER_APPLICATION",
        title: "Volunteer Registration Application",
        reference: dbVol.applicationNumber,
        status: dbVol.status,
        date: dbVol.createdAt.toISOString(),
        city: dbVol.address || "Pakistan",
        summary: `Volunteer track: ${dbVol.profession || "General Volunteer"}`,
        milestones: [
          { label: "Application Submitted", status: "COMPLETED" },
          {
            label: "Founder & Administrative Vetting",
            status: ["APPROVED"].includes(dbVol.status) ? "COMPLETED" : "ACTIVE",
          },
          {
            label: "Chapter Orientation & Badge Issuance",
            status: dbVol.status === "APPROVED" ? "COMPLETED" : "PENDING",
          },
        ],
      });
    }

    // 0.3 Check DB Memberships
    const dbMem = await prisma.membership.findUnique({
      where: { membershipNumber: ref },
    });
    if (dbMem) {
      return NextResponse.json({
        success: true,
        found: true,
        type: "CHAPTER_MEMBERSHIP",
        title: "Foundation Chapter Membership",
        reference: dbMem.membershipNumber,
        status: dbMem.status,
        date: dbMem.createdAt.toISOString(),
        city: "Pakistan",
        summary: `Membership Tier: ${dbMem.tier}`,
        milestones: [
          { label: "Application Logged", status: "COMPLETED" },
          { label: "Chapter Council Review", status: dbMem.status === "APPROVED" ? "COMPLETED" : "ACTIVE" },
          { label: "Official Member Status", status: dbMem.status === "APPROVED" ? "COMPLETED" : "PENDING" },
        ],
      });
    }

    // 0.4 Check DB Donations
    const dbDon = await prisma.donation.findUnique({
      where: { receiptNumber: ref },
    });
    if (dbDon) {
      return NextResponse.json({
        success: true,
        found: true,
        type: "DONATION_RECEIPT",
        title: "Verified Charitable Contribution",
        reference: dbDon.receiptNumber,
        status: dbDon.paymentStatus,
        date: dbDon.createdAt.toISOString(),
        summary: `${dbDon.causeTag || "General Healthcare"} (${dbDon.currency} ${dbDon.amount.toString()})`,
        milestones: [
          { label: "Contribution Processed", status: "COMPLETED" },
          { label: "Receipt Issued & Bank Verified", status: dbDon.paymentStatus === "SUCCEEDED" ? "COMPLETED" : "ACTIVE" },
          { label: "Field Allocation to Beneficiaries", status: "ACTIVE" },
        ],
      });
    }

    // 0.5 Check DB Complaints
    const dbCmp = await prisma.complaint.findUnique({
      where: { trackingReference: ref },
    });
    if (dbCmp) {
      return NextResponse.json({
        success: true,
        found: true,
        type: "CONFIDENTIAL_INQUIRY",
        title: "Confidential Inquiry / Oversight Report",
        reference: dbCmp.trackingReference,
        status: dbCmp.status,
        date: dbCmp.createdAt.toISOString(),
        summary: `Category: ${dbCmp.category}`,
        milestones: [
          { label: "Report Filed Under Strict Confidentiality", status: "COMPLETED" },
          { label: "Assigned to Oversight Investigator", status: dbCmp.status !== "SUBMITTED" ? "COMPLETED" : "ACTIVE" },
          { label: "Corrective Action & Final Resolution", status: dbCmp.status === "RESOLVED" ? "COMPLETED" : "PENDING" },
        ],
      });
    }
  } catch (err) {
    // Database fallback to in-memory store
  }

  // 1. Check Medical Cases
  const medicalCases = getMedicalCases();
  const med = medicalCases.find(
    (m) =>
      m.caseReferenceNumber.toUpperCase() === ref ||
      m.id.toUpperCase() === ref
  );
  if (med) {
    return NextResponse.json({
      success: true,
      found: true,
      type: "MEDICAL_ASSISTANCE",
      title: "Medical & Surgical Assistance Inquiry",
      reference: med.caseReferenceNumber,
      status: med.status,
      date: med.submittedAt,
      city: med.city,
      summary: med.diagnosisSummary,
      milestones: [
        { label: "Inquiry Received & Logged", status: "COMPLETED" },
        {
          label: "Physician Advisory Review",
          status: ["APPROVED", "IN_TREATMENT", "COMPLETED"].includes(med.status)
            ? "COMPLETED"
            : "ACTIVE",
        },
        {
          label: "Clinical Sponsorship & Hospital Booking",
          status: ["IN_TREATMENT", "COMPLETED"].includes(med.status)
            ? "COMPLETED"
            : med.status === "APPROVED"
            ? "ACTIVE"
            : "PENDING",
        },
        {
          label: "Post-Treatment Rehabilitation",
          status: med.status === "COMPLETED" ? "COMPLETED" : "PENDING",
        },
      ],
    });
  }

  // 2. Check Volunteer Applications
  const volunteers = getVolunteers();
  const vol = volunteers.find(
    (v) =>
      v.applicationNumber.toUpperCase() === ref ||
      v.id.toUpperCase() === ref
  );
  if (vol) {
    return NextResponse.json({
      success: true,
      found: true,
      type: "VOLUNTEER_APPLICATION",
      title: "Volunteer Registration Application",
      reference: vol.applicationNumber,
      status: vol.status,
      date: vol.submittedAt,
      city: vol.city,
      summary: `Volunteer track: ${vol.profession}`,
      milestones: [
        { label: "Application Submitted", status: "COMPLETED" },
        {
          label: "Founder & Administrative Vetting",
          status: ["APPROVED", "INTERVIEW_SCHEDULED"].includes(vol.status)
            ? "COMPLETED"
            : "ACTIVE",
        },
        {
          label: "Chapter Orientation & Badge Issuance",
          status: vol.status === "APPROVED" ? "COMPLETED" : "PENDING",
        },
      ],
    });
  }

  // 3. Check Memberships
  const memberships = getMemberships();
  const mem = memberships.find(
    (m) =>
      m.membershipNumber.toUpperCase() === ref ||
      m.id.toUpperCase() === ref
  );
  if (mem) {
    return NextResponse.json({
      success: true,
      found: true,
      type: "CHAPTER_MEMBERSHIP",
      title: "Foundation Chapter Membership",
      reference: mem.membershipNumber,
      status: mem.status,
      date: mem.submittedAt,
      city: mem.city,
      summary: `Membership Tier: ${mem.tier}`,
      milestones: [
        { label: "Application Logged", status: "COMPLETED" },
        { label: "Chapter Council Review", status: mem.status === "APPROVED" ? "COMPLETED" : "ACTIVE" },
        { label: "Official Member Status", status: mem.status === "APPROVED" ? "COMPLETED" : "PENDING" },
      ],
    });
  }

  // 4. Check Animal Rescues
  const rescues = getAnimalRescues();
  const ar = rescues.find(
    (r) =>
      r.trackingNumber.toUpperCase() === ref ||
      r.id.toUpperCase() === ref
  );
  if (ar) {
    return NextResponse.json({
      success: true,
      found: true,
      type: "ANIMAL_RESCUE",
      title: "Emergency Animal Rescue Report",
      reference: ar.trackingNumber,
      status: ar.status,
      date: ar.submittedAt,
      city: ar.locationCity,
      summary: `${ar.animalType}: ${ar.condition}`,
      milestones: [
        { label: "Emergency Call Logged", status: "COMPLETED" },
        {
          label: "Equine / Veterinary Team Dispatched",
          status: (["IN_TREATMENT", "REHABILITATED", "SHELTERED"] as string[]).includes(ar.status)
            ? "COMPLETED"
            : "ACTIVE",
        },
        { label: "Veterinary Care & Rehabilitation", status: ar.status === "REHABILITATED" ? "COMPLETED" : "PENDING" },
      ],
    });
  }

  // 5. Check Donations
  const donations = getDonations();
  const don = donations.find(
    (d) =>
      d.receiptNumber.toUpperCase() === ref ||
      d.transactionReference.toUpperCase() === ref
  );
  if (don) {
    return NextResponse.json({
      success: true,
      found: true,
      type: "DONATION_RECEIPT",
      title: "Verified Charitable Contribution",
      reference: don.receiptNumber,
      status: don.status,
      date: don.createdAt,
      summary: `${don.cause} (${don.frequency === "MONTHLY" ? "Monthly" : "One-Time"})`,
      milestones: [
        { label: "Contribution Processed", status: "COMPLETED" },
        { label: "Receipt Issued & Bank Verified", status: don.status === "COMPLETED" ? "COMPLETED" : "ACTIVE" },
        { label: "Field Allocation to Beneficiaries", status: "ACTIVE" },
      ],
    });
  }

  // 6. Check Complaints & Inquiries
  const complaints = getComplaints();
  const cmp = complaints.find(
    (c) =>
      c.trackingReference.toUpperCase() === ref ||
      c.id.toUpperCase() === ref
  );
  if (cmp) {
    return NextResponse.json({
      success: true,
      found: true,
      type: "CONFIDENTIAL_INQUIRY",
      title: "Confidential Inquiry / Oversight Report",
      reference: cmp.trackingReference,
      status: cmp.status,
      date: cmp.submittedAt,
      summary: `Category: ${cmp.category}`,
      milestones: [
        { label: "Report Filed Under Strict Confidentiality", status: "COMPLETED" },
        { label: "Assigned to Oversight Investigator", status: cmp.status !== "SUBMITTED" ? "COMPLETED" : "ACTIVE" },
        { label: "Corrective Action & Final Resolution", status: cmp.status === "RESOLVED" ? "COMPLETED" : "PENDING" },
      ],
    });
  }

  // If no record matches in mock, return formatted fallback for any newly generated valid pattern
  if (ref.startsWith("ZCF-")) {
    return NextResponse.json({
      success: true,
      found: true,
      type: "GENERAL_INQUIRY",
      title: "Official Registered Inquiry",
      reference: ref,
      status: "SUBMITTED",
      date: new Date().toISOString(),
      summary: "Your submission has been securely registered in the foundation queue.",
      milestones: [
        { label: "Intake Verified", status: "COMPLETED" },
        { label: "Administrative Review in Progress", status: "ACTIVE" },
        { label: "Coordination Contact", status: "PENDING" },
      ],
    });
  }

  return NextResponse.json(
    { error: "No record found matching this tracking reference number." },
    { status: 404 }
  );
}
