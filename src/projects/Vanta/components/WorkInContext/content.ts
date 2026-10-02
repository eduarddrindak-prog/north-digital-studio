export type Outcome = {
  id: string;
  label: string;
  title: string;
  detail: string;
  amount: string;
  reason: string;
};

export type ScenarioStep = {
  label: string;
  description: string;
  icon:
    | "document"
    | "extract"
    | "check"
    | "warning";
};

export type Scenario = {
  id: string;
  number: string;
  name: string;
  description: string;
  category: string;
  steps: ScenarioStep[];
  outcome: Outcome;
  alternatives: Outcome[];
};

export const workInContextContent = {
  eyebrow: {
    number: "06",
    label: "WORK IN CONTEXT",
  },

  title: {
    lineOne: "Real work.",
    lineTwo: "Automatically.",
  },

  description:
    "VANTA handles the process from start to finish. Your team only sees what needs attention.",

  navigationLabel: "Automation scenarios",

  outcomeLabel: "OUTCOME",

  outcomeDataLabels: {
    value: "VALUE",
    reason: "REASON",
  },

  footer: {
    left: "VANTA / AUTOMATION ENGINE",
    right: "PROCESS COMPLETE",
  },

  scenarios: [
    {
      id: "invoice-review",
      number: "01",
      name: "INVOICE REVIEW",
      description:
        "Process and verify incoming invoices",
      category: "FINANCE / AP AUTOMATION",

      steps: [
        {
          label: "INVOICE RECEIVED",
          description: "PDF or email attachment",
          icon: "document",
        },
        {
          label: "DATA EXTRACTED",
          description:
            "Vendor, amount, date, line items",
          icon: "extract",
        },
        {
          label: "POLICY CHECK",
          description:
            "Matches company rules and spending limits",
          icon: "check",
        },
        {
          label: "EXCEPTION DETECTED",
          description:
            "Amount exceeds policy limit",
          icon: "warning",
        },
      ],

      outcome: {
        id: "finance",
        label: "Finance",
        title: "SENT TO FINANCE",
        detail: "REQUIRES REVIEW",
        amount: "$12,480",
        reason: "Exceeds policy limit",
      },

      alternatives: [
        {
          id: "auto-approve",
          label: "Auto-approve",
          title: "AUTO-APPROVED",
          detail: "WITHIN POLICY",
          amount: "$4,280",
          reason: "Matches spending rules",
        },
        {
          id: "flag",
          label: "Flag",
          title: "FLAGGED",
          detail: "MISSING INFORMATION",
          amount: "$7,920",
          reason: "Required fields incomplete",
        },
      ],
    },

    {
      id: "lead-routing",
      number: "02",
      name: "LEAD ROUTING",
      description: "Qualify and route new leads",
      category: "SALES / LEAD AUTOMATION",

      steps: [
        {
          label: "LEAD RECEIVED",
          description:
            "Form submission or inbound request",
          icon: "document",
        },
        {
          label: "DATA ENRICHED",
          description:
            "Company, role, size and intent",
          icon: "extract",
        },
        {
          label: "QUALIFICATION",
          description:
            "Matches sales criteria and territory",
          icon: "check",
        },
        {
          label: "ROUTE CREATED",
          description:
            "Assigned to the right sales team",
          icon: "warning",
        },
      ],

      outcome: {
        id: "sales",
        label: "Sales",
        title: "ROUTED TO SALES",
        detail: "QUALIFIED LEAD",
        amount: "Enterprise",
        reason:
          "Matches target account profile",
      },

      alternatives: [
        {
          id: "nurture",
          label: "Nurture",
          title: "ADDED TO NURTURE",
          detail: "NOT READY",
          amount: "SMB",
          reason:
            "Timing does not match criteria",
        },
        {
          id: "reject",
          label: "Reject",
          title: "NOT QUALIFIED",
          detail: "OUTSIDE ICP",
          amount: "Low fit",
          reason:
            "Does not match target profile",
        },
      ],
    },

    {
      id: "data-reconciliation",
      number: "03",
      name: "DATA RECONCILIATION",
      description:
        "Match and resolve data across systems",
      category:
        "OPERATIONS / DATA AUTOMATION",

      steps: [
        {
          label: "DATA RECEIVED",
          description:
            "Records arrive from connected systems",
          icon: "document",
        },
        {
          label: "RECORDS MATCHED",
          description:
            "Customer and transaction data compared",
          icon: "extract",
        },
        {
          label: "CONFLICT CHECK",
          description:
            "Values compared against source rules",
          icon: "check",
        },
        {
          label: "MISMATCH FOUND",
          description:
            "Conflicting records require attention",
          icon: "warning",
        },
      ],

      outcome: {
        id: "operations",
        label: "Operations",
        title: "SENT TO OPERATIONS",
        detail: "REQUIRES REVIEW",
        amount: "24 records",
        reason:
          "Source values do not match",
      },

      alternatives: [
        {
          id: "synced",
          label: "Sync",
          title: "RECORDS SYNCED",
          detail: "MATCH CONFIRMED",
          amount: "184 records",
          reason: "Sources are consistent",
        },
        {
          id: "hold",
          label: "Hold",
          title: "SYNC ON HOLD",
          detail: "SOURCE UNAVAILABLE",
          amount: "12 records",
          reason:
            "Waiting for source update",
        },
      ],
    },

    {
      id: "support-escalation",
      number: "04",
      name: "SUPPORT ESCALATION",
      description:
        "Analyze and escalate complex requests",
      category:
        "SUPPORT / CASE AUTOMATION",

      steps: [
        {
          label: "REQUEST RECEIVED",
          description:
            "Customer message enters support queue",
          icon: "document",
        },
        {
          label: "CONTEXT ANALYZED",
          description:
            "History, account and intent identified",
          icon: "extract",
        },
        {
          label: "PRIORITY CHECK",
          description:
            "Severity and routing rules evaluated",
          icon: "check",
        },
        {
          label: "ESCALATION DETECTED",
          description:
            "Case requires specialist attention",
          icon: "warning",
        },
      ],

      outcome: {
        id: "support",
        label: "Support",
        title: "SENT TO SPECIALIST",
        detail: "HIGH PRIORITY",
        amount: "P1",
        reason: "Customer impact detected",
      },

      alternatives: [
        {
          id: "resolved",
          label: "Resolve",
          title: "AUTO-RESOLVED",
          detail: "STANDARD REQUEST",
          amount: "P3",
          reason:
            "Known resolution available",
        },
        {
          id: "queue",
          label: "Queue",
          title: "ADDED TO QUEUE",
          detail: "NORMAL PRIORITY",
          amount: "P2",
          reason:
            "Specialist review not required",
        },
      ],
    },
  ],
} satisfies {
  eyebrow: {
    number: string;
    label: string;
  };

  title: {
    lineOne: string;
    lineTwo: string;
  };

  description: string;
  navigationLabel: string;
  outcomeLabel: string;

  outcomeDataLabels: {
    value: string;
    reason: string;
  };

  footer: {
    left: string;
    right: string;
  };

  scenarios: Scenario[];
};