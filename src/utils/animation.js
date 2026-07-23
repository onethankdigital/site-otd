/**
 * Centralized utility to control animation execution during pre-rendering.
 * Returns false when the window is loaded by the static pre-renderer,
 * preventing GSAP from injecting inline opacities or transforms.
 */
export function shouldAnimate() {
  return typeof window !== 'undefined' && !window.__PRERENDER_INJECTED;
}
