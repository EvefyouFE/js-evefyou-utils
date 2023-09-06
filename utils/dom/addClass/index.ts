export function addClass(element: HTMLElement, className: string): void {
  if (element && className) {
    if (element.classList) element.classList.add(className);
    else element.className += ` ${className}`;
  }
}
