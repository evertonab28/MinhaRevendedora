import './globals.css';
import { AppSidebar } from '@/components/AppSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ProductsProvider } from '@/context/ProductsContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <ProductsProvider>
          <SidebarProvider>
            <AppSidebar />
            <main className="ml-2 mr-2 sm:ml-4">
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </ProductsProvider>
      </body>
    </html>
  );
}
