"use client";

import { useState, type FormEvent } from "react";
import type { SubscribeSource } from "@/lib/subscribers";

type Status = "idle" | "loading" | "success" | "error";

type EmailCaptureFormProps = {
  source: SubscribeSource;
  /** "standalone" = big centered form (notify page). "inline" = compact bar (home/article/footer). */
  variant?: "standalone" | "inline";
  buttonLabel?: string;
  placeholder?: string;
};

export function EmailCaptureForm({
  source,
  variant = "inline",
  buttonLabel = "Get on the list",
  placeholder = "you@wherever.com",
}: EmailCaptureFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data.error ?? "Something broke on our end. Try again?");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Couldn't reach the server. Check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={
          variant === "standalone"
            ? "text-center"
            : "flex items-center gap-3 text-left"
        }
      >
        <p className="font-display text-lg text-fg">
          You&apos;re in. 🎧 Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  const isStandalone = variant === "standalone";

  return (
    <div className={isStandalone ? "w-full max-w-md" : "w-full max-w-md"}>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row"
        noValidate
      >
        <label htmlFor={`email-${source}`} className="sr-only">
          Email address
        </label>
        <input
          id={`email-${source}`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          autoComplete="email"
          disabled={status === "loading"}
          className="w-full flex-1 rounded-full border border-border bg-bg-raised px-5 py-3 text-fg placeholder:text-fg-muted outline-none transition-colors focus:border-accent disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-full bg-accent px-6 py-3 font-display font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : buttonLabel}
        </button>
      </form>
      {error && (
        <p role="alert" className="mt-2 text-sm text-accent">
          {error}
        </p>
      )}
    </div>
  );
}
