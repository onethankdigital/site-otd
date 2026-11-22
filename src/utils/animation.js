/**
 * Centralized utility to control animation execution during pre-rendering.
 * Returns false when the window is loaded by the static pre-renderer,
 * preventing GSAP from injecting inline opacities or transforms.
 */
export function shouldAnimate() {
  return typeof window !== 'undefined' && !window.__PRERENDER_INJECTED;
}

/**
 * Parallax de mouse só faz sentido com ponteiro fino (mouse/trackpad). Em celular e tablet
 * não há mousemove útil, e o listener só gastaria CPU.
 */
export function hasFinePointer() {
  return typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia('(pointer: fine)').matches;
}
