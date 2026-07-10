import { useEffect, useRef, useState } from "react";
import micStickerAsset from "@/assets/sticker-mic.png.asset.json";
import singStickerAsset from "@/assets/sticker-sing.png.asset.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  ShieldCheck,
  Download,
  Sparkles,
  Clock,
  Lock,
  Gift,
  Play,
  Cloud,
  X,
  VolumeX,
  CheckCircle2,
  BookOpen,
  Puzzle,
  Palette,
  LayoutGrid,
  Music,
} from "lucide-react";
import depoimentoPatricia from "@/assets/depoimento-mariana.png.asset.json";
import depoimentoCamila from "@/assets/depoimento-carlos-wpp.png.asset.json";
import depoimentoJuliana from "@/assets/depoimento-fernanda.png.asset.json";
import bonusGuiaImpressao from "@/assets/bonus-guia-impressao.webp";
import bonusEnvelopes from "@/assets/bonus-envelopes.webp";
import bonusAlbumPdf from "@/assets/bonus-album-pdf.webp";
import correcao30Erros from "@/assets/correcao-30-erros.webp.asset.json";
import planos10Treino from "@/assets/10-planos-treino.webp.asset.json";
import manualFundamentos from "@/assets/manual-fundamentos.webp.asset.json";
import figurinhasSelecao from "@/assets/figurinhas-selecao.webp";
import treinos180 from "@/assets/treinos-180.webp.asset.json";
import videos500 from "@/assets/videos-500.webp.asset.json";
import pdfDivulgacao from "@/assets/bonus-1-sudoku.webp.asset.json";
import entregaGoogleDrive from "@/assets/entrega-google-drive.webp";
import figurinhasEspeciais from "@/assets/figurinhas-especiais.webp";
import videoPoster from "@/assets/niveis-dificuldade.webp.asset.json";
import kitGuia from "@/assets/acesso-para-sempre.webp.asset.json";
import modelosProntos from "@/assets/caca-palavras-card.webp.asset.json";
import aulas250Card from "@/assets/aulas-250-card.png.asset.json";
import progressaoNivelCard from "@/assets/progressao-nivel-card.png.asset.json";
import guiaPlanejamentoCard from "@/assets/guia-planejamento-card.png.asset.json";
import habilidadesCard from "@/assets/habilidades-card.png.asset.json";
import scriptVendas from "@/assets/revistinhas-colorir.webp.asset.json";
import heroVideoAsset from "@/assets/minivsl.mp4.asset.json";
const heroVideo = heroVideoAsset.url;

function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [unmuted, setUnmuted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          el.currentTime = 0;
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: [0, 0.5, 1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const toggleMute = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = !el.muted;
    setUnmuted(!el.muted);
    setShowOverlay(false);
    if (!el.muted) el.play().catch(() => {});
  };

  return (
    <>
      <video
        ref={ref}
        src={heroVideo}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        playsInline
        preload="metadata"
        onClick={toggleMute}
      />
      {showOverlay && (
        <button
          type="button"
          onClick={toggleMute}
          className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-md px-4 py-2.5 text-[13px] font-semibold text-white backdrop-blur-sm shadow-lg"
          style={{ background: `color-mix(in oklab, ${C.red} 50%, transparent)` }}
        >
          <VolumeX className="h-4 w-4" />
          Clique para começar a assistir
        </button>
      )}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={unmuted ? "Mutar vídeo" : "Ativar som"}
        className="absolute bottom-2 right-2 rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur"
      >
        {unmuted ? "🔊 Som" : "🔇 Tocar com som"}
      </button>
    </>
  );
}

/* ============================================================
   PALETTE — Copa 2026 inspired (vibrant blocks on B&W base)
============================================================ */
const C = {
  ink: "#00162E",
  paper: "oklch(0.98 0.004 95)",
  white: "#ffffff",
  // Identidade: navy #00162E + azul brilhante #1E80FF + amarelo #FFDB07
  red: "oklch(0.58 0.24 25)",
  redDark: "oklch(0.42 0.2 25)",
  orange: "#FFDB07",
  yellow: "#FFDB07",
  lime: "#FFDB07",
  green: "oklch(0.62 0.22 148)",
  greenDark: "oklch(0.42 0.18 148)",
  blue: "#1E80FF",
  blueDark: "#00162E",
  skyBlue: "#1E80FF",
  purple: "#1E80FF",
  lilac: "#FFDB07",
  pink: "#FFDB07",
  magenta: "#1E80FF",
  coral: "#FFDB07",
};


/* ============================================================
   GEOMETRIC DECORATIVE PRIMITIVES
============================================================ */

function HalfCircle({
  className = "",
  color,
  size = 120,
  rotate = 0,
}: { className?: string; color: string; size?: number; rotate?: number }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden style={{ transform: `rotate(${rotate}deg)` }}>
      <svg width={size} height={size / 2} viewBox="0 0 100 50">
        <path d="M0,50 A50,50 0 0 1 100,50 Z" fill={color} />
      </svg>
    </div>
  );
}

function Quarter({
  className = "",
  color,
  size = 120,
  rotate = 0,
}: { className?: string; color: string; size?: number; rotate?: number }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden style={{ transform: `rotate(${rotate}deg)` }}>
      <svg width={size} height={size} viewBox="0 0 100 100">
        <path d="M0,0 L100,0 A100,100 0 0 1 0,100 Z" fill={color} />
      </svg>
    </div>
  );
}

function Block({
  className = "",
  color,
  rotate = 0,
}: { className?: string; color: string; rotate?: number }) {
  return (
    <div
      className={`pointer-events-none absolute ${className}`}
      style={{ background: color, transform: `rotate(${rotate}deg)` }}
      aria-hidden
    />
  );
}

/* Volleyball net strip — diamond mesh between yellow/blue bands */
function PatternStrip({ className = "", height = 28 }: { className?: string; height?: number }) {
  const cell = 12;
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height, background: C.ink }}
      aria-hidden
    >
      {/* top yellow rail */}
      <div className="absolute inset-x-0 top-0" style={{ height: 3, background: C.yellow }} />
      {/* bottom blue rail */}
      <div className="absolute inset-x-0 bottom-0" style={{ height: 3, background: C.blue }} />
      {/* diamond net mesh */}
      <div
        className="absolute inset-x-0"
        style={{
          top: 3,
          bottom: 3,
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.55) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255,255,255,0.55) 1px, transparent 1px)
          `,
          backgroundSize: `${cell}px ${cell}px`,
        }}
      />
    </div>
  );
}


/* Volleyball ball mark — replaces FIFA "26" number mark */
function NumberMark({
  className = "",
  color = C.ink,
  bg = "transparent",
  size = 220,
}: { className?: string; color?: string; bg?: string; size?: number }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden style={{ background: bg }}>
      <svg width={size} height={size} viewBox="0 0 220 220" fill="none" stroke={color} strokeWidth="10" strokeLinecap="round">
        <circle cx="110" cy="110" r="95" />
        {/* three curved seams of a volleyball */}
        <path d="M30,80 C 80,95 140,95 200,70" />
        <path d="M30,140 C 80,125 140,125 200,150" />
        <path d="M110,15 C 95,75 95,145 110,205" />
        <path d="M60,30 C 95,80 95,140 60,200" />
        <path d="M160,30 C 125,80 125,140 160,200" />
      </svg>
    </div>
  );
}

/* Repeating curved pattern for backgrounds */
function CurvePattern({ className = "", colors }: { className?: string; colors: string[] }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden>
      <svg width="280" height="180" viewBox="0 0 280 180">
        {colors.map((c, i) => (
          <path
            key={i}
            d={`M${i * 36},180 A60,60 0 0 1 ${i * 36 + 60},180 Z`}
            fill={c}
          />
        ))}
      </svg>
    </div>
  );
}

/* Iron icon — reusable across sections (replaces previous VolleyBall mark) */
function VolleyBall({
  className = "",
  color = "#1E80FF",
  size = 70,
  rotate = 0,
  opacity = 0.85,
}: { className?: string; color?: string; size?: number; rotate?: number; opacity?: number }) {
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden
      style={{ transform: `rotate(${rotate}deg)`, opacity }}
      fill="none"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* iron body */}
      <path d="M12 70 C 18 50, 38 38, 88 40 L 84 60 C 84 66, 78 70, 70 70 Z" />
      {/* base plate */}
      <path d="M12 70 L 80 70" strokeWidth="5" />
      {/* handle */}
      <path d="M34 40 C 38 24, 60 22, 64 36" />
      {/* steam dots */}
      <circle cx="24" cy="82" r="1.6" fill={color} stroke="none" />
      <circle cx="40" cy="86" r="1.6" fill={color} stroke="none" />
      <circle cx="56" cy="82" r="1.6" fill={color} stroke="none" />
    </svg>
  );
}

/* Hero sticker icons — microphone & singer, mobile-first sizing */

function MicSticker({
  className = "",
  size,
  rotate = 0,
}: { className?: string; size?: number; rotate?: number }) {
  return (
    <div
      className={`pointer-events-none absolute select-none ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.18))",
        ...(size ? { width: size, height: size } : {}),
      }}
      aria-hidden
    >
      <img
        src={micStickerAsset.url}
        alt=""
        className="h-full w-full object-contain"
        draggable={false}
      />
    </div>
  );
}

function SingerSticker({
  className = "",
  size,
  rotate = 0,
}: { className?: string; size?: number; rotate?: number }) {
  return (
    <div
      className={`pointer-events-none absolute select-none ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.18))",
        ...(size ? { width: size, height: size } : {}),
      }}
      aria-hidden
    >
      <img
        src={singStickerAsset.url}
        alt=""
        className="h-full w-full object-contain"
        draggable={false}
      />
    </div>
  );
}



/* ============================================================
   CTA BUTTON
============================================================ */

function scrollToOffer() {
  const el = document.getElementById("oferta");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function CTAButton({
  children,
  pulse = false,
  checkout = false,
  variant = "solid",
  className = "",
}: {
  children: React.ReactNode;
  pulse?: boolean;
  checkout?: boolean;
  variant?: "solid" | "dark";
  className?: string;
}) {
  const handleClick = () => {
    if (checkout) window.open("https://pay.wiapy.com/jUJwC_9D3C", "_blank");
    else scrollToOffer();
  };
  const isDark = variant === "dark";
  return (
    <button
      onClick={handleClick}
      className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-4 text-base font-bold uppercase tracking-[0.04em] text-white transition-transform active:translate-y-[2px] ${pulse ? "animate-cta-pulse" : ""} ${className}`}
      style={{
        background: isDark ? C.ink : C.green,
        boxShadow: isDark
          ? `0 6px 0 ${C.ink}, 0 12px 24px -10px rgba(0,0,0,0.35)`
          : `0 6px 0 ${C.greenDark}, 0 14px 28px -10px oklch(0.55 0.2 148 / 0.55)`,
        fontFamily: "var(--font-body)",
        letterSpacing: "0.01em",
      }}
    >
      <span className="relative z-10 text-[1.02rem]">{children}</span>
      <span
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/25 animate-cta-shine"
        aria-hidden
      />
    </button>
  );
}

/* ============================================================
   COUNTDOWN
============================================================ */

function Countdown({ minutes = 15 }: { minutes?: number }) {
  const [secs, setSecs] = useState(minutes * 60);
  useEffect(() => {
    const id = setInterval(() => setSecs((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const m = String(Math.floor(secs / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");
  return (
    <div
      className="rounded-md px-3 py-3 text-center"
      style={{ background: C.red }}
    >
      <p
        className="mb-2 inline-flex items-center gap-1.5 rounded-sm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em]"
        style={{ background: "rgba(0,0,0,0.35)", color: C.white, fontFamily: "var(--font-body)" }}
      >
        <Clock className="h-3 w-3" /> Esta oferta expira em
      </p>
      <div className="flex items-center justify-center gap-2">
        <TimeBox value={m} label="MIN" />
        <span className="text-2xl font-bold text-white">:</span>
        <TimeBox value={s} label="SEG" />
      </div>
    </div>
  );
}

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="min-w-[64px] rounded-sm px-2 py-1.5"
      style={{ background: "rgba(0,0,0,0.25)", border: `1px solid rgba(255,255,255,0.5)` }}
    >
      <div
        className="text-3xl font-bold leading-none text-white"
        style={{ fontVariantNumeric: "tabular-nums", fontFamily: "var(--font-body)" }}
      >
        {value}
      </div>
      <div className="mt-1 text-[10px] font-medium tracking-[0.2em] text-white/80" style={{ fontFamily: "var(--font-body)" }}>
        {label}
      </div>
    </div>
  );
}

/* ============================================================
   STICKER / MOCKUP CARD (album sticker frame)
============================================================ */

function StickerFrame({
  accent = C.blue,
  children,
  topLabel,
}: {
  accent?: string;
  children?: React.ReactNode;
  topLabel?: string;
}) {
  return (
    <div className="relative">
      {/* outer ticket-style frame */}
      <div
        className="relative aspect-[3/4] w-full overflow-hidden rounded-md border-[3px] bg-white shadow-[0_10px_0_rgba(0,0,0,0.12),0_24px_40px_-18px_rgba(0,0,0,0.35)]"
        style={{ borderColor: C.ink }}
      >
        {/* color band top */}
        <div className="flex h-7 items-center justify-between px-2" style={{ background: accent }}>
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-white/90" />
            <span className="h-2 w-2 rounded-full bg-white/60" />
          </div>
          {topLabel && (
            <span
              className="text-[9px] font-black uppercase tracking-[0.18em] text-white"
              style={{ fontFamily: "var(--font-condensed)" }}
            >
              {topLabel}
            </span>
          )}
          <span className="text-[9px] font-black text-white/90" style={{ fontFamily: "var(--font-condensed)" }}>
            VÔLEI · TREINO
          </span>
        </div>
        {/* body */}
        <div className="relative h-[calc(100%-1.75rem)] w-full overflow-hidden" style={{ background: C.paper }}>
          {children ?? <DefaultStickerArt accent={accent} />}
        </div>
      </div>
      {/* corner notch */}
      <div className="absolute -right-1 -top-1 h-4 w-4 rotate-45 border-[3px] bg-white" style={{ borderColor: C.ink }} aria-hidden />
    </div>
  );
}

function DefaultStickerArt({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0">
      <Quarter className="left-0 top-0" color={accent} size={120} rotate={0} />
      <Quarter className="bottom-0 right-0" color={C.ink} size={90} rotate={180} />
      <HalfCircle className="bottom-0 left-1/4" color={C.yellow} size={90} />
      <div className="absolute inset-0 flex items-end justify-center pb-3">
        <div
          className="rounded-sm px-2 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white"
          style={{ background: C.ink, fontFamily: "var(--font-condensed)" }}
        >
          TREINO · PRONTO
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   DATA
============================================================ */

const receberCards = [
  { t: "+250 Aulas de Canto Prontas", d: "Mais de 250 aulas práticas prontas para aplicar.", c: C.blue },
  { t: "Organização por Habilidades", d: "Respiração, Afinação, Belting, Mix Voice, Falsete e muito mais", c: C.yellow },
  { t: "Progressão por Nível", d: "🟢 Iniciante · 🟡 Intermediário · 🔴 Avançado", c: C.blue },
  { t: "Acesso Vitalício em PDF", d: "Receba todo o material em PDF de alta qualidade", c: C.yellow },
];

const beneficios = [
  { t: "Mais de 250 aulas prontas", d: "Nunca mais fique sem ideias durante uma aula." },
  { t: "Organização Inteligente", d: "Encontre qualquer exercício em poucos segundos." },
  { t: "Progressão Pedagógica", d: "Cada habilidade evolui do iniciante ao avançado." },
  { t: "Material Visual", d: "Cada aula possui ilustração prática para facilitar a aplicação." },
  { t: "Biblioteca Completa", d: "Respiração, Afinação, Belting, Mix Voice, Falsete, Ressonância, Vibrato, Performance e muito mais." },
  { t: "Diagnóstico Inteligente", d: "Descubra quais aulas utilizar para cada dificuldade do aluno." },
  { t: "Planejamento Simplificado", d: "Monte aulas completas em poucos minutos." },
  { t: "Acesso Imediato", d: "Após a compra, você recebe acesso instantâneo em PDF de alta qualidade." },
];

const depoimentos = [
  { n: "Mariana Souza", t: "", img: depoimentoPatricia.url },
  { n: "Carlos Mendes", t: "", img: depoimentoCamila.url },
  { n: "Fernanda Lima", t: "", img: depoimentoJuliana.url },
];

const faq = [
  { q: "O que recebo após a compra?", a: "Você recebe acesso à Biblioteca Inteligente de Exercícios™ com +250 aulas práticas em PDF, além dos três bônus exclusivos." },
  { q: "O material possui teoria?", a: "Não. O produto começa imediatamente pelos exercícios. Cada página corresponde a uma aula prática pronta para aplicação." },
  { q: "Os exercícios possuem níveis?", a: "Sim. Todas as habilidades são organizadas em três níveis: 🟢 Iniciante, 🟡 Intermediário e 🔴 Avançado." },
  { q: "Posso utilizar com crianças e adultos?", a: "Sim. A biblioteca foi organizada para atender diferentes perfis e níveis de alunos." },
  { q: "Como recebo o acesso?", a: "Logo após a confirmação do pagamento você recebe as instruções de acesso ao material." },
  { q: "O acesso é vitalício?", a: "Sim. Você poderá baixar e utilizar o material sempre que desejar." },
  { q: "Preciso ter experiência para aplicar?", a: "Não. As aulas foram desenhadas para que qualquer professor de canto consiga aplicar rapidamente." },
  { q: "O pagamento é único?", a: "Sim. Você paga uma única vez e recebe acesso vitalício ao material." },
  { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia. Se não gostar, basta solicitar o reembolso dentro desse prazo." },
];


/* ============================================================
   PAGE
============================================================ */

export default function LandingPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <style>{`
        @keyframes cta-pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.025); } }
        .animate-cta-pulse { animation: cta-pulse 2s ease-in-out infinite; }
        @keyframes cta-shine {
          0% { transform: translateX(-50%) skewX(-12deg); }
          60%, 100% { transform: translateX(350%) skewX(-12deg); }
        }
        .animate-cta-shine { animation: cta-shine 3s ease-in-out infinite; }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 0 0 oklch(0.88 0.18 95 / 0.55), 0 8px 0 rgba(0,0,0,0.95); }
          50% { box-shadow: 0 0 28px 6px oklch(0.88 0.18 95 / 0.85), 0 8px 0 rgba(0,0,0,0.95); }
        }
        .animate-glow-pulse { animation: glow-pulse 2.2s ease-in-out infinite; }
      `}</style>

      {/* ===== TOP BAR — announcement strip with artisan border icons ===== */}
      <div
        className="flex w-full items-center justify-center gap-3 overflow-hidden whitespace-nowrap px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em]"
        style={{
          background: C.ink,
          color: C.yellow,
          fontFamily: "var(--font-body)",
          borderBottom: `4px solid ${C.yellow}`,
        }}
      >
        <Music className="h-4 w-4" style={{ color: C.yellow }} />
        +250 aulas prontas para aplicar
        <Music className="h-4 w-4" style={{ color: C.yellow }} />
      </div>



      {/* ===== HERO ===== */}
      <section
        className="relative overflow-hidden px-4 pb-12 pt-12"
        style={{
          background: C.paper,
          backgroundImage: `
            repeating-linear-gradient(90deg, rgba(110,105,70,0.08) 0 1px, transparent 1px 3px),
            repeating-linear-gradient(0deg, rgba(110,105,70,0.06) 0 1px, transparent 1px 3px),
            radial-gradient(rgba(110,105,70,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "auto, auto, 6px 6px",
        }}
      >
        {/* hero sticker icons — microphone & singer, mobile-first sizing */}
        <MicSticker
          className="left-[-40px] top-[-28px] h-[130px] w-[130px] md:left-[-48px] md:top-[-34px] md:h-[160px] md:w-[160px]"
          rotate={-18}
        />
        <SingerSticker
          className="right-[-40px] top-[-28px] h-[130px] w-[130px] md:right-[-48px] md:top-[-34px] md:h-[160px] md:w-[160px]"
          rotate={-16}
        />


        <div className="relative mx-auto max-w-md">
          {/* eyebrow tag */}
          <div className="mb-6 mt-4 flex justify-center">
            <span
              className="inline-flex items-center gap-2 rounded-xl border-2 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ borderColor: C.ink, color: C.ink, fontFamily: "var(--font-body)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: C.yellow }} />
              +250 Aulas de Canto Prontas
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: C.blue }} />
            </span>
          </div>



          {/* headline */}
          <h1
            className="font-anton text-center leading-[1.05] tracking-tight"
            style={{ color: C.ink }}
          >
            <span
              className="font-anton mb-4 block whitespace-nowrap text-center leading-[1.05]"
              style={{
                color: C.ink,
                fontSize: "clamp(2.8rem, 15vw, 5.8rem)",
              }}
            >
              TENHA ACESSO
            </span>

            <span
              className="font-anton mx-auto block w-fit max-w-full whitespace-nowrap rounded-md px-5 py-2 leading-[1.05] text-white"
              style={{
                background: "#1E80FF",
                color: "#ffffff",
                fontSize: "clamp(2.5rem, 13.2vw, 5.5rem)",
                transform: "rotate(-3deg)",
                boxShadow: `6px 6px 0 ${C.ink}, 0 18px 30px -12px rgba(0,0,0,0.35)`,
              }}
            >
              +250 aulas
            </span>

            <span
              className="font-anton mx-auto mt-3 block w-fit max-w-full whitespace-nowrap rounded-md px-5 py-2 leading-[1.05] text-white"
              style={{
                background: "#1E80FF",
                fontSize: "clamp(2.3rem, 12vw, 5.0rem)",
                transform: "rotate(-3deg)",
                boxShadow: `6px 6px 0 ${C.blueDark}, 0 18px 30px -12px rgba(0,0,0,0.35)`,
              }}
            >
              de canto
            </span>



          </h1>





          <p className="mx-auto mt-12 max-w-sm text-center text-[15px] leading-relaxed text-[oklch(0.28_0.02_260)]">
            Tenha acesso a uma biblioteca completa de aulas práticas prontas para aplicar em seus alunos.
          </p>


          {/* video card 3:4 — premium dark sport mockup */}
          <div className="relative mx-auto mt-8 max-w-xs">
            <div
              className="relative aspect-[3/4] w-full overflow-hidden rounded-md border-[3px] bg-[oklch(0.18_0.02_260)] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.5)]"
              style={{ borderColor: C.ink }}
            >
              <HeroVideo />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-7">
            <CTAButton>Quero acessar agora</CTAButton>
          </div>

          {/* mini selos */}
          <ul className="mt-5 grid grid-cols-2 gap-2 text-[12px]">
            {[
              { i: <Sparkles className="h-4 w-4" />, t: "+250 aulas prontas", c: C.red },
              { i: <Cloud className="h-4 w-4" />, t: "Organização inteligente", c: C.blue },
              { i: <Download className="h-4 w-4" />, t: "PDF em alta qualidade", c: C.green },
              { i: <Lock className="h-4 w-4" />, t: "Acesso imediato", c: C.orange },
            ].map((s) => (
              <li
                key={s.t}
                className="flex items-center gap-2 rounded-sm border-2 bg-white px-3 py-2.5 font-medium"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                <span style={{ color: s.c }}>{s.i}</span>
                <span style={{ fontFamily: "var(--font-body)" }}>{s.t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PatternStrip />

      {/* ===== O QUE VOCÊ RECEBE ===== */}
      <section className="relative overflow-hidden px-4 py-16" style={{ background: C.white }}>
        <VolleyBall className="-left-16 top-10" color="#1E80FF" size={90} rotate={-20} opacity={0.18} />
        <VolleyBall className="-right-14 bottom-16" color={C.yellow} size={110} rotate={15} opacity={0.22} />





        <div className="relative z-10 mx-auto max-w-md">
          <SectionTitle
            eyebrow="Conteúdo do pacote"
            title={
              <>
                O que você <span style={{ color: C.blue }}>recebe hoje</span>
              </>
            }
            accent={C.blue}
            titleClassName="text-[2.6rem] sm:text-[3.2rem] font-black"
          />

          <p className="mt-3 text-center text-[15px] text-[oklch(0.32_0.02_260)]">
            Acesse uma biblioteca completa de exercícios em PDF, prontos para aplicar em suas aulas.
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-md">
          <Carousel opts={{ align: "center", loop: true }}>
            <CarouselContent>
              {receberCards.map((c, i) => (
                <CarouselItem key={c.t} className="basis-[88%]">
                  <div
                    className="relative overflow-hidden rounded-md border-[3px] bg-white shadow-[0_8px_0_rgba(0,0,0,0.9)]"
                    style={{ borderColor: C.ink }}
                  >
                    <div className="p-4">
                      <div
                        className="relative aspect-[3/4] w-full overflow-hidden rounded-md border-[3px] bg-white"
                        style={{ borderColor: C.ink }}
                        aria-label={c.t}
                      >
                        {i === 0 && (
                          <img
                            src={aulas250Card.url}
                            alt={c.t}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        )}
                        {i === 1 && (
                          <img
                            src={habilidadesCard.url}
                            alt={c.t}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        )}
                        {i === 2 && (
                          <img
                            src={progressaoNivelCard.url}
                            alt={c.t}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        )}
                        {i === 3 && (
                          <img
                            src={scriptVendas.url}
                            alt={c.t}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        )}
                      </div>
                    </div>
                    <div className="px-5 pb-5">
                      <div className="mb-3 h-1.5 w-14 rounded-sm" style={{ background: c.c }} />
                      <h3 className="text-xl leading-tight" style={{ color: C.ink, fontFamily: "var(--font-display)" }}>
                        {c.t}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-[oklch(0.32_0.02_260)]">{c.d}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mx-auto max-w-md">
          <div className="mt-8">
            <CTAButton>Quero acessar +250 aulas</CTAButton>
          </div>
        </div>
      </section>

      {/* ===== BÔNUS ===== */}
      <section
        className="relative overflow-hidden px-4 py-16"
        style={{
          background: C.paper,
          backgroundImage: `
            repeating-linear-gradient(90deg, rgba(110,105,70,0.08) 0 1px, transparent 1px 3px),
            repeating-linear-gradient(0deg, rgba(110,105,70,0.06) 0 1px, transparent 1px 3px),
            radial-gradient(rgba(110,105,70,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "auto, auto, 6px 6px",
        }}
      >
        <VolleyBall className="-right-16 top-8" color="#1E80FF" size={100} rotate={20} opacity={0.18} />
        <VolleyBall className="-left-14 bottom-10" color={C.yellow} size={80} rotate={-10} opacity={0.22} />





        <div className="relative mx-auto max-w-md">
          {/* Sticker-style frame */}
          <div
            className="relative rounded-[22px] border-[3px] border-dashed bg-white px-4 pb-8 pt-10 shadow-[8px_8px_0_rgba(0,0,0,0.9)]"
            style={{ borderColor: C.ink }}
          >
            {/* perforated corner dots */}
            <span className="absolute -left-2 -top-2 h-4 w-4 rounded-full border-[3px] bg-white" style={{ borderColor: C.ink }} />
            <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full border-[3px] bg-white" style={{ borderColor: C.ink }} />
            <span className="absolute -left-2 -bottom-2 h-4 w-4 rounded-full border-[3px] bg-white" style={{ borderColor: C.ink }} />
            <span className="absolute -right-2 -bottom-2 h-4 w-4 rounded-full border-[3px] bg-white" style={{ borderColor: C.ink }} />

            {/* tilted sticker tag */}
            <span
              className="font-anton absolute -top-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-sm border-[3px] px-3 py-1 text-[12px] tracking-[0.18em] shadow-[3px_3px_0_rgba(0,0,0,0.9)]"
              style={{
                background: C.orange,
                color: C.ink,
                borderColor: C.ink,
                transform: "rotate(-3deg)",
              }}

            >
              <Sparkles className="h-3.5 w-3.5" />
              Brindes
              <Sparkles className="h-3.5 w-3.5" />
            </span>

            {/* sparkle decorations */}
            <Sparkles className="absolute -top-3 -left-3 h-5 w-5" style={{ color: C.yellow, transform: "rotate(-15deg)" }} />
            <Sparkles className="absolute -top-2 -right-3 h-4 w-4" style={{ color: C.magenta, transform: "rotate(20deg)" }} />
            <Sparkles className="absolute -bottom-3 left-6 h-4 w-4" style={{ color: C.lime }} />
            <Sparkles className="absolute -bottom-2 right-6 h-5 w-5" style={{ color: C.blue, transform: "rotate(-10deg)" }} />

          <SectionTitle
            eyebrow="Bônus"
            title={
              <>
                Você ainda leva
                <br />
                <span style={{ color: C.blue }}>3 bônus exclusivos</span>
              </>
            }
            accent={C.red}
            titleClassName="leading-[1.35]"
          />

          <div className="mt-5 flex justify-center">
            <span
              className="inline-flex items-center gap-2 rounded-sm border-2 bg-white px-4 py-2 text-[12px] font-medium"
              style={{ borderColor: C.ink, color: C.ink, fontFamily: "var(--font-body)" }}
            >
              <Gift className="h-4 w-4" style={{ color: C.orange }} />
              Bônus inclusos gratuitamente
            </span>
          </div>

          <div className="mt-8">
            <Carousel opts={{ align: "center", loop: true }}>
              <CarouselContent>
                {[
                  { t: "Guia de Planejamento de Aulas", d: "Um guia prático para você organizar aulas semanais utilizando a biblioteca de exercícios.", c: C.blue, icon: <Play className="h-7 w-7" /> },
                  { t: "Fichas de Evolução do Aluno", d: "Modelos prontos para acompanhar a evolução técnica de cada aluno ao longo do tempo.", c: C.yellow, icon: <CheckCircle2 className="h-7 w-7" /> },
                  { t: "Diagnóstico Inicial do Aluno", d: "Ferramenta para avaliar o nível e as dificuldades técnicas do aluno logo na primeira aula.", c: C.red, icon: <Sparkles className="h-7 w-7" /> },
                ].map((b, idx) => (
                  <CarouselItem key={b.t} className="basis-full">
                    <div
                      className="overflow-hidden rounded-md border-[3px] border-b-[3px] bg-white p-5 shadow-[0_8px_0_rgba(0,0,0,0.9)]"
                      style={{ borderColor: C.ink, borderBottomColor: "#000000" }}
                    >
                      <div
                        className="relative aspect-[3/4] w-full overflow-hidden rounded-md border-[3px] bg-white"
                        style={{ borderColor: C.ink }}
                        aria-label={b.t}
                      >
                        {idx === 0 && (
                          <img
                            src={guiaPlanejamentoCard.url}
                            alt={b.t}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        )}
                        {idx === 1 && (
                          <img
                            src={scriptVendas.url}
                            alt={b.t}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        )}
                        {idx === 2 && (
                          <img
                            src={bonusAlbumPdf}
                            alt={b.t}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        )}
                      </div>
                      <div className="mt-5">
                        <div className="mb-3 h-1.5 w-14 rounded-sm" style={{ background: b.c }} />
                        <h3 className="text-xl leading-tight" style={{ color: C.ink, fontFamily: "var(--font-display)" }}>
                          {b.t}
                        </h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-[oklch(0.32_0.02_260)]">{b.d}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          </div>
        </div>
      </section>

      {/* ===== ANTES × DEPOIS ===== */}
      <section className="relative overflow-hidden px-4 py-16" style={{ background: C.white }}>
        <VolleyBall className="-left-14 top-10" color="#1E80FF" size={90} rotate={-20} opacity={0.18} />
        <VolleyBall className="-right-16 bottom-12" color={C.yellow} size={110} rotate={15} opacity={0.22} />

        <div className="relative mx-auto max-w-md">
          <SectionTitle
            eyebrow="antes x depois da biblioteca"
            title={
              <>
                Suas aulas mais <span style={{ color: C.blue }}>práticas e organizadas:</span>
              </>
            }
            accent={C.blue}
            titleClassName="leading-[1.45]"
          />

          <div className="mt-8 grid grid-cols-1 gap-4">
            {/* Antes */}
            <div
              className="overflow-hidden rounded-md border-[3px] bg-white shadow-[0_8px_0_rgba(0,0,0,0.9)]"
              style={{ borderColor: C.ink }}
            >
              <div className="px-5 py-3" style={{ background: C.red }}>
                <h3
                  className="text-center text-lg font-black uppercase tracking-[0.08em]"
                  style={{ color: "#ffffff", fontFamily: "var(--font-display)" }}
                >
                  Antes
                </h3>
              </div>
              <ul className="space-y-3 p-5">
                {[
                  "Gastava horas criando exercícios do zero",
                  "Aulas repetitivas e sem progressão clara",
                  "Difícil encontrar o exercício ideal na hora",
                  "Dificuldade para diagnosticar problemas do aluno",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[13px] leading-relaxed text-[oklch(0.32_0.02_260)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <X className="mt-0.5 h-4 w-4 shrink-0" style={{ color: C.red }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Depois */}
            <div
              className="overflow-hidden rounded-md border-[3px] bg-white shadow-[0_8px_0_rgba(0,0,0,0.9)]"
              style={{ borderColor: C.ink }}
            >
              <div className="px-5 py-3" style={{ background: C.green }}>
                <h3
                  className="text-center text-lg font-black uppercase tracking-[0.08em]"
                  style={{ color: "#ffffff", fontFamily: "var(--font-display)" }}
                >
                  Depois da Biblioteca
                </h3>
              </div>
              <ul className="space-y-3 p-5">
                {[
                  "+250 aulas prontas para aplicar",
                  "Organização inteligente por habilidade e nível",
                  "Encontra o exercício ideal em segundos",
                  "Diagnóstico prático para cada aluno",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[13px] leading-relaxed text-[oklch(0.32_0.02_260)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: C.green }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="px-5 pb-5">
                <CTAButton>Quero acessar +250 aulas</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DEPOIMENTOS ===== */}
      <section className="relative overflow-hidden px-4 py-16" style={{ background: C.ink, color: C.white }}>
        <VolleyBall className="-left-16 top-8" color={C.yellow} size={100} rotate={-15} opacity={0.18} />
        <VolleyBall className="-right-14 bottom-10" color="#1E80FF" size={90} rotate={20} opacity={0.28} />


        

        <div className="relative mx-auto max-w-md">
          <SectionTitle
            eyebrow="Depoimentos"
            title={
              <>
                O que os <span style={{ color: C.yellow }}>clientes</span> dizem
              </>
            }
            accent={C.lime}
            dark
          />
        </div>
        <div className="relative mx-auto mt-10 max-w-md">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {depoimentos.map((d, i) => {
                const accents = [C.yellow, C.lime, C.coral];
                return (
                  <CarouselItem key={d.n} className="basis-[80%]">
                    <div
                      className="relative aspect-[3/4] w-full overflow-hidden rounded-md border-[3px] bg-white"
                      style={{ borderColor: accents[i] }}
                      aria-label={`Depoimento ${d.n}`}
                    >
                      <img
                        src={d.img}
                        alt={`Depoimento de ${d.n}`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <PatternStrip />

      {/* ===== OFERTA ===== */}
      <section
        id="oferta"
        className="relative overflow-hidden px-4 py-16"
        style={{
          background: C.paper,
          backgroundImage: `
            repeating-linear-gradient(90deg, rgba(110,105,70,0.08) 0 1px, transparent 1px 3px),
            repeating-linear-gradient(0deg, rgba(110,105,70,0.06) 0 1px, transparent 1px 3px),
            radial-gradient(rgba(110,105,70,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "auto, auto, 6px 6px",
        }}
      >
        <VolleyBall className="-left-16 top-12" color="#1E80FF" size={100} rotate={-10} opacity={0.18} />
        <VolleyBall className="-right-14 bottom-12" color={C.yellow} size={90} rotate={20} opacity={0.22} />


        <div className="relative mx-auto max-w-md">
          {/* OFFER CARD */}
          <div className="relative">
            {/* top ribbon */}
            <div
              className="font-anton relative mx-auto flex w-full items-center justify-center gap-2 rounded-t-md px-4 py-3 text-base tracking-[0.06em] text-white"
              style={{ background: C.red }}


            >
              <Clock className="h-4 w-4" />
              Oferta por tempo limitado
            </div>


            <div
              className="relative rounded-b-md border-[3px] border-t-0 bg-white p-6 shadow-[0_10px_0_rgba(0,0,0,0.9),0_30px_60px_-20px_rgba(0,0,0,0.25)]"
              style={{ borderColor: C.ink }}
            >
              <h2
                className="font-anton text-center text-[2.2rem] leading-[1.15] sm:text-[2.8rem]"
                style={{ color: C.ink }}
              >

                GARANTA AGORA SEU ACESSO COM
                <br />
                <span
                  className="mt-2 inline-block rounded-sm px-4 py-1 text-white"
                  style={{
                    background: C.green,
                    boxShadow: `5px 5px 0 ${C.ink}`,
                    transform: "rotate(-2deg)",
                  }}
                >
                  DESCONTO
                </span>
              </h2>
              <p className="mt-4 text-center text-[13px] font-normal text-[oklch(0.32_0.02_260)]" style={{ fontFamily: "var(--font-body)" }}>
                Biblioteca completa • +250 aulas prontas • 3 bônus exclusivos
              </p>

              {/* price box */}
              <div
                className="relative mt-6 overflow-hidden rounded-md border-[3px] bg-white p-5 text-center"
                style={{ borderColor: C.ink }}
              >
                <Quarter className="-left-4 -top-4 opacity-90" color={C.green} size={50} />
                <Quarter className="-right-4 -bottom-4 opacity-90" color={C.green} size={50} rotate={180} />
                <p className="text-sm text-[oklch(0.4_0.02_260)]">
                  De <span className="font-bold line-through">R$97,90</span>
                </p>
                <p
                  className="mt-1 text-xs font-semibold uppercase tracking-[0.18em]"
                  style={{ color: C.red, fontFamily: "var(--font-body)" }}
                >
                  Por apenas
                </p>
                <p
                  className="font-anton mt-1 text-[3.8rem] leading-none sm:text-[4.4rem]"
                  style={{ color: C.green }}

                >

                  R$29,90
                </p>

                <p className="mt-3 text-[12px] font-normal text-[oklch(0.32_0.02_260)]" style={{ fontFamily: "var(--font-body)" }}>
                  Pagamento único • Acesso imediato • Produto digital
                </p>
              </div>

              <div className="mx-auto mt-5 max-w-[320px]">
                <Countdown minutes={15} />
              </div>

              <div className="mt-6">
                <CTAButton checkout pulse>
                  Garantir meu acesso
                </CTAButton>
                <p className="mt-3 flex flex-nowrap items-center justify-center gap-2 whitespace-nowrap text-center text-[11px] font-black uppercase tracking-[0.12em] text-[oklch(0.28_0.02_260)]" style={{ fontFamily: "var(--font-condensed)" }}>
                  Pix • Cartão • <ShieldCheck className="h-4 w-4 shrink-0" style={{ color: C.green }} /> Compra 100% segura
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POR QUE ESCOLHER ===== */}
      <section className="relative overflow-hidden px-4 py-16 text-white" style={{ background: C.ink }}>
        <VolleyBall className="-right-16 top-8" color={C.yellow} size={110} rotate={15} opacity={0.18} />
        <VolleyBall className="-left-14 bottom-16" color="#1E80FF" size={90} rotate={-15} opacity={0.3} />


        <div className="relative mx-auto max-w-md">
          <div className="mb-3 flex justify-center">
            <span
              className="rounded-sm border-2 bg-white/10 px-3 py-1 text-[10px] font-black tracking-[0.22em] backdrop-blur-sm"
              style={{ borderColor: C.lime, color: C.lime, fontFamily: "var(--font-condensed)" }}
            >
              POR QUÊ
            </span>
          </div>
          <h2
            className="text-center text-[1.9rem] leading-[1] sm:text-[2.4rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            POR QUE <span style={{ color: C.yellow }}>+250 AULAS DE CANTO PRONTAS</span> VALE A PENA?

          </h2>

          <div className="mt-8 grid grid-cols-1 gap-3">
            {beneficios.map((b, i) => {
              const palette = [C.yellow, C.blue];
              const accents = beneficios.map((_, idx) => palette[idx % 2]);
              return (
                <div
                  key={b.t}
                  className="rounded-md border-l-[6px] bg-white p-4"
                  style={{ borderLeftColor: accents[i], color: C.ink }}
                >
                  <div className="mb-1 inline-flex items-center gap-2 text-[14px] font-semibold" style={{ fontFamily: "var(--font-body)" }}>
                    <CheckCircle2 className="h-5 w-5" style={{ color: accents[i] }} />
                    {b.t}
                  </div>
                  <p className="text-sm leading-relaxed text-[oklch(0.3_0.02_260)]">{b.d}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <CTAButton>Garantir acesso agora</CTAButton>
          </div>
        </div>
      </section>

      {/* ===== GARANTIA ===== */}
      <section
        className="relative overflow-hidden px-4 py-16"
        style={{
          background: C.paper,
          backgroundImage: `
            repeating-linear-gradient(90deg, rgba(110,105,70,0.08) 0 1px, transparent 1px 3px),
            repeating-linear-gradient(0deg, rgba(110,105,70,0.06) 0 1px, transparent 1px 3px),
            radial-gradient(rgba(110,105,70,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "auto, auto, 6px 6px",
        }}
      >
        <VolleyBall className="-left-16 top-10" color={C.yellow} size={100} rotate={-15} opacity={0.18} />
        <VolleyBall className="-right-14 bottom-12" color="#1E80FF" size={90} rotate={20} opacity={0.18} />


        <div className="relative mx-auto max-w-md">
          <div
            className="relative overflow-hidden rounded-md border-[3px] bg-white p-6 text-center shadow-[0_10px_0_rgba(0,0,0,0.9)]"
            style={{ borderColor: C.ink }}
          >
            <Quarter className="-right-4 -top-4 opacity-90" color={C.green} size={70} />
            <div
              className="mx-auto mb-4 flex h-20 w-20 items-center justify-center"
              style={{ color: C.green }}
            >
              <ShieldCheck className="h-16 w-16" strokeWidth={2.2} />
            </div>
            <span
              className="inline-block rounded-sm border-2 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em]"
              style={{ borderColor: C.ink, color: C.ink, fontFamily: "var(--font-condensed)" }}
            >
              7 dias de garantia
            </span>
            <h2 className="mt-4 text-2xl leading-tight" style={{ color: C.ink, fontFamily: "var(--font-display)" }}>
              <span className="block">GARANTIA INCONDICIONAL</span>
              <span className="block">DE 7 DIAS</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[oklch(0.32_0.02_260)]">
              Você tem 7 dias para acessar e testar. Se não gostar, basta pedir reembolso dentro do prazo.
            </p>
          </div>
          <div className="mt-8">
            <CTAButton>Garantir acesso agora</CTAButton>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="relative overflow-hidden px-4 py-16" style={{ background: C.white }}>
        <VolleyBall className="-right-16 top-10" color="#1E80FF" size={100} rotate={15} opacity={0.18} />
        <VolleyBall className="-left-14 bottom-16" color={C.yellow} size={90} rotate={-20} opacity={0.22} />

        <div className="relative mx-auto max-w-md">
          <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" accent={C.magenta} />
          <Accordion type="single" collapsible className="mt-8 space-y-3">
            {faq.map((f, i) => {
              const faqColors = ["#1E80FF", "${C.yellow}", "${C.ink}"];
              const accents = faq.map((_, idx) => faqColors[idx % 3]);

              return (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="overflow-hidden rounded-md border-[3px] bg-white px-4"
                  style={{ borderColor: C.ink, borderLeftWidth: 6, borderLeftColor: accents[i] }}
                >
                  <AccordionTrigger
                    className="text-left text-[15px] font-semibold hover:no-underline"
                    style={{ color: C.ink, fontFamily: "var(--font-body)" }}
                  >
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[13px] leading-relaxed text-[oklch(0.3_0.02_260)]">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <PatternStrip />
      <footer className="relative px-4 py-8 text-white" style={{ background: C.ink }}>
        <div className="mx-auto flex max-w-md flex-col items-center gap-3 text-center">
          <p className="font-anton text-sm tracking-[0.06em]">
            © 2026 Biblioteca Inteligente de Exercícios™. Todos os direitos reservados.
          </p>
          <div className="font-anton flex flex-wrap justify-center gap-x-5 text-[13px] tracking-[0.08em] text-white/80">
            <a href="#" className="hover:text-white">Termos</a>
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Suporte</a>
          </div>
          <p className="font-anton text-[11px] leading-snug tracking-[0.04em] text-white/60">
            Produto digital com +250 aulas práticas de canto em PDF, prontas para aplicar em seus alunos.
          </p>

        </div>
      </footer>

    </main>
  );
}

/* ============================================================
   HELPERS
============================================================ */

function SectionTitle({
  eyebrow,
  title,
  accent = C.red,
  dark = false,
  highlight,
  highlightBg,
  highlightColor,
  after,
  titleClassName = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  accent?: string;
  dark?: boolean;
  highlight?: string;
  highlightBg?: string;
  highlightColor?: string;
  after?: string;
  titleClassName?: string;
}) {
  return (
    <div className="text-center">
      <span
        className="inline-flex items-center gap-2 rounded-sm border-2 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em]"
        style={{
          borderColor: dark ? accent : C.ink,
          background: dark ? "transparent" : "white",
          color: dark ? accent : C.ink,
          fontFamily: "var(--font-body)",
        }}
      >
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-[1.9rem] leading-[1] sm:text-[2.4rem] ${titleClassName}`}
        style={{ color: dark ? "white" : C.ink, fontFamily: "var(--font-display)" }}
      >
        {title}
        {highlight && (
          <>
            {" "}
            <span
              className="mx-auto mt-3 inline-block w-fit rounded-sm px-4 py-1 text-[2.4rem] leading-[0.95] sm:text-[3rem]"
              style={{
                background: highlightBg ?? accent,
                color: highlightColor ?? "white",
                fontFamily: "var(--font-display)",
              }}
            >
              {highlight}
            </span>
          </>
        )}
        {after && <> {after}</>}
      </h2>
    </div>
  );
}
