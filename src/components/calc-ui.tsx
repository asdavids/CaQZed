"use client";

export function NumberField({
  label,
  value,
  onChange,
  prefix,
  suffix,
  placeholder,
  min = 0,
  step = "any",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  prefix?: string;
  suffix?: string;
  placeholder?: string;
  min?: number;
  step?: string | number;
}) {
  return (
    <label className="block">
      <span className="block text-[13px] font-medium text-foreground-muted mb-1.5">
        {label}
      </span>
      <div className="flex items-center rounded-xl border border-border bg-surface focus-within:border-brand-green transition-colors">
        {prefix && (
          <span className="pl-3.5 text-[14px] text-foreground-muted select-none">
            {prefix}
          </span>
        )}
        <input
          type="number"
          inputMode="decimal"
          className="w-full bg-transparent px-3.5 py-2.5 text-[15px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          value={value}
          min={min}
          step={step}
          placeholder={placeholder ?? "0"}
          onChange={(e) => onChange(e.target.value)}
        />
        {suffix && (
          <span className="pr-3.5 text-[14px] text-foreground-muted select-none">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );
}

export function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="block text-[13px] font-medium text-foreground-muted mb-1.5">
        {label}
      </span>
      <select
        className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-[15px] outline-none focus:border-brand-green transition-colors"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function ResultCard({
  label,
  value,
  emphasis = false,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`rounded-xl px-4 py-3.5 ${
        emphasis
          ? "bg-brand-green text-white"
          : "bg-surface-muted text-foreground"
      }`}
    >
      <div
        className={`text-[12px] font-medium ${
          emphasis ? "text-white/80" : "text-foreground-muted"
        }`}
      >
        {label}
      </div>
      <div className="mt-0.5 text-[20px] font-display font-semibold tabular-nums">
        {value}
      </div>
    </div>
  );
}

export function ResultsGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-3 sm:grid-cols-2">{children}</div>;
}
