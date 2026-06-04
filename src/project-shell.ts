type ShellConfig = {
  brandHref?: string;
  backHref?: string;
  footerEmail?: string;
};

const defaultConfig: ShellConfig = {
  brandHref: '/',
  backHref: '/',
  footerEmail: 'adrianlyden@gmail.com',
};

function setHeader(headerEl: HTMLElement, config: ShellConfig) {
  headerEl.className =
    'fixed top-0 w-full z-50 px-20 py-6 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-white/5 max-md:px-6 text-white';

  headerEl.innerHTML = `
    <div class="text-xl font-semibold tracking-widest">
      <a href="${config.brandHref ?? defaultConfig.brandHref}" class="hover:text-brandYellow transition">
        PORTFOLIO<span class="text-brandYellow">.</span>
      </a>
    </div>

    <nav class="space-x-10 text-sm uppercase tracking-wider">
      <a href="${config.backHref ?? defaultConfig.backHref}" class="hover:text-brandYellow transition">Back</a>
    </nav>
  `;
}

function setFooter(footerEl: HTMLElement, config: ShellConfig) {
  footerEl.className =
    'bg-[#0a0a0a] border-t border-white/5 py-16 text-center';

  footerEl.innerHTML = `
    <h2 class="text-2xl font-bold mb-6">Kontakta mig</h2>

    <div class="space-y-3 text-white/60">
      <p>${config.footerEmail ?? defaultConfig.footerEmail}</p>
      <p>
        <a href="https://github.com/Addinato" target="_blank" rel="noopener noreferrer">Github</a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/adrian-lydén-b9847a29b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.querySelector<HTMLElement>('[data-project-header]');
  if (headerEl) setHeader(headerEl, defaultConfig);

  const footerEl = document.querySelector<HTMLElement>('[data-project-footer]');
  if (footerEl) setFooter(footerEl, defaultConfig);
});

