import styles from "./AudioPlayer.module.css";

export default function AudioPlayer() {
  return (
    <div className={styles.audioPlayer}>
      <h4>Sample the Audiobook</h4>
      <audio src="IntoTheDust_AudioSample.mp3" controls />
    </div>
  );
}
