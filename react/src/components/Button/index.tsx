import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  type?: "submit" | "button" | "reset";
  loading: boolean;
  loadingEl?: ReactNode;
};

export default function Button({ children, type, loading, loadingEl }: Props) {
  return (
    <button className="button" type={type ?? "button"} disabled={loading}>
      {loading ? loadingEl : children}
    </button>
  );
}
