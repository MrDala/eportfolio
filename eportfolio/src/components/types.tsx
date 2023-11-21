import A from "./atoms/A";

export type IconButtonProps = {
  name: string;
  className?: string;
  openInNewTab?: boolean;
  openOverlay?: boolean;
  link?: string;
};

export type TextProps = {
  children: string | React.ReactElement<typeof A>,
  className ?: string;
}