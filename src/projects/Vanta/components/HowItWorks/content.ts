export const howItWorksContent = {
  eyebrow: {
    number: "02",
    label: "HOW IT WORKS",
  },

  title: "From events to execution.",

  description:
    "VANTA turns your disconnected tools into a single, intelligent system. It listens, understands, and takes action — so your workflows run without manual work.",

  steps: [
    {
      number: "01",
      title: "Connect your tools",
      description:
        "Link your apps and give VANTA access to the data your workflows depend on.",
    },
    {
      number: "02",
      title: "Define your workflows",
      description:
        "Set rules, conditions, and outcomes in plain language.",
    },
    {
      number: "03",
      title: "VANTA executes",
      description:
        "It handles the work, keeps everything in sync, and adapts as your data changes.",
    },
  ],

  cta: {
    label: "View workflow",
    href: "#product",
  },

  event: {
    status: "EVENT DETECTED",
    time: "10:24:12",
    application: "Slack",
    description: "New message in #leads",
  },

  processing: {
    status: "AI PROCESSING",
    time: "10:24:12",
    coreName: "VANTA CORE",
    coreStatus: "PROCESSING CONTEXT...",

    checks: [
      {
        label: "Analyze content",
        status: "done",
      },
      {
        label: "Identify intent",
        status: "done",
      },
      {
        label: "Find related data",
        status: "active",
      },
      {
        label: "Execute workflow",
        status: "pending",
      },
    ],
  },

  action: {
    status: "ACTION EXECUTED",
    time: "10:24:13",
    application: "Notion",
    description: "New page created",
    result: "Success",
  },

  metrics: {
    label: "REAL-TIME EXECUTION",

    eventsPerSecond: {
      value: "1,842",
      label: "EVENTS / SEC",
    },

    averageLatency: {
      value: "42ms",
      label: "AVG LATENCY",
    },

    successRate: {
      value: "99.98%",
      label: "SUCCESS RATE",
    },
  },

  executionLog: {
    label: "EXECUTION LOG",
    event: "workflow.execute",
    status: "SUCCESS",
  },
};