declare module "aos" {
  interface AosOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    offset?: number;
    delay?: number;
    anchorPlacement?: string;
    [key: string]: any;
  }

  const AOS: {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  };

  export default AOS;
}
