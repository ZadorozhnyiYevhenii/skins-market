import type { InjectionKey } from "vue";

export const activeStepKey = Symbol() as InjectionKey<
  Readonly<Ref<string | undefined>>
>;
