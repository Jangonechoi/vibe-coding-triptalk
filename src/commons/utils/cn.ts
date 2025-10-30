export function cn(
  ...inputs: (
    | string
    | undefined
    | null
    | boolean
    | Record<string, boolean | undefined>
  )[]
) {
  return inputs
    .filter(Boolean)
    .map((input) => {
      if (typeof input === "object" && input !== null) {
        return Object.entries(input)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
          .join(" ");
      }
      return String(input);
    })
    .join(" ")
    .trim();
}
