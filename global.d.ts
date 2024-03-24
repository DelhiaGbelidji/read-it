declare global {
    interface Window {
      matchMedia: (query: string) => {
        matches: boolean;
        addListener: (listener: () => void) => void;
        removeListener: (listener: () => void) => void;
      };
    }
  }
  
  export {};
  