export const playAudio = (src: string) => {
  const audio = new Audio(src);
  audio.play();
};

export const newMessageNotification = () => playAudio("/bup.mp3");
