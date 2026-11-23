import { NextResponse } from "next/server";

export async function GET() {
  const openapiSpec = {
    openapi: "3.0.3",
    info: {
      title: "Zulaid Chaudhary Foundation - Digital Platform API",
      version: "1.0.0",
      description:
        "Official REST API for Zulaid Chaudhary Foundation (ZulaidChaudharyFoundation.com). Powers patient medical assistance intake, volunteer registration, chapter memberships, verifiable donation receipts, and universal case tracking.",
      contact: {
        name: "ZCF Engineering & Humanitarian Operations",
        email: "global@zulaidchaudharyfoundation.com",
        url: "https://zulaidchaudharyfoundation.com",
      },
      license: {
        name: "Proprietary Humanitarian Infrastructure",
      },
    },
    servers: [
      {
        url: "https://zulaidchaudharyfoundation.vercel.app",
        description: "Production Server",
      },
      {
        url: "http://localhost:3000",
        description: "Local Development Server",
      },
    ],
    tags: [
      { name: "Medical Assistance", description: "Ethical patient assistance intake and clinical review" },
      { name: "Volunteers & Chapters", description: "Volunteer registration and diaspora chapter management" },
      { name: "Donations & Receipts", description: "Charitable contribution ledger and instant digital receipts" },
      { name: "Universal Tracker", description: "Real-time status tracking across cases, donations, and applications" },
      { name: "Complaints & Ethics", description: "Confidential whistleblower and grievance redressal system" },
      { name: "Authentication", description: "Session and multi-factor role-based access control" },
    ],
    paths: {
      "/api/track": {
        get: {
          tags: ["Universal Tracker"],
          summary: "Look up real-time progress for any foundation reference number",
          description: "Returns sanitized milestone timeline for medical cases, volunteer applications, memberships, donations, or confidential complaints without exposing private personal or medical details.",
          parameters: [
            {
              name: "ref",
              in: "query",
              required: true,
              description: "Reference number (e.g. ZCF-MED-2026-0028, V-2026-0001, ZCF-2026-8941, ZCF-CMP-2026-7890)",
              schema: { type: "string" },
            },
          ],
          responses: {
            "200": {
              description: "Status and milestone progression",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: { type: "boolean" },
                      found: { type: "boolean" },
                      type: { type: "string" },
                      title: { type: "string" },
                      reference: { type: "string" },
                      status: { type: "string" },
                      date: { type: "string" },
                      city: { type: "string" },
                      summary: { type: "string" },
                      milestones: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            label: { type: "string" },
                            status: { type: "string", enum: ["COMPLETED", "ACTIVE", "PENDING"] },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            "400": { description: "Missing reference parameter" },
            "404": { description: "Reference not found" },
          },
        },
      },
      "/api/medical-cases": {
        get: {
          tags: ["Medical Assistance"],
          summary: "List verified medical cases for public awareness or administrative review",
          responses: {
            "200": { description: "Array of registered cases" },
          },
        },
        post: {
          tags: ["Medical Assistance"],
          summary: "Submit patient medical assistance request",
          description: "Requires mandatory patient or guardian informed consent. Patient identity is encrypted at rest.",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["patientInitials", "city", "diagnosisSummary", "estimatedCostPKR", "hasInformedConsent"],
                  properties: {
                    patientInitials: { type: "string", example: "M.A." },
                    city: { type: "string", example: "Lahore" },
                    age: { type: "integer", example: 42 },
                    gender: { type: "string", example: "Male" },
                    diagnosisSummary: { type: "string", example: "Bilateral Cataract Surgery" },
                    treatingPhysician: { type: "string", example: "Dr. Consultant" },
                    estimatedCostPKR: { type: "number", example: 65000 },
                    priority: { type: "string", enum: ["URGENT", "EMERGENCY_CRITICAL"] },
                    hasInformedConsent: { type: "boolean", example: true },
                  },
                },
              },
            },
          },
          responses: {
            "200": { description: "Case registered successfully with unique reference number" },
            "400": { description: "Informed consent missing or validation failure" },
          },
        },
      },
      "/api/volunteers": {
        get: {
          tags: ["Volunteers & Chapters"],
          summary: "List registered volunteer applications",
          responses: { "200": { description: "Array of volunteer applications" } },
        },
        post: {
          tags: ["Volunteers & Chapters"],
          summary: "Submit volunteer application",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["fullName", "email", "phone", "city"],
                  properties: {
                    fullName: { type: "string" },
                    email: { type: "string", format: "email" },
                    phone: { type: "string" },
                    city: { type: "string" },
                    profession: { type: "string" },
                    skills: { type: "array", items: { type: "string" } },
                    availabilityHours: { type: "integer" },
                    motivation: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            "200": { description: "Application registered pending admin approval" },
          },
        },
      },
      "/api/donations": {
        get: {
          tags: ["Donations & Receipts"],
          summary: "List recent donation ledger entries",
          responses: { "200": { description: "Array of donation transactions" } },
        },
        post: {
          tags: ["Donations & Receipts"],
          summary: "Process donation in test/preview mode and issue digital receipt",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["amount", "cause"],
                  properties: {
                    donorName: { type: "string" },
                    donorEmail: { type: "string", format: "email" },
                    donorPhone: { type: "string" },
                    isAnonymous: { type: "boolean" },
                    amount: { type: "number" },
                    currency: { type: "string", enum: ["PKR", "USD", "GBP", "EUR", "AED", "CAD"] },
                    frequency: { type: "string", enum: ["ONE_TIME", "MONTHLY", "ANNUAL"] },
                    cause: { type: "string" },
                    paymentMethod: { type: "string", enum: ["STRIPE_CARD", "PAKISTAN_BANK_TRANSFER", "JAZZCASH_MOCK", "EASYPAISA_MOCK"] },
                  },
                },
              },
            },
          },
          responses: {
            "200": { description: "Donation recorded with digital receipt number" },
          },
        },
      },
      "/api/complaints": {
        get: {
          tags: ["Complaints & Ethics"],
          summary: "List registered grievance filings",
          responses: { "200": { description: "Array of complaint filings" } },
        },
        post: {
          tags: ["Complaints & Ethics"],
          summary: "Submit confidential grievance or ethics report",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["subject", "description"],
                  properties: {
                    category: { type: "string" },
                    subject: { type: "string" },
                    description: { type: "string" },
                    complainantContact: { type: "string" },
                    isConfidential: { type: "boolean" },
                  },
                },
              },
            },
          },
          responses: {
            "200": { description: "Grievance registered with tracking reference" },
          },
        },
      },
      "/api/auth/login": {
        post: {
          tags: ["Authentication"],
          summary: "Authenticate user and issue secure HTTP-only session cookie",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["email", "password"],
                  properties: {
                    email: { type: "string", format: "email" },
                    password: { type: "string" },
                    totpCode: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            "200": { description: "Login successful with role-based session" },
            "401": { description: "Invalid credentials" },
          },
        },
      },
    },
  };

  return NextResponse.json(openapiSpec, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
