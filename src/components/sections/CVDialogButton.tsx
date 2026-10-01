"use client";

import { useRef } from "react";
import { Download, X } from "lucide-react";

export function CVDialogButton({ cv }: { cv: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="border-hairline hover:border-text inline-block rounded-full border px-6 py-2.5 text-sm tracking-wide transition-colors"
      >
        CV
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="cv-dialog-title"
        className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none overflow-hidden border-0 bg-transparent p-0 text-text backdrop:bg-black/80 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        <div className="flex min-h-full items-center justify-center p-3 sm:p-6">
          <section className="bg-bg border-hairline flex h-[min(88svh,880px)] max-h-[calc(100svh-1.5rem)] w-full max-w-5xl flex-col overflow-hidden rounded-sm border shadow-2xl sm:max-h-[calc(100svh-3rem)]">
            <header className="bg-bg/90 flex shrink-0 items-center justify-between border-b border-hairline px-4 py-3 backdrop-blur-md sm:px-7 sm:py-4">
              <h2
                id="cv-dialog-title"
                className="text-sm tracking-[0.12em] uppercase"
              >
                Howard Frelindo Goh · CV
              </h2>
              <button
                type="button"
                aria-label="Close CV"
                onClick={() => dialogRef.current?.close()}
                className="border-hairline hover:border-text inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </header>

            <iframe
              src={cv}
              title="Howard Frelindo Goh CV PDF preview"
              className="min-h-0 w-full flex-1 bg-white"
            />

            <footer className="border-hairline flex shrink-0 items-center justify-between gap-4 border-t px-4 py-3 sm:px-7 sm:py-4">
              <p className="text-muted text-xs">View or download my CV.</p>
              <a
                href={cv}
                download="Howard_Frelindo_Goh_CV.pdf"
                className="border-hairline hover:border-text inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm tracking-wide transition-colors"
              >
                <Download className="h-4 w-4" strokeWidth={1.5} />
                Download CV
              </a>
            </footer>
          </section>
        </div>
      </dialog>
    </>
  );
}
