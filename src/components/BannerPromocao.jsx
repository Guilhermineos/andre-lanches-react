export default function BannerPromocao({ titulo, subtitulo }) {
  return (
    <div id="promotionBanner">
        <h1 id="promocaoH1">{titulo}</h1>
        <h2 id="promocaoValor">{subtitulo}</h2>
    </div>
  );
}