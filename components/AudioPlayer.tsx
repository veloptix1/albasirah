"use client";
import { useEffect, useRef, useState } from "react";
import { IconPlay } from "./icons";

type Player = {
  url: string;
  titre: string;
  auteur: string;
};

let globalSetPlayer: ((p: Player | null) => void) | null = null;

export function playAudio(player: Player) {
  globalSetPlayer?.(player);
}

export default function AudioPlayer() {
  const [player, setPlayer] = useState<Player | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    globalSetPlayer = setPlayer;
    return () => { globalSetPlayer = null; };
  }, []);

  useEffect(() => {
    if (!player) return;
    if (audioRef.current) {
      audioRef.current.src = player.url;
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [player]);

  if (!player) return null;

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  const close = () => {
    audioRef.current?.pause();
    setPlayer(null);
    setPlaying(false);
  };

  const formatTime = (s: number) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="fixed bottom-[90px] left-0 right-0 z-[940] px-3 pb-2"
         style={{ paddingBottom: "calc(100px + env(safe-area-inset-bottom))" }}>
      <div className="max-w-[600px] mx-auto bg-emerald-dark rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.3)]
                      overflow-hidden">
        {/* Progress bar */}
        <div className="h-1 bg-white/10">
          <div className="h-full bg-gold transition-all"
               style={{ width: `${duration ? (progress / duration) * 100 : 0}%` }} />
        </div>

        <div className="flex items-center gap-4 p-4">
          <button onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-gold flex items-center justify-center
                       hover:scale-105 transition shrink-0">
            {playing ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#083d31">
                <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
              </svg>
            ) : (
              <IconPlay size={16} />
            )}
          </button>

          <div className="flex-1 min-w-0">
            <div className="font-semibold text-white text-sm truncate">
              {player.titre}
            </div>
            <div className="text-xs text-gold truncate">{player.auteur}</div>
          </div>

          <div className="text-xs text-white/60 hidden sm:block">
            {formatTime(progress)} / {formatTime(duration)}
          </div>

          <button onClick={close}
            className="w-8 h-8 rounded-full bg-white/10 text-white/60
                       hover:bg-terracotta hover:text-white transition shrink-0">
            ✕
          </button>
        </div>

        <audio
          ref={audioRef}
          onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onEnded={() => setPlaying(false)}
        />
      </div>
    </div>
  );
}