import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Toaster } from "@/components/ui/toaster";
interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <Container className="flex flex-1 h-full py-8 lg:py-16 gap-8">
        <div className="hidden lg:flex w-full max-w-60">
          <Sidebar />
        </div>
        <div className="flex justify-center flex-1 max-h-full">{children}</div>
      </Container>
      <Toaster />
    </section>
  );
}
