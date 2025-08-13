import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-6">Página No Encontrada</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <Link href="/">
            <Button size="lg">
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

