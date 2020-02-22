export const playAudio = (src: string) => {
  const audio = new Audio(src);
  audio.play();
};
