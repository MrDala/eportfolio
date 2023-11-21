import A from "./atoms/A";

export type IconButtonProps = {
  name: string;
  className?: string;
  onClick?: Function;
};

export type TextProps = {
  children: string | React.ReactElement<typeof A>,
  className ?: string;
}