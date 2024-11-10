import type { Skin } from "~/types/interfaces/skin.interface";

export const isSkinSelected = (selectedSkins: Skin[], skin: Skin) =>
  selectedSkins.some((selectedSkin) => selectedSkin.id === skin.id);
