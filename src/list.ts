
export function setupList(ul: HTMLUListElement) {
  const items = ul.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    items[i].classList.add("underline", "decoration-2", "decoration-blue-400");
  }
}


