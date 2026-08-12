import { Resend } from "resend";

import { contactSchema } from "../../src/lib/contactSchema";

type ContactEnvironment = {
  RESEND_API_KEY?: string;
  CONTACT_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
};

type ContactContext = {
  request: Request;
  env: ContactEnvironment;
};

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);

export async function onRequestPost({ request, env }: ContactContext) {
  if (!env.RESEND_API_KEY || !env.CONTACT_EMAIL || !env.CONTACT_FROM_EMAIL) {
    return Response.json(
      { error: "The contact form is not configured yet." },
      { status: 503 },
    );
  }

  const body: unknown = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      { error: "Please check the form fields and try again." },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const fields = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company || "Not provided"],
    ["Website", data.website || "Not provided"],
    ["Project type", data.projectType],
    ["Timeline", data.timeline],
    ["Budget", data.budget || "Not provided"],
  ] as const;

  const html = `
    <h1>New project request</h1>
    <table>${fields.map(([label, value]) => `<tr><th align="left">${label}</th><td>${escapeHtml(value)}</td></tr>`).join("")}</table>
    <h2>Project details</h2>
    <p>${escapeHtml(data.details).replace(/\n/g, "<br>")}</p>
  `;

  const resend = new Resend(env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: env.CONTACT_FROM_EMAIL,
    to: env.CONTACT_EMAIL,
    replyTo: data.email,
    subject: `New project request from ${data.name}`,
    html,
  });

  if (error) {
    return Response.json(
      { error: "We couldn't send your request. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
