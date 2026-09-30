import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X } from 'lucide-react';
import { NAVIGATION } from '../../config/site';
import { withBase } from '../../utils/paths';

export default function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="rounded-lg p-2 text-[var(--color-ink)] transition-colors hover:bg-[var(--color-surface-strong)] xl:hidden"
          aria-label="Abrir menú"
        >
          <Menu className="h-6 w-6" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 xl:hidden" />
        <Dialog.Content className="fixed top-0 left-0 right-0 z-50 max-h-[85vh] overflow-y-auto border-b border-[var(--color-border)] bg-[var(--color-page)] xl:hidden">
          <Dialog.Title className="sr-only">Navegación principal</Dialog.Title>
          <Dialog.Description className="sr-only">Enlaces principales del sitio</Dialog.Description>
          <div className="container mx-auto px-4 py-6 space-y-2">
            {NAVIGATION.map((item) => (
              <Dialog.Close asChild key={item.href}>
                <a
                  href={withBase(item.href)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-[var(--color-body)] transition-all hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-accent)]"
                >
                  {item.name}
                </a>
              </Dialog.Close>
            ))}
            <div className="flex items-center gap-3 pt-4">
              <Dialog.Close asChild>
                <a
                  href={withBase('/#contacto')}
                  className="button-primary flex-1 text-center"
                >
                  Contacto institucional
                </a>
              </Dialog.Close>
              <button
                type="button"
                data-language-toggle
                className="language-toggle"
                aria-label="View this page in English"
                title="View this page in English"
              >
                <span data-language-label>EN</span>
              </button>
              <button
                type="button"
                data-theme-toggle
                data-theme-toggle-generic
                className="theme-toggle"
                aria-label="Alternar tema claro y oscuro"
                title="Alternar tema claro y oscuro"
              >
                <span className="sr-only">Alternar tema claro y oscuro</span>
                <svg className="theme-icon-moon h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
                </svg>
                <svg className="theme-icon-sun h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                </svg>
              </button>
            </div>
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 rounded-lg p-2 text-[var(--color-ink)] transition-colors hover:bg-[var(--color-surface-strong)]"
              aria-label="Cerrar menú"
            >
              <X className="h-6 w-6" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
