"use client";

import { useState, type FormEvent } from "react";
import type { SubscribeSource } from "@/lib/subscribers";

type Status = "idle" | "loading" | "success" | "error";

type EmailCaptureFormProps = {
  source: SubscribeSource;
  variant?: "standalone" | "inline";
  buttonLabel?: string;
  placeholder?: string;
  tone?: "ink" | "paper";
};

export function EmailCaptureForm({
  source,
  variant = "inline",
  buttonLabel = "Join The Draft",
  placeholder = "your@email.com",
  tone = "ink",
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

  const isPaper = tone === "paper";
  const textColor = isPaper ? "text-paper" : "text-ink";
  const borderColor = isPaper ? "border-paper" : "border-ink";

  if (status === "success") {
    return (
      <p className={`font-display text-xl ${textColor}`}>
        YOU&apos;RE ON THE LIST. — check your inbox.
      </p>
    );
  }

  return (
    <div className={variant === "standalone" ? "w-full max-w-lg" : "w-full max-w-md"}>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-0 sm:flex-row" noValidate>
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
          className={`w-full flex-1 border ${borderColor} bg-transparent px-4 py-3 font-mono text-sm ${textColor} outline-none transition-colors ${isPaper ? "placeholder:text-muted-2" : "placeholder:text-muted"} focus:bg-red/5 disabled:opacity-60`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 border border-red bg-red px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-paper transition-opacity hover:opacity-85 disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : buttonLabel}
        </button>
      </form>
      {error && (
        <p role="alert" className="mt-2 inline-block bg-red px-2 py-1 font-mono text-xs text-paper">
          {error}
        </p>
      )}
    </div>
  );
}
