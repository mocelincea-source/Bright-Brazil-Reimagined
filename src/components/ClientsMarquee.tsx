import syngenta from "@/assets/clients/syngenta.png";
import syngentaBrasil from "@/assets/clients/syngenta-brasil.png";
import vtal from "@/assets/clients/vtal.png";
import rift from "@/assets/clients/rift.png";
import cargopetro from "@/assets/clients/cargopetro.png";
import hrz from "@/assets/clients/hrz.png";
import lotsGroup from "@/assets/clients/lots-group.png";
import newExpo from "@/assets/clients/new-expo.png";
import ravato from "@/assets/clients/ravato.png";
import rodoil from "@/assets/clients/rodoil.png";

const logos = [
  { src: syngenta, alt: "Syngenta" },
  { src: hrz, alt: "HRZ" },
  { src: vtal, alt: "V.tal" },
  { src: cargopetro, alt: "Cargopetro" },
  { src: newExpo, alt: "New Expo" },
  { src: rift, alt: "Rift Distribuidora" },
  { src: lotsGroup, alt: "Lots Group" },
  { src: ravato, alt: "Ravato" },
  { src: rodoil, alt: "Rodoil" },
  { src: syngentaBrasil, alt: "Syngenta Brasil" },
];

interface Props {
  label?: string;
  variant?: "light" | "dark";
}

const ClientsMarquee = ({ label = "Trusted by", variant = "light" }: Props) => {
  const labelColor = variant === "light" ? "text-secondary/50" : "text-muted-foreground";
  const borderColor = variant === "light" ? "border-secondary/15" : "border-border";
  const imgFilter = variant === "dark" ? "invert" : "";

  return (
    <div className={`border-t ${borderColor} pt-8 overflow-hidden`}>
      <p className={`${labelColor} text-xs uppercase tracking-widest mb-6 text-center`}>{label}</p>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap items-center gap-16">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <img
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className={`h-12 md:h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 ${imgFilter}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsMarquee;
