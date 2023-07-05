import "./index.css";
import { setupLink } from "./link";
import { setupList } from "./list";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* HTML */ `
  <section class="p-4">
    <h1 class="text-3xl md:text-4xl font-extrabold">Howdy, world.</h1>
    <p class="py-2">
      I'm Marcos, a software engineer by vocation and a passionate tinkerer by
      design. Although my <a id="interests">interests</a> vary widely, I've
      recently been particularly fascinated by the web ecosystem.
    </p>

    <p class="py-2">
      My most recent professional experience has been working on backend
      services, making extenstive use of Python. You can find me and a little
      more about my professional experience on <a id="linkedin">LinkedIn</a>.
    </p>

    <p class="py-2">
      If you're curious about how I made this website, you can find the source
      repo pinned on my <a id="github">GitHub</a>.
    </p>

    <p class="py-2">
      For any questions, inquiries or just to connect, feel free to
      <a id="contact">contact</a> me.
    </p>

    <p class="py-2">This is a list of things that are important to me:</p>

    <ul id="list-important" class="indent-4 md:columns-2">
      <li>Public transportation</li>
    </ul>

    <p class="py-2">
      This is a list of things that I can talk about endlessly:
    </p>

    <ul id="list-talk" class="indent-4 md:columns-2">
      <li>Python</li>
      <li>Concurrent Python</li>
      <li>Rust</li>
      <li>JavaScript</li>
      <li>Rick and Morty</li>
      <li>Skateboarding</li>
      <li>Operating systems</li>
    </ul>

    <p class="py-2">
      This is a list of things that I would like to learn more about:
    </p>

    <ul id="list-learn" class="indent-4 md:columns-2">
      <li>Rust</li>
      <li>Operating systems</li>
      <li>WebAssembly</li>
      <li>Functional programming</li>
      <li>HTTP/3</li>
      <li>XMPP</li>
    </ul>

    <p class="py-2">
      These lists are non-exhaustive and subject to change (especially the last
      one).
    </p>
  </section>
`;

setupLink(
  document.querySelector<HTMLAnchorElement>("#interests")!,
  "https://github.com/martinezmarcos?tab=stars"
);

setupLink(
  document.querySelector<HTMLAnchorElement>("#linkedin")!,
  "https://www.linkedin.com/in/marcos-martinez-326b88118/"
);

setupLink(
  document.querySelector<HTMLAnchorElement>("#github")!,
  "https://github.com/martinezmarcos"
);

setupLink(
  document.querySelector<HTMLAnchorElement>("#contact")!,
  "mailto:hi@marcos.fyi"
);

setupList(document.querySelector("#list-important")!);
setupList(document.querySelector("#list-talk")!);
setupList(document.querySelector("#list-learn")!);
