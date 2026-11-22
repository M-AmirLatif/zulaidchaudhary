import { NextRequest, NextResponse } from "next/server";
import {
  getAnimalRescues,
  addAnimalRescue,
  updateAnimalRescueStatus,
} from "@/lib/mock-data";
import { logAuditAction } from "@/lib/audit";
import { getSession } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const rescues = getAnimalRescues();
    return NextResponse.json({ success: true, rescues });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      animalType,
      condition,
      urgency,
      locationCity,
      locationAddress,
      reporterName,
      reporterPhone,
    } = body;

    if (!animalType || !condition || !locationAddress || !reporterPhone) {
      return NextResponse.json(
        { error: "Animal type, condition, location, and contact number are required." },
        { status: 400 }
      );
    }

    const newRescue = addAnimalRescue({
      animalType,
      condition,
      urgency: urgency || "HIGH",
      locationCity: locationCity || "Lahore",
      locationAddress,
      reporterName: reporterName || "Concerned Citizen",
      reporterPhone,
    });

    await logAuditAction({
      userId: "public-reporter",
      userName: reporterName || "Concerned Citizen",
      userRole: "DONOR_USER",
      action: "CREATE",
      entity: "AnimalRescueRecord",
      entityId: newRescue.id,
      details: `Reported ${newRescue.animalType} (${newRescue.condition}) at ${newRescue.locationAddress}`,
      newData: {
        trackingNumber: newRescue.trackingNumber,
        animalType: newRescue.animalType,
        condition: newRescue.condition,
        urgency: newRescue.urgency,
      },
    });

    return NextResponse.json({
      success: true,
      rescue: newRescue,
      trackingNumber: newRescue.trackingNumber,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to lodge rescue report";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { id, status, assignedVet, treatmentNotes } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "Missing required rescue fields." }, { status: 400 });
    }

    const updated = updateAnimalRescueStatus(id, status, assignedVet, treatmentNotes);
    if (!updated) {
      return NextResponse.json({ error: "Rescue record not found." }, { status: 404 });
    }

    await logAuditAction({
      userId: session.id,
      userName: session.name,
      userRole: session.role,
      action: "STATUS_CHANGE",
      entity: "AnimalRescueRecord",
      entityId: id,
      details: `Updated rescue status to ${status} for tracking #${updated.trackingNumber}`,
      newData: { status, assignedVet, treatmentNotes },
    });

    return NextResponse.json({ success: true, rescue: updated });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Update failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
