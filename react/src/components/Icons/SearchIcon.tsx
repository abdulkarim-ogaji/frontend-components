type Props = {
  width: number;
  height: number;
  color?: string;
};

export default function SearchIcon({ width, height, color }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" style={{ width, height }}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.111 5a6.111 6.111 0 100 12.222 6.111 6.111 0 000-12.222zM3 11.111a8.111 8.111 0 1116.222 0 8.111 8.111 0 01-16.222 0z"
        fill={color ?? "var(--dark-theme-color)"}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.426 15.426a1 1 0 011.414 0l3.867 3.867a1 1 0 11-1.414 1.414l-3.867-3.867a1 1 0 010-1.414z"
        fill={color ?? "var(--dark-theme-color)"}
      ></path>
    </svg>
  );
}
