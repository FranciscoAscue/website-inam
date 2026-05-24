import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X } from 'lucide-react';
import { NAVIGATION } from '../../config/site';
import { withBase } from '../../utils/paths';

export default function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="rounded-lg p-2 text-[var(--color-ink)] transition-colors hover:bg-white/80 lg:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 lg:hidden" />
        <Dialog.Content className="fixed top-0 left-0 right-0 z-50 max-h-[85vh] overflow-y-auto border-b border-[var(--color-border)] bg-[var(--color-page)] lg:hidden">
          <Dialog.Title className="sr-only">Navigation Menu</Dialog.Title>
          <Dialog.Description className="sr-only">Main navigation menu</Dialog.Description>
          <div className="container mx-auto px-4 py-6 space-y-2">
            {NAVIGATION.map((item) => (
              <Dialog.Close asChild key={item.href}>
                <a
                  href={withBase(item.href)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-[var(--color-body)] transition-all hover:bg-white hover:text-[var(--color-accent)]"
                >
                  {item.name}
                </a>
              </Dialog.Close>
            ))}
            <div className="pt-4">
              <Dialog.Close asChild>
                <a
                  href={withBase('/#contacto')}
                  className="block rounded-full bg-[var(--color-accent)] px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition-all"
                >
                  Contacto institucional
                </a>
              </Dialog.Close>
            </div>
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 rounded-lg p-2 text-[var(--color-ink)] transition-colors hover:bg-white"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
