export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="text-accent font-semibold">Emannuel Moura</span> — Desenvolvedor Full Stack
        </p>
      </div>
    </footer>
  );
}
