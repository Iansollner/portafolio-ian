import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Por favor ingresa un correo electrónico válido." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "La variable de entorno RESEND_API_KEY no está configurada." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const sentDate = new Date().toLocaleString("es-CL", {
      timeZone: "America/Santiago",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "iansollner@gmail.com",
      subject: `Nuevo mensaje desde el formulario de contacto: ${name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; color: #0f172a;">
          <h1 style="color: #0d9488;">Nuevo mensaje del formulario de contacto</h1>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Fecha de envío:</strong> ${sentDate}</p>
          <hr style="margin: 24px 0; border: 0; border-top: 1px solid #cbd5e1;" />
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Mensaje enviado correctamente." });
  } catch (error) {
    console.error("Error al procesar el formulario de contacto:", error);
    const message =
      error instanceof Error
        ? error.message
        : typeof error === "object" && error !== null && "message" in error
        ? String((error as { message?: string }).message)
        : "Ocurrió un error al enviar tu mensaje. Intenta nuevamente.";

    return NextResponse.json(
      { error: message || "Ocurrió un error al enviar tu mensaje. Intenta nuevamente." },
      { status: 500 }
    );
  }
}
