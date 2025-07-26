import { useState } from "react";

export function useMobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return { mobileMenuOpen, setMobileMenuOpen };
}
