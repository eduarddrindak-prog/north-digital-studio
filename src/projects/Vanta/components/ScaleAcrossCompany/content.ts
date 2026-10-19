export const scaleAcrossCompanyContent = {
  eyebrow: {
    number: "04",
    label: "SCALE ACROSS YOUR COMPANY",
  },

  title: {
    lineOne: "One system.",
    lineTwo: "Every team.",
  },

  description:
    "VANTA gives every team the same automation infrastructure — from daily operations to customer support.",

  statement: {
    label: "COMPANY AUTOMATION",
    lines: [
      "Same infrastructure.",
      "Different teams.",
      "Continuous execution.",
    ],
  },

  teams: [
    {
      id: "operations",
      name: "OPERATIONS",
      count: 12,
      icon: "◈",
      iconClass: "operations",
      tasks: [
        "Process data",
        "Sync systems",
        "Automate reports",
      ],
      workflow: {
        input: "DATA",
        steps: ["PROCESS", "SYNC"],
        output: "REPORT",
      },
    },

    {
      id: "sales",
      name: "SALES",
      count: 18,
      icon: "◫",
      iconClass: "sales",
      tasks: [
        "Qualify leads",
        "Update CRM",
        "Trigger follow-ups",
      ],
      workflow: {
        input: "LEAD",
        steps: ["QUALIFY", "CRM"],
        output: "FOLLOW-UP",
      },
    },

    {
      id: "finance",
      name: "FINANCE",
      count: 14,
      icon: "▤",
      iconClass: "finance",
      tasks: [
        "Review invoices",
        "Match payments",
        "Sync to ERP",
      ],
      workflow: {
        input: "INVOICE",
        steps: ["CHECK", "MATCH"],
        output: "ERP",
      },
    },

    {
      id: "support",
      name: "SUPPORT",
      count: 9,
      icon: "◌",
      iconClass: "support",
      tasks: [
        "Classify requests",
        "Route to team",
        "Generate replies",
      ],
      workflow: {
        input: "REQUEST",
        steps: ["CLASSIFY", "ROUTE"],
        output: "RESOLVE",
      },
    },
  ],

  integrations: [
    "Slack",
    "Notion",
    "Drive",
    "HubSpot",
    "Salesforce",
    "Gmail",
  ],

  labels: {
    activeWorkflows: "ACTIVE WORKFLOWS",
    workflow: "VANTA WORKFLOW",
    connectedTools: {
  lineOne: "CONNECTED",
  lineTwo: "TOOLS",
},
    executionActive: "EXECUTION ACTIVE",
    activeSystem: "ACTIVE SYSTEM",
    workflows: "WORKFLOWS",
    input: "IN",
    output: "OUT",
  },
};