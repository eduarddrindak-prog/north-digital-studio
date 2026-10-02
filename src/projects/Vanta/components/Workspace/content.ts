export const workspaceContent = {
  intro: {
    eyebrow: {
      number: "03",
      label: "THE WORKSPACE",
    },

    title: {
      lineOne: "Your workflows,",
      lineTwo: "running in one place.",
    },

    description:
      "Build, test and deploy automations that connect your tools, use your data and handle the work end-to-end.",
  },

  navigation: [
    {
      label: "Home",
      icon: "⌂",
    },
    {
      label: "Workflows",
      icon: "⌘",
      active: true,
    },
    {
      label: "Runs",
      icon: "◷",
    },
    {
      label: "Integrations",
      icon: "◇",
    },
    {
      label: "Library",
      icon: "□",
    },
  ],

  sidebar: {
    newWorkflow: "New Workflow",
    workflowsLabel: "WORKFLOWS",
    searchIcon: "⌕",

    account: {
      initial: "E",
      name: "Enterprise Team",
      plan: "Pro Plan",
      arrow: "›",
    },
  },

  workflows: [
    {
      id: "onboarding",
      name: "Customer Onboarding",
      status: "Live" as const,
      nodes: [
        {
          type: "01 · TRIGGER",
          label: "Slack",
          description: "New message in #leads",
          app: "S",
          appClass: "slack",
        },
        {
          type: "02 · AI PROCESSING",
          label: "Analyze with AI",
          description: "Extract company information",
          app: "AI",
          appClass: "ai",
        },
        {
          type: "03 · CREATE",
          label: "Create in HubSpot",
          description: "Add as new contact",
          app: "H",
          appClass: "hubspot",
        },
        {
          type: "04 · NOTIFY",
          label: "Send welcome email",
          description: "Trigger personalized sequence",
          app: "M",
          appClass: "gmail",
        },
      ],
    },

    {
      id: "leads",
      name: "Lead Qualification",
      status: "Live" as const,
      nodes: [
        {
          type: "01 · TRIGGER",
          label: "Website",
          description: "New lead submitted",
          app: "W",
          appClass: "web",
        },
        {
          type: "02 · AI PROCESSING",
          label: "Qualify lead",
          description: "Analyze intent and company",
          app: "AI",
          appClass: "ai",
        },
        {
          type: "03 · UPDATE",
          label: "Update Salesforce",
          description: "Set lead score",
          app: "SF",
          appClass: "salesforce",
        },
        {
          type: "04 · NOTIFY",
          label: "Notify sales",
          description: "Send qualification result",
          app: "S",
          appClass: "slack",
        },
      ],
    },

    {
      id: "invoices",
      name: "Invoice Processing",
      status: "Live" as const,
      nodes: [
        {
          type: "01 · TRIGGER",
          label: "Gmail",
          description: "New invoice received",
          app: "M",
          appClass: "gmail",
        },
        {
          type: "02 · AI PROCESSING",
          label: "Extract invoice data",
          description: "Read amount and vendor",
          app: "AI",
          appClass: "ai",
        },
        {
          type: "03 · UPDATE",
          label: "Update database",
          description: "Store invoice record",
          app: "DB",
          appClass: "database",
        },
        {
          type: "04 · NOTIFY",
          label: "Send approval",
          description: "Request finance review",
          app: "N",
          appClass: "notion",
        },
      ],
    },

    {
      id: "support",
      name: "Support Routing",
      status: "Draft" as const,
      nodes: [
        {
          type: "01 · TRIGGER",
          label: "Intercom",
          description: "New support request",
          app: "I",
          appClass: "intercom",
        },
        {
          type: "02 · AI PROCESSING",
          label: "Classify request",
          description: "Understand customer intent",
          app: "AI",
          appClass: "ai",
        },
        {
          type: "03 · ROUTE",
          label: "Assign team",
          description: "Route to correct queue",
          app: "R",
          appClass: "router",
        },
        {
          type: "04 · NOTIFY",
          label: "Update Slack",
          description: "Notify support team",
          app: "S",
          appClass: "slack",
        },
      ],
    },
  ],

  sidebarWorkflows: [
    "Customer Onboarding",
    "Lead Qualification",
    "Invoice Processing",
    "Support Routing",
    "Data Sync",
    "Recruiting Automation",
  ],

  integrations: [
    {
      name: "Slack",
      category: "Communication",
      className: "slack",
    },
    {
      name: "Notion",
      category: "Knowledge",
      className: "notion",
    },
    {
      name: "Google Drive",
      category: "Storage",
      className: "drive",
    },
    {
      name: "HubSpot",
      category: "CRM",
      className: "hubspot",
    },
    {
      name: "Salesforce",
      category: "CRM",
      className: "salesforce",
    },
  ],

  application: {
    tabs: [
      "Editor",
      "Runs",
      "Analytics",
      "Settings",
    ],

    actions: {
      share: "↗ Share",
      deployed: "✓ Deployed",
      deploy: "Deploy",
    },

    nodeDetails: {
      title: "NODE DETAILS",
      menu: "•••",
      channel: "CHANNEL",
      triggerOn: "TRIGGER ON",
      defaultChannel: "Connected source",
      defaultTrigger: "New event",
      includeContext: "Include context data",
      continueOnError: "Continue on error",
    },

    execution: {
      title: "EXECUTION LOG",
      live: "● Live",
      rows: [
        {
          time: "10:42:18",
          text: "Workflow started",
          detailFrom: "workflow",
        },
        {
          time: "10:42:19",
          textFrom: "node",
          detail: "Processing finished",
        },
        {
          time: "10:42:19",
          text: "Data validated",
          detail: "VANTA Core",
        },
        {
          time: "10:42:20",
          text: "Action executed",
          detail: "Success",
          success: true,
        },
        {
          time: "10:42:21",
          text: "Workflow completed",
          detail: "Success",
          success: true,
        },
      ],
    },

    testRun: {
      title: "TEST RUN",
      run: "Run test  ▶",
      running: "Running...",
      durations: ["0.3s", "1.1s", "0.8s", "0.4s"],
    },
  },
};