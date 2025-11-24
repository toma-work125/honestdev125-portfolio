import type { SVGProps } from "react";

type QiitaIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const QiitaIcon = ({ size = 24, ...props }: QiitaIconProps) => (
  <svg viewBox="0 0 24 24" aria-label="Qiita" role="img" width={size} height={size} {...props}>
    {/* <rect width="24" height="24" rx="6" fill="#111111" /> */}
    <circle cx="12" cy="12" r="6" stroke="#fff" strokeWidth="2" fill="none" />
    <path d="M15.5 15.5 18 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

