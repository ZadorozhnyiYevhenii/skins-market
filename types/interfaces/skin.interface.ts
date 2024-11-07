export interface Skin {
  id: number;
  name: string;
  price: number;
  image: string;
  exterior: SkinExterior;
}

interface SkinExterior {
  title: string;
  css_color: string;
}
