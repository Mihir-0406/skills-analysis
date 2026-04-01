import { useState, useCallback } from 'react';

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback(({ title, description, variant }) => {
    console.log(`Toast: ${title} - ${description} [${variant}]`);
    // Basic console implementation for now
  }, []);

  return { toast };
}
