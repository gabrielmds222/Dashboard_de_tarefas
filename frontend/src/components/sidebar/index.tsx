import {
  Check,
  Clock,
  Home,
  LogOut,
  Package,
  PanelBottom,
  Settings2,
  ShoppingBag,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function Sidebar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Link
              href="#"
              className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"
            >
              <Package className="w-4 h-4" />
              <span className="sr-only">Dashboard Avatar</span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Home className="w-5 h-5" />
                  <span className="sr-only">Todas as tarefas</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className="bg-muted rounded-sm px-3 py-1 border-solid border-2"
                side="right"
              >
                Todas as tarefas
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Check className="w-5 h-5" />
                  <span className="sr-only">Concluídas</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className="bg-muted rounded-sm px-3 py-1 border-solid border-2"
                side="right"
              >
                Concluídas
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Clock className="w-5 h-5" />
                  <span className="sr-only">Pendentes</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className="bg-muted rounded-sm px-3 py-1 border-solid border-2"
                side="right"
              >
                Pendentes
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  <LogOut className="w-5 h-5 text-red-500" />
                  <span className="sr-only">Sair</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className="bg-muted rounded-sm px-3 py-1 border-solid border-2"
                side="right"
              >
                Sair
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelBottom className="w-5 h-5" />
                <span className="sr-only">Abrir / fechar menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-x">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2"
                  prefetch={false}
                >
                  <Package className="h-5 w-5 transition-all" />
                  <SheetTitle className="sr-only">Logo</SheetTitle>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Home className="h-5 w-5 transition-all" />
                  <SheetTitle>Todas as tarefas</SheetTitle>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Check className="h-5 w-5 transition-all" />
                  <SheetTitle>Concluídas</SheetTitle>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Clock className="h-5 w-5 transition-all" />
                  <SheetTitle>Pendentes</SheetTitle>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <LogOut className="h-5 w-5 transition-all" />
                  <SheetTitle>Sair</SheetTitle>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <h2>Menu</h2>
        </header>
      </div>
    </div>
  );
}
