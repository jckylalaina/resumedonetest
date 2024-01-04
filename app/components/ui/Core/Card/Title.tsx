import CardCssModule from "./Card.module.css";
export default function Title({ children }: { children: string }) {
  return <h4 className={CardCssModule.title}>{children}</h4>;
}
