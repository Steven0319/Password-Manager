// middleware.ts
export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    // Excluir la página de inicio y otras rutas públicas
    "/((?!api|login|register|_next|favicon.ico|$).*)",
  ],
};