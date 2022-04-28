import { useTransition, useResolvedPath, Link } from "@remix-run/react";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// source: https://gist.github.com/ryanflorence/0fb9190e83d99b3d779f0a593a91f07c

/**
 * Link that shows a transition for slow navigation
 */
export function PendingLink({
  to,
  children,
  ...props
}: React.PropsWithChildren<React.ComponentProps<typeof Link>>) {
  const isSlow = useIsSlowTransition(300);
  const isPending = useIsPendingPathname(to);

  return (
    <Link to={to} {...props}>
      {children} {isPending && isSlow && <span>(Loading)</span>}
    </Link>
  );
}

/**
 * Link that shows a transition for slow navigation
 */
export function PendingNavLink({
  to,
  children,
  ...props
}: React.PropsWithChildren<React.ComponentProps<typeof NavLink>>) {
  const isSlow = useIsSlowTransition(300);
  const isPending = useIsPendingPathname(to);

  return (
    <NavLink to={to} {...props}>
      {children} {isPending && isSlow && <span>(Loading)</span>}
    </NavLink>
  );
}

function useIsPendingPathname(to: React.ComponentProps<typeof Link>["to"]) {
  const { location } = useTransition();
  const { pathname } = useResolvedPath(to);
  return location?.pathname === pathname;
}

function useIsSlowTransition(ms = 300) {
  const transition = useTransition();
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    if (transition.state === "loading") {
      const id = setTimeout(() => setIsSlow(true), ms);
      return () => clearTimeout(id);
    } else {
      setIsSlow(false);
    }
  }, [transition, ms]);

  return isSlow;
}
