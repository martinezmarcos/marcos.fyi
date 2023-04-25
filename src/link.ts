export function setupLink(element: HTMLAnchorElement, href: string) {
  const _classes = [
    "bg-indigo-200",
    "rounded-md",
    "p-1",
    "capitalize",
    "font-semibold",
  ];
  element.classList.add(..._classes);
  element.href = href;
}
