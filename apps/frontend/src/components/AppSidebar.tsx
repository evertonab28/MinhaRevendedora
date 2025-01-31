import { Home, Package, Settings, ShoppingBag, Users2 } from 'lucide-react';
import Link from 'next/link';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from './ui/sidebar';

const items = [
  {
    title: 'Início',
    url: '/',
    icon: Home,
  },
  {
    title: 'Pedidos',
    url: '#',
    icon: ShoppingBag,
  },
  {
    title: 'Produtos',
    url: '/products',
    icon: Package,
  },
  {
    title: 'Clientes',
    url: '#',
    icon: Users2,
  },
  {
    title: 'Configurações',
    url: '#',
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <div>
      <div>
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link
                    href="#"
                    className="flex h-5 w-5 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full">
                    <Package className="h-4 w-4" />
                    <span className="sr-only">Dashboard Logo</span>
                  </Link>
                  <span className="text-primary font-black">
                    Minha Revendedora
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild tooltip={item.title}>
                        <Link
                          href={item.url}
                          className="flex items-center gap-4 py-5 hover:bg-primary hover:text-background w-full rounded-md transition-transform duration-500 hover:scale-105">
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>

      {/* mobile */}
      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <nav className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around bg-background border-t h-14">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className="flex flex-col items-center text-muted-foreground hover:text-primary">
              <Home className="h-5 w-5" />
              <span className="text-xs">{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
